import React, { useState } from 'react';
import { Github, Mail, Linkedin, Phone, Award, Briefcase, Code, School, FileText, ExternalLink,Download,ChefHat,ChartNoAxesColumn } from 'lucide-react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const languages = [
    { name: 'Python', proficiency: 90 },
    { name: 'C++', proficiency: 90 },
    { name: 'Javascript', proficiency: 85 },
    { name: 'TypeScript', proficiency: 70 },
    { name: 'PHP', proficiency: 80 }
  ];

  const frameworks = [
    { name: 'Node.js', proficiency: 95 },
    { name: 'React', proficiency: 85 },
    { name: 'React Native', proficiency: 70 },
    { name: 'Tensorflow', proficiency: 75 },
    { name: 'Plotly', proficiency: 80 }
  ];

  const certificates = [
    { name: 'AWS Cloud Practitioner', link: 'javascript:void(0)' },
    { name: 'GSSSOC Top Project Admin', link: 'https://drive.google.com/file/d/1DNoQlPtpZkEGlqenbSyDqqiVergBIKv9/view?usp=sharing' },
    { name: 'MERN Development', link: 'javascript:void(0)' },
    { name: 'PHP Development', link: 'https://drive.google.com/file/d/1ybNhQgcGtgNlpRNXqOKprpK8boRtB5Lh/view?usp=sharing' },
    { name: 'AI for India', link: 'https://drive.google.com/file/d/10pLZeAZ_KQx2LcWRCpYPvcgJUu1_KTrF/view?usp=sharing' },
    { name: 'GDSC Web Jam', link: 'https://drive.google.com/file/d/1iuKt_kNP10GBYHIdqNVu3y0OXC47U5We/view?usp=sharing' },
    { name: 'Python For ML', link: 'https://drive.google.com/file/d/1J3-rcR9ZoxR_k6W2oVLDFFhy3Xjp3I4g/view?usp=sharing' },
    { name: 'ATF', link: 'https://drive.google.com/file/d/1qlXMGN0A-O1op2Ul7IEMyh8L7NuXchZj/view?usp=sharing' },
  ];

  const tools = [
    { name: 'AWS', link: 'javascript:void(0)' },
    { name: 'Netlify', link: 'javascript:void(0)' },
    { name: 'Vercel', link: 'javascript:void(0)' },
    { name: 'Render', link: 'javascript:void(0)' },
    { name: 'Google Colab', link: 'javascript:void(0)' },
    { name: 'Kaggle', link: 'javascript:void(0)' },
    { name: 'Jupyter', link: 'javascript:void(0)' },
    { name: 'Docker', link: 'javascript:void(0)' }
  ];

  const education = [
    {
      degree: 'B. Tech (CSE)',
      school: 'National Institute of Technology, Jalandhar',
      year: '2023-2027',
      gpa: "GPA: 8.32"
    },
    {
      degree: 'HS',
      school: 'Jawahar Navodaya Vidyalaya, Sonitpur',
      year: '2016-2023',
      gpa: 'Percentage: 95.4%'
    }
  ];

  const DownloadRes = () => {
    
    // using Java Script method to get PDF file
    fetch("\images\my\lusonb.ds.23_674ef3ce5732a (1).pdf").then((response) => {
        response.blob().then((blob) => {
        
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "lusonb.ds.23_674ef3ce5732a (1).pdf";
            alink.click();
        });
    });
  };

  const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    
    React.useEffect(() => {
      let currentIndex = 0;
      setDisplayText('');
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }, []);
    
    return <span>{displayText}</span>;
  };
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
                src="/images/my/jedi me 4.jpg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-yelo"
              />
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <h1 className="title text-3xl md:text-4xl text-yelo">Luson Basumatary</h1>
                <a className="btn px-3 py-1 bg-yelo/20 border border-yelo rounded-full text-yelo text-sm" href="\images\my\lusonb.ds.23_674ef3ce5732a (1).pdf" download>
                  <Download/>
                </a>
              </div>
              
              {/* AKA Section */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="text-yelo/50 text-sm">AKA:</span>
                <span className="text-yelo/80 text-sm font-mono">luson_10</span>
                <span className="text-yelo/50 text-sm mx-2">|</span>
                <span className="text-yelo/80 text-sm font-mono">Luson045</span>
              </div>
              
              <p className="digital text-yelo/80 mb-6">
                <TypewriterText text="My name is Luson Basumatary, I am a B. Tech. undergraduate at NIT Jalandhar. Apart from being a star wars fan, I love building what i imagine." />
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="border border-yelo/30 rounded-lg p-3 md:p-4 text-center bg-blak/30">
                  <div className="text-2xl md:text-3xl text-yelo mb-1">20+</div>
                  <div className="text-yelo/70 text-xs md:text-sm">Project Repositories</div>
                </div>
                <div className="border border-yelo/30 rounded-lg p-3 md:p-4 text-center bg-blak/30">
                  <div className="text-2xl md:text-3xl text-yelo mb-1">2+</div>
                  <div className="text-yelo/70 text-xs md:text-sm">Years Experience</div>
                </div>
                <div className="border border-yelo/30 rounded-lg p-3 md:p-4 text-center bg-blak/30">
                  <div className="text-2xl md:text-3xl text-yelo mb-1">{languages.length}+</div>
                  <div className="text-yelo/70 text-xs md:text-sm">Languages</div>
                </div>
                <div className="border border-yelo/30 rounded-lg p-3 md:p-4 text-center bg-blak/30">
                  <div className="text-2xl md:text-3xl text-yelo mb-1">{frameworks.length}+</div>
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
            {['skills', 'education', 'certificates', 'contact','tools'].map((tab) => (
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
                    <span className="text-yelo/50 text-sm md:text-base">{edu.gpa}</span>
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
                    target="_blank"
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
            {/* Tools Tab */}
            {activeTab === 'tools' && (
              <div className="flex flex-wrap gap-3 md:gap-4">
                {tools.map((t, index) => (
                  <a
                    key={index}
                    href={t.link}
                    className="flex items-center gap-2 px-3 md:px-4 py-2 bg-yelo/10 border border-yelo/30 rounded-lg
                             text-yelo hover:bg-yelo/20 transition-colors text-sm md:text-base w-full md:w-auto"
                  >
                    <Award size={16} />
                    {t.name}
                    <ExternalLink size={16} className="ml-auto" />
                  </a>
                ))}
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: Mail, text: 'lusonbasumatary2@gmail.com', href: 'mailto:lusonbasumatary2@gmail.com' },
                  { icon: Github, text: 'github.com/Luson045', href: 'https://github.com/Luson045' },
                  { icon: Linkedin, text: 'linkedin.com/Luson', href: 'https://www.linkedin.com/in/luson-basumatary-79a93b244/' },
                  {icon: ChefHat, text: 'codechef', href:'https://www.codechef.com/users/luson_10'},
                  {icon: ChartNoAxesColumn, text:'codeforces', href:'https://codeforces.com/profile/Lusn'},
                  {icon: Code, text:'leetcode', href:'https://leetcode.com/u/luson_18/'}
                ].map((contact, index) => (
                  <a
                    key={index}
                    target="_blank"
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