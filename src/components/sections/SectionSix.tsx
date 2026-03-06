import { courseData } from '@/data/content';
import { Card, Badge } from '@/components/ui/Shared';
import { BrainCircuit, RefreshCw, Dna, HeartHandshake, Users, Zap, AlertTriangle, Activity, Skull } from 'lucide-react';

export const SectionSix = () => {
  const data = courseData[5].content;

  return (
    <div className="space-y-8">
      <p className="text-slate-600 max-w-3xl">{data.intro}</p>

      {/* Mechanisms: Bio vs Psycho */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.mechanisms.map((mech: any, i: number) => (
            <Card key={i} delay={i * 0.1} className={`border-l-4 ${i === 0 ? 'border-l-pink-500' : 'border-l-purple-500'}`}>
                <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${i === 0 ? 'bg-pink-100 text-pink-600' : 'bg-purple-100 text-purple-600'}`}>
                        {i === 0 ? <Dna size={24} /> : <BrainCircuit size={24} />}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{mech.title}</h3>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">{mech.subtitle}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{mech.desc}</p>
                    </div>
                </div>
            </Card>
        ))}
      </div>

      {/* Withdrawal */}
      <Card title="Le Sevrage : Une Clinique de la Souffrance" delay={0.3} className="border-orange-200 bg-orange-50">
        <div className="space-y-6">
            <p className="text-slate-600 italic text-sm border-l-2 border-orange-500 pl-3">
                "{data.withdrawal.definition}"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Opioids */}
                <div className="bg-white p-4 rounded-lg border border-orange-100 shadow-sm">
                    <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                        <AlertTriangle size={18} />
                        <h4>{data.withdrawal.opioids.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{data.withdrawal.opioids.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {data.withdrawal.opioids.symptoms.map((sym: string, i: number) => (
                            <Badge key={i} variant="outline" className="text-xs border-orange-200 text-orange-700 bg-orange-50">
                                {sym}
                            </Badge>
                        ))}
                    </div>
                    <div className="text-xs text-slate-500 italic border-t border-slate-100 pt-2">
                        <strong>Risque :</strong> {data.withdrawal.opioids.risk}
                    </div>
                </div>

                {/* Alcohol/Benzos - New */}
                {data.withdrawal.alcoholBenzos && (
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 shadow-sm">
                        <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                            <Skull size={18} />
                            <h4>{data.withdrawal.alcoholBenzos.title}</h4>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{data.withdrawal.alcoholBenzos.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {data.withdrawal.alcoholBenzos.symptoms.map((sym: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs border-red-200 text-red-700 bg-white">
                                    {sym}
                                </Badge>
                            ))}
                        </div>
                        <div className="text-xs text-red-700 font-bold border-t border-red-200 pt-2">
                            <strong>Risque :</strong> {data.withdrawal.alcoholBenzos.risk}
                        </div>
                    </div>
                )}
            </div>
        </div>
      </Card>

      {/* Biopsychosocial Model */}
      <Card title="Le Modèle Bio-Psycho-Social" delay={0.4}>
        <p className="text-slate-600 mb-6">{data.biopsychosocial.intro}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.biopsychosocial.spheres.map((sphere: any, i: number) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center text-center hover:bg-slate-100 transition-colors">
                    <div className={`mb-3 p-3 rounded-full bg-opacity-20 ${
                        i === 0 ? 'bg-pink-100 text-pink-600' : 
                        i === 1 ? 'bg-purple-100 text-purple-600' : 
                        'bg-cyan-100 text-cyan-600'
                    }`}>
                        {i === 0 ? <Activity size={20} /> : i === 1 ? <HeartHandshake size={20} /> : <Users size={20} />}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{sphere.title}</h4>
                    <p className="text-xs text-slate-500 leading-snug">{sphere.details}</p>
                </div>
            ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 text-center">
            <p className="text-sm text-emerald-600 font-medium">
                <Zap size={14} className="inline mr-2" />
                {data.biopsychosocial.conclusion}
            </p>
        </div>
      </Card>
    </div>
  );
};
