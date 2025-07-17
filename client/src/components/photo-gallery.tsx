import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  {
    id: 1,
    title: "İlk Buluşma",
    description: "O güzel gece, kalplerimiz ilk kez bu kadar yakın attı...",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Sonbahar Yürüyüşü",
    description: "El ele, yaprakların arasında kaybolduğumuz o güzel gün...",
    image: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Sahilde Gün Batımı",
    description: "Güneş batarken, aşkımız doğuyordu...",
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Kutlama Anı",
    description: "Özel günümüzü kutlarken, mutluluğumuz taşıyordu...",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Birlikte Yemek",
    description: "Mutfakta dans ederken, aşkımız pişiyordu...",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Huzurlu Anlar",
    description: "Sessizlikte bile birbirimizi anlıyor, kalbimiz konuşuyordu...",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
  },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-pink-500 mb-4">Güzel Anılarımız</h2>
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
                  <h3 className="font-script text-2xl text-pink-500 mb-2">{item.title}</h3>
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
