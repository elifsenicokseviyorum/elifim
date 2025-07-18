import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart } from "lucide-react";

const playlist = [
  {
    id: 1,
    title: "Perfect - Ed Sheeran",
    subtitle: "Bizim şarkımız",
    duration: "3:45",
    isPlaying: false,
  },
  {
    id: 2,
    title: "All of Me - John Legend",
    subtitle: "İlk dansımız",
    duration: "4:05",
    isPlaying: false,
  },
  {
    id: 3,
    title: "Aşk - Tarkan",
    subtitle: "Türkçe favorimiz",
    duration: "3:22",
    isPlaying: false,
  },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(35);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-blue-500 mb-4">Bizim Şarkılarımız</h2>
          <p className="text-xl text-gray-600">Kalbimizin ritmi</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="music-player rounded-2xl p-8 shadow-2xl bg-white/90 backdrop-blur-sm"
          >
            <div className="flex items-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-6">
                <Heart className="text-white" size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="font-script text-2xl text-blue-500 mb-1">Aşk Şarkımız</h3>
                <p className="text-gray-600">Kalplerimizin melodisi</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={prevTrack}
                  className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <SkipBack size={20} />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={nextTrack}
                  className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <SkipForward size={20} />
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>1:23</span>
                <span>3:45</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <VolumeX className="text-gray-500" size={20} />
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${volume}%` }}
                />
              </div>
              <Volume2 className="text-gray-500" size={20} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <h3 className="font-script text-2xl">Aşk Listesi</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {playlist.map((track) => (
                <div
                  key={track.id}
                  className="p-4 hover:bg-blue-50 cursor-pointer transition-colors"
                  onClick={() => setCurrentTrack(track.id - 1)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{track.title}</h4>
                      <p className="text-gray-600 text-sm">{track.subtitle}</p>
                    </div>
                    <div className="text-blue-500">
                      <Heart size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
