import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  {
    id: 1,
    title: "İlk Birbirimizi Fark Etmemiz",
    description: "O sınıfa ilk girdiğimizde zaten birbirimizin olacağımız belliydi. Gözlerimiz buluştuğunda sanki tüm dünya durmuştu.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "İlk Soru Soruşun",
    description: "İlk matematik sorusu soruşun, ilk defa benim için benim yakınıma oturman ve benim o soruyu çözmemem... Hala gülüyorum o anı düşündükçe! 😄",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Beleş Yediğim Biscolatalar",
    description: "O kadar cömertsinki aşktan biscolata ısmarlıyordun! Her biscolata ile birlikte kalbim daha da eriyordu.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Küçük Kaçamaklar",
    description: "Gece çalışmaları arasında yemek yemek için gittiğimiz ve sohbet etmekten, gülmekten yemek yemeden döndüğümüz günler. Ne güzel zamanlardı!",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "İlk Ayrılığımız",
    description: "Aptallığım ve kanıtı... Ama sonunda anladım ki sen olmadan yapamam. O zorlu günler bizi daha da güçlendirdi.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Daha Niceleri...",
    description: "Birlikte yaşayacağımız daha nicesi var. Her gün yeni bir anı, yeni bir hikaye... ♥",
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop",
  },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-blue-500 mb-4">Güzel Anılarımız</h2>
          <p className="text-xl text-gray-600">Birlikte yaşadığımız en özel anlar</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-script text-2xl text-blue-500 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
