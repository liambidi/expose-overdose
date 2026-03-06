import { useState } from 'react';
import { courseData } from '@/data/content';
import { Card, Badge } from '@/components/ui/Shared';
import { motion } from 'motion/react';
import { TrendingUp, Activity, Zap, Wind, AlertOctagon, Skull, Pill, Cigarette, Syringe, ArrowDownCircle, Thermometer, BrainCircuit, Users, Scale, AlertTriangle } from 'lucide-react';

export const SectionTwo = () => {
  const data = courseData[1].content;
  const [selectedMechanism, setSelectedMechanism] = useState<number | null>(null);

  const getFamilyIcon = (name: string) => {
    if (name.includes("Dépresseurs")) return ArrowDownCircle;
    if (name.includes("Sérotoninergiques")) return Thermometer;
    return Zap;
  };

  return (
    <div className="space-y-8">
      <p className="text-slate-600 max-w-3xl">{data.intro}</p>

      {/* Detailed Substance Families */}
      <div className="grid grid-cols-1 gap-6">
        {data.substanceFamilies && data.substanceFamilies.map((family: any, idx: number) => {
            const Icon = getFamilyIcon(family.name);
            return (
              <Card key={idx} delay={idx * 0.1} className={`h-full border-l-4 ${
                  idx === 0 ? 'border-l-blue-500' : idx === 1 ? 'border-l-orange-500' : 'border-l-purple-500'
              }`}>
                <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full shrink-0 ${
                        idx === 0 ? 'bg-blue-50 text-blue-600' : idx === 1 ? 'bg-orange-50 text-orange-600' : 'bg-purple-50 text-purple-600'
                    }`}>
                        <Icon size={24} />
                    </div>
                    <div className="space-y-3 w-full">
                        <div>
                            <h4 className="font-bold text-lg text-slate-900">{family.name}</h4>
                            <p className="text-sm text-slate-500 italic">{family.desc}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {family.items.map((item: any, i: number) => (
                                <div key={i} className="bg-slate-50 p-2 rounded border border-slate-100">
                                    <span className="font-bold text-slate-700 text-sm block">{item.name}</span>
                                    <span className="text-xs text-slate-500">{item.details}</span>
                                </div>
                            ))}
                        </div>

                        <div className={`p-3 rounded text-sm mt-2 flex items-start gap-2 ${
                            idx === 0 ? 'bg-blue-50 text-blue-800' : idx === 1 ? 'bg-orange-50 text-orange-800' : 'bg-purple-50 text-purple-800'
                        }`}>
                            <Skull size={16} className="mt-0.5 shrink-0" />
                            <span><strong>Risques :</strong> {family.risk}</span>
                        </div>
                    </div>
                </div>
              </Card>
            );
        })}
      </div>

      {/* Nitrous Oxide Focus */}
      {data.nitrousOxide && (
        <Card title={data.nitrousOxide.title} delay={0.4} className="border-l-4 border-l-cyan-400">
            <div className="space-y-4">
                <p className="text-slate-600 text-sm">{data.nitrousOxide.properties}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-3 rounded border border-cyan-100">
                        <h5 className="font-bold text-cyan-800 text-xs uppercase mb-2 flex items-center gap-2">
                            <Users size={14} /> Démographie
                        </h5>
                        <ul className="text-xs text-cyan-700 space-y-1">
                            <li>• Age moyen : {data.nitrousOxide.demographics.averageAge}</li>
                            <li>• {data.nitrousOxide.demographics.peak}</li>
                            <li>• {data.nitrousOxide.demographics.gender}</li>
                        </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded border border-slate-200">
                        <h5 className="font-bold text-slate-700 text-xs uppercase mb-2 flex items-center gap-2">
                            <Scale size={14} /> Contexte & Loi
                        </h5>
                        <p className="text-xs text-slate-600 mb-2">{data.nitrousOxide.context.regulation}</p>
                        <div className="flex items-start gap-2 text-xs text-orange-600 bg-orange-50 p-1.5 rounded">
                            <AlertTriangle size={12} className="mt-0.5 shrink-0" />
                            <span>{data.nitrousOxide.context.issue}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-2">Risques & Complications Graves</h5>
                    <div className="flex flex-wrap gap-2">
                        {data.nitrousOxide.risks.map((risk: string, i: number) => (
                            <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-100">
                                {risk}
                            </Badge>
                        ))}
                    </div>
                </div>
                
                <p className="text-xs text-slate-500 italic border-t border-slate-100 pt-2">
                    <TrendingUp size={12} className="inline mr-1" />
                    {data.nitrousOxide.trend}
                </p>
            </div>
        </Card>
      )}

      {/* Interactive Mechanisms */}
      <Card title="Mécanismes Biologiques" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.mechanisms.map((mech: any, i: number) => (
                  <div key={i} className={`p-4 rounded-lg border h-full ${
                      i === 0 ? 'bg-blue-50 border-blue-100' : 
                      i === 1 ? 'bg-orange-50 border-orange-100' : 
                      'bg-purple-50 border-purple-100'
                  }`}>
                      <div className="flex items-center gap-2 mb-3">
                          {i === 0 ? <Wind className="text-blue-600" size={20}/> : 
                           i === 1 ? <Zap className="text-orange-600" size={20}/> : 
                           <Skull className="text-purple-600" size={20}/>}
                          <h4 className={`font-bold text-sm ${
                              i === 0 ? 'text-blue-800' : 
                              i === 1 ? 'text-orange-800' : 
                              'text-purple-800'
                          }`}>{mech.type}</h4>
                      </div>
                      <p className="text-xs font-semibold mb-2 opacity-80 text-slate-700">{mech.desc}</p>
                      <p className="text-xs leading-relaxed text-slate-600">{mech.details}</p>
                  </div>
              ))}
          </div>
      </Card>

      {/* Opioid Crisis */}
      <Card title={data.crisis.title} delay={0.4} className="flex flex-col">
          <div className="space-y-6 flex-1">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                    <AlertOctagon size={20} />
                    Fentanyl
                </div>
                <p className="text-sm text-slate-700 mb-2">{data.crisis.fentanyl.desc}</p>
                <p className="text-xs text-slate-500 italic">{data.crisis.fentanyl.mechanism}</p>
            </div>

            <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Statistiques (USA)</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-600">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-100">
                            <tr>
                                <th className="px-2 py-2">Année</th>
                                <th className="px-2 py-2">Décès (Total)</th>
                                <th className="px-2 py-2">Opioïdes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.crisis.stats.map((stat: any, i: number) => (
                                <tr key={i} className="border-b border-slate-200 hover:bg-slate-50">
                                    <td className="px-2 py-2 font-bold text-slate-900">{stat.year}</td>
                                    <td className="px-2 py-2">{stat.total}</td>
                                    <td className="px-2 py-2 text-red-600">{stat.opioids}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* France Stats 2023 */}
            {data.crisis.franceStats && (
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg mt-4 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <div className="flex items-center gap-2 text-blue-700 font-bold text-sm uppercase tracking-wide">
                            <Activity size={16} />
                            Focus France (2023)
                        </div>
                        <span className="text-[10px] text-slate-400 italic">{data.crisis.franceStats.source}</span>
                    </div>

                    {/* General Stats */}
                    {data.crisis.franceStats.general && (
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-white p-3 rounded border border-slate-200 text-center">
                                <span className="block text-2xl font-bold text-slate-900">{data.crisis.franceStats.general.deaths}</span>
                                <span className="text-[10px] text-slate-500 leading-tight block">{data.crisis.franceStats.general.desc}</span>
                            </div>
                            <div className="bg-red-50 p-3 rounded border border-red-100 text-center">
                                <span className="block text-2xl font-bold text-red-600">{data.crisis.franceStats.general.risk}</span>
                                <span className="text-[10px] text-red-400 leading-tight block">{data.crisis.franceStats.general.riskDesc}</span>
                            </div>
                        </div>
                    )}

                    {/* Painkillers Focus */}
                    {data.crisis.franceStats.painkillersFocus && (
                        <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg mb-4 space-y-3">
                            <div className="flex items-center gap-2 text-indigo-800 font-bold text-xs uppercase">
                                <Pill size={14} /> {data.crisis.franceStats.painkillersFocus.title}
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {data.crisis.franceStats.painkillersFocus.stats.map((stat: any, i: number) => (
                                    <div key={i} className="bg-white p-2 rounded border border-indigo-100">
                                        <span className="block text-lg font-bold text-indigo-600">{stat.value}</span>
                                        <span className="text-[10px] text-slate-500 leading-tight block">{stat.desc}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-xs text-indigo-900 space-y-1">
                                <p><strong>Contexte :</strong> {data.crisis.franceStats.painkillersFocus.context}</p>
                                <p><strong>Risques :</strong> {data.crisis.franceStats.painkillersFocus.risks}</p>
                                <p className="text-indigo-700 italic border-t border-indigo-100 pt-1 mt-1">
                                    <AlertTriangle size={10} className="inline mr-1" />
                                    {data.crisis.franceStats.painkillersFocus.molecules}
                                </p>
                                <p className="text-[10px] text-slate-500 mt-1">{data.crisis.franceStats.painkillersFocus.note}</p>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* DTA Column */}
                        <div className="space-y-3">
                            <div>
                                <h5 className="font-bold text-slate-800 text-xs">{data.crisis.franceStats.dta.title}</h5>
                                <p className="text-[10px] text-slate-500">{data.crisis.franceStats.dta.subtitle}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    <Badge variant="outline" className="text-[10px] bg-white">{data.crisis.franceStats.dta.profile}</Badge>
                                    {data.crisis.franceStats.dta.details && data.crisis.franceStats.dta.details.map((d: string, i: number) => (
                                        <Badge key={i} variant="outline" className="text-[10px] bg-slate-50 text-slate-600 border-slate-200">{d}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                {data.crisis.franceStats.dta.data.map((item: any, i: number) => (
                                    <div key={i} className="flex justify-between items-center bg-white p-2 rounded border border-slate-100 shadow-sm">
                                        <div>
                                            <span className="block text-xs font-bold text-slate-700">{item.label}</span>
                                            <span className="text-[10px] text-slate-500">{item.desc}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-sm font-bold text-blue-600">{item.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {data.crisis.franceStats.dta.notes && (
                                <p className="text-[10px] text-slate-500 italic bg-slate-50 p-1.5 rounded border border-slate-100">
                                    {data.crisis.franceStats.dta.notes}
                                </p>
                            )}
                        </div>

                        {/* DRAMES Column */}
                        <div className="space-y-3">
                            <div>
                                <h5 className="font-bold text-slate-800 text-xs">{data.crisis.franceStats.drames.title}</h5>
                                <p className="text-[10px] text-slate-500">{data.crisis.franceStats.drames.subtitle}</p>
                                <Badge variant="outline" className="mt-1 text-[10px] bg-white">{data.crisis.franceStats.drames.profile}</Badge>
                            </div>
                            <div className="space-y-2">
                                {data.crisis.franceStats.drames.data.map((item: any, i: number) => (
                                    <div key={i} className="flex justify-between items-center bg-white p-2 rounded border border-slate-100 shadow-sm">
                                        <div>
                                            <span className="block text-xs font-bold text-slate-700">{item.label}</span>
                                            <span className="text-[10px] text-slate-500">{item.desc}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-sm font-bold text-red-600">{item.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Emerging & Poly */}
                    <div className="bg-white p-3 rounded border border-slate-200 text-xs space-y-2">
                        <div>
                            <span className="font-bold text-slate-700 block mb-1">Substances Émergentes & Tendances :</span>
                            <div className="flex flex-wrap gap-2">
                                {data.crisis.franceStats.drames.emerging.map((em: string, i: number) => (
                                    <Badge key={i} variant="outline" className="bg-orange-50 text-orange-700 border-orange-100">{em}</Badge>
                                ))}
                            </div>
                        </div>
                        <div className="pt-2 border-t border-slate-100">
                            <span className="font-bold text-slate-700">Polyconsommation : </span>
                            <span className="text-slate-600">{data.crisis.franceStats.drames.poly}</span>
                        </div>
                    </div>
                    
                    {data.crisis.franceStats.limitations && (
                        <div className="bg-yellow-50 p-3 rounded border border-yellow-200 text-xs text-yellow-800 flex items-start gap-2">
                            <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                            <p>{data.crisis.franceStats.limitations}</p>
                        </div>
                    )}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-500 mt-4 pt-4 border-t border-slate-200">
                <div>
                    <strong className="text-slate-700 block mb-1">Disparités USA</strong>
                    {data.crisis.geography}
                </div>
                <div>
                    <strong className="text-slate-700 block mb-1">Contexte Europe</strong>
                    {data.crisis.europe}
                </div>
            </div>
          </div>
        </Card>
    </div>
  );
};
