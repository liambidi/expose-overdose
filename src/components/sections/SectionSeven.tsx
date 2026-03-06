import { courseData } from '@/data/content';
import { Card } from '@/components/ui/Shared';
import { Book, Link2, Library } from 'lucide-react';

export const SectionSeven = () => {
  const data = courseData[6].content;

  return (
    <div className="space-y-8">
      <p className="text-slate-600 max-w-3xl">{data.intro}</p>

      <div className="grid grid-cols-1 gap-6">
        {data.sections.map((section: any, idx: number) => (
          <Card key={idx} title={section.title} delay={idx * 0.1}>
            <ul className="space-y-3">
              {section.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 group hover:text-slate-900 transition-colors">
                  <div className="mt-1 p-1 bg-slate-100 rounded-full text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                    <Book size={14} />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      
      <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 text-center">
        <Library className="mx-auto text-slate-400 mb-3" size={32} />
        <p className="text-sm text-slate-500 italic">
          Cette bibliographie est donnée à titre indicatif et n'est pas exhaustive.
        </p>
      </div>
    </div>
  );
};
