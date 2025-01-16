import React, { useState } from 'react';
import { Github, Mail, Linkedin, Phone, Award, Briefcase, Code, School, FileText, ExternalLink } from 'lucide-react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const languages = [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'Python', proficiency: 85 },
    { name: 'Java', proficiency: 75 },
    { name: 'C++', proficiency: 70 },
    { name: 'TypeScript', proficiency: 85 }
  ];

  const frameworks = [
    { name: 'React', proficiency: 95 },
    { name: 'Node.js', proficiency: 85 },
    { name: 'Django', proficiency: 80 },
    { name: 'Vue.js', proficiency: 75 },
    { name: 'Angular', proficiency: 70 }
  ];

  const certificates = [
    { name: 'AWS Solutions Architect', link: '#' },
    { name: 'Google Cloud Professional', link: '#' },
    { name: 'React Advanced Development', link: '#' },
    { name: 'Machine Learning Specialist', link: '#' }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Imperial Academy of Technology',
      year: '3275-3277 BBY'
    },
    {
      degree: 'Bachelor of Engineering',
      school: 'Coruscant University',
      year: '3271-3275 BBY'
    }
  ];


  const SkillBar = ({ name, proficiency }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-yelo">{name}</span>
        <span className="text-yelo">{proficiency}%</span>
      </div>
      <div className="h-2 bg-blak/50 rounded-full border border-yelo/30">
        <div 
          className="h-full bg-yelo rounded-full transition-all duration-1000"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-blak p-4 md:p-8">
      {/* Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yelo rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="border-2 border-yelo bg-blak/50 p-4 md:p-8 rounded-lg backdrop-blur-sm mb-8
                      shadow-[0_0_15px_rgba(255,255,0,0.2)]">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-48 md:h-48 relative mx-auto md:mx-0">
              <div className="absolute inset-0 border-2 border-yelo rounded-full animate-pulse" />
              <img
                src="/api/placeholder/200/200"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-yelo"
              />
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl text-yelo">Commander</h1>
                <div className="px-3 py-1 bg-yelo/20 border border-yelo rounded-full text-yelo text-sm">
                  Elite Force
                </div>
              </div>
              
              {/* AKA Section */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="text-yelo/50 text-sm">AKA:</span>
                <span className="text-yelo/80 text-sm font-mono">The_Code_Master</span>
                <span className="text-yelo/50 text-sm mx-2">|</span>
                <span className="text-yelo/80 text-sm font-mono">Binary_Jedi</span>
              </div>
              
              <p className="text-yelo/80 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="border border-yelo/30 rounded-lg p-3 md:p-4 text-center bg-blak/30">
                  <div className="text-2xl md:text-3xl text-yelo mb-1">20+</div>
                  <div className="text-yelo/70 text-xs md:text-sm">Projects</div>
                </div>
                <div className="border border-yelo/30 rounded-lg p-3 md:p-4 text-center bg-blak/30">
                  <div className="text-2xl md:text-3xl text-yelo mb-1">2+</div>
                  <div className="text-yelo/70 text-xs md:text-sm">Years Experience</div>
                </div>
                <div className="border border-yelo/30 rounded-lg p-3 md:p-4 text-center bg-blak/30">
                  <div className="text-2xl md:text-3xl text-yelo mb-1">{languages.length}</div>
                  <div className="text-yelo/70 text-xs md:text-sm">Languages</div>
                </div>
                <div className="border border-yelo/30 rounded-lg p-3 md:p-4 text-center bg-blak/30">
                  <div className="text-2xl md:text-3xl text-yelo mb-1">{frameworks.length}</div>
                  <div className="text-yelo/70 text-xs md:text-sm">Frameworks</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="border-2 border-yelo bg-blak/50 rounded-lg backdrop-blur-sm
                      shadow-[0_0_15px_rgba(255,255,0,0.2)]">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-yelo/30">
            {['skills', 'education', 'certificates', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-yelo capitalize transition-colors
                          ${activeTab === tab ? 'bg-yelo/20 border-b-2 border-yelo' : 'hover:bg-yelo/10'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-8">
            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-yelo text-lg md:text-xl mb-4">Programming Languages</h3>
                  {languages.map((lang) => (
                    <SkillBar key={lang.name} {...lang} />
                  ))}
                </div>
                <div>
                  <h3 className="text-yelo text-lg md:text-xl mb-4">Frameworks & Tools</h3>
                  {frameworks.map((framework) => (
                    <SkillBar key={framework.name} {...framework} />
                  ))}
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="space-y-4 md:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border border-yelo/30 rounded-lg p-4 md:p-6 bg-blak/30">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                      <div>
                        <h3 className="text-yelo text-lg md:text-xl mb-2">{edu.degree}</h3>
                        <p className="text-yelo/70">{edu.school}</p>
                      </div>
                      <span className="text-yelo/50 text-sm md:text-base">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certificates Tab */}
            {activeTab === 'certificates' && (
              <div className="flex flex-wrap gap-3 md:gap-4">
                {certificates.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    className="flex items-center gap-2 px-3 md:px-4 py-2 bg-yelo/10 border border-yelo/30 rounded-lg
                             text-yelo hover:bg-yelo/20 transition-colors text-sm md:text-base w-full md:w-auto"
                  >
                    <Award size={16} />
                    {cert.name}
                    <ExternalLink size={16} className="ml-auto" />
                  </a>
                ))}
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: Mail, text: 'commander@empire.com', href: 'mailto:commander@empire.com' },
                  { icon: Phone, text: '+123 456 7890', href: 'tel:+1234567890' },
                  { icon: Github, text: 'github.com/commander', href: 'https://github.com' },
                  { icon: Linkedin, text: 'linkedin.com/commander', href: 'https://linkedin.com' }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 p-4 border border-yelo/30 rounded-lg bg-blak/30
                             text-yelo hover:bg-yelo/10 transition-colors"
                  >
                    <contact.icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    <span className="text-sm md:text-base truncate">{contact.text}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;