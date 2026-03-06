import { useState } from 'react';
import { courseData } from '@/data/content';
import { Card, Badge } from '@/components/ui/Shared';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Heart, Wind, Pill, CheckCircle, AlertCircle, Activity, ArrowRight, Zap, Skull, ShieldCheck, Footprints, Eye, Thermometer, BrainCircuit, AlertTriangle } from 'lucide-react';

export const SectionThree = () => {
  const data = courseData[2].content;
  const [activeTab, setActiveTab] = useState<'opioids' | 'stimulants' | 'serotonergic'>('opioids');

  const steps = [
    { icon: Phone, title: data.actions[0].title, desc: data.actions[0].action },
    { icon: Heart, title: data.actions[1].title, desc: data.actions[1].action },
    { icon: Pill, title: data.actions[2].title, desc: data.actions[2].action, note: data.actions[2].note },
    { icon: CheckCircle, title: data.actions[3].title, desc: data.actions[3].action }
  ];

  const [step, setStep] = useState(0);

  const getOpioidIcon = (index: number) => {
    switch(index) {
        case 0: return <AlertCircle size={18} />; // Conscience
        case 1: return <Footprints size={18} />; // Motricité
        case 2: return <Wind size={18} />; // Respiration
        case 3: return <Thermometer size={18} />; // Physique (Froideur)
        default: return <Activity size={18} />;
    }
  };

  return (
    <div className="space-y-8">
      <p className="text-slate-600 max-w-3xl">{data.intro}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Symptoms Comparison */}
        <Card title="Tableaux Cliniques (Diagnostic Différentiel)" delay={0.1}>
            <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-lg overflow-x-auto">
                <button 
                    onClick={() => setActiveTab('opioids')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'opioids' ? 'bg-blue-600 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                >
                    Opioïdes (Triade)
                </button>
                <button 
                    onClick={() => setActiveTab('stimulants')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'stimulants' ? 'bg-orange-600 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                >
                    Stimulants
                </button>
                <button 
                    onClick={() => setActiveTab('serotonergic')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'serotonergic' ? 'bg-purple-600 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                >
                    Sérotoninergique
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                >
                    {activeTab === 'opioids' ? (
                        <div className="space-y-3">
                            {data.symptoms.opioids.signs.map((sign: any, i: number) => (
                                <div key={i} className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex gap-3">
                                    <div className="bg-blue-100 p-2 rounded-full h-fit text-blue-600 shrink-0">
                                        {getOpioidIcon(i)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-800 text-sm">{sign.name}</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">{sign.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : activeTab === 'stimulants' ? (
                        <div className="space-y-3">
                            {data.symptoms.stimulants.signs.map((sign: any, i: number) => (
                                <div key={i} className="bg-orange-50 border border-orange-200 p-3 rounded-lg flex gap-3">
                                    <div className="bg-orange-100 p-2 rounded-full h-fit text-orange-600 shrink-0">
                                        {i === 0 ? <Thermometer size={18} /> : 
                                         i === 1 ? <Heart size={18} /> : 
                                         i === 2 ? <Eye size={18} /> : 
                                         <BrainCircuit size={18} />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-orange-800 text-sm">{sign.name}</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">{sign.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {data.symptoms.serotonergic && data.symptoms.serotonergic.signs.map((sign: any, i: number) => (
                                <div key={i} className="bg-purple-50 border border-purple-200 p-3 rounded-lg flex gap-3">
                                    <div className="bg-purple-100 p-2 rounded-full h-fit text-purple-600 shrink-0">
                                        {i === 0 ? <BrainCircuit size={18} /> : i === 1 ? <Thermometer size={18} /> : <Zap size={18} />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-purple-800 text-sm">{sign.name}</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">{sign.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </Card>

        {/* Chain of Survival */}
        <Card title="Chaîne de Survie" delay={0.2} className="flex flex-col">
            {/* Critical Warning */}
            {data.criticalWarning && (
                <div className="mb-6 mx-4 p-3 bg-red-100 border border-red-200 rounded-lg flex items-center gap-3 animate-pulse">
                    <AlertCircle className="text-red-600 shrink-0" size={24} />
                    <p className="text-sm font-bold text-red-700">{data.criticalWarning}</p>
                </div>
            )}

            <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6 max-w-sm w-full"
                    >
                        <div className="mx-auto w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-emerald-600 relative">
                            {(() => {
                                const Icon = steps[step].icon;
                                return <Icon size={40} />;
                            })()}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white border-4 border-white">
                                {step + 1}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{steps[step].title}</h3>
                            <p className="text-slate-700 text-lg font-medium leading-relaxed mb-4">{steps[step].desc}</p>
                            
                            {/* Detailed Steps */}
                            {data.actions[step].details && (
                                <div className="bg-slate-50 rounded-lg p-3 text-left space-y-2 border border-slate-100">
                                    {data.actions[step].details.map((detail: string, i: number) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                            <CheckCircle size={14} className="mt-1 text-emerald-500 shrink-0" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {steps[step].note && (
                                <div className="mt-4 p-2 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-700 flex items-center gap-2 justify-center">
                                    <ShieldCheck size={14} />
                                    {steps[step].note}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-200">
                <button 
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="px-4 py-2 rounded hover:bg-slate-100 disabled:opacity-30 text-sm text-slate-600"
                >
                    Précédent
                </button>
                <div className="flex gap-2">
                    {steps.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === step ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                    ))}
                </div>
                <button 
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    disabled={step === steps.length - 1}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm disabled:opacity-50 disabled:bg-slate-300"
                >
                    Suivant
                </button>
            </div>
        </Card>
      </div>

      {/* Naloxone Pharmacology */}
      <Card title="Pharmacologie : Naloxone" delay={0.3} className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
                <div>
                    <h4 className="text-lg font-bold text-blue-800 mb-1">{data.treatment.type}</h4>
                    <p className="text-slate-600 text-sm">{data.treatment.mechanism}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-3 rounded border border-emerald-200">
                        <div className="text-emerald-700 font-bold text-xs uppercase mb-1 flex items-center gap-2">
                            <ShieldCheck size={14} /> Sécurité
                        </div>
                        <p className="text-xs text-slate-600">{data.treatment.safety}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                        <div className="text-red-700 font-bold text-xs uppercase mb-1 flex items-center gap-2">
                            <AlertCircle size={14} /> Limite Critique
                        </div>
                        <p className="text-xs text-slate-600">{data.treatment.limit}</p>
                    </div>
                </div>
                
                {data.treatment.warning && (
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded text-xs text-orange-800 font-bold flex items-center gap-2">
                        <AlertTriangle size={16} className="shrink-0" />
                        {data.treatment.warning}
                    </div>
                )}
            </div>

            <div className="w-full md:w-1/3 bg-white rounded-lg p-4 text-center shadow-sm border border-slate-200">
                <div className="text-xs text-slate-500 mb-4 uppercase tracking-widest">Antagonisme Compétitif</div>
                <div className="relative h-24 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col items-center gap-1 opacity-50">
                            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white">Opioïde</div>
                            <span className="text-[10px] text-slate-500">Fixé</span>
                        </div>
                        <ArrowRight className="text-slate-400" size={20} />
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)] border-2 border-white">Naloxone</div>
                            <span className="text-[10px] text-blue-600 font-bold">Déloge & Remplace</span>
                        </div>
                        <ArrowRight className="text-slate-400" size={20} />
                        <div className="flex flex-col items-center gap-1 opacity-50">
                            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white">Opioïde</div>
                            <span className="text-[10px] text-slate-500">Éjecté</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Card>

      {/* Don'ts List */}
      {data.donts && (
        <Card title="Gestes à Éviter (A NE PAS FAIRE)" delay={0.4} className="border-red-200 bg-red-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.donts.map((dont: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded border border-red-100 shadow-sm">
                        <div className="p-2 bg-red-100 rounded-full text-red-600 shrink-0">
                            <Skull size={16} />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">{dont}</span>
                    </div>
                ))}
            </div>
        </Card>
      )}
    </div>
  );
};
