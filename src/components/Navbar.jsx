import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, FolderOpen, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/profile', label: 'Profile', Icon: User },
  { to: '/projects', label: 'Projects', Icon: FolderOpen },
  { to: '/contact', label: 'Contact', Icon: Mail },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex justify-end pt-6 pr-8">
      <nav
        className="flex items-center gap-1 p-2"
        style={{
          background: '#111827', // bg.card
          borderRadius: '12px',
          border: '1px solid rgba(41,121,255,0.25)', // border color
        }}
      >
        {NAV_ITEMS.map(({ to, label, Icon }) => {
          const isActive = location.pathname === to || (to === '/' && location.pathname === '');
          
          return (
            <NavLink
              key={to}
              to={to}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '9999px', // capsule/pill
                background: isActive ? '#1E6FFF' : 'transparent',
                color: isActive ? '#FFFFFF' : '#8892A4',
                fontWeight: 500,
                fontSize: '14px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#00C3FF';
                  e.currentTarget.style.textShadow = '0 0 10px rgba(0, 195, 255, 0.5)';
                  // For the SVG icon glow
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.style.filter = 'drop-shadow(0 0 5px rgba(0, 195, 255, 0.8))';
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#8892A4';
                  e.currentTarget.style.textShadow = 'none';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.style.filter = 'none';
                  }
                }
              }}
            >
              <Icon size={18} style={{ transition: 'all 0.25s ease' }} />
              {label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
