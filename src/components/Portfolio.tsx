import { Code2, Database, Layers, Zap, Award, Package } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Portfolio() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const skills = [
    { name: 'SALESFORCE LWC', level: 95, color: 'bg-cyan-300' },
    { name: 'APEX', level: 90, color: 'bg-emerald-400' },
    { name: 'INTEGRATION', level: 88, color: 'bg-yellow-300' },
    { name: 'REST/SOAP API', level: 85, color: 'bg-rose-400' },
  ];

  const projects = [
    {
      icon: Database,
      title: 'CONSTRUCTION MANAGEMENT SYSTEM',
      tech: 'Salesforce Service Cloud',
      description: 'Built a custom application from scratch using LWC and Aura framework to optimize the entire construction process. Integrated QuickBooks for seamless financial management and synchronization.',
      features: ['LWC & Aura Development', 'QuickBooks Integration', 'Production Deployment'],
      color: 'bg-orange-400',
    },
    {
      icon: Layers,
      title: 'INVENTORY MANAGEMENT SYSTEM',
      tech: 'Service Cloud + Automation',
      description: 'Designed and integrated custom solutions to streamline inventory tracking, sales, and customer service functionalities with real-time visibility and automated replenishment.',
      features: ['System Integration', 'Business Logic', 'Real-time Analytics'],
      color: 'bg-cyan-300',
    },
    {
      icon: Package,
      title: 'APPEXCHANGE APP BUILDING',
      tech: 'Lightning Web Components',
      description: 'Developed a scalable AppExchange application using Salesforce APIs and LWC, ensuring seamless data synchronization and optimal user experience across the platform.',
      features: ['App Architecture', 'API Integration', 'Quality Assurance'],
      color: 'bg-yellow-300',
    },
    {
      icon: Code2,
      title: 'CUSTOM FORM BUILDER',
      tech: 'LWC + Apex',
      description: 'Built a custom form builder allowing users to create forms with Salesforce object integration. Supports up to three objects in parent-child relationships with customizable fields and design.',
      features: ['LWC Framework', 'Apex Controllers', 'Technical Documentation'],
      color: 'bg-rose-400',
    },
  ];

  const certifications = [
    'Salesforce Certified AI Associate',
    'Salesforce Certified Agentforce Specialist',
    'Salesforce Certified Data Cloud Consultant',
    'Salesforce Certified Platform Developer',
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block bg-emerald-400 border-4 border-black px-6 py-3 rotate-1 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-5xl sm:text-6xl font-black">PORTFOLIO</h2>
          </div>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Real-world projects demonstrating enterprise-grade Salesforce solutions
          </p>
        </div>

        <div className="bg-black text-white border-4 border-black p-8 sm:p-12 mb-16 -rotate-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Code2 className="w-12 h-12" strokeWidth={3} />
                <h3 className="text-4xl font-black">KARAN PATEL</h3>
              </div>
              <p className="text-xl font-bold mb-6 leading-relaxed">
                Salesforce Developer with 2+ years of experience building scalable enterprise solutions and managed packages for AppExchange. Specialized in Sales Cloud and Service Cloud implementations.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-cyan-300 text-black px-4 py-2 border-2 border-white font-black">
                  DEVELOPER
                </span>
                <span className="bg-yellow-300 text-black px-4 py-2 border-2 border-white font-black">
                  INNOVATOR
                </span>
                <span className="bg-rose-400 text-black px-4 py-2 border-2 border-white font-black">
                  PROBLEM SOLVER
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-black text-lg">{skill.name}</span>
                    <span className="font-black text-lg">{skill.level}%</span>
                  </div>
                  <div className="bg-white border-2 border-white h-6">
                    <div
                      className={`${skill.color} h-full border-2 border-black`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-black mb-8 text-center">
            <span className="bg-rose-400 border-4 border-black px-6 py-2 inline-block -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              KEY PROJECTS
            </span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className={`${project.color} border-4 border-black p-8 ${
                    index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                  } hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Icon className="w-12 h-12 flex-shrink-0" strokeWidth={3} />
                      <div>
                        <h4 className="text-2xl font-black mb-2">{project.title}</h4>
                        <p className="font-bold text-sm bg-black text-white px-3 py-1 inline-block border-2 border-black">
                          {project.tech}
                        </p>
                      </div>
                    </div>
                    <p className="text-base font-bold leading-relaxed">{project.description}</p>

                    <div className="bg-white border-4 border-black p-4">
                      <h5 className="font-black text-base mb-3">KEY FEATURES</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="font-bold flex items-center gap-2 text-sm">
                            <Zap className="w-5 h-5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-400 to-cyan-300 border-4 border-black p-8 sm:p-12 rotate-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <Award className="w-12 h-12" strokeWidth={3} />
            <h3 className="text-4xl font-black text-center">CERTIFICATIONS & EXPERTISE</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className={`bg-white border-4 border-black p-4 text-center font-black ${
                  index % 2 === 0 ? '-rotate-1' : 'rotate-1'
                } hover:rotate-0 transition-all`}
              >
                {cert}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/PatelKaran0104"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 border-4 border-black font-bold text-lg hover:bg-white hover:text-black transition-all inline-flex items-center gap-3"
            >
              <Code2 className="w-6 h-6" />
              VIEW GITHUB PROFILE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
