import React from 'react';
import { ChevronRight, Rocket, Shield, Sword, Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="relative bg-blak text-yelo min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
          {/* Animated stars background */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative text-center max-w-4xl mx-auto">
          <h1 className="title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider font-jedi">
            Hello i am Luson
          </h1>
          <p className="digital text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 font-jedi">
            WEB DEVELOPER | DATA SCIENCE | AI & DL
          </p>
          <div className="bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm max-w-3xl mx-auto overflow-hidden">
            <div className="scroll-up-animation">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Hello explorer, I am Luson Basumatary, an engineering apprentice at NIT Jalandhar. I specialize in web development, AI, deep learning, and data science, using these technologies to create innovative solutions.<br/>

              In web development, I build full-stack applications with React, Node.js, and Python. My work in AI and deep learning focuses on solving complex problems in computer vision and natural language processing.<br/>

              As a data science apprentice, I analyze data to derive insights, build predictive models, and help drive impactful decisions. I'm passionate about exploring new ways to innovate and shape the future with technology. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="animation-container">
            <a className="jeditext arrowL" style={{ fontSize: 40 }}>^ </a>
            <a className="jeditext central-text" style={{ fontSize: 40 }}>domain</a>
            <a className="jeditext arrowR" style={{ fontSize: 40 }}> ^</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-lg text-center transform hover:scale-105 transition-transform">
            <Rocket className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2 font-jedi">Web Development</h3>
            <p className="text-gray-400">Building modern and responsive web applications</p>
          </div>
          <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-lg text-center transform hover:scale-105 transition-transform">
            <Sword className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2 font-jedi">AI & Deep Learning</h3>
            <p className="text-gray-400">Creating intelligent solutions for complex problems</p>
          </div>
          <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-lg text-center transform hover:scale-105 transition-transform">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2 font-jedi">Data Science</h3>
            <p className="text-gray-400">Extracting insights from data to drive decisions</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
