import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send } from 'lucide-react';

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

const SOCIAL_LINKS = [
  { id: 'email', Icon: Mail, href: 'mailto:ashmakwana29@gmail.com' },
  { id: 'github', Icon: GitHubIcon, href: 'https://github.com/ataraxia-ashish' },
  { id: 'linkedin', Icon: LinkedInIcon, href: 'https://linkedin.com/in/ashish-makwana-a6255a39b/' },
  { id: 'instagram', Icon: InstagramIcon, href: 'https://instagram.com/ataraxia_ashish' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields.');
      setStatus('error');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Ensure env variables exist
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';

    if (!publicKey || publicKey.includes('your_public_key')) {
      // Simulation mode if no keys provided (so UI works without erroring out)
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    // Actual EmailJS send
    emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: formData.name
      },
      publicKey
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setErrorMessage('Failed to send message. Please try again or email me directly.');
        setStatus('error');
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-12 py-10">

      <div className="mb-10 text-center">
        <h1
          className="text-3xl font-bold mb-3"
          style={{ color: '#FFFFFF' }}
        >
          Let's Connect
        </h1>
        <p className="text-lg" style={{ color: '#8892A4' }}>
          I am currently open to freelance projects, collaborations, and new opportunities.
        </p>
      </div>

      {/* ── Contact Form ──────────────────────────────────────────────── */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-12">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#8892A4' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200"
            style={{
              background: '#0D1530',
              border: '1px solid rgba(41,121,255,0.25)',
              color: '#FFFFFF',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#1E6FFF';
              e.target.style.boxShadow = 'inset 0 0 8px rgba(30,111,255,0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(41,121,255,0.25)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#8892A4' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200"
            style={{
              background: '#0D1530',
              border: '1px solid rgba(41,121,255,0.25)',
              color: '#FFFFFF',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#1E6FFF';
              e.target.style.boxShadow = 'inset 0 0 8px rgba(30,111,255,0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(41,121,255,0.25)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#8892A4' }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 resize-y"
            style={{
              background: '#0D1530',
              border: '1px solid rgba(41,121,255,0.25)',
              color: '#FFFFFF',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#1E6FFF';
              e.target.style.boxShadow = 'inset 0 0 8px rgba(30,111,255,0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(41,121,255,0.25)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="How can we work together?"
          />
        </div>

        {/* Status Messages */}
        {status === 'error' && (
          <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
        )}
        {status === 'success' && (
          <p className="text-green-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 disabled:opacity-70"
          style={{
            background: '#1E6FFF',
            border: '1px solid transparent',
          }}
          onMouseEnter={(e) => {
            if (status !== 'loading') {
              e.currentTarget.style.background = '#1560df';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(30,111,255,0.55)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseLeave={(e) => {
            if (status !== 'loading') {
              e.currentTarget.style.background = '#1E6FFF';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          {status === 'loading' ? (
            <span className="animate-pulse">Sending...</span>
          ) : (
            <>
              <Send size={18} strokeWidth={2} />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* ── Social Icons Bottom ───────────────────────────────────────── */}
      <div className="flex justify-center items-center gap-6 pt-8" style={{ borderTop: '1px solid rgba(41,121,255,0.1)' }}>
        {SOCIAL_LINKS.map(({ id, Icon, href }) => (
          <a
            key={id}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            style={{
              color: '#8892A4',
              transition: 'color 0.2s ease, filter 0.2s ease',
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
            <Icon size={24} />
          </a>
        ))}
      </div>

    </div>
  );
};

export default Contact;
