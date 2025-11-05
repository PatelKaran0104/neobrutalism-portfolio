import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Briefcase, CheckCircle, XCircle, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

function Contact() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please set up your .env file.');
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Karan Patel',
          submitted_date: new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact directly via email.');
    } finally {
      setIsSubmitting(false);
    }
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
        <div ref={titleRef} className={`text-center mb-16 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block bg-cyan-300 border-4 border-black px-6 py-3 -rotate-1 mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-5xl sm:text-6xl font-black">GET IN TOUCH</h2>
          </div>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Let's discuss your next Salesforce project and bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className={`${info.color} border-4 border-black p-6 ${
                    index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                  } hover:rotate-0 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
                >
                  <Icon className="w-10 h-10 mb-3" strokeWidth={3} />
                  <h3 className="text-2xl font-black mb-2">{info.label}</h3>
                  <p className="text-lg font-bold">{info.value}</p>
                </div>
              );
            })}

            <div className="bg-orange-400 border-4 border-black p-8 rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black mb-4">AVAILABILITY</h3>
              <div className="space-y-2 font-bold text-lg">
                <p>Open to new opportunities</p>
                <p>Contract & Full-time roles</p>
                <p>Remote & On-site available</p>
              </div>
            </div>

            <div className="bg-emerald-400 border-4 border-black p-8 -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black mb-4">CONNECT</h3>
              <a
                href="https://linkedin.com/in/patelkaran0104"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg hover:underline mb-2 flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" strokeWidth={3} />
                LinkedIn: @patelkaran0104
              </a>
              <a
                href="https://github.com/PatelKaran0104"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg hover:underline flex items-center gap-2"
              >
                <Github className="w-5 h-5" strokeWidth={3} />
                GitHub: @PatelKaran0104
              </a>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
            {/* Fun decorative element - Desktop only */}
            <div className="hidden lg:flex absolute -top-8 -right-8 bg-yellow-300 border-4 border-black w-20 h-20 items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-4xl">💬</span>
            </div>
            
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
                  placeholder="+49 1234567890"
                />
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

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-emerald-300 border-4 border-black p-4 flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <p className="font-bold">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-rose-300 border-4 border-black p-4 flex items-start gap-3 animate-fade-in">
                  <XCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div className="font-bold">
                    <p className="mb-2">Failed to send message.</p>
                    {errorMessage && <p className="text-sm">{errorMessage}</p>}
                    <p className="text-sm mt-2">
                      Please email directly at:{' '}
                      <a href="mailto:khpatel0104@gmail.com" className="underline">
                        khpatel0104@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-rose-400 border-4 border-black p-8 rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-rotate-1 transition-all">
            <Calendar className="w-12 h-12 mb-4" strokeWidth={3} />
            <h3 className="text-3xl font-black mb-3">SCHEDULE A CALL</h3>
            <p className="font-bold text-lg mb-6">
              Let's discuss your project requirements and explore how I can help
            </p>
            <a href="mailto:khpatel0104@gmail.com" className="block bg-black text-white px-6 py-3 border-4 border-black font-bold hover:bg-white hover:text-black transition-all text-center">
              BOOK A CONSULTATION
            </a>
          </div>

          <div className="bg-yellow-300 border-4 border-black p-8 -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-all">
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
