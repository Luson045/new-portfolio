import React, { useState } from 'react';
import { X } from 'lucide-react';

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Med-Space",
      description: "Med-space is an online OPD booking web platform that connects you with your desired hospital, skipping the long and exhausting OPD queues.",
      maintained: true,
      link: "https://med-space.vercel.app/",
      repo: "https://github.com/Luson045/medi-connect",
      date: "10-01-2024",
      image: "/projects/med space.png",
      tags: ["React", "Node", "Express", "MongoDB", "Rest API", "Docker", "ML", "DevOps", "OAuth"]
    },
    {
      id: 2,
      title: "Learn Stocks",
      description: "Learn Stocks is a simulated stock trading platform, that uses NSE Based stock data, to provide a virtual stock trading experience to the users.",
      maintained: false,
      link: "https://learnstocks.netlify.app/",
      repo: "https://github.com/Luson045/Learn_Stocks",
      date: "01-12-2023",
      image: "/projects/learn stocks.png",
      tags: ["React", "Node", "Data Representation", "Real-time-data", "Simulation", "Finance", "APIs"]
    },
    {
      id: 3,
      title: "Fake News identifier",
      description: "An LSTM based RNN model trained on a dataset of 40,000+ entries to identify fake news.[NOT DEPLOYED YET]",
      maintained: true,
      link: "#",
      repo: "https://github.com/Luson045/fake-news-LSTM",
      date: "01/01/2025",
      image: "/projects/fake news.png",
      tags: ["DL", "Neural Network", "RNN", "LSTM", "Data Preprocessing", "AI"]
    },
    {
      id: 4,
      title: "Mole Buster CNN",
      description: "OpenCV and Mediapipe based mole buster game.[NOT DEPLOYED]",
      maintained: false,
      link: "#",
      repo: "https://github.com/Luson045/Opencv-whack-the-mole-game",
      date: "01-10-2023",
      image: "/projects/bg.png",
      tags: ["OpenCV", "CNN", "Model", "Python", "GUI", "Turtle"]
    },
    {
      id: 5,
      title: "NiTJ CSE Research Analysis",
      description: "A brief analysis on the research done by the teachers of CSE department at NIT Jalandhar. Various methods like correlation, hypothesis testing, etc have been applied to get insights",
      maintained: true,
      link: "https://luson.stck.me/post/614273/NIT-Jalandhar-CSE-Department-Research-Analysis",
      repo: "https://github.com/Luson045/all_teacher_web_of_science",
      date: "10-12-2024",
      image: "/projects/project5.png",
      tags: ["ML", "Data Viz", "Data Gathering", "Python", "Latex", "Analysis"]
    }
  ];

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
    }, [text]);
    
    return <span>{displayText}</span>;
  };

  return (
    <div className="min-h-screen bg-blak p-8">
      {/* Stars background */}
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

      {/* Project Grid */}
      <div className="text-center text-yelo">
          <div className="animation-container">
            <a className="jeditext arrowL" style={{ fontSize: 40 }}>^ </a>
            <a className="jeditext central-text" style={{ fontSize: 25 }}>Workshop</a>
            <a className="jeditext arrowR" style={{ fontSize: 40 }}> ^</a>
          </div>
      </div>
      <br/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer group"
          >
            <div className="border-2 border-yelo bg-blak/50 p-6 rounded-lg backdrop-blur-sm
                          transform transition-all duration-300 hover:scale-105
                          group-hover:shadow-[0_0_15px_rgba(255,255,0,0.3)]">
              <h3 className="jeditext text-yelo text-xl mb-2">{project.title}</h3>
              <div className="h-1 w-16 bg-yelo mb-4" />
              <p className="text-yelo/70">Click to view details</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-blak/90 flex items-center justify-center z-20 p-4">
          <div className="bg-blak border-2 border-yelo p-4 max-w-6xl w-full rounded-lg
                        relative backdrop-blur-md shadow-[0_0_30px_rgba(255,255,0,0.2)]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-yelo hover:text-yelo/70"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col md:flex-row gap-8 scrollbar-hidden">
              {/* Content Section */}
              <div className="flex-1">
                <h2 className="jeditext text-yelo text-3xl mb-4">{selectedProject.title}</h2>
                <div className="h-1 w-24 bg-yelo mb-6" />
                
                {/* Tags Section */}
                <div className="mb-6 overflow-x-auto custom-scrollbar-x">
                  <div className="flex gap-2 pb-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="digital px-3 py-1 text-sm bg-yelo/10 text-yelo border border-yelo/30 rounded-full
                                whitespace-nowrap hover:bg-yelo/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="digital space-y-2 text-yelo/90">
                  <div>
                    <strong className="text-yelo">Description:</strong>
                    <div className="mt-1 max-h-12 overflow-y-auto pr-2 custom-scrollbar">
                      <p>
                        <TypewriterText text={selectedProject.description} />
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <strong className="text-yelo">Status:</strong>
                    <span className={`ml-2 ${selectedProject.maintained ? 'text-gren' : 'text-rad'}`}>
                      {selectedProject.maintained ? 'Maintained' : 'Not Maintained'}
                    </span>
                  </div>
                  
                  <div>
                    <strong className="text-yelo">Date:</strong>
                    <span className="ml-2">{selectedProject.date}</span>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      className="text-blak bg-yelo px-4 py-2 rounded hover:bg-yelo/80 transition-colors"
                    >
                      View Project
                    </a>
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      className="text-yelo border-2 border-yelo px-4 py-2 rounded hover:bg-yelo/10 transition-colors"
                    >
                      View Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-yelo/20 backdrop-blur-sm rounded-lg" />
                  <img 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="relative z-10 rounded-lg border-2 border-yelo/50 w-full h-auto"
                  />
                  <div className="absolute inset-0 shadow-[0_0_15px_rgba(255,255,0,0.2)] rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 0, 0.5) rgba(0, 0, 0, 0.3);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 0, 0.5);
          border-radius: 3px;
          border: 1px solid rgba(255, 255, 0, 0.2);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 0, 0.7);
        }

        /* Horizontal Scrollbar Styles */
        .custom-scrollbar-x {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 0, 0.5) rgba(0, 0, 0, 0.3);
        }

        .custom-scrollbar-x::-webkit-scrollbar {
          height: 6px;
        }

        .custom-scrollbar-x::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }

        .custom-scrollbar-x::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 0, 0.5);
          border-radius: 3px;
          border: 1px solid rgba(255, 255, 0, 0.2);
        }

        .custom-scrollbar-x::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 0, 0.7);
        }
      `}</style>
    </div>
  );
};

export default ProjectGallery;