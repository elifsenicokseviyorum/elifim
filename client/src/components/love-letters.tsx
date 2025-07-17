import { motion } from "framer-motion";
import { Mail, Moon, Gift, Rainbow } from "lucide-react";

const letters = [
  {
    id: 1,
    icon: Mail,
    title: "Sabah Mektubu",
    subtitle: "Her güne başlarken",
    content: "Günaydın sevgilim, güneş doğarken ilk aklıma gelen sen oluyorsun. Yeni bir günde seninle olmak, yaşayabileceğim en güzel his. Umarım bu gün sana mutluluk getirir.",
  },
  {
    id: 2,
    icon: Moon,
    title: "Gece Mektubu",
    subtitle: "Yıldızların altında",
    content: "İyi geceler canım, ay ışığında senin güzelliğini düşünüyorum. Rüyalarımda seninle dans ediyorum. Yarın yine seninle yeni bir güne uyanmak için sabırsızlanıyorum.",
  },
  {
    id: 3,
    icon: Gift,
    title: "Özel Gün",
    subtitle: "Kutlama zamanı",
    content: "Bugün senin özel günün ve bu benim için çok önemli. Mutluluğun benim mutluluğum. Seni görmeyi, gülümsemen karşısında erimeyi çok seviyorum.",
  },
  {
    id: 4,
    icon: Rainbow,
    title: "Gelecek Mektubu",
    subtitle: "Hayaller ve umutlar",
    content: "Seninle geçireceğimiz gelecek için çok heyecanlıyım. Birlikte yaşayacağımız anılar, kurmuş olduğumuz hayaller. Sen varsın, her şey mükemmel olacak.",
  },
];

export default function LoveLetters() {
  return (
    <section id="letters" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-pink-500 mb-4">Kalbimdeki Mektuplar</h2>
          <p className="text-xl text-gray-600">Sana yazmak istediğim her şey</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {letters.map((letter, index) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                    <letter.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-script text-2xl text-pink-500">{letter.title}</h3>
                    <span className="text-gray-500 text-sm">{letter.subtitle}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {letter.content}
                </p>
                <div className="text-right">
                  <span className="text-pink-500 font-script text-lg">Seni seven ♥</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
