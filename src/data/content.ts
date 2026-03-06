import { 
  BookOpen, 
  Activity, 
  AlertTriangle, 
  MessageCircle, 
  Users, 
  BrainCircuit, 
  Syringe,
  Skull,
  HeartPulse,
  Info,
  Mic2,
  Globe
} from 'lucide-react';

export const courseData = [
  {
    id: 'intro',
    title: "I. Définir l’overdose",
    subtitle: "Entre toxicologie et langage",
    icon: BookOpen,
    content: {
      scientific: {
        title: "Définition Scientifique et Fondements Toxicologiques",
        text: "Appréhender le phénomène de l'overdose requiert une assise rigoureuse dans les sciences médicales (toxicologie, pharmacologie). Selon la médecine clinique, une overdose se définit comme l’exposition aiguë de l’organisme à une dose de substance exogène qui excède de manière critique sa capacité de tolérance biologique et de métabolisation. Cette saturation des mécanismes d'élimination physiologiques entraîne une altération systémique sévère, susceptible d'engager le pronostic vital à très court terme.",
        quote: "« La dose fait le poison » (Dosis sola fecit venenum)",
        author: "Paracelsus (1493-1541)",
        context: "Cet aphorisme du XVIe siècle pose les bases de la pharmacologie moderne. Il est crucial de noter que les surdosages ne concernent pas uniquement les personnes dépendantes : ils surviennent également lors de l'utilisation médicale d'antalgiques, lorsque les doses dépassent ce que l'organisme peut tolérer. Contrairement aux idées reçues, toutes les surdoses ne sont pas mortelles. On estime qu'il y a 1 décès pour 20 à 25 surdoses. Les cas non mortels sont toutefois rarement documentés.",
        concepts: [
          { term: "Surdose", def: "Prise d’une quantité excessive d’une substance." },
          { term: "Toxicité médicamenteuse", def: "Exposition à une dose toxique d’un médicament, pouvant engager le pronostic vital." },
          { term: "Seuil physiologique", def: "Frontière métabolique au-delà de laquelle l'organisme (via le foie et les reins) ne parvient plus à clairer la substance, provoquant une accumulation toxique." },
          { term: "Toxicité aiguë", def: "Overdose foudroyante survenant quelques minutes ou heures après une administration massive." },
          { term: "Toxicité chronique", def: "Accumulation prolongée détruisant insidieusement les organes sur plusieurs mois ou années." }
        ]
      },
      toxicity: {
        title: "Toxicité Biologique et Défaillances Systémiques",
        intro: "L'effondrement de l'organisme n'est pas uniforme. Il est dicté par le profil pharmacodynamique de la substance, ciblant des récepteurs spécifiques et générant des toxidromes particuliers. Les dommages peuvent se produire au niveau des différents organes vitaux : cerveau, cœur, poumons, foie, reins.",
        types: [
          { 
            name: "Neurotoxique", 
            desc: "Altération immédiate du Système Nerveux Central.",
            details: "Hyperstimulation neuronale désordonnée (psychostimulants) : convulsions intraitables, AVC hypertensifs, coma agité."
          },
          { 
            name: "Respiratoire", 
            desc: "Mécanisme de décès le plus fréquent (Opioïdes).",
            details: "Dépression directe des centres respiratoires du bulbe rachidien, menant à une hypoxie fatale par arrêt de la commande ventilatoire."
          },
          { 
            name: "Hépatique", 
            desc: "Saturation du foie par des métabolites réactifs.",
            details: "Typique des analgésiques (ex: paracétamol). Conduit à une cytolyse et une nécrose cellulaire hépatique irréversible." 
          },
          { 
            name: "Cardiovasculaire", 
            desc: "Collapsus du système circulatoire.",
            details: "Troubles graves du rythme (tachycardies ventriculaires), spasmes coronariens, infarctus. Fréquent avec la cocaïne (libération massive de catécholamines)."
          }
        ]
      },
      linguistic: {
        title: "Un mot chargé de sens : Analyse Sémiologique et Linguistique",
        intro: "Au-delà de sa dimension clinique, l'overdose est un objet linguistique complexe. L'analyse structurale (Ferdinand de Saussure) permet de déconstruire ce terme en séparant le signifiant du signifié.",
        saussure: {
            signifier: "L'image acoustique et graphique du mot « overdose ».",
            signified: "Le concept mental, la représentation psychologique."
        },
        medical: {
            terms: "« Surdosage », « Surdose », « Posologie excessive »",
            context: "Littérature médicale francophone / Académie de Médecine.",
            connotation: "Termes techniques, aseptisés, descriptifs, dépourvus de jugement de valeur."
        },
        societal: {
            term: "« Overdose »",
            origin: "Anglicisme attesté fin des années 1960.",
            shift: "Glissement sémantique majeur : du médical vers le tragique et le sensationnaliste.",
            imagery: ["Toxicomanie", "Marginalité urbaine", "Effondrement social", "Figure du « junky » (années 70)"],
            impact: "Transforme un accident métabolique en symbole d'échec moral. Convoque des représentations lourdes de peurs, de jugements et de dramaturgie."
        }
      }
    }
  },
  {
    id: 'substances',
    title: "II. Substances & Interactions",
    subtitle: "Mécanismes et classification",
    icon: Syringe,
    content: {
      intro: "La compréhension globale des overdoses exige une taxonomie précise. L'analyse révèle une hétérogénéité qui transcende la dichotomie licite/illicite.",
      classification: [
        { 
          category: "Médicaments", 
          examples: "Opioïdes (oxycodone, fentanyl), Benzodiazépines (alprazolam)",
          status: "Prescription légale, souvent détournés (usage récréatif/marché parallèle).",
          risk: "Dépression du SNC, sédation profonde, arrêt respiratoire."
        },
        { 
          category: "Drogues illicites", 
          examples: "Héroïne, Cocaïne, Crack, Nitazènes",
          status: "Totalement prohibé, marché noir, pureté/composition variable.",
          risk: "Hypoxie sévère (opiacés), toxicité cardiovasculaire, AVC (cocaïne)."
        },
        { 
          category: "Substances légales", 
          examples: "Alcool, Tabac",
          status: "Légal, régulé, intégré culturellement.",
          risk: "Toxicité métabolique cumulative, coma éthylique, dépression respiratoire aiguë."
        }
      ],
      substanceFamilies: [
        {
            name: "Dépresseurs (SNC)",
            desc: "Ralentissement des fonctions vitales (Cœur/Respiration).",
            risk: "Arrêt cardiaque et respiratoire.",
            items: [
                { name: "Opiacés", details: "Héroïne, Morphine, Fentanyl." },
                { name: "Benzodiazépines", details: "Alprazolam (Xanax), Lorazépam, Diazépam. (Anxiété/Sommeil)." },
                { name: "GHB", details: "« Drogue du viol ». Incolore, inodore, sans saveur. Sédatif." },
                { name: "Alcool", details: "Potentialisateur majeur." }
            ]
        },
        {
            name: "Stimulants",
            desc: "Accélération du SNC. Énergie, Confiance, Tachycardie.",
            risk: "Complications cardiaques (Infarctus, Arythmies) et cérébrales (AVC, Convulsions).",
            items: [
                { name: "Cocaïne", details: "Risque vasculaire majeur." },
                { name: "Amphétamines", details: "Usage médical (TDAH, Narcolepsie). Descente : Anxiété, dépression, fatigue." }
            ]
        },
        {
            name: "Stimulants Sérotoninergiques",
            desc: "« Surchauffe » et perturbation sensorielle.",
            risk: "Syndrome Sérotoninergique.",
            items: [
                { name: "MDMA (Ecstasy)", details: "Euphorie, perceptions intensifiées. Contexte festif." },
                { name: "Cathinones", details: "Euphorie courte et intense -> Consommation répétée. (Bath Salts)." }
            ]
        }
      ],
      mechanisms: [
        { 
          type: "Dépression respiratoire (Opioïdes)", 
          desc: "Saturation des récepteurs Mu (μ) du tronc cérébral.",
          details: "Les agonistes (héroïne/fentanyl) saturent les récepteurs μ (douleur). Cela rend les chémorécepteurs insensibles au CO2. Le cerveau cesse d'envoyer l'impulsion motrice aux muscles respiratoires."
        },
        { 
          type: "Hyperstimulation (Psychostimulants)", 
          desc: "Blocage de la recapture des neurotransmetteurs (Dopamine, Sérotonine).",
          details: "Inondation synaptique -> sur-activation sympathique : vasoconstriction, hyperthermie, tachycardie. Le cœur s'emballe et les vaisseaux se contractent -> épuisement ou ischémie."
        },
        { 
          type: "Toxicité métabolique (Polyconsommation)", 
          desc: "Synergie dépressive (ex: Alcool + Benzos).",
          details: "Action sur les récepteurs GABAergiques. Les effets sédatifs ne s'additionnent pas, ils se multiplient exponentiellement -> coma toxique complexe."
        }
      ],
      crisis: {
        title: "La crise des opioïdes : Paradigme du XXIe siècle",
        fentanyl: {
            desc: "Analgésique de synthèse, 50-100x la morphine.",
            mechanism: "Lipophilie extrême -> passe la barrière hémato-encéphalique en quelques secondes. Dépression respiratoire foudroyante (avant retrait de l'injection)."
        },
        stats: [
            { year: "2019", total: "~70 630", opioids: "~49 000", context: "Pré-pandémique, début Fentanyl illicite." },
            { year: "2023", total: "105 007", opioids: "79 358", context: "Pic historique, isolement, mélanges toxiques (xylazine)." },
            { year: "2024", total: "79 384", opioids: "54 045", context: "Baisse (-24%) mais reste > 2019." }
        ],
        geography: "Disparités : Nebraska (3.3/100k) vs Virginie-Occidentale (38.6/100k). Reflet des inégalités d'accès aux soins.",
        europe: "Europe/France relativement épargnées (cadre médical strict), mais vigilance requise (nitazènes dans les pays baltes).",
        franceStats: {
            source: "Rapports ANSM 2023 (DTA & DRAMES)",
            general: {
                deaths: "723 décès",
                desc: "Liés à la surconsommation de substances psychoactives (médicaments ou illicites) en 2023.",
                risk: "x17",
                riskDesc: "Risque de mortalité (toutes causes) comparé à la population générale."
            },
            painkillersFocus: {
                title: "Addiction aux Antidouleurs",
                stats: [
                    { label: "Volume", value: "12 Millions", desc: "Personnes recevant une prescription d'opioïdes chaque année." },
                    { label: "Mortalité", value: "~6000", desc: "Décès liés à un surdosage enregistrés entre 2011 et 2023." }
                ],
                context: "Prescrits pour : Migraines, maux de dents, douleurs aiguës.",
                risks: "Dépendance et usage excessif possibles même sous traitement médical (contournement).",
                molecules: "Vigilance : Tramadol, Codéine, Prégabaline (Mésusage documenté).",
                note: "Implication fréquente de la Méthadone dans les décès."
            },
            dta: {
                title: "Usage Antalgique (DTA)",
                subtitle: "Hors toxicomanie (Douleur/Suicide)",
                profile: "Femmes (59%), Age moyen 49 ans",
                details: [
                    "Lieu : Domicile (78%)",
                    "Contexte : Suicide (32%)",
                    "Antécédents : Psy (62%), Douleur (31%)"
                ],
                data: [
                    { label: "Tramadol", value: "40%", trend: "up", desc: "N°1 - En réaugmentation" },
                    { label: "Morphine", value: "24%", trend: "equal", desc: "Stable" },
                    { label: "Codéine", value: "23%", trend: "up", desc: "En augmentation" },
                    { label: "Fentanyl", value: "9 décès", trend: "up", desc: "Augmentation marquée" }
                ],
                notes: "Paracétamol impliqué dans 10 décès (souvent associé)."
            },
            drames: {
                title: "Usage Abusif (DRAMES)",
                subtitle: "Contexte d'addiction / Festif",
                profile: "Hommes (80%), Age moyen 39 ans",
                data: [
                    { label: "Méthadone", value: "291 décès", trend: "up", desc: "Risque x6 vs Buprénorphine" },
                    { label: "Cocaïne", value: "25% des décès", trend: "up", desc: "2ème cause de mortalité. AUCUN ANTIDOTE." },
                    { label: "Cannabis", value: "55 décès", trend: "up", desc: "Complications cardiaques" }
                ],
                emerging: [
                    "NPS : Prédominance 3-CMC (Cathinones)",
                    "GHB/GBL : 17 décès (Forte hausse)",
                    "Kétamine : 13 décès",
                    "Nitazènes : 7 décès (Premiers cas)"
                ],
                poly: "L'association Méthadone + Cocaïne est la plus fréquente dans les décès poly-substances."
            },
            limitations: "Sous-enregistrement important : les facteurs de risque (nature, dose, comorbidités, rapidité des secours) sont souvent mal documentés dans les cas mortels, limitant le chiffrage réel du phénomène."
        }
      },
      nitrousOxide: {
        title: "Focus : Protoxyde d'Azote (« Gaz Hilarant »)",
        properties: "Gaz incolore, odeur et goût légèrement sucrés. Usage culinaire/médical détourné.",
        demographics: {
            averageAge: "22 ans",
            peak: "Pic marqué vers 20 ans",
            gender: "Surreprésentation des hommes"
        },
        context: {
            regulation: "Interdit aux mineurs (2021) mais achat facile sur Internet.",
            issue: "Sous-notification importante (jeunes consultent peu)."
        },
        risks: [
            "Addiction : Fort potentiel addictogène, dépendance sévère.",
            "Neurologique : AVC, Troubles de la mémoire.",
            "Respiratoire : Embolie pulmonaire.",
            "Psychiatrique : Complications sévères.",
            "Issue fatale : Risque de décès."
        ],
        trend: "Explosion des ventes et augmentation progressive des cas graves."
      }
    }
  },
  {
    id: 'symptoms',
    title: "III. Symptômes & Secours",
    subtitle: "Reconnaître et agir",
    icon: Activity,
    content: {
      intro: "La détection précoce est la clé de la survie. Le tableau clinique dépend de la substance (Opioïdes vs Psychostimulants).",
      symptoms: {
        opioids: {
            title: "Toxidrome Opioïdergique (Dépresseurs)",
            signs: [
                { name: "Conscience", desc: "La personne « pique du nez », ronflements ou râles, impossible à réveiller (somnolence), étourdissement et confusion." },
                { name: "Motricité & Parole", desc: "Incapacité de marcher ou de parler." },
                { name: "Respiration", desc: "Anormalement lente et faible, voire arrêt respiratoire. Signe le plus létal." },
                { name: "Signes physiques", desc: "Lèvres/ongles bleus (cyanose), pupilles en « têtes d'épingle » (myosis), peau froide et moite." }
            ]
        },
        stimulants: {
            title: "Toxidrome Psychostimulants (Cocaïne/MDMA)",
            signs: [
                { name: "Signes Généraux", desc: "Peau moite/pâle, sueurs, tremblements, bruxisme (mâchoires serrées), vomissements, malaise." },
                { name: "Cardiovasculaire", desc: "Tachycardie, hypertension, douleurs thoraciques (oppression), risque d'infarctus et AVC." },
                { name: "Neurologique", desc: "Mydriase (pupilles dilatées), troubles de la vision, convulsions, coma." },
                { name: "Psychiatrique", desc: "Agitation, agressivité, anxiété, paranoïa, hallucinations." }
            ]
        },
        serotonergic: {
            title: "Syndrome Sérotoninergique (MDMA/Cathinones)",
            signs: [
                { name: "Mental", desc: "Confusion, agitation, délire." },
                { name: "Autonome", desc: "Tachycardie, transpiration excessive, fièvre (Surchauffe)." },
                { name: "Neuromusculaire", desc: "Hypertension, tremblements, frissons." }
            ]
        }
      },
      treatment: {
        name: "Naloxone",
        type: "Antagoniste compétitif des récepteurs opioïdes μ.",
        mechanism: "Déloge l'opioïde des récepteurs cérébraux. Restaure la respiration quasi-instantanément.",
        safety: "Aucun effet agoniste : sans danger si administré par erreur à une personne non-intoxiquée.",
        limit: "Demi-vie courte (60-90 min) < Opioïdes longs (Méthadone). Risque de « re-narcotisation » -> Surveillance hospitalière indispensable.",
        warning: "ATTENTION : Aucun antidote n'existe pour la Cocaïne (25% des décès) et les psychostimulants."
      },
      criticalWarning: "Urgence Vitale : Après 3 minutes sans oxygène, les séquelles cérébrales sont irréversibles.",
      actions: [
        { 
            step: 1, 
            title: "Alerte (112)", 
            action: "Appeler le 112 (Europe). Restez calme.", 
            details: [
                "Indiquez l'adresse exacte.",
                "Décrivez l'état : Conscience ? Respiration ? Cœur ?",
                "Secret médical garanti.",
                "Note : La police ne vient que pour sécuriser l'espace."
            ]
        },
        { 
            step: 2, 
            title: "Si Consciente", 
            action: "Stimulez, Rassurez, Faites respirer.", 
            details: [
                "Ne la laissez jamais seule.",
                "Rappelez-lui de respirer : « Inspirer / Expirer ».",
                "Cherchez l'info : Quoi ? Quand ? Combien ?"
            ]
        },
        { 
            step: 3, 
            title: "Si Inconsciente", 
            action: "PLS ou Réanimation Cardiaque.", 
            details: [
                "Respire : Position Latérale de Sécurité (PLS) pour éviter l'inhalation de vomissures (syndrome de Mendelson).",
                "Ne respire pas : Massage (30 compressions / 2 insufflations).",
                "Convulsions : Protégez la tête, ne rien mettre dans la bouche."
            ]
        },
        { 
            step: 4, 
            title: "Antidote", 
            action: "Naloxone (si disponible).", 
            details: [
                "Spray nasal ou Injection IM.",
                "Efficace sur les opioïdes uniquement.",
                "Surveillez jusqu'à l'arrivée des secours."
            ]
        }
      ],
      donts: [
        "Ne pas donner à manger ou à boire.",
        "Ne pas faire vomir.",
        "Ne pas donner d'autres produits psychoactifs.",
        "Ne pas frapper ou blesser la personne pour la stimuler."
      ]
    }
  },
  {
    id: 'communication',
    title: "IV. Communication & Prévention",
    subtitle: "Modèles et limites",
    icon: MessageCircle,
    content: {
      intro: "L'existence d'antidotes est vaine sans information. La communication est un déterminant de santé publique.",
      objectives: {
        title: "Triptyque d'Objectifs (ARS / MILDECA)",
        items: [
            { goal: "Informer objectivement", desc: "Sur la nature des produits et la réalité physiologique de l'overdose." },
            { goal: "Modifier les comportements", desc: "Ne jamais consommer seul, tester les produits (colorimétrie), espacer les prises." },
            { goal: "Réduire les risques (RDR)", desc: "Former à la gestion de crise (Naloxone). Ex: Projet POP en PACA." }
        ]
      },
      jakobson: [
        { function: "Référentielle", dimension: "Le contexte, le réel", role: "Expliquer factuellement la biologie/risques.", example: "« Le Fentanyl est 50x plus puissant que l'héroïne. »" },
        { function: "Conative", dimension: "Le destinataire (faire agir)", role: "Inciter à l'action immédiate (impératif).", example: "« Appelez le 15 immédiatement ! » / « Testez vos produits. »" },
        { function: "Émotive", dimension: "L'émetteur (l'affect)", role: "Susciter l'empathie, lever l'anonymat.", example: "Témoignages de survivants : « J'ai cru que tout était fini... »" },
        { function: "Phatique", dimension: "Le contact", role: "Capter l'attention (visuel/sonore).", example: "Couleurs fluo, typographie agressive, signaux sonores." },
        { function: "Métalinguistique", dimension: "Le code", role: "Expliciter le vocabulaire, déconstruire les mythes.", example: "« La Naloxone est un antidote qui annule l'effet du poison. »" },
        { function: "Poétique", dimension: "La forme du message", role: "Rythme, rimes, slogans pour la mémorisation.", example: "Slogans percutants (Naloxone.fr)." }
      ],
      limits: {
        structural: "Echec des messages moralisateurs (« Just Say No ») -> Dissonance cognitive.",
        simplification: "Réduire l'addiction à la volonté invisibilise la complexité neurobiologique.",
        stigma: "Clichés dégradants -> Stigmatisation -> Isolement -> Frein aux soins."
      }
    }
  },
  {
    id: 'context',
    title: "V. Contexte Social",
    subtitle: "Politique et inégalités",
    icon: Globe,
    content: {
      intro: "L'overdose est un révélateur systémique des inégalités. Elle s'inscrit dans un contexte social, politique et géographique polarisé.",
      inequalities: {
        determinants: ["Précarité", "Absence de logement", "Rupture de droits sociaux", "Marginalisation géographique"],
        example: "Scènes ouvertes (Île-de-France, Portes de Paris, « forêt linéaire ») : Désocialisation + rupture de soins + produits frelatés (crack) = Risque maximal.",
        repression: "Paradoxe : La répression pousse à la clandestinité (lieux insalubres, injection précipitée) -> Annule l'intervention des tiers."
      },
      publicHealth: {
        paradigm: "Réduction des Risques et des Dommages (RDRD) - Années 90.",
        principle: "Préserver la vie et réduire les infections (VIH/VHC) sans exiger le sevrage immédiat.",
        structures: [
            { name: "CAARUD", role: "Accueil bas-seuil, matériel stérile, Naloxone. (Ex: Gaïa, Aurore)" },
            { name: "CSAPA", role: "Soins pérennes, TSO (Méthadone, Buprénorphine)." },
            { name: "SCMR", role: "Salles de consommation supervisées. Annule le risque de décès in situ." }
        ]
      },
      sociology: {
        ref: "Howard S. Becker (Outsiders, 1963)",
        concept: "Théorie de l'étiquetage (Labeling Theory)",
        mechanism: "La déviance est une interaction. Les « entrepreneurs de morale » créent la norme. L'étiquette « toxicomane » devient l'identité principale -> Carrière déviante.",
        impact: "Stigmatisation -> Rejet social -> Refuge dans des sous-cultures -> Éloignement du soin."
      },
      discourses: [
        { type: "Politique & Pénal", figure: "Délinquant, menace", goal: "Répression, ordre public", semantics: "Guerre, trafic, tolérance zéro" },
        { type: "Médiatique", figure: "Junky, victime spectaculaire", goal: "Audience, émotion", semantics: "Fléau, enfer, crackheads" },
        { type: "Médical & Sanitaire", figure: "Patient, citoyen", goal: "Soin, RDR, survie", semantics: "Pathologie, TSO, déterminants sociaux" }
      ]
    }
  },
  {
    id: 'addiction',
    title: "VI. Addiction & Sevrage",
    subtitle: "Mécanismes de dépendance",
    icon: BrainCircuit,
    content: {
      intro: "L'overdose est souvent la complication ultime d'une pathologie chronique : l'addiction. Loin du vice moral, c'est une maladie de la neuroplasticité.",
      mechanisms: [
        {
            title: "Dépendance Biologique",
            subtitle: "Adaptation & Tolérance",
            desc: "L'organisme s'adapte à la substance (homéostasie) en réduisant ses récepteurs. Conséquence : Tolérance (besoin d'augmenter les doses) -> Rapprochement du seuil létal."
        },
        {
            title: "Dépendance Psychologique",
            subtitle: "Circuit de la Récompense & Craving",
            desc: "Piratage du système limbique (VTA, Accumbens). Le 'Craving' est une pulsion irrépressible, activée par l'environnement ou l'émotion, qui court-circuite le libre arbitre."
        }
      ],
      withdrawal: {
        definition: "Manifestation clinique du désarroi neurochimique à l'arrêt du produit.",
        opioids: {
            title: "Le Manque Opiacé",
            desc: "Véritable torture physiologique (rarement mortelle, contrairement à l'alcool/benzos).",
            symptoms: ["Agitation & Panique", "Douleurs ostéo-musculaires", "Diarrhée & Vomissements", "Mydriase (pupilles dilatées)", "Sudations profuses"],
            risk: "Rarement mortel en soi, mais perçu comme une torture.",
            impact: "La peur du manque devient le moteur exclusif de la consommation."
        },
        alcoholBenzos: {
            title: "Sevrage Alcool / Benzodiazépines",
            desc: "Urgence médicale absolue.",
            symptoms: ["Delirium tremens", "Sueurs profuses", "Hallucinations", "Convulsions"],
            risk: "Potentiellement létal sans assistance médicale."
        }
      },
      biopsychosocial: {
        intro: "L'addiction résulte de la rencontre de trois sphères de vulnérabilité.",
        spheres: [
            { title: "Biologique", details: "Génétique, métabolisme hépatique, maturation du cortex préfrontal." },
            { title: "Psychologique", details: "Traumatismes (abus enfance), comorbidités (anxiété/dépression), gestion des émotions." },
            { title: "Social", details: "Précarité, isolement, influence des pairs, accessibilité des soins." }
        ],
        conclusion: "Seule une prise en charge holistique (médicale, psychologique, sociale) peut briser cette chaîne."
      }
    }
  },
  {
    id: 'bibliography',
    title: "VII. Bibliographie",
    subtitle: "Sources et références",
    icon: BookOpen,
    content: {
      intro: "Liste des ouvrages, rapports et articles ayant servi à l'élaboration de ce module.",
      sections: [
        {
          title: "1. Toxicologie et pharmacologie",
          items: [
            "Académie nationale de médecine. Dictionnaire médical : Overdose.",
            "Inserm. Expertise collective : Addictions et substances psychoactives. Paris, Inserm.",
            "Université de Montréal. Pharmacologie des opioïdes.",
            "Pharmacologie Médicale. Surdosage et toxicité médicamenteuse.",
            "Société Française de Médecine d'Urgence. Drogues illicites et overdose."
          ]
        },
        {
          title: "2. Santé publique et épidémiologie",
          items: [
            "Observatoire français des drogues et des tendances addictives. Drogues et addictions : chiffres clés 2025.",
            "Centers for Disease Control and Prevention. Drug Overdose Deaths in the United States, 2023-2024.",
            "Ministère de la Santé (France). Naloxone : antidote des surdoses aux opioïdes.",
            "Agence nationale de sécurité du médicament. Surdosage et overdose d’opioïdes : offre thérapeutique de la naloxone.",
            "Médecins du Monde. La réduction des risques chez les usagers de drogues."
          ]
        },
        {
          title: "3. Communication et sémiologie",
          items: [
            "Ferdinand de Saussure. Cours de linguistique générale. Paris : Payot.",
            "Roman Jakobson. “Linguistics and Poetics.” In Style in Language, MIT Press, 1960."
          ]
        },
        {
          title: "4. Sociologie des drogues et construction du problème public",
          items: [
            "Howard Becker. Outsiders: Studies in the Sociology of Deviance. New York: Free Press, 1963.",
            "OpenEdition Journals. Le traitement médiatique des drogues dans la presse française.",
            "OFDT. Substances psychoactives, usagers et marchés : tendances récentes à Paris et en Île-de-France."
          ]
        },
        {
          title: "Mini-bibliographie complémentaire",
          items: [
            "Mildeca. Stratégie interministérielle de mobilisation contre les addictions.",
            "GHU Paris Psychiatrie et Neurosciences. Addictions aux substances illicites."
          ]
        }
      ]
    }
  }
];
