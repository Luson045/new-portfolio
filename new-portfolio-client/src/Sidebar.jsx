import React, { useState, useEffect } from 'react';
import { Home, Users, Settings, Map, Book, Radio, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import HomePage from './Homepage';
import ProjectGallary from './ProjectsPage';
import AboutMe from './About';
import Footer from './Footer';
import Archieves from './Archieves';
import Network from './Network';
import Message from './Message';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('base');

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsExpanded(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { id: 'base', title: 'Base', icon: Home },
    { id: 'about', title: 'Identity Archieve', icon: Users },
    { id: 'projects', title: 'Workshop', icon: Map },
    { id: 'transmissions', title: 'Transmit Message', icon: Radio },
    { id: 'network', title: 'Galactic Network', icon: Book },
    { id: 'archieves', title: 'Galactic Archives', icon: Settings },
  ];

  const handleMenuClick = (id) => {
    setActiveSection(id);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blak text-yelo hover:bg-gray-800 backdrop-blur-sm border border-yelo"
      aria-label="Toggle menu"
    >
      {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );

  const sidebarContent = (
    <aside
      className={`
        fixed md:sticky top-0 h-screen
        bg-blak/90 backdrop-blur-md border-r border-yelo/30
        transition-all duration-300 ease-out
        ${isMobile ? 
          `${isMobileMenuOpen ? 'left-0' : '-left-full'} w-64` : 
          `left-0 ${isExpanded ? 'w-64' : 'w-20'}`
        }
        z-40
      `}
    >
      {/* Header */}
      <div className={`p-4 flex items-center justify-between border-b border-yelo/30 h-16 ${isMobile?'mt-20':''}`}>
        {(isExpanded || isMobileMenuOpen) && (
          <h1 className="title text-yelo text-xl tracking-wider">The Portfolio</h1>
        )}
        {!isMobile && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-yelo/10 rounded-lg transition-colors ml-auto"
            aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {isExpanded ? (
              <ChevronLeft className="h-5 w-5 bg-yelo" />
            ) : (
              <ChevronRight className="h-5 w-5 bg-yelo" />
            )}
          </button>
        )}
      </div>

      {/* projects */}
      <nav className="py-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item.id)}
            className={`
              w-full flex items-center px-4 py-3
              transition-colors relative group
              ${activeSection === item.id ? 'bg-yelo/20 text-yelo' : 'text-yelo/70 hover:bg-yelo/10 hover:text-yelo'}
            `}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {(isExpanded || isMobileMenuOpen) && (
              <span className="ml-3 font-medium digital">{item.title}</span>
            )}
            {!isExpanded && !isMobile && (
              <div className="
                absolute left-full ml-2 px-3 py-2
                bg-blak/90 backdrop-blur-sm border border-yelo/30
                rounded-lg text-sm whitespace-nowrap
                opacity-0 invisible group-hover:visible group-hover:opacity-100
                transition-all duration-200 z-50
              ">
                {item.title}
              </div>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-4 border-t border-yelo/30">
        {(isExpanded || isMobileMenuOpen) && (
          <p className="text-yelo/50 text-sm text-center">Last Updated: 15-01-2025</p>
        )}
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-blak">
      <MobileMenuButton />
      
      {/* Overlay for mobile */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex">
        {sidebarContent}

        <main className={`
          flex-1 transition-all duration-300
          ${isMobile ? 'w-full' : isExpanded ? 'ml-0' : 'ml-0'}
          ${isMobile ? 'mt-16' : 'mt-0'}
        `}>
          <div className="container p-4 mx-auto">
            {activeSection === 'base' && <HomePage />}
            {activeSection === 'about' && <AboutMe />}
            {activeSection === 'projects' && <ProjectGallary />}
            {activeSection === 'transmissions' && <Message />}
            {activeSection === 'network' && <Network />}
            {activeSection === 'archieves' && <Archieves />}
            {/* Add other sections as needed */}
          </div>
        </main>
      </div>
      
      <Footer/>
    </div>
  );
};

export default Sidebar;