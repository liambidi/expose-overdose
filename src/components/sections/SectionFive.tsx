import { courseData } from '@/data/content';
import { Card, Badge } from '@/components/ui/Shared';
import { Users, Scale, Newspaper, Mic2, Globe, Syringe, Building2, HeartPulse, AlertOctagon } from 'lucide-react';

export const SectionFive = () => {
  const data = courseData[4].content;

  return (
    <div className="space-y-8">
      <p className="text-slate-600 max-w-3xl">{data.intro}</p>

      {/* Inequalities & Repression */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Inégalités & Précarité" delay={0.1} className="border-red-200 bg-red-50">
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {data.inequalities.determinants.map((det: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs border-red-200 text-red-700 bg-white">{det}</Badge>
                    ))}
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-red-500 text-sm text-slate-600 shadow-sm">
                    <p className="font-bold text-red-600 mb-1 flex items-center gap-2"><AlertOctagon size={14}/> Exemple : Scènes Ouvertes</p>
                    {data.inequalities.example}
                </div>
                <p className="text-sm text-slate-500 italic border-t border-red-200 pt-2">
                    {data.inequalities.repression}
                </p>
            </div>
        </Card>

        {/* Public Health Policies */}
        <Card title="La Réponse : Réduction des Risques (RDRD)" delay={0.2} className="border-emerald-200 bg-emerald-50">
            <div className="space-y-4">
                <p className="text-sm text-emerald-700 font-medium">{data.publicHealth.principle}</p>
                <div className="space-y-2">
                    {data.publicHealth.structures.map((struct: any, i: number) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-2 rounded border border-emerald-100 shadow-sm">
                            <div className="p-1.5 bg-emerald-100 rounded text-emerald-600 mt-0.5">
                                {i === 0 ? <Syringe size={14} /> : i === 1 ? <HeartPulse size={14} /> : <Building2 size={14} />}
                            </div>
                            <div>
                                <span className="font-bold text-slate-900 text-sm">{struct.name}</span>
                                <p className="text-xs text-slate-500">{struct.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
      </div>

      {/* Sociology Spotlight */}
      <Card className="bg-gradient-to-br from-indigo-50 to-slate-50 border-indigo-200">
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-2">
                    <Users size={20} />
                    <span className="uppercase tracking-widest text-xs font-bold">Sociologie de la Déviance</span>
                </div>
                <h2 className="text-2xl font-serif text-slate-900">{data.sociology.ref}</h2>
                <h3 className="text-lg text-indigo-700">{data.sociology.concept}</h3>
                <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-indigo-500 pl-4">
                    {data.sociology.mechanism}
                </p>
                <div className="text-sm text-slate-600 bg-white p-3 rounded border border-indigo-100 shadow-sm">
                    <strong>Impact :</strong> {data.sociology.impact}
                </div>
            </div>
            <div className="hidden md:flex w-1/3 aspect-square bg-white rounded-full items-center justify-center border border-indigo-100 relative overflow-hidden shrink-0 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 text-[8rem] font-serif select-none text-indigo-900">?</div>
                <div className="text-center p-6 relative z-10">
                    <div className="font-bold text-indigo-900 mb-2">L'Étiquette</div>
                    <div className="text-xs text-slate-500">Stigmate social qui enferme l'individu dans une "carrière" de déviant.</div>
                </div>
            </div>
        </div>
      </Card>

      {/* Discourses Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-sm">
                    <th className="p-3 font-medium">Dimension</th>
                    <th className="p-3 font-medium text-blue-600"><Mic2 size={16} className="inline mr-2"/>Politique & Pénal</th>
                    <th className="p-3 font-medium text-orange-600"><Newspaper size={16} className="inline mr-2"/>Médiatique</th>
                    <th className="p-3 font-medium text-emerald-600"><Scale size={16} className="inline mr-2"/>Médical & Sanitaire</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 text-slate-700 font-medium">Figure de l'usager</td>
                    <td className="p-3 text-slate-600">{data.discourses[0].figure}</td>
                    <td className="p-3 text-slate-600">{data.discourses[1].figure}</td>
                    <td className="p-3 text-slate-600">{data.discourses[2].figure}</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 text-slate-700 font-medium">Objectifs</td>
                    <td className="p-3 text-slate-600">{data.discourses[0].goal}</td>
                    <td className="p-3 text-slate-600">{data.discourses[1].goal}</td>
                    <td className="p-3 text-slate-600">{data.discourses[2].goal}</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 text-slate-700 font-medium">Sémantique</td>
                    <td className="p-3 text-slate-600 italic">"{data.discourses[0].semantics}"</td>
                    <td className="p-3 text-slate-600 italic">"{data.discourses[1].semantics}"</td>
                    <td className="p-3 text-slate-600 italic">"{data.discourses[2].semantics}"</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};
