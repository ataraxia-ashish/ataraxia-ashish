import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

// Inline GitHub SVG since lucide-react doesn't have it
const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z"/>
  </svg>
);

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-10">
      
      <div className="mb-10">
        <h1 
          className="text-3xl font-bold mb-3"
          style={{ color: '#FFFFFF' }}
        >
          Projects
        </h1>
        <p style={{ color: '#8892A4' }}>
          A selection of real-world models, web apps, and data analyses I've built.
        </p>
      </div>

      {/* Responsive Grid: 1 col mobile, 2 cols desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => window.open(project.links.github, '_blank', 'noopener,noreferrer')}
            className="cursor-pointer group flex flex-col h-full"
            style={{
              background: '#111827',
              border: '1px solid rgba(41,121,255,0.25)',
              borderRadius: '12px',
              padding: '24px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(30,111,255,0.4)';
              e.currentTarget.style.borderColor = '#1E6FFF';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(41,121,255,0.25)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div className="flex-grow">
              {/* Header */}
              <div className="mb-3">
                <span className="text-xs font-semibold tracking-wider uppercase mb-2 block" style={{ color: '#00C3FF' }}>
                  {project.type}
                </span>
                <h3 className="text-xl font-bold" style={{ color: '#FFFFFF' }}>
                  {project.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#8892A4' }}>
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(30,111,255,0.1)',
                      border: '1px solid rgba(30,111,255,0.3)',
                      color: '#1E6FFF',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: '20px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links / Action Area */}
            <div className="flex items-center gap-4 mt-auto pt-4" style={{ borderTop: '1px solid rgba(41,121,255,0.1)' }}>
              <button 
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#00C3FF]"
                style={{ color: '#FFFFFF' }}
              >
                <GitHubIcon size={16} />
                GitHub
              </button>

              {project.links.demo && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent card click from firing
                    window.open(project.links.demo, '_blank', 'noopener,noreferrer');
                  }}
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#00C3FF]"
                  style={{ color: '#FFFFFF' }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;
