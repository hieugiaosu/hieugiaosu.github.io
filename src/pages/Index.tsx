
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    className="text-3xl font-bold mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h2>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle>About</SectionTitle>
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed">
              I am currently a Junior AI Software Engineer specializing in NLP and integrating AI services into systems. At the same time, I am an AI Researcher at the Advanced Intelligence Technology Lab (HCMUT-VNU), pursuing research in the field of Signal and Speech Processing and its applications.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I am passionate about building AI systems that integrate seamlessly with software applications to address real-world challenges. I possess strong independent research skills and a drive to innovate.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-accent/20">
        <div className="container mx-auto px-6">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-8">
            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold">AI/Software Engineer</h3>
              <p className="text-primary/80">Rennlabs (Venture Studio of Renn Global)</p>
              <p className="text-sm text-gray-400">August 2024 – Present</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                <li>AI Data Pipeline Development using MageAI</li>
                <li>LLM Integration for Marketing Product Content Management</li>
                <li>Backend Development for AI Services using NestJS</li>
                <li>Data enrichment service implementation</li>
              </ul>
            </motion.div>

            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold">Student Researcher</h3>
              <p className="text-primary/80">Advance Intelligence Technology Lab (HCMUT-VNU)</p>
              <p className="text-sm text-gray-400">May 2023 – Present</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                <li>Research on speech processing and sound source separation</li>
                <li>Collaboration with KAIST researchers</li>
                <li>Published research papers on speech processing</li>
              </ul>
            </motion.div>

            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold">Full-stack Software Engineer Intern</h3>
              <p className="text-primary/80">Medigo Software</p>
              <p className="text-sm text-gray-400">May 2024 – August 2024</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                <li>Implemented and maintained features for the internal business team to manage operations, including bug fixes and the addition of basic functionalities.</li>
                <li>Served as the backend developer for the new doctor test appointment feature in the Medigo Doctor App. Responsible for identifying business problems and implementing backend solutions using cloud services such as AWS Serverless and ElasticSearch.</li>
              </ul>
              <p className="mt-4 text-gray-300">Technical skills: Typescript, Loopback4, ElasticSearch, DynamoDB</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="research" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle>Research</SectionTitle>
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Wanna Hear Your Voice</h3>
            <p className="text-primary/80">First Author | Preprint</p>
            <p className="mt-4 text-gray-300">
              A solution for audio clue-based target speaker extraction (TSE) focusing on modeling mixture and reference speech. This approach addresses the challenge of transferring TSE models across different languages without requiring fine-tuning.
            </p>
            <a 
              href="https://anonymous.4open.science/w/WHYV/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary hover:underline"
            >
              View Demo →
            </a>
          </motion.div>

          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Reinforcement Learning Algorithms For Navigating Multiagent In Auto Storage System</h3>
            <p className="text-primary/80">Hieu The Pham; Thang Quoc Nguyen; Thai-Minh Truong; Thanh-Binh Tran; Thinh Ba Vuong | ICIIT2024</p>
            <p className="mt-4 text-gray-300">
            Developed advanced solutions for navigating multiple agents in a warehouse environment using reinforcement learning techniques. Focused on optimizing operational efficiency and minimizing system errors. Implemented the simulation using Python and PyTorch to ensure robust and scalable performance.
            </p>
            <a 
              href="https://dl.acm.org/doi/10.1145/3654522.3654583" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary hover:underline"
            >
              View Paper →
            </a>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-accent/20">
        <div className="container mx-auto px-6">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold">Target Speaker Extraction</h3>
              <p className="text-primary/80">AI TECH LAB</p>
              <p className="mt-4 text-gray-300">
                A solution for audio clue-based target speaker extraction (TSE) focusing on modeling mixture and reference speech.
              </p>
              <a 
                href="https://hieugiaosu.github.io/WHYV_demo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:underline"
              >
                View Project →
              </a>
            </motion.div>

            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold">Meeting Transcription Website</h3>
              <p className="text-primary/80">Self Project</p>
              <p className="mt-4 text-gray-300">
                An automated solution for transcribing meetings, detecting human speech, and identifying speakers using Whisper model and custom speaker embedding.
              </p>
              <a 
                href="https://github.com/hieugiaosu/meeting_transcript" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:underline"
              >
                View Repository →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle>Contact</SectionTitle>
          <motion.div 
            className="glass-card p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-6">Let's connect and collaborate!</p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:hieu.pham14022003@gmail.com"
                className="text-primary hover:underline"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/thehieu1402"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/hieugiaosu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
