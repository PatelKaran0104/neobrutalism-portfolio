import { Cloud, Code, Database } from 'lucide-react';

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Profile Image - Mobile */}
            <div className="lg:hidden flex justify-center mb-8 mt-8">
              <div className="relative">
                <div className="w-48 h-48 border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3 overflow-hidden bg-gradient-to-br from-cyan-200 to-yellow-200">
                  <img 
                    src="/karan.JPG" 
                    alt="Karan Patel - Salesforce Developer"
                    className="w-full h-full object-contain object-center"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-300 border-4 border-black px-4 py-2 rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-black text-sm">AVAILABLE</span>
                </div>
              </div>
            </div>

            <div className="inline-block bg-cyan-300 border-4 border-black px-4 py-2 rotate-2">
              <p className="font-bold text-sm tracking-wider">SALESFORCE DEVELOPER</p>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
              <span className="inline-block bg-white border-6 border-black px-4 py-2 -rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                KARAN
              </span>
              <br />
              <span className="inline-block bg-emerald-400 border-6 border-black px-4 py-2 rotate-1 mt-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                PATEL
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Building <span className="bg-yellow-300 px-2">SCALABLE</span> enterprise{' '}
              <span className="bg-rose-400 px-2">SOLUTIONS</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-black text-white px-8 py-4 border-4 border-black font-bold text-lg hover:bg-rose-500 hover:border-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px]">
                HIRE ME
              </a>
              <a href="#portfolio" className="bg-white px-8 py-4 border-4 border-black font-bold text-lg hover:bg-cyan-300 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px]">
                VIEW WORK
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {/* Profile Image - Desktop */}
            <div className="hidden lg:block mb-6">
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] -rotate-2 overflow-hidden bg-gradient-to-br from-cyan-200 to-yellow-200">
                  <img 
                    src="/karan.JPG" 
                    alt="Karan Patel - Salesforce Developer"
                    className="w-full h-full object-contain object-center"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-yellow-300 border-4 border-black px-6 py-3 rotate-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-black text-lg">AVAILABLE FOR HIRE</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-400 border-4 border-black p-6 rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Cloud className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-black mb-2">SALES & SERVICE CLOUD</h3>
              <p className="font-bold">Expert in Sales Cloud & Service Cloud implementations</p>
            </div>

            <div className="bg-yellow-300 border-4 border-black p-6 -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Code className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-black mb-2">CUSTOM DEVELOPMENT</h3>
              <p className="font-bold">LWC, Apex, Visualforce & integrations</p>
            </div>

            <div className="bg-cyan-300 border-4 border-black p-6 rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Database className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-black mb-2">2+ YEARS</h3>
              <p className="font-bold">Enterprise solutions & process automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
