import { motion } from "framer-motion";
import { Smile, Heart, Star, Sun, Music, Infinity } from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: Smile,
    title: "Gülüşün",
    description: "Gülüşün, kalbimin en sevdiği melodi. Her gülümsemen, dünyamı aydınlatıyor.",
  },
  {
    id: 2,
    icon: Heart,
    title: "Kalbin",
    description: "Kalbinin güzelliği, ruhunun inceliği. Sen, aşkın en saf hali.",
  },
  {
    id: 3,
    icon: Star,
    title: "Hayallerin",
    description: "Hayallerinin büyüklüğü, hedeflerinin saflığı. Seninle geleceği hayal etmek muhteşem.",
  },
  {
    id: 4,
    icon: Sun,
    title: "Enerjin",
    description: "Pozitif enerjin, hayata bakış açın. Seninle her gün yeni bir macera.",
  },
  {
    id: 5,
    icon: Music,
    title: "Sesin",
    description: "Sesin, kulağıma fısıldanan en güzel şarkı. Beni her zaman sakinleştiriyor.",
  },
  {
    id: 6,
    icon: Infinity,
    title: "Her Şeyin",
    description: "Sen, mükemmel olduğun gibi. Hiçbir şeyini değiştirmek istemem.",
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-blue-500 mb-4">Seni Sevmemin Nedenleri</h2>
          <p className="text-xl text-gray-600">Kalbimdeki her his, sana olan aşkımın bir parçası</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="text-white" size={24} />
                </div>
                <h3 className="font-script text-2xl love-reason mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
