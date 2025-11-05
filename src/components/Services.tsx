import { Cloud, Code2, Zap, Database } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Services() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { elementRef: footerRef, isVisible: footerVisible } = useScrollAnimation();
  const services = [
    {
      icon: Cloud,
      title: 'SALES & SERVICE CLOUD',
      description: 'Expert implementation and customization of Salesforce Sales Cloud and Service Cloud',
      detail: 'SPECIALIZATION',
      highlight: 'CORE',
      color: 'bg-blue-400',
    },
    {
      icon: Code2,
      title: 'CUSTOM DEVELOPMENT',
      description: 'Building custom solutions with LWC, Aura, Visualforce, and Apex for complex business needs',
      detail: 'EXPERTISE',
      highlight: 'FULL-STACK',
      color: 'bg-orange-400',
    },
    {
      icon: Zap,
      title: 'PROCESS AUTOMATION',
      description: 'Streamlining workflows and reducing manual interventions through intelligent automation',
      detail: 'EFFICIENCY',
      highlight: 'OPTIMIZED',
      color: 'bg-rose-400',
    },
    {
      icon: Database,
      title: 'API INTEGRATION',
      description: 'Seamless third-party integrations using REST and SOAP APIs with external systems',
      detail: 'CONNECTIVITY',
      highlight: 'SCALABLE',
      color: 'bg-cyan-300',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`inline-block bg-yellow-300 border-4 border-black px-6 py-3 rotate-1 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${titleVisible ? 'animate-scale-in' : ''}`}>
            <h2 className="text-5xl sm:text-6xl font-black">EXPERTISE</h2>
          </div>
          <p className={`text-xl font-bold max-w-2xl mx-auto ${titleVisible ? 'animate-fade-in animation-delay-200' : ''}`}>
            Delivering enterprise solutions with{' '}
            <span className="bg-emerald-300 px-2 border-2 border-black">
              cutting-edge technology
            </span>
          </p>
        </div>

        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${cardsVisible ? 'opacity-100' : 'opacity-0'}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const rotation = index % 2 === 0 ? '-rotate-1' : 'rotate-1';

            const animationDelay = index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : index === 3 ? 'animation-delay-600' : '';

            return (
              <div
                key={service.title}
                className={`${service.color} border-4 border-black p-8 ${rotation} hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 ${cardsVisible ? `animate-scale-in ${animationDelay}` : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-16 h-16" strokeWidth={3} />
                  <div className="text-right">
                    <div className="text-2xl font-black">{service.highlight}</div>
                    <div className="font-bold text-sm">{service.detail}</div>
                  </div>
                </div>

                <h3 className="text-3xl font-black mb-3">{service.title}</h3>
                <p className="font-bold text-lg mb-6">{service.description}</p>

                <a href="#contact" className="block w-full bg-black text-white py-3 px-6 border-4 border-black font-bold hover:bg-white hover:text-black transition-all text-center">
                  LEARN MORE
                </a>
              </div>
            );
          })}
        </div>

        <div ref={footerRef} className={`mt-16 bg-emerald-300 border-4 border-black p-8 rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${footerVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-black mb-2">ADDITIONAL SKILLS</h3>
              <p className="font-bold text-lg">
                Reports & Dashboards, User Management, Ant Tool, Workbench, Data Migration
              </p>
            </div>
            <a href="#portfolio" className="bg-black text-white px-8 py-4 border-4 border-black font-bold whitespace-nowrap hover:bg-white hover:text-black transition-all">
              VIEW PROJECTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
