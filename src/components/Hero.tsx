
import { motion } from "framer-motion";

const Waveform = () => {
  return (
    <div className="flex items-center justify-center space-x-1 h-12">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 h-full bg-primary/20 rounded-full"
          animate={{
            scaleY: [0.4, 1, 0.4],
            transition: {
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
            },
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <motion.h2
            className="text-sm uppercase tracking-wider text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI Engineer & Researcher
          </motion.h2>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Phạm Thế Hiểu
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              AI Engineer at Rennlabs | Researcher at AITech Lab 
              <br />
              Specializing in NLP & Speech Processing
            </p>
          </motion.div>
          
          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Waveform />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
