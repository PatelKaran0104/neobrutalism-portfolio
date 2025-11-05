import { Github, Linkedin, Mail, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-8 border-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="bg-emerald-400 border-4 border-white text-black px-4 py-2 inline-block rotate-2 mb-4">
              <h3 className="text-2xl font-black">KARAN PATEL</h3>
            </div>
            <p className="font-bold text-white mb-4">
              Salesforce Developer specializing in enterprise solutions and custom development.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/PatelKaran0104"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-3 border-2 border-white hover:bg-cyan-300 transition-all"
              >
                <Github className="w-6 h-6" strokeWidth={3} />
              </a>
              <a
                href="https://linkedin.com/in/patelkaran0104"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-3 border-2 border-white hover:bg-cyan-300 transition-all"
              >
                <Linkedin className="w-6 h-6" strokeWidth={3} />
              </a>
              <a
                href="mailto:khpatel0104@gmail.com"
                className="bg-white text-black p-3 border-2 border-white hover:bg-cyan-300 transition-all"
              >
                <Mail className="w-6 h-6" strokeWidth={3} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-black mb-4 bg-yellow-300 text-black px-3 py-1 inline-block border-2 border-white -rotate-1">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 font-bold">
              <li>
                <a href="#services" className="hover:text-yellow-300 transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-300 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-yellow-300 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-black mb-4 bg-rose-400 text-black px-3 py-1 inline-block border-2 border-white rotate-1">
              SERVICES
            </h4>
            <ul className="space-y-2 font-bold">
              <li>Custom Development</li>
              <li>Sales & Service Cloud</li>
              <li>API Integration</li>
              <li>Process Automation</li>
              <li>AppExchange Apps</li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-white pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="font-bold text-center md:text-left">
              {currentYear} Karan Patel. Built with{' '}
              <Heart className="inline w-5 h-5 text-rose-400 fill-rose-400" /> and code
            </p>
          </div>   
          <div className="mt-6 text-center">
            <p className="font-bold text-sm">
              Designed with Neobrutalism aesthetics to showcase modern web development and design principles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
