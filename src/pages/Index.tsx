
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import {
    AboutData,
    ExperienceData,
    loadAboutData,
    loadExperienceData,
    loadPersonalInfo,
    loadProjectData,
    loadResearchData,
    PersonalInfo,
    ProjectData,
    ResearchData
} from "@/lib/dataLoader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [experienceData, setExperienceData] = useState<ExperienceData | null>(null);
  const [researchData, setResearchData] = useState<ResearchData | null>(null);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    Promise.all([
      loadAboutData(),
      loadExperienceData(),
      loadResearchData(),
      loadProjectData(),
      loadPersonalInfo()
    ]).then(([about, experience, research, projects, personal]) => {
      setAboutData(about);
      setExperienceData(experience);
      setResearchData(research);
      setProjectData(projects);
      setPersonalInfo(personal);
    });
  }, []);

  if (!aboutData || !experienceData || !researchData || !projectData || !personalInfo) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

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
            {aboutData.about.split('\n\n').map((paragraph, index) => (
              <p key={index} className={`text-lg leading-relaxed ${index > 0 ? 'mt-4' : ''}`}>
                {paragraph.trim()}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-accent/20">
        <div className="container mx-auto px-6">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-8">
            {experienceData.experiences.map((experience, index) => (
              <motion.div 
                key={index}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-primary/80">{experience.company}</p>
                <p className="text-sm text-gray-400">{experience.period}</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                {experience.technical_skills && (
                  <p className="mt-4 text-gray-300">Technical skills: {experience.technical_skills}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle>Research</SectionTitle>
          <div className="space-y-8">
            {researchData.research.map((paper, index) => (
              <motion.div 
                key={index}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{paper.title}</h3>
                <p className="text-primary/80">{paper.authors} | {paper.status}</p>
                <p className="mt-4 text-gray-300">{paper.description}</p>
                {paper.demo_url && (
                  <a 
                    href={paper.demo_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary hover:underline"
                  >
                    {paper.demo_text} →
                  </a>
                )}
                {paper.paper_url && (
                  <a 
                    href={paper.paper_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary hover:underline"
                  >
                    {paper.paper_text} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-accent/20">
        <div className="container mx-auto px-6">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.projects.map((project, index) => (
              <motion.div 
                key={index}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-primary/80">{project.organization}</p>
                <p className="mt-4 text-gray-300">{project.description}</p>
                <a 
                  href={project.project_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:underline"
                >
                  {project.link_text} →
                </a>
              </motion.div>
            ))}
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
                href={`mailto:${personalInfo.contact.email}`}
                className="text-primary hover:underline"
              >
                Email
              </a>
              <a 
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href={personalInfo.contact.github}
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
