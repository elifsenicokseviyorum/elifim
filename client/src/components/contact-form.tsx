import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Heart, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const messageSchema = z.object({
  name: z.string().min(1, "Ad gerekli"),
  subject: z.string().min(1, "Konu seçiniz"),
  content: z.string().min(1, "Mesaj gerekli"),
});

type MessageFormData = z.infer<typeof messageSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "",
      subject: "",
      content: "",
    },
  });

  const createMessage = useMutation({
    mutationFn: async (data: MessageFormData) => {
      const response = await apiRequest("POST", "/api/messages", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mesajın kalbime ulaştı! ♥",
        description: "Sevgi dolu mesajın için teşekkürler.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
    },
    onError: () => {
      toast({
        title: "Mesaj gönderilemedi",
        description: "Bir hata oluştu, lütfen tekrar deneyin.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: MessageFormData) => {
    createMessage.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-blue-500 mb-4">Bana Mesaj Gönder</h2>
          <p className="text-xl text-gray-600">Kalbindeki her şeyi benimle paylaş</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Adın</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Sen kimsin?" 
                          className="border-blue-200 focus:ring-blue-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Mesaj Konusu</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-blue-200 focus:ring-blue-500">
                            <SelectValue placeholder="Bir konu seçin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="love">Sana olan aşkım</SelectItem>
                          <SelectItem value="memory">Güzel bir anı</SelectItem>
                          <SelectItem value="future">Gelecek planlarımız</SelectItem>
                          <SelectItem value="surprise">Sürpriz mesaj</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Mesajın</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Kalbindeki her şeyi yaz..." 
                          rows={6}
                          className="border-blue-200 focus:ring-blue-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex space-x-4">
                  <Button
                    type="submit"
                    disabled={createMessage.isPending}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Heart className="mr-2" size={20} />
                    {createMessage.isPending ? "Gönderiliyor..." : "Aşkla Gönder"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 text-blue-500 border-blue-500 hover:bg-blue-50"
                  >
                    <Gift className="mr-2" size={20} />
                    Sürpriz Ekle
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
