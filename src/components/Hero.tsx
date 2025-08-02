import { loadPersonalInfo, PersonalInfo } from "@/lib/dataLoader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin, FaOrcid } from "react-icons/fa";

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

const ContactButton = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 bg-primary/20 hover:bg-primary/40 rounded-full text-primary transition duration-300"
  >
    <Icon className="w-6 h-6" />
  </a>
);

const Hero = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    loadPersonalInfo().then(setPersonalInfo);
  }, []);

  if (!personalInfo) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

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
            {personalInfo.title}
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {personalInfo.subtitle}
              <br />
              {personalInfo.description}
            </p>
          </motion.div>
          
          

          <motion.div
            className="pt-8 flex space-x-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ContactButton href={`mailto:${personalInfo.contact.email}`} icon={FaEnvelope} />
            <ContactButton href={personalInfo.contact.github} icon={FaGithub} />
            <ContactButton href={personalInfo.contact.linkedin} icon={FaLinkedin} />
            <ContactButton href={personalInfo.contact.orcid} icon={FaOrcid} />
            {personalInfo.contact.googleScholar && (
              <ContactButton href={personalInfo.contact.googleScholar} icon={FaGraduationCap}/>  
            )}
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
