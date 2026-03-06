import { courseData } from '@/data/content';
import { Card, Badge } from '@/components/ui/Shared';
import { MessageSquare, AlertTriangle, Info, Heart, Mic2, Type, Music, Target, ShieldAlert, Ban } from 'lucide-react';

export const SectionFour = () => {
  const data = courseData[3].content;

  const getIcon = (func: string) => {
    switch(func) {
        case 'Référentielle': return Info;
        case 'Conative': return AlertTriangle;
        case 'Émotive': return Heart;
        case 'Phatique': return MessageSquare;
        case 'Métalinguistique': return Type;
        case 'Poétique': return Music;
        default: return Info;
    }
  };

  return (
    <div className="space-y-8">
      <p className="text-slate-600 max-w-3xl">{data.intro}</p>

      {/* Objectives */}
      <Card title={data.objectives.title} delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.objectives.items.map((obj: any, i: number) => (
                <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-blue-600 font-bold">
                        <Target size={18} />
                        <h4>{obj.goal}</h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-snug">{obj.desc}</p>
                </div>
            ))}
        </div>
      </Card>

      <div className="text-center max-w-2xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Le Modèle de Roman Jakobson</h2>
        <p className="text-slate-500">
            Analyse de l'ingénierie des campagnes de prévention à travers les 6 fonctions du langage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.jakobson.map((item: any, idx: number) => {
            const Icon = getIcon(item.function);
            return (
                <Card key={idx} delay={idx * 0.1} className="hover:bg-slate-50 transition-colors cursor-default group h-full">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors text-slate-500">
                                <Icon size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{item.function}</h3>
                                <span className="text-xs text-slate-500 uppercase tracking-wider">{item.dimension}</span>
                            </div>
                        </div>
                        
                        <p className="text-sm text-slate-500 mb-4 flex-grow">{item.role}</p>
                        
                        <div className="bg-slate-100 p-3 rounded border-l-2 border-slate-400 text-xs italic text-slate-600 mt-auto">
                            "{item.example}"
                        </div>
                    </div>
                </Card>
            );
        })}
      </div>

      <Card title="Les Limites Intrinsèques de la Communication" delay={0.5} className="border-red-200 bg-red-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-600 font-bold">
                    <Ban size={18} />
                    <h4>Écueils Structurels</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{data.limits.structural}</p>
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-orange-600 font-bold">
                    <ShieldAlert size={18} />
                    <h4>Simplification</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{data.limits.simplification}</p>
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-600 font-bold">
                    <AlertTriangle size={18} />
                    <h4>Stigmatisation</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{data.limits.stigma}</p>
            </div>
        </div>
        <div className="mt-6 pt-4 border-t border-red-200 text-center">
            <p className="text-sm text-slate-500 italic">
                "L'usager doit être appréhendé comme un sujet autonome, doté de compétences psycho-sociales." — MILDECA
            </p>
        </div>
      </Card>
    </div>
  );
};
