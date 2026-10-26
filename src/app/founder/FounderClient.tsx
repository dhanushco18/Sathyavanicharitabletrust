"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export function FounderClient() {
  const { trans } = useLanguage();

  const breadcrumbItems = [
    { label: trans("About Us", "எங்களை பற்றி"), href: "/about" },
    { label: trans("Founder Story", "நிறுவனர் வரலாறு") },
  ];

  const journeySteps = [
    {
      title: trans("The Roadside Platform", "சாலையோர நடைபாதை"),
      period: trans("2020 • Pandemic Initiation", "2020 • பெருந்தொற்றுக்கால தொடக்கம்"),
      description: trans(
        "During the peak of the COVID-19 pandemic in Chennai, schools shuttered and shifted to online classes. While privileged families adapted with smartphones and laptops, children of street vendors and roadside families had no access to learning. Seeing children idle and losing literacy skills, Mr. Raghu sat down with them on open pavement platforms, armed with slate, chalk, and notebooks.",
        "சென்னையில் கொரோனா பெருந்தொற்றின் போது பள்ளிகள் மூடப்பட்டு ஆன்லைன் வகுப்புகளாக மாறின. வசதியான குடும்பங்கள் தங்களை மாற்றிக்கொண்டாலும், நடைபாதை வியாபாரிகள் மற்றும் எளிய குடும்பங்களின் குழந்தைகளுக்கு கல்வி எட்டாக்கனியாக மாறியது. குழந்தைகள் படிப்பை இழப்பதைக் கண்ட திரு. ரகு, சிலேட்டு பலகை, சாக்பீஸ் மற்றும் நோட்டுகளுடன் நடைபாதையிலேயே அமர்ந்து அவர்களுக்கு பாடம் கற்பிக்கத் தொடங்கினார்."
      ),
      highlight: trans(
        "Classes began with just a few children on open street platforms.",
        "திறந்தவெளி நடைபாதையில் சில குழந்தைகளுடன் வகுப்புகள் தொடங்கின."
      ),
    },
    {
      title: trans("The Temple Premises", "கோவில் வளாகம்"),
      period: trans("2021 • Sheltered Expansion", "2021 • நிழல் தரும் விரிவாக்கம்"),
      description: trans(
        "As word spread through the locality, more children joined the daily sessions. To provide shelter from Chennai's scorching sun and seasonal rains, Mr. Raghu arranged permission to hold evening batches inside local temple premises. Community volunteers began offering support with teaching basic mathematics and Tamil reading.",
        "செய்தி பரவியதும் அப்பகுதியில் இருந்து மேலும் பல குழந்தைகள் வகுப்பில் இணைந்தனர். சென்னையின் வெயிலில் இருந்தும் மழையில் இருந்தும் குழந்தைகளைப் பாதுகாக்க, உள்ளூர் கோவில் வளாகத்தில் மாலை நேர வகுப்புகளை நடத்த அனுமதி பெறப்பட்டது. தன்னார்வலர்கள் அடிப்படைக் கணிதம் மற்றும் தமிழ் வாசிப்பு கற்பிக்க உதவினர்."
      ),
      highlight: trans(
        "Transitioned from open streets to covered community grounds.",
        "திறந்தவெளியில் இருந்து பாதுகாப்பான கோவில் வளாகத்திற்கு வகுப்புகள் விரிவடைந்தன."
      ),
    },
    {
      title: trans("Home-Based Learning Batches", "வீட்டுக்கல்வி மையங்கள்"),
      period: trans("2022 • Consistent Mentorship", "2022 • தொடர் வழிகாட்டல்"),
      description: trans(
        "To ensure students received uninterrupted guidance regardless of public space availability, Mr. Raghu converted his personal living space into a dedicated learning area. Evening study batches, book lending, and homework assistance were organized daily with zero fees.",
        "பொது இடங்களின் கிடைக்கும் தன்மையைப் பொருட்படுத்தாமல் மாணவர்கள் தடங்கலின்றி கல்வி கற்க, திரு. ரகு தனது சொந்த குடியிருப்புப் பகுதியையே ஒரு கற்றல் மையமாக மாற்றினார். மாலை நேரப் படிப்புகள், புத்தகங்கள் வழங்குதல் மற்றும் வீட்டுப்பாட உதவிகள் முற்றிலும் இலவசமாக வழங்கப்பட்டன."
      ),
      highlight: trans(
        "Personal residence served as daily classroom and study center.",
        "சொந்த இல்லமே தினசரி வகுப்பறையாகவும் படிப்பு மையமாகவும் செயல்பட்டது."
      ),
    },
    {
      title: trans("Library Learning Center", "நூலகக் கல்வி மையம்"),
      period: trans("2023 – Present • Structured Institution", "2023 – தற்போது • நிலையான கல்வி மையம்"),
      description: trans(
        "Recognizing his dedicated, honest service to neighborhood children, local police authorities stepped forward to provide a safe, permanent space located under a community library facility. The initiative was formally registered as Sathiyavani Charitable Trust in 2023 to secure sustainable donor sponsorships and volunteer backing.",
        "அப்பகுதி குழந்தைகளுக்கு அவர் ஆற்றிய தன்னலமற்ற சேவையை அங்கீகரித்து, உள்ளூர் காவல் அதிகாரிகள் ஒரு பொது நூலகக் கட்டிடத்தின் கீழ் பாதுகாப்பான நிரந்தர இடத்தை ஒதுக்கிக் கொடுத்தனர். பின்னர், நன்கொடையாளர்கள் மற்றும் தன்னார்வலர்களின் தொடர் ஆதரவைப் பெற 2023-ல் 'சத்தியவாணி அறக்கட்டளை' முறையாகப் பதிவு செய்யப்பட்டது."
      ),
      highlight: trans(
        "Official municipal and community recognition.",
        "காவல்துறை மற்றும் சமூகத்தின் அதிகாரப்பூர்வ அங்கீகாரம் பெற்றது."
      ),
    },
  ];

  return (
    <div className="bg-brand-canvas min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-brand-muted/70 border-b border-slate-200">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 8 Cols: Introduction */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <Badge variant="amber" size="md">
                  {trans("Leadership & Origins", "தலைமை & தோற்றம்")}
                </Badge>
                <Badge variant="navy" size="md">
                  {trans("Managing Trustee & Founder", "நிர்வாக அறங்காவலர் & நிறுவனர்")}
                </Badge>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {trans(
                  "Mr. Raghu N. — The Journey of a Grassroots Educator",
                  "திரு. ரகு N. — ஒரு எளிய கல்வியாளரின் சமூகப் பயணம்"
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {trans(
                  "How an individual's refusal to let children lose their future during the pandemic evolved from roadside platform tutoring into an organized movement serving hundreds of students and families in Chennai.",
                  "கொரோனா பெருந்தொற்று காலத்தில் குழந்தைகள் கல்வியை இழக்கக்கூடாது என்ற ஒரு தனிமனிதனின் உறுதி, சாலையோர நடைபாதை வகுப்புகளிலிருந்து தொடங்கி இன்று சென்னையில் நூற்றுக்கணக்கான மாணவர்களுக்கு உதவும் மக்கள் இயக்கமாக வளர்ந்த கதை."
                )}
              </p>
            </div>

            {/* Right 4 Cols: Portrait Card */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden bg-white/95 backdrop-blur-md p-3.5 shadow-elevated border border-slate-200 max-w-sm mx-auto card-glow-hover">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-navy-dark shadow-inner">
                  <Image
                    src="/assets/images/founder-raghu.jpg"
                    alt={`Portrait of ${SITE_CONFIG.founderName}, Founder of Sathiyavani Charitable Trust`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber block drop-shadow-xs">
                      {trans("Founder Profile", "நிறுவனர் சுயவிவரம்")}
                    </span>
                    <h2 className="font-heading text-xl font-extrabold text-white drop-shadow-xs">
                      {SITE_CONFIG.founderName}
                    </h2>
                    <span className="text-xs text-slate-200 block font-medium">
                      {trans("Managing Trustee, Sathiyavani Charitable Trust", "நிர்வாக அறங்காவலர், சத்தியவாணி அறக்கட்டளை")}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-center text-slate-500 font-medium mt-2.5">
                  {trans(
                    "Mr. Raghu N. at the Sathiyavani Community Center, Chennai.",
                    "சென்னையில் உள்ள சத்தியவாணி சமூக மையத்தில் திரு. ரகு N."
                  )}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Narrative & Milestone Progression */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Guiding Conviction */}
            <blockquote className="p-6 sm:p-8 rounded-3xl bg-white border-l-4 border-brand-amber shadow-subtle text-slate-800">
              <Quote className="w-8 h-8 text-brand-amber/40 mb-3" aria-hidden="true" />
              <p className="font-heading text-xl sm:text-2xl font-bold italic text-brand-navy leading-snug">
                {trans(
                  '"No child should be denied education due to financial hardship."',
                  '"பொருளாதார நெருக்கடியால் எந்தவொரு குழந்தைக்கும் கல்வி மறுக்கப்படக் கூடாது."'
                )}
              </p>
              <cite className="text-xs text-slate-500 font-semibold mt-3 block not-italic">
                {trans("— Mr. Raghu N., Founder & President", "— திரு. ரகு N., நிறுவனர் & தலைவர்")}
              </cite>
            </blockquote>

            {/* The Narrative */}
            <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                {trans("The Beginning: Teaching in Open Spaces", "தொடக்கப் புள்ளி: திறந்தவெளி வகுப்புகள்")}
              </h2>
              <p>
                {trans(
                  "The story of Sathiyavani Charitable Trust is fundamentally human. When the COVID-19 pandemic hit Chennai in 2020, marginalized communities faced immediate economic and educational collapse. With daily wages vanishing, books and stationery were distant luxuries.",
                  "சத்தியவாணி அறக்கட்டளையின் கதை ஒரு மனிதநேயப் பயணம். 2020-ல் கொரோனா பெருந்தொற்று சென்னையைத் தாக்கியபோது, ஏழை எளிய குடும்பங்கள் கடுமையான பொருளாதார நெருக்கடியையும் கல்வி இழப்பையும் சந்தித்தன. அன்றாட வருமானம் பறிபோன சூழலில், புத்தகங்களும் நோட்டுகளும் எட்டாக்கனியாக மாறின."
                )}
              </p>
              <p>
                {trans(
                  "Rather than waiting for institutional relief to trickle down, Mr. Raghu began gathering children who spent their days on roadside platforms and started teaching them arithmetic and reading. For months, open pavement curbstones were the desks, and a portable blackboard was the school wall.",
                  "அரசு அல்லது நிறுவன உதவிகளுக்காக காத்திருக்காமல், சாலையோர நடைபாதைகளில் நேரத்தைக் கழித்த குழந்தைகளை ஒன்றுதிரட்டி திரு. ரகு கணிதமும் வாசிப்பும் கற்பிக்கத் தொடங்கினார். பல மாதங்கள் நடைபாதை திண்டுகளே மேசையாகவும், கையடக்க கரும்பலகையே பள்ளிச் சுவராகவும் இருந்தன."
                )}
              </p>
            </div>

            {/* Step-by-Step Evolution */}
            <div className="space-y-6 pt-4">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs uppercase font-bold text-brand-navy tracking-wider block">
                  {trans("Four Stages of Growth", "வளர்ச்சியின் நான்கு நிலைகள்")}
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
                  {trans(
                    "From Roadside to Permanent Learning Center",
                    "நடைபாதையிலிருந்து நிரந்தரக் கல்வி மையம் வரை"
                  )}
                </h3>
              </div>

              <div className="space-y-6">
                {journeySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-brand-navy-soft text-brand-navy font-heading font-extrabold flex items-center justify-center text-sm shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="font-heading text-lg font-bold text-slate-900">
                          {step.title}
                        </h4>
                      </div>
                      <Badge variant="navy" size="sm">
                        {step.period}
                      </Badge>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                      <span>{step.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuing the Mission Today */}
            <div className="p-8 bg-brand-muted/70 rounded-3xl border border-slate-200/80 space-y-4">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                {trans("Continuing the Mission Today", "இன்றைய தொடர் களப்பணி")}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {trans(
                  "Today, the tuition center operates successfully at the library premises, providing daily free classes, student mentorship, and school-fee support. Mr. Raghu continues to actively supervise daily sessions, personally mentor children, and coordinate volunteer tutors.",
                  "இன்று, நூலக வளாகத்தில் வெற்றிகரமாக இயங்கும் கல்வி மையம் மூலம் தினசரி இலவச வகுப்புகள், வழிகாட்டல் மற்றும் பள்ளி கட்டண உதவிகள் வழங்கப்படுகின்றன. திரு. ரகு தினசரி வகுப்புகளை நேரடியாகக் கண்காணித்து, குழந்தைகளுக்கு தனிப்பட்ட வழிகாட்டலை வழங்கி வருகிறார்."
                )}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="primary" size="md" href="/programs/education">
                  {trans("Explore Our Tuition Centre", "எங்கள் கல்வி மையத்தை காண்க")}
                </Button>
                <Button variant="outline" size="md" href="/sponsor">
                  {trans("Support a Student", "மாணவருக்கு ஆதரவளியுங்கள்")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
