import { useState } from 'react';
import { motion } from 'motion/react';
import { courseData } from '@/data/content';
import { Card, Badge } from '@/components/ui/Shared';
import { FlaskConical, Skull, Scale, ArrowRight, Activity } from 'lucide-react';

export const SectionOne = () => {
  const data = courseData[0].content;
  const [dose, setDose] = useState(1);

  const getDoseStatus = (val: number) => {
    if (val < 40) return { text: "Thérapeutique", color: "text-emerald-600", desc: "Effet bénéfique, soigne." };
    if (val < 75) return { text: "Toxique", color: "text-orange-500", desc: "Effets secondaires, danger." };
    return { text: "Létale (Overdose)", color: "text-red-600", desc: "Dépasse le seuil de tolérance. Danger de mort." };
  };

  const status = getDoseStatus(dose);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Definition */}
        <Card title={data.scientific.title} delay={0.1}>
          <p className="text-base text-slate-600 mb-4 leading-relaxed">{data.scientific.text}</p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 italic text-slate-700 mb-4">
            <p className="text-xl font-serif mb-2">{data.scientific.quote}</p>
            <p className="text-sm text-slate-500">— {data.scientific.author}</p>
          </div>
          {data.scientific.context && (
             <p className="text-sm text-slate-500 mb-4 italic border-b border-slate-200 pb-4">
               {data.scientific.context}
             </p>
          )}
          <div className="mt-4 grid grid-cols-1 gap-2">
            {data.scientific.concepts.map((c, i) => (
              <div key={i} className="bg-slate-100 p-3 rounded flex flex-col sm:flex-row sm:items-baseline gap-2">
                <span className="font-bold text-blue-600 text-sm whitespace-nowrap">{c.term} :</span>
                <span className="text-xs text-slate-600 leading-snug">{c.def}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Interactive Dose Slider */}
        <Card title="Expérience : La Dose fait le Poison" delay={0.2} className="relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-900 pointer-events-none">
            <FlaskConical size={120} />
          </div>
          
          <div className="space-y-8 relative z-10">
            {/* Status Display */}
            <div className="text-center space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className={`text-3xl font-bold ${status.color} transition-colors duration-300`}>
                {status.text}
              </div>
              <p className="text-sm text-slate-500 font-medium">{status.desc}</p>
            </div>
            
            {/* Slider Control */}
            <div className="space-y-4 px-2">
                <div className="relative h-2 bg-slate-200 rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-emerald-400 rounded-l-full w-[40%]" />
                    <div className="absolute top-0 left-[40%] h-full bg-orange-400 w-[35%]" />
                    <div className="absolute top-0 left-[75%] h-full bg-red-500 rounded-r-full w-[25%]" />
                    <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={dose} 
                    onChange={(e) => setDose(parseInt(e.target.value))}
                    className="absolute top-[-6px] left-0 w-full h-5 opacity-0 cursor-pointer z-20"
                    />
                    <div 
                        className="absolute top-[-4px] w-4 h-4 bg-white border-2 border-slate-400 rounded-full shadow transition-all pointer-events-none z-10"
                        style={{ left: `calc(${dose}% - 8px)` }}
                    />
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-mono uppercase tracking-wider">
                    <span>0mg</span>
                    <span>Seuil Critique</span>
                    <span>100mg</span>
                </div>
            </div>

            {/* Dynamic Clinical Picture */}
            <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-700 text-xs uppercase mb-3 flex items-center gap-2">
                    <Activity size={14} /> Tableau Clinique Dynamique
                </h5>
                <div className="grid grid-cols-2 gap-2">
                    {(dose < 40 ? [
                        "Analgésie (Douleur ↘)", "Euphorie légère", "Sédation", "Respiration normale"
                    ] : dose < 75 ? [
                        "Somnolence sévère", "Confusion", "Nausées / Vomissements", "Myosis (Pupilles serrées)"
                    ] : [
                        "Dépression respiratoire", "Coma aréactif", "Cyanose (Lèvres bleues)", "Bradycardie"
                    ]).map((symptom, i) => (
                        <div key={i} className={`text-xs px-2 py-1 rounded border ${
                            dose < 40 ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                            dose < 75 ? 'bg-orange-100 text-orange-700 border-orange-200' :
                            'bg-red-100 text-red-700 border-red-200 animate-pulse'
                        }`}>
                            • {symptom}
                        </div>
                    ))}
                </div>
            </div>

            {/* Receptor Saturation Visual */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500">Saturation des Récepteurs μ</span>
                    <span className="text-xs font-mono text-slate-400">{dose}%</span>
                </div>
                <div className="flex gap-1 h-3">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div 
                            key={i} 
                            className={`flex-1 rounded-sm transition-all duration-300 ${
                                i < (dose / 5) 
                                    ? (dose > 75 ? 'bg-red-500' : dose > 40 ? 'bg-orange-400' : 'bg-emerald-400') 
                                    : 'bg-slate-200'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Physiological Factors */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                    <h5 className="font-bold text-slate-700 text-xs mb-1 flex items-center gap-1">
                        <Scale size={12} /> Facteurs Individuels
                    </h5>
                    <ul className="text-xs text-slate-500 list-disc list-inside space-y-0.5">
                        <li>Poids corporel</li>
                        <li>Tolérance (Habituation)</li>
                        <li>Génétique (Métabolisme)</li>
                    </ul>
                </div>
                <div className="bg-red-50 p-3 rounded border border-red-100">
                    <h5 className="font-bold text-red-700 text-xs mb-1 flex items-center gap-1">
                        <Skull size={12} /> Facteurs Aggravants
                    </h5>
                    <ul className="text-xs text-red-600 list-disc list-inside space-y-0.5">
                        <li>Mélanges (Polyconsommation)</li>
                        <li>Mode d'administration</li>
                        <li>Pureté du produit</li>
                    </ul>
                </div>
            </div>

            {/* Comparative Potency Scale */}
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h5 className="font-bold text-slate-700 text-xs mb-3">Échelle de Puissance (Comparatif)</h5>
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs">
                        <span className="w-16 text-slate-500">Morphine</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 w-[5%]" />
                        </div>
                        <span className="w-8 text-right font-mono text-slate-400">1x</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="w-16 text-slate-500">Héroïne</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-400 w-[15%]" />
                        </div>
                        <span className="w-8 text-right font-mono text-slate-400">3x</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="w-16 font-bold text-red-600">Fentanyl</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 w-full" />
                        </div>
                        <span className="w-8 text-right font-mono text-red-600 font-bold">100x</span>
                    </div>
                </div>
            </div>

            {/* Did You Know */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm">
                <p className="font-bold text-blue-800 mb-1">Le Saviez-vous ?</p>
                <p className="text-blue-700 text-xs leading-relaxed">
                    La dose létale médiane (DL50) du Fentanyl est estimée à seulement <span className="font-bold">2 mg</span> pour un adulte moyen, soit l'équivalent de quelques grains de sel. À titre de comparaison, la caféine nécessite environ 10g (100 tasses de café) pour être fatale.
                </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Toxicity Types */}
      <Card title={data.toxicity.title} delay={0.25} className="bg-gradient-to-br from-slate-50 to-white border-slate-200">
        <p className="text-slate-600 mb-6">{data.toxicity.intro}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.toxicity.types.map((t, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                {t.name}
              </h4>
              <p className="text-sm text-slate-500 font-medium mb-2">{t.desc}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{t.details}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Saussure Analysis */}
      <Card title={data.linguistic.title} delay={0.3}>
        <p className="text-slate-600 mb-6">{data.linguistic.intro}</p>
        
        {/* Saussure Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6 border-b border-slate-200 mb-6">
          <div className="text-center space-y-2">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Signifiant</div>
            <div className="text-3xl font-serif italic text-slate-900">"Overdose"</div>
            <div className="text-xs text-slate-500">{data.linguistic.saussure.signifier}</div>
          </div>
          
          <ArrowRight className="hidden md:block text-slate-400" />
          
          <div className="text-center space-y-2">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Signifié</div>
            <div className="text-xl text-slate-700 font-medium">Représentation Mentale</div>
            <div className="text-xs text-slate-500">{data.linguistic.saussure.signified}</div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                    <Scale size={16} />
                    Approche Médicale
                </h4>
                <div className="space-y-3">
                    <div>
                        <span className="text-xs text-slate-500 uppercase">Termes privilégiés</span>
                        <p className="text-slate-900 font-medium">{data.linguistic.medical.terms}</p>
                    </div>
                    <div>
                        <span className="text-xs text-slate-500 uppercase">Connotation</span>
                        <p className="text-sm text-slate-600">{data.linguistic.medical.connotation}</p>
                    </div>
                </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                    <Skull size={16} />
                    Approche Sociétale
                </h4>
                <div className="space-y-3">
                    <div>
                        <span className="text-xs text-slate-500 uppercase">Origine</span>
                        <p className="text-sm text-slate-600">{data.linguistic.societal.origin}</p>
                    </div>
                    <div>
                        <span className="text-xs text-slate-500 uppercase">Imaginaire convoqué</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {data.linguistic.societal.imagery.map((tag: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs border-purple-200 text-purple-700 bg-white">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span className="text-xs text-slate-500 uppercase">Impact</span>
                        <p className="text-sm text-slate-600 italic">"{data.linguistic.societal.impact}"</p>
                    </div>
                </div>
            </div>
        </div>
      </Card>
    </div>
  );
};
