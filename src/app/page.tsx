'use client';
import { FiSearch, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Switch = ({ isOn, toggle }: { isOn: boolean; toggle: () => void }) => (
  <motion.div
    className={`w-12 h-6 rounded-full cursor-pointer relative ${isOn ? 'bg-blue-500' : 'bg-gray-300'}`}
    onClick={toggle}
    initial={false}
    animate={{ scale: isOn ? 1 : 0.8 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <motion.div
      className="w-4 h-4 bg-white rounded-full absolute top-1"
      initial={false}
      animate={{ x: isOn ? 28 : 4 }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  </motion.div>
);

const NavBar = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => (
  <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full backdrop-blur-md shadow-lg ${
    darkMode
      ? 'bg-gray-800/80 border border-gray-700/50'
      : 'bg-white/80 border border-gray-200/50'
  } z-50`}>
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        <p className={`${darkMode ? 'text-white' : 'text-black'} poppins-regular font-bold`}>Btech-Nexus</p>
      </div>
      <div className="flex items-center gap-4">
        <FiSearch className={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`} />
        <Switch isOn={darkMode} toggle={toggleDarkMode} />
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  </nav>
);

const TabBar = ({ darkMode }: { darkMode: boolean }) => {
  const [activeTab, setActiveTab] = useState('Homepage');

  return (
    <div className="flex justify-center gap-8 my-4">
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`${
          activeTab === 'Homepage' ? 'text-[#FF5733] border-b-2 border-[#FF5733] pb-2' : 'text-gray-500'
        }`}
        onClick={() => setActiveTab('Homepage')}
      >
        Homepage
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`${
          activeTab === 'Chat-App' ? 'text-sky-400 border-b-2 border-sky-400 pb-2' : 'text-gray-500'
        }`}
        onClick={() => setActiveTab('Chat-App')}
      >
        Chat-App
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`${
          activeTab === 'Roadmap' ? 'text-emerald-400 border-b-2 border-emerald-400 pb-2' : 'text-gray-500'
        }`}
        onClick={() => setActiveTab('Roadmap')}
      >
        Roadmap
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`${
          activeTab === 'Topic Prediction'
            ? `${darkMode ? 'text-white' : 'text-gray-800'} border-b-2 ${darkMode ? 'border-white' : 'border-gray-800'} pb-2`
            : 'text-gray-500'
        }`}
        onClick={() => setActiveTab('Topic Prediction')}
      >
        Topic Prediction
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`${
          activeTab === 'Resume Parser' ? 'text-purple-500 border-b-2 border-purple-500 pb-2' : 'text-gray-500'
        }`}
        onClick={() => setActiveTab('Resume Parser')}
      >
        Resume Parser
      </motion.button>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  content: string;
  buttonText: string;
  bgColor?: string;
  textColor?: string;
}

const ProjectCard = ({
  title,
  content,
  buttonText,
  bgColor = 'bg-blue-500',
  textColor = 'text-white'
}: ProjectCardProps) => (
  <div className={`${bgColor} p-6 rounded-xl shadow-lg w-64 transition-transform hover:scale-105`}>
    <h3 className={`${textColor} text-lg font-semibold mb-3`}>{title}</h3>
    <p className={`${textColor} text-sm mb-4 opacity-90`}>{content}</p>
    <motion.button
      className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {buttonText}
    </motion.button>
  </div>
);

// const PartnerLogo = ({ name }: { name: string }) => (
//   <div className="text-gray-600 font-medium hover:text-gray-800 transition-colors">
//     {name}
//   </div>
// );

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiMail, href: '#', label: 'Email' }
  ];

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Btech-Nexus</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Empowering BTech students with innovative tools and resources for academic excellence and career growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Chat App', 'Resume Parser', 'Topic Analyzer', 'Roadmap'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'} cursor-pointer`}
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Connect With Us</h3>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-2 rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Email: contact@btechnexus.com
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className={`text-center pt-8 border-t ${
            darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'
          }`}
        >
          <p>© {new Date().getFullYear()} Btech-Nexus. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      darkMode
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px] opacity-10'
          : 'bg-[radial-gradient(circle_at_1px_1px,blue-200_1px,transparent_0)] [background-size:16px_16px] opacity-15'
      }`} />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900'
          : 'bg-gradient-to-b from-transparent via-white/90 to-blue-50/90'
      }`} />

      {/* Accent Gradient */}
      <div className={`absolute inset-0 ${
        darkMode
          ? 'bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20'
          : 'bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-indigo-500/15'
      }`} />

      {/* Light Theme Additional Pattern */}
      {!darkMode && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] [background-size:4rem_4rem] opacity-30" />
      )}

      <div className="relative z-10">
        <NavBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        <main className="container mx-auto px-4 pt-24">
          <div className="text-center my-12">
            <h1 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'} open-sans-800`}>Btech-Nexus</h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} open-sans-500`}>One-Stop Companion for Every BTech Student!</p>
          </div>

          <TabBar darkMode={darkMode} />

          <div className="flex flex-wrap justify-center gap-6 my-12">
            <ProjectCard
              title="Chat App"
              content="Connect with friends and colleagues seamlessly through our intuitive chat application. Experience real-time messaging and stay updated!"
              buttonText="Try"
              bgColor="bg-blue-500"
            />

            <ProjectCard
              title="Resume Parser"
              content="Effortlessly analyze and extract key information from resumes. Our parser helps you streamline the hiring process and find the best candidates!"
              buttonText="Try"
              bgColor="bg-purple-500"
            />

            <ProjectCard
              title="Topic Analyzer"
              content="Gain insights into trending topics and analyze discussions effectively. Our tool helps you stay ahead in understanding public sentiment!"
              buttonText="Try"
              bgColor="bg-gray-800"
            />

            <ProjectCard
              title="Roadmap"
              content="Visualize your project's journey with our interactive roadmap. Plan, track, and achieve your goals with ease!"
              buttonText="Try"
              bgColor="bg-emerald-400"
            />
          </div>
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}