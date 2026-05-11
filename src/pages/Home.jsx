import { services } from '../data/services';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10">
      
      {/* ── Section 1: About Me ─────────────────────────────────────────── */}
      <section className="mb-16">
        <h1 
          className="text-3xl font-bold mb-6"
          style={{ color: '#FFFFFF' }}
        >
          About Me
        </h1>
        <div 
          className="leading-relaxed"
          style={{ color: '#8892A4', fontSize: '16px' }}
        >
          <p className="mb-4">
            I am a Data Science & ML Developer with a proven academic record as a university topper and a strong foundation in real-world project development. My expertise lies in analyzing complex datasets, building predictive models that learn, and ensuring that technical solutions translate into meaningful business insights.
          </p>
          <p>
            With hands-on experience spanning deep learning, computer vision, and full-stack web applications, I bring a versatile, end-to-end perspective to every problem. I am currently available for freelance projects, collaborations, and new opportunities where I can deliver impactful data-driven solutions.
          </p>
        </div>
      </section>

      {/* ── Section 2: What I Do ────────────────────────────────────────── */}
      <section>
        <h2 
          className="text-2xl font-bold mb-8"
          style={{ color: '#FFFFFF' }}
        >
          What I Do
        </h2>
        
        {/* Responsive Grid: 1 col mobile, 2 cols tablet, 2 cols desktop (wait, PRD said "2x3 grid (desktop), 2x2 (tablet)", meaning 3 cols desktop if 6 items total, wait "2x3" means 2 rows 3 cols = 3 cols? Or 2 cols 3 rows? Let's do 2 columns on desktop for better text readability, or 3 if they fit. PRD: "2x3 or 3x2 grid". I will use grid-cols-1 md:grid-cols-2 lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
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
                <div className="mb-5">
                  <Icon size={32} color="#1E6FFF" />
                </div>
                <h3 
                  className="font-bold text-lg mb-3 leading-snug"
                  style={{ color: '#FFFFFF' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#8892A4' }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Home;
