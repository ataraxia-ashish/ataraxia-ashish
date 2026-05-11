import { Mail, Download } from 'lucide-react';
import profilePhoto from '../assets/Circle_image.png';

// ─── Inline brand SVG icons ─────────────────────────────────────────────────
const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

// ─── Social links config ────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    Icon: GitHubIcon,
    href: 'https://github.com/ataraxia-ashish',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://linkedin.com/in/ashish-makwana-a6255a39b/',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    Icon: Mail,
    href: 'mailto:ashmakwana29@gmail.com',
    external: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://instagram.com/ataraxia_ashish',
    external: true,
  },
];

// ─── Sidebar Component ───────────────────────────────────────────────────────
const Sidebar = () => {
  return (
    <aside
      style={{
        width: 280,
        background: '#0D1530',
        borderRight: '1px solid rgba(41,121,255,0.25)',
      }}
      className="hidden lg:flex flex-col h-screen fixed top-0 left-0 z-30 overflow-y-auto"
    >
      {/* ── Profile section ─────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-4 px-6 pt-10 pb-6">

        {/* Avatar with gradient ring + glow */}
        <div
          style={{
            borderRadius: '50%',
            padding: 3,
            background: 'linear-gradient(135deg, #1E6FFF 0%, #00C3FF 100%)',
            boxShadow: '0 0 24px rgba(30,111,255,0.5)',
            flexShrink: 0,
          }}
        >
          <img
            src={profilePhoto}
            alt="Ashish Makwana"
            style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              border: '2px solid #0D1530',
            }}
          />
        </div>

        {/* Name + Title */}
        <div className="text-center">
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 17,
              fontWeight: 700,
              lineHeight: 1.35,
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Ashish Makwana
          </h2>
          <p
            style={{
              color: '#8892A4',
              fontSize: 12.5,
              marginTop: 5,
              letterSpacing: '0.02em',
            }}
          >
            Data Science &amp; ML Developer
          </p>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'rgba(41,121,255,0.18)', marginTop: 2 }} />

        {/* Social icons row */}
        <div className="flex items-center gap-5 mt-1">
          {SOCIAL_LINKS.map(({ id, label, Icon, href, external }) => (
            <a
              key={id}
              id={`sidebar-social-${id}`}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              title={label}
              style={{
                color: '#8892A4',
                transition: 'color 0.2s ease, filter 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#1E6FFF';
                e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(30,111,255,0.75))';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#8892A4';
                e.currentTarget.style.filter = 'none';
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'rgba(41,121,255,0.18)' }} />
      </div>

      {/* ── Contact email ────────────────────────────────────────────────── */}
      <div className="px-6 pb-2">
        <div className="flex items-center gap-2">
          <Mail size={12} style={{ color: '#8892A4', flexShrink: 0 }} />
          <span
            style={{
              color: '#8892A4',
              fontSize: 11.5,
              fontFamily: "'JetBrains Mono', monospace",
              wordBreak: 'break-all',
            }}
          >
            ashmakwana29@gmail.com
          </span>
        </div>
      </div>

      {/* ── Additional Info ──────────────────────────────────────────────── */}
      <div className="px-6 pb-4 pt-4 flex flex-col gap-4">

        {/* Languages */}
        <div>
          <h3 style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#8892A4', marginBottom: '4px' }}>Languages</h3>
          <p style={{ fontSize: '12px', color: '#8892A4', lineHeight: '1.6' }}>Gujarati · C2 Native | Hindi · C1<br />English · C1 | German · A1 (Aiming B2)</p>
        </div>
        <div style={{ width: '100%', height: 1, background: 'rgba(41,121,255,0.15)' }} />

        {/* Interests */}
        <div>
          <h3 style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#8892A4', marginBottom: '4px' }}>Interests</h3>
          <p style={{ fontSize: '13px', color: '#8892A4', lineHeight: '1.4' }}>♟ Chess — Intermediate<br />🎵 Flute — Novice</p>
        </div>
        <div style={{ width: '100%', height: 1, background: 'rgba(41,121,255,0.15)' }} />

        {/* Open To */}
        <div>
          <h3 style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#8892A4', marginBottom: '6px' }}>Open To</h3>
          <div className="flex flex-col items-start gap-1.5">
            {['Freelance', 'Internships', 'Collaborations'].map(badge => (
              <span key={badge} style={{
                background: 'rgba(30,111,255,0.15)',
                border: '1px solid rgba(30,111,255,0.3)',
                color: '#1E6FFF',
                fontSize: '10px',
                borderRadius: '20px',
                padding: '2px 8px'
              }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Spacer ───────────────────────────────────────────────────────── */}
      <div style={{ flex: 1 }} />

      {/* ── Download Resume CTA ───────────────────────────────────────────── */}
      <div className="px-6 pb-8">
        <a
          id="sidebar-download-resume"
          href="/Ashish_Resume.pdf"
          download="Ashish_Makwana_Resume.pdf"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            width: '100%',
            padding: '11px 0',
            background: '#1E6FFF',
            color: '#FFFFFF',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: 'none',
            border: '1px solid transparent',
            transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#1560df';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(30,111,255,0.55)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#1E6FFF';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Download size={15} strokeWidth={2.2} />
          Download Resume
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
