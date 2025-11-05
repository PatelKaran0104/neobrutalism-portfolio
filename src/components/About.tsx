import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const stats = [
    { number: '2+', label: 'YEARS EXPERIENCE', color: 'bg-rose-400' },
    { number: '4+', label: 'MAJOR PROJECTS', color: 'bg-cyan-300' },
    { number: '4', label: 'CERTIFICATIONS', color: 'bg-yellow-300' },
    { number: '100%', label: 'DEDICATION', color: 'bg-emerald-400' },
  ];

  const values = [
    {
      icon: Users,
      title: 'COLLABORATION',
      description: 'Working with cross-functional teams to deliver exceptional solutions',
      color: 'bg-yellow-300',
    },
    {
      icon: Target,
      title: 'PRECISION',
      description: 'Meticulous attention to detail in every line of code',
      color: 'bg-cyan-300',
    },
    {
      icon: Award,
      title: 'CERTIFIED',
      description: 'Salesforce AI Associate, AI Specialist & Data Cloud Consultant',
      color: 'bg-rose-400',
    },
    {
      icon: TrendingUp,
      title: 'INNOVATION',
      description: 'Building cutting-edge solutions that drive business growth',
      color: 'bg-orange-400',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block bg-rose-400 border-4 border-black px-6 py-3 -rotate-1 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-5xl sm:text-6xl font-black">ABOUT ME</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            return (
              <div
                key={stat.label}
                className={`${stat.color} border-4 border-black p-6 text-center ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } hover:rotate-0 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
              >
              <div className="text-4xl sm:text-5xl font-black mb-2">{stat.number}</div>
              <div className="font-bold text-sm sm:text-base">{stat.label}</div>
            </div>
            );
          })}
        </div>

        <div className="bg-white border-4 border-black p-8 sm:p-12 mb-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                BUILDING{' '}
                <span className="bg-emerald-300 px-2 border-2 border-black inline-block rotate-1">
                  ENTERPRISE
                </span>{' '}
                GRADE{' '}
                <span className="bg-cyan-300 px-2 border-2 border-black inline-block -rotate-1">
                  SOLUTIONS
                </span>
              </h3>
              <p className="text-lg font-bold mb-4 leading-relaxed">
                I'm a Salesforce Developer with over 2 years of experience specializing in Sales Cloud and Service Cloud. I focus on custom development, integrations, process automation, and improving user experiences.
              </p>
              <p className="text-lg font-bold mb-4 leading-relaxed">
                Working with a leading Salesforce consulting firm, I deliver tailored solutions using cutting-edge Salesforce technologies including{' '}
                <span className="bg-yellow-300 px-1">Lightning Web Components, Apex, and REST/SOAP APIs</span> to improve business processes and enhance functionality.
              </p>
              <p className="text-lg font-bold leading-relaxed">
                My approach combines technical expertise with strong analytical and problem-solving skills to design innovative solutions for complex business challenges.
              </p>
            </div>

            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className={`${value.color} border-4 border-black p-6 ${
                      index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                    } hover:rotate-0 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
                  >
                    <Icon className="w-10 h-10 mb-3" strokeWidth={3} />
                    <h4 className="text-2xl font-black mb-2">{value.title}</h4>
                    <p className="font-bold">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-black text-white border-4 border-black p-8 sm:p-12 -rotate-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-4xl sm:text-5xl font-black mb-6">MY MISSION</h3>
            <p className="text-xl sm:text-2xl font-bold leading-relaxed">
              To deliver scalable, innovative Salesforce solutions that drive business transformation and create exceptional user experiences through cutting-edge technology and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
