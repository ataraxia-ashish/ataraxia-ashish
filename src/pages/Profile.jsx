import { skills } from '../data/skills';
import { achievements } from '../data/achievements';
import { Trophy, Medal, GraduationCap } from 'lucide-react';

const iconMap = {
  Trophy,
  Medal,
  GraduationCap
};

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10">
      
      {/* ── Section 1: Education ────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 
          className="text-2xl font-bold mb-6"
          style={{ color: '#FFFFFF' }}
        >
          Education
        </h2>
        <div 
          style={{
            background: '#111827',
            border: '1px solid rgba(41,121,255,0.25)',
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <h3 className="text-lg font-bold text-white mb-2">
            Sardar Patel University
          </h3>
          <p className="text-md text-[#1E6FFF] mb-6 font-medium">
            BCA (NEP)
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#8892A4] mb-1">Sem 1</span>
              <span className="font-mono text-white text-lg">8.91 SGPA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#8892A4] mb-1">Sem 2</span>
              <span className="font-mono text-white text-lg">9.36 SGPA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#8892A4] mb-1">Sem 3</span>
              <span className="font-mono text-white text-lg">8.82 SGPA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#8892A4] mb-1">Sem 4</span>
              <span className="font-mono text-[#00C3FF] text-md mt-1">Result Awaited</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Skills ───────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 
          className="text-2xl font-bold mb-6"
          style={{ color: '#FFFFFF' }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx}>
              <h3 className="text-md font-semibold text-[#FFFFFF] mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      background: 'rgba(30,111,255,0.1)',
                      border: '1px solid rgba(30,111,255,0.3)',
                      color: '#1E6FFF',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '12px',
                      padding: '4px 12px',
                      borderRadius: '20px',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Achievements ─────────────────────────────────────── */}
      <section>
        <h2 
          className="text-2xl font-bold mb-6"
          style={{ color: '#FFFFFF' }}
        >
          Achievements
        </h2>
        <div className="flex flex-col gap-4">
          {achievements.map((achievement) => {
            const IconComponent = iconMap[achievement.icon] || Trophy; // fallback
            return (
              <div
                key={achievement.id}
                className="flex items-start gap-4"
                style={{
                  background: '#111827',
                  border: '1px solid rgba(41,121,255,0.25)',
                  borderLeft: '3px solid #1E6FFF',
                  borderRadius: '12px',
                  padding: '20px 24px',
                }}
              >
                <div className="mt-1 flex-shrink-0">
                  <IconComponent size={24} color="#00C3FF" />
                </div>
                <div>
                  <h3 className="font-bold text-[#FFFFFF] text-lg mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-[#8892A4] text-sm">
                    {achievement.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Profile;
