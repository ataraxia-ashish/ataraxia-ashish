import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, FolderOpen, Mail, Menu, X } from 'lucide-react';
import profilePhoto from './assets/Circle_image.png';


import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

// ─── Nav items config ───────────────────────────────────────────────────────
const NAV_ITEMS = [
  { to: '/',         label: 'Home',     Icon: HomeIcon   },
  { to: '/profile',  label: 'Profile',  Icon: User       },
  { to: '/projects', label: 'Projects', Icon: FolderOpen },
  { to: '/contact',  label: 'Contact',  Icon: Mail       },
];

// ─── Sidebar placeholder removed — real Sidebar component used below ─────────

// ─── Tablet top-header ───────────────────────────────────────────────────────
const TabletHeader = ({ drawerOpen, setDrawerOpen }) => (
  <header
    className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-3"
    style={{ background: '#0D1530', borderBottom: '1px solid rgba(41,121,255,0.25)' }}
  >
    <div className="flex items-center gap-3">
      <img
        src={profilePhoto}
        alt="Ashish Bipinbhai Makwana"
        className="w-9 h-9 rounded-full object-cover"
        style={{ border: '2px solid #1E6FFF' }}
      />
      <div>
        <p className="text-white font-semibold text-sm leading-tight">Ashish Makwana</p>
        <p className="text-text-muted text-xs">Data Science &amp; ML Developer</p>
      </div>
    </div>
    <button
      id="hamburger-btn"
      aria-label="Toggle menu"
      onClick={() => setDrawerOpen(v => !v)}
      className="text-text-muted hover:text-white transition-colors duration-200 p-1"
    >
      {drawerOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </header>
);

// ─── Hamburger drawer (tablet + mobile) ─────────────────────────────────────
const Drawer = ({ open, onClose }) => {
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => { onClose(); }, [location.pathname]);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Drawer panel */}
      <aside
        className="fixed top-0 left-0 h-full z-50 lg:hidden flex flex-col gap-4 pt-16 pb-8 px-6 transition-transform duration-300"
        style={{
          width: 260,
          background: '#0D1530',
          borderRight: '1px solid rgba(41,121,255,0.25)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {/* Mini profile */}
        <div className="flex flex-col items-center gap-3 py-6">
          <img
            src={profilePhoto}
            alt="Ashish Bipinbhai Makwana"
            className="w-20 h-20 rounded-full object-cover"
            style={{ border: '2px solid #1E6FFF' }}
          />
          <p className="text-white font-semibold text-base text-center">Ashish Bipinbhai Makwana</p>
          <p className="text-text-muted text-xs text-center">Data Science &amp; ML Developer</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 mt-2">
          {NAV_ITEMS.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              id={`drawer-nav-${label.toLowerCase()}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-primary text-white'
                    : 'text-text-muted hover:text-accent-secondary'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

// ─── Mobile bottom tab bar (< 768px) ────────────────────────────────────────
const BottomTabBar = () => (
  <nav
    className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around py-2 px-1"
    style={{ background: '#0D1530', borderTop: '1px solid rgba(41,121,255,0.25)' }}
  >
    {NAV_ITEMS.map(({ to, label, Icon }) => (
      <NavLink
        key={to}
        to={to}
        end={to === '/'}
        id={`bottom-tab-${label.toLowerCase()}`}
        className={({ isActive }) =>
          `flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
            isActive
              ? 'text-white bg-accent-primary'
              : 'text-text-muted hover:text-accent-secondary'
          }`
        }
      >
        <Icon size={20} />
        <span>{label}</span>
      </NavLink>
    ))}
  </nav>
);

// ─── Layout wrapper ──────────────────────────────────────────────────────────
const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: '#0A0F1E' }}>
      {/* Desktop fixed left sidebar */}
      <Sidebar />

      {/* Tablet / mobile top header */}
      <TabletHeader drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      {/* Slide-in drawer (tablet + mobile) */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main scrollable content panel */}
      <main
        className="lg:ml-[280px] min-h-screen relative"
        style={{ paddingTop: '0' }}
      >
        <Navbar />
        {/* Extra top padding on mobile/tablet for the fixed header */}
        <div className="pt-0 lg:pt-0">
          <div
            className="
              pt-[60px] pb-20
              md:pt-[60px] md:pb-4
              lg:pt-0 lg:pb-0
            "
          >
            <Routes>
              <Route path="/"         element={<PageTransition><Home /></PageTransition>}     />
              <Route path="/profile"  element={<PageTransition><Profile /></PageTransition>}  />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/contact"  element={<PageTransition><Contact /></PageTransition>}  />
            </Routes>
          </div>
        </div>
      </main>

      {/* Mobile bottom tab bar */}
      <BottomTabBar />
    </div>
  );
};

// ─── App root ────────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
