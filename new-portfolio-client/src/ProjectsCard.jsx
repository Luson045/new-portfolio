import React, { useState, useEffect } from 'react';

const ProjectCard = ({ project, isSelected, onClick }) => {
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  // Typing animation logic
  useEffect(() => {
    if (isSelected) {
      setTypedText(''); // Reset typed text
      setTypingIndex(0);

      const typingInterval = setInterval(() => {
        if (typingIndex < project.description.length) {
          setTypedText((prev) => prev + project.description[typingIndex]);
          setTypingIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [isSelected, typingIndex, project.description]);

  return (
    <div
      onClick={onClick}
      className={`relative flex-shrink-0 bg-blak border-2 border-yelo rounded-lg cursor-pointer transition-all duration-500 ${
        isSelected ? 'scale-110 z-50' : 'hover:scale-105 z-10'
      }`}
      style={{
        width: isSelected ? '500px' : '250px',
        height: isSelected ? '350px' : '200px',
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-2/3 rounded-t-lg object-cover"
      />
      <div className="p-4 relative">
        <h2 className="text-xl font-bold mb-2 text-yelo">
          {project.title}
        </h2>
        {isSelected && (
          <>
            <button
              className="absolute top-2 right-2 bg-yelo text-blak px-2 py-1 rounded shadow hover:bg-yelo"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering parent onClick
                onClick();
              }}
            >
              Close
            </button>
            <p className="digital text-sm mb-4 text-yelo">{typedText}</p>
            <div className="flex justify-between mt-4">
              <a
                href={project.repoLink}
                className="bg-yelo text-blak px-4 py-2 rounded shadow hover:bg-yelo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href={project.liveLink}
                className="bg-yelo text-blak px-4 py-2 rounded shadow hover:bg-yelo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </>
        )}
        {!isSelected && (
          <p className="text-xs text-yelo mt-2">Click to view details</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
