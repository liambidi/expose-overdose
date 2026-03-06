import React, { useState } from 'react';
import { courseData } from '@/data/content';
import { SectionOne } from '@/components/sections/SectionOne';
import { SectionTwo } from '@/components/sections/SectionTwo';
import { SectionThree } from '@/components/sections/SectionThree';
import { SectionFour } from '@/components/sections/SectionFour';
import { SectionFive } from '@/components/sections/SectionFive';
import { SectionSix } from '@/components/sections/SectionSix';
import { SectionSeven } from '@/components/sections/SectionSeven';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven
  ];

  const ActiveComponent = sections[activeTab];

  // Scroll to top when tab changes
  const mainRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="font-bold text-xl tracking-tight">Overdose<span className="text-blue-600">.Edu</span></div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-6 border-b border-slate-100 hidden lg:block">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Overdose<span className="text-blue-600">.Edu</span></h1>
            <p className="text-xs text-slate-500 mt-2">Pratiques écrites et orales de la communication</p>
          </div>

          <nav className="p-4 pt-20 lg:pt-4 space-y-2 overflow-y-auto h-full lg:h-[calc(100vh-100px)]">
            {courseData.map((section, idx) => {
              const Icon = section.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveTab(idx);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 group flex items-start gap-3
                    ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}
                  `}
                >
                  <Icon size={20} className={`mt-0.5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <div>
                    <div className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-slate-700'}`}>{section.title}</div>
                    <div className={`text-xs mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>{section.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main ref={mainRef} className="flex-1 overflow-y-auto relative scroll-smooth">
          <div className="max-w-5xl mx-auto p-6 lg:p-12 pb-24">
            {/* Header for current section */}
            <motion.div 
              key={`header-${activeTab}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4 border border-blue-100">
                Section {activeTab + 1} / {courseData.length}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                {courseData[activeTab].title}
              </h2>
              <p className="text-xl text-slate-500 font-light border-l-2 border-blue-500 pl-4">
                {courseData[activeTab].subtitle}
              </p>
            </motion.div>

            {/* Content Component */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="fixed bottom-0 left-0 lg:left-72 right-0 p-4 bg-white/80 backdrop-blur border-t border-slate-200 flex justify-between items-center z-30">
            <button 
              onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
              disabled={activeTab === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft size={16} />
              Précédent
            </button>
            
            <div className="hidden sm:block text-xs text-slate-400 font-mono">
              {activeTab + 1} / {courseData.length}
            </div>

            <button 
              onClick={() => setActiveTab(Math.min(courseData.length - 1, activeTab + 1))}
              disabled={activeTab === courseData.length - 1}
              className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-slate-900"
            >
              Suivant
              <ChevronRight size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
