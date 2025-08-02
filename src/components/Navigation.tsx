
import { loadPersonalInfo, PersonalInfo } from "@/lib/dataLoader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    loadPersonalInfo().then(setPersonalInfo);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!personalInfo) {
    return null;
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-gray-200/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {personalInfo.name}
          </motion.a>
          <div className="hidden md:flex space-x-8">
            {personalInfo.navigation.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm hover:text-primary transition-colors duration-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
