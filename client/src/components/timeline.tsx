import { motion } from "framer-motion";

const timelineItems = [
  {
    id: 1,
    date: "14 Şubat 2023",
    title: "İlk Karşılaşma",
    description: "Gözlerin beni büyüleydiği o an, kalbim ilk kez bu kadar hızlı attı. Sanki tüm dünya durmuştu...",
    isSpecial: false,
  },
  {
    id: 2,
    date: "15 Mart 2023",
    title: "İlk Buluşma",
    description: "Kahve içerken saatlerin nasıl geçtiğini fark etmedik. Konuşmak istediğim o kadar çok şey vardı ki...",
    isSpecial: false,
  },
  {
    id: 3,
    date: "10 Mayıs 2023",
    title: "İlk \"Seni Seviyorum\"",
    description: "Yıldızların altında, ellerini tutarken söylediğim o üç kelime. Senin gülümsemen, en güzel cevaptı...",
    isSpecial: false,
  },
  {
    id: 4,
    date: "25 Ağustos 2023",
    title: "İlk Seyahat",
    description: "Birlikte çıktığımız o muhteşem yolculuk. Her anı, her manzara, seninle daha da güzeldi...",
    isSpecial: false,
  },
  {
    id: 5,
    date: "Bugün",
    title: "Sonsuza Kadar",
    description: "Her gün seni daha çok seviyorum. Geleceğimiz, elimizde yazılmayı bekleyen en güzel hikaye...",
    isSpecial: true,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-pink-500 mb-4">Aşk Hikayemiz</h2>
          <p className="text-xl text-gray-600">Birlikte yazdığımız en güzel hikaye</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-8"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-pink-500 font-semibold">{item.date}</span>
                </div>
                <div className={`flex-grow rounded-2xl p-6 shadow-lg card-hover relative timeline-item ${
                  item.isSpecial 
                    ? 'bg-pink-500 text-white' 
                    : 'bg-white'
                }`}>
                  <h3 className="font-script text-2xl mb-2 text-pink-500">
                    {item.title}
                  </h3>
                  <p className={item.isSpecial ? 'text-white' : 'text-gray-600'}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
