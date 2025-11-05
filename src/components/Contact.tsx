import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Contact() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'development',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Form submitted! I will contact you soon.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: 'development', message: '' });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'PHONE', value: '+49 1521 0894179', color: 'bg-cyan-300' },
    { icon: Mail, label: 'EMAIL', value: 'khpatel0104@gmail.com', color: 'bg-yellow-300' },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Fulda, Germany',
      color: 'bg-rose-400',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`inline-block bg-cyan-300 border-4 border-black px-6 py-3 -rotate-1 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${titleVisible ? 'animate-scale-in' : ''}`}>
            <h2 className="text-5xl sm:text-6xl font-black">GET IN TOUCH</h2>
          </div>
          <p className={`text-xl font-bold max-w-2xl mx-auto ${titleVisible ? 'animate-fade-in animation-delay-200' : ''}`}>
            Let's discuss your next Salesforce project and bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div ref={leftRef} className={`space-y-6 ${leftVisible ? 'opacity-100' : 'opacity-0'}`}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const animationDelay = index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : '';
              return (
                <div
                  key={info.label}
                  className={`${info.color} border-4 border-black p-6 ${
                    index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                  } hover:rotate-0 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${leftVisible ? `animate-slide-right ${animationDelay}` : ''}`}
                >
                  <Icon className="w-10 h-10 mb-3" strokeWidth={3} />
                  <h3 className="text-2xl font-black mb-2">{info.label}</h3>
                  <p className="text-lg font-bold">{info.value}</p>
                </div>
              );
            })}

            <div className={`bg-orange-400 border-4 border-black p-8 rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${leftVisible ? 'animate-slide-right animation-delay-600' : ''}`}>
              <h3 className="text-3xl font-black mb-4">AVAILABILITY</h3>
              <div className="space-y-2 font-bold text-lg">
                <p>Open to new opportunities</p>
                <p>Contract & Full-time roles</p>
                <p>Remote & On-site available</p>
              </div>
            </div>

            <div className={`bg-emerald-400 border-4 border-black p-8 -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${leftVisible ? 'animate-slide-right animation-delay-800' : ''}`}>
              <h3 className="text-3xl font-black mb-4">CONNECT</h3>
              <a
                href="https://linkedin.com/in/patelkaran0104"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg hover:underline block mb-2"
              >
                LinkedIn: @patelkaran0104
              </a>
              <a
                href="https://github.com/PatelKaran0104"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg hover:underline block"
              >
                GitHub: @PatelKaran0104
              </a>
            </div>
          </div>

          <div ref={rightRef} className={`bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${rightVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <h3 className="text-3xl font-black mb-6">CONTACT FORM</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-black mb-2 text-lg">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-black mb-2 text-lg">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-black mb-2 text-lg">PHONE</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block font-black mb-2 text-lg">I'M INTERESTED IN</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300"
                >
                  <option value="development">Custom Development</option>
                  <option value="integration">Integration Project</option>
                  <option value="implementation">Full Implementation</option>
                </select>
              </div>

              <div>
                <label className="block font-black mb-2 text-lg">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 px-6 border-4 border-black font-bold text-lg hover:bg-rose-400 hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  'SENDING...'
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${cardsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`bg-rose-400 border-4 border-black p-8 rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-rotate-1 transition-all ${cardsVisible ? 'animate-scale-in' : ''}`}>
            <Calendar className="w-12 h-12 mb-4" strokeWidth={3} />
            <h3 className="text-3xl font-black mb-3">SCHEDULE A CALL</h3>
            <p className="font-bold text-lg mb-6">
              Let's discuss your project requirements and explore how I can help
            </p>
            <a href="mailto:khpatel0104@gmail.com" className="block bg-black text-white px-6 py-3 border-4 border-black font-bold hover:bg-white hover:text-black transition-all text-center">
              BOOK A CONSULTATION
            </a>
          </div>

          <div className={`bg-yellow-300 border-4 border-black p-8 -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-all ${cardsVisible ? 'animate-scale-in animation-delay-200' : ''}`}>
            <Briefcase className="w-12 h-12 mb-4" strokeWidth={3} />
            <h3 className="text-3xl font-black mb-3">HIRE FOR PROJECT</h3>
            <p className="font-bold text-lg mb-6">
              Looking for Salesforce expertise? Let's build something amazing together
            </p>
            <a href="https://linkedin.com/in/patelkaran0104" target="_blank" rel="noopener noreferrer" className="block bg-black text-white px-6 py-3 border-4 border-black font-bold hover:bg-white hover:text-black transition-all text-center">
              VIEW LINKEDIN PROFILE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
