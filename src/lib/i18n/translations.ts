// ============================================================================
// Sathiyavani Charitable Trust — Dual-Language Localization Dictionary
// Languages: English (en) & Tamil (ta) — Human-reviewed for cultural authenticity
// ============================================================================

export type SupportedLanguage = "en" | "ta";

export interface Translations {
  // Brand & Identity
  brandName: string;
  brandSubtitle: string;
  brandTagline: string;
  registeredNotice: string;
  chennaiLocation: string;

  // Navigation
  navHome: string;
  navAbout: string;
  navAboutTrust: string;
  navFounder: string;
  navMission: string;
  navVision: string;
  navPrograms: string;
  navAllPrograms: string;
  navEducation: string;
  navChildDev: string;
  navOutreach: string;
  navFestival: string;
  navEnvironment: string;
  navGetInvolved: string;
  navVolunteer: string;
  navSponsor: string;
  navPartnerships: string;
  navImpact: string;
  navStories: string;
  navContact: string;
  navDonateNow: string;
  searchPlaceholder: string;
  searchInitiatives: string;

  // Actions & Common CTAs
  actionSponsor: string;
  actionVolunteer: string;
  actionPartner: string;
  actionContact: string;
  actionExplorePrograms: string;
  actionReadMore: string;
  actionDonateNow: string;
  actionBecomeVolunteer: string;
  actionVisitCenter: string;
  actionCallNow: string;
  actionSendMessage: string;
  actionClose: string;
  actionBack: string;

  // Hero Section
  heroTagline: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSubtitle: string;
  heroPillarEducationTitle: string;
  heroPillarEducationDesc: string;
  heroPillarHealthcareTitle: string;
  heroPillarHealthcareDesc: string;
  heroPillarLivelihoodTitle: string;
  heroPillarLivelihoodDesc: string;
  heroPillarCommunityTitle: string;
  heroPillarCommunityDesc: string;

  // Impact Section
  impactTitle: string;
  impactSubhead: string;
  impactStatLives: string;
  impactStatChildren: string;
  impactStatMedical: string;
  impactStatFamilies: string;
  impactGandhiQuote: string;
  impactGandhiAuthor: string;
  verifiedLabel: string;
  zeroFakeCounterNotice: string;

  // Programs Grid Section
  progGridHeading: string;
  progGridSubhead: string;
  progEducationTitle: string;
  progEducationDesc: string;
  progChildDevTitle: string;
  progChildDevDesc: string;
  progWelfareTitle: string;
  progWelfareDesc: string;
  progFestivalTitle: string;
  progFestivalDesc: string;
  progEnvironmentTitle: string;
  progEnvironmentDesc: string;

  // Get Involved Section
  getInvolvedHeading: string;
  getInvolvedSubhead: string;
  togetherTomorrowBadge1: string;
  togetherTomorrowBadge2: string;

  // Founder Section
  founderHeading: string;
  founderSubhead: string;
  founderTag: string;
  founderQuote: string;
  founderReadStory: string;
  stage2020Title: string;
  stage2020Desc: string;
  stage2021Title: string;
  stage2021Desc: string;
  stage2022Title: string;
  stage2022Desc: string;
  stage2023Title: string;
  stage2023Desc: string;

  // Transparency Section
  transparencyHeading: string;
  transparencySubhead: string;
  transparencyGov1: string;
  transparencyGov2: string;
  transparencyGov3: string;
  transparencyGov4: string;

  // Forms
  formFullName: string;
  formPhone: string;
  formEmail: string;
  formMessage: string;
  formSubject: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccessHeading: string;
  formSuccessDesc: string;
  formSafeguardingConsent: string;

  // Contact Page
  contactHeroTitle: string;
  contactHeroSubtitle: string;
  contactCardCall: string;
  contactCardEmail: string;
  contactCardVisit: string;
  contactCardHours: string;
  contactHoursWeekdays: string;
  contactHoursSundays: string;
  contactFormHeading: string;
  contactFormSub: string;
  faqHeading: string;
  faqSub: string;

  // Stories Page
  storiesHeroTitle: string;
  storiesHeroSubtitle: string;
  storiesFilterAll: string;
  storiesFilterEdu: string;
  storiesFilterHealth: string;
  storiesFilterWomen: string;
  storiesFilterElder: string;
  storiesSearchPlaceholder: string;
  storiesReadFull: string;

  // Sponsor Page
  sponsorHeroTitle: string;
  sponsorHeroSubtitle: string;
  sponsorTiersHeading: string;
  sponsorTiersSubhead: string;
  sponsorDirectBankTransfer: string;

  // Partnerships Page
  partnerHeroTitle: string;
  partnerHeroSubtitle: string;
  partnerWhyTitle: string;
  partnerFocusTitle: string;
  partnerModelsTitle: string;

  // Footer & Compliance
  footerPreTitle: string;
  footerChildDeserves: string;
  footerAboutDesc: string;
  footerProgrammesTitle: string;
  footerOrgTitle: string;
  footerGetInvolvedTitle: string;
  footerAllProgramsLink: string;
  footerRights: string;
  footerPrivacy: string;
  footerTerms: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  en: {
    // Brand & Identity
    brandName: "Sathiyavani",
    brandSubtitle: "Charitable Trust",
    brandTagline: "People • Education • Better Tomorrow",
    registeredNotice: "Registered Public Charitable Trust (2023), Chennai, Tamil Nadu, India.",
    chennaiLocation: "Chennai, Tamil Nadu",

    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navAboutTrust: "About the Trust",
    navFounder: "Founder Story",
    navMission: "Mission Statement",
    navVision: "Our Vision",
    navPrograms: "Programmes",
    navAllPrograms: "All Programs Overview",
    navEducation: "Free Education",
    navChildDev: "Child Development",
    navOutreach: "Community Outreach",
    navFestival: "Festival Support",
    navEnvironment: "Environment",
    navGetInvolved: "Get Involved",
    navVolunteer: "Volunteer With Us",
    navSponsor: "Sponsor a Student",
    navPartnerships: "Corporate Partnerships",
    navImpact: "Impact",
    navStories: "Stories",
    navContact: "Contact",
    navDonateNow: "Donate Now",
    searchPlaceholder: "Search initiatives and programs...",
    searchInitiatives: "Search initiatives and programs",

    // Actions & Common CTAs
    actionSponsor: "Sponsor a Student",
    actionVolunteer: "Volunteer With Us",
    actionPartner: "Corporate Partnerships",
    actionContact: "Visit Our Center",
    actionExplorePrograms: "Explore Our Programs",
    actionReadMore: "Read Full Details",
    actionDonateNow: "Donate Now",
    actionBecomeVolunteer: "Become a Volunteer",
    actionVisitCenter: "Visit Our Center",
    actionCallNow: "Call Center",
    actionSendMessage: "Send Message",
    actionClose: "Close",
    actionBack: "Back",

    // Hero Section
    heroTagline: "SATHIYAVANI CHARITABLE TRUST",
    heroTitle1: "Empowering",
    heroTitle2: "Communities",
    heroTitle3: "Brighter Tomorrows",
    heroSubtitle: "Education, healthcare, livelihood and community support for a better, more inclusive tomorrow.",
    heroPillarEducationTitle: "Education",
    heroPillarEducationDesc: "Quality education for underprivileged children.",
    heroPillarHealthcareTitle: "Healthcare",
    heroPillarHealthcareDesc: "Better health and wellness for all.",
    heroPillarLivelihoodTitle: "Livelihood",
    heroPillarLivelihoodDesc: "Skills training and employment opportunities.",
    heroPillarCommunityTitle: "Community Support",
    heroPillarCommunityDesc: "Building stronger, safer communities.",

    // Impact Section
    impactTitle: "Our Impact",
    impactSubhead: "Real beneficiary numbers verified through physical distribution registers.",
    impactStatLives: "Lives Touched",
    impactStatChildren: "Children Educated",
    impactStatMedical: "Medical Support",
    impactStatFamilies: "Families Empowered",
    impactGandhiQuote: "The best way to find yourself is to lose yourself in the service of others.",
    impactGandhiAuthor: "Mahatma Gandhi",
    verifiedLabel: "Verified Documented Metric",
    zeroFakeCounterNotice: "We do not use simulated counter animations or fabricated statistics.",

    // Programs Grid Section
    progGridHeading: "Our Programs",
    progGridSubhead: "Focused grassroots initiatives creating direct, measurable change across Chennai.",
    progEducationTitle: "Free Education & Tuition Support",
    progEducationDesc: "Daily evening academic tutoring and school-fee assistance so no child drops out.",
    progChildDevTitle: "Holistic Child Development",
    progChildDevDesc: "Emotional confidence, sports coaching, birthday celebrations, and arts.",
    progWelfareTitle: "Community Outreach",
    progWelfareDesc: "Humanitarian care for single-parent families, differently-abled neighbors, and tribal homes.",
    progFestivalTitle: "Festival Support (Diwali Joy)",
    progFestivalDesc: "Annual festive clothing, sweets, and educational kits for underserved families.",
    progEnvironmentTitle: "Environmental Protection",
    progEnvironmentDesc: "Urban tree planting drives and ecological awareness workshops with Exnora.",

    // Get Involved Section
    getInvolvedHeading: "Be a Part of the Change",
    getInvolvedSubhead: "Your support can create lasting impact in the lives of many. Together, we can build a stronger, more inclusive society.",
    togetherTomorrowBadge1: "Together",
    togetherTomorrowBadge2: "for a Better Tomorrow",

    // Founder Section
    founderHeading: "Founder's Journey",
    founderSubhead: "From Roadside Platform Classes to a Structured Learning Movement",
    founderTag: "Founder & Managing Trustee",
    founderQuote: "When a child learns, an entire generation rises with dignity.",
    founderReadStory: "Read Raghu's Full Story",
    stage2020Title: "Roadside Platform Classes",
    stage2020Desc: "Began teaching local children on open pavement platforms during COVID-19 school shutdowns.",
    stage2021Title: "Temple Premises",
    stage2021Desc: "Expanded classes into covered temple grounds to shelter students from weather extremes.",
    stage2022Title: "Home-Based Learning",
    stage2022Desc: "Dedicated personal living space to house daily study batches, books, and study lamps.",
    stage2023Title: "Library Learning Center",
    stage2023Desc: "Local authorities recognized the service, providing a permanent space under a local library.",

    // Transparency Section
    transparencyHeading: "Legal & Operational Transparency",
    transparencySubhead: "Grassroots integrity backed by formal registrations, public audits, and open accounts.",
    transparencyGov1: "Registered Public Charitable Trust (2023)",
    transparencyGov2: "Strict Child Protection & Dignity Policy",
    transparencyGov3: "Transparent Bank Accounts & Direct UPI",
    transparencyGov4: "Physical Beneficiary Distribution Registers",

    // Forms
    formFullName: "Full Name",
    formPhone: "Mobile Phone Number",
    formEmail: "Email Address (Optional)",
    formMessage: "How can we assist you?",
    formSubject: "Subject / Topic of Interest",
    formSubmit: "Submit Inquiry",
    formSubmitting: "Securing & Transmitting...",
    formSuccessHeading: "Inquiry Successfully Received",
    formSuccessDesc: "Thank you for reaching out. A trust coordinator will connect with you within 24 hours.",
    formSafeguardingConsent: "I agree to be contacted by trust coordinators for genuine community purposes.",

    // Contact Page
    contactHeroTitle: "Let's Create A Brighter Tomorrow",
    contactHeroSubtitle: "We'd love to hear from you. Reach out with questions, volunteer inquiries, or to visit our Chennai center.",
    contactCardCall: "Direct Phone",
    contactCardEmail: "Email Inquiries",
    contactCardVisit: "Visit Our Center",
    contactCardHours: "Working Hours",
    contactHoursWeekdays: "Mon – Sat: 9:00 AM – 7:30 PM",
    contactHoursSundays: "Sunday: Community Activities",
    contactFormHeading: "Send Us a Message",
    contactFormSub: "Fill out the form below and our trust coordinators will respond promptly within 24 hours.",
    faqHeading: "Frequently Asked Questions",
    faqSub: "Clear answers about how we operate, how donations are used, and how you can get involved.",

    // Stories Page
    storiesHeroTitle: "Real Stories, Real Change",
    storiesHeroSubtitle: "Witness the transformative journeys of children, youth, and families whose lives have been uplifted through education and care.",
    storiesFilterAll: "All Stories",
    storiesFilterEdu: "Education",
    storiesFilterHealth: "Healthcare & Nutrition",
    storiesFilterWomen: "Women Empowerment",
    storiesFilterElder: "Elderly & Community Care",
    storiesSearchPlaceholder: "Search stories by name, topic, or keyword...",
    storiesReadFull: "Read Full Story",

    // Sponsor Page
    sponsorHeroTitle: "Give a Child the Gift of Education",
    sponsorHeroSubtitle: "Your monthly or annual sponsorship covers school fees, textbooks, evening tuition, and nutrition so no child drops out.",
    sponsorTiersHeading: "Transparent Sponsorship Packages",
    sponsorTiersSubhead: "Every rupee directly supports the educational journey of a student in need.",
    sponsorDirectBankTransfer: "Direct Bank Transfer (Zero Commission)",

    // Partnerships Page
    partnerHeroTitle: "Corporate Partnerships & CSR Collaboration",
    partnerHeroSubtitle: "Partner with Sathiyavani Charitable Trust to create high-impact, transparent, and legally compliant community development programs.",
    partnerWhyTitle: "Why Partner With Sathiyavani Trust?",
    partnerFocusTitle: "Key Strategic Focus Areas",
    partnerModelsTitle: "Flexible CSR Engagement Models",

    // Footer & Compliance
    footerPreTitle: "Grassroots Community Movement",
    footerChildDeserves: "Every child deserves an unbroken path to learning and dignity.",
    footerAboutDesc: "From roadside platform classes during the pandemic to a structured community learning movement. Dedicated to free tuition, child wellbeing, and social dignity.",
    footerProgrammesTitle: "Our Programmes",
    footerOrgTitle: "Organisation",
    footerGetInvolvedTitle: "Get Involved",
    footerAllProgramsLink: "All Programmes Overview →",
    footerRights: "All rights reserved. Dedicated to community dignity.",
    footerPrivacy: "Privacy & Child Safeguarding",
    footerTerms: "Terms of Use",
  },
  ta: {
    // Brand & Identity
    brandName: "சத்தியவாணி",
    brandSubtitle: "அறக்கட்டளை",
    brandTagline: "கல்வி, அக்கறை மற்றும் சமூக ஆதரவு • மக்கள் • ஒளிமயமான எதிர்காலம்",
    registeredNotice: "பதிவுசெய்யப்பட்ட பொது தொண்டு அறக்கட்டளை (2023), சென்னை, தமிழ்நாடு.",
    chennaiLocation: "சென்னை, தமிழ்நாடு",

    // Navigation
    navHome: "முகப்பு",
    navAbout: "எங்களை பற்றி",
    navAboutTrust: "அறக்கட்டளை பற்றி",
    navFounder: "நிறுவனரின் வரலாறு",
    navMission: "இலக்கு & நோக்கம்",
    navVision: "எமது பார்வை",
    navPrograms: "திட்டங்கள்",
    navAllPrograms: "அனைத்து திட்டங்கள்",
    navEducation: "இலவச கல்வி",
    navChildDev: "குழந்தை வளர்ச்சி",
    navOutreach: "சமூக உதவி",
    navFestival: "பண்டிகை கால உதவி",
    navEnvironment: "சுற்றுச்சூழல்",
    navGetInvolved: "இணையுங்கள்",
    navVolunteer: "தன்னார்வலராக இணையுங்கள்",
    navSponsor: "மாணவருக்கு ஆதரவளியுங்கள்",
    navPartnerships: "நிறுவன கூட்டுறவு",
    navImpact: "நமது தாக்கம்",
    navStories: "களக்கதைகள்",
    navContact: "தொடர்பு",
    navDonateNow: "ஆதரவளியுங்கள்",
    searchPlaceholder: "திட்டங்கள் மற்றும் நற்பணிகளை தேடுங்கள்...",
    searchInitiatives: "திட்டங்கள் மற்றும் நற்பணிகளை தேடுங்கள்",

    // Actions & Common CTAs
    actionSponsor: "மாணவருக்கு ஆதரவளியுங்கள்",
    actionVolunteer: "தன்னார்வலராக இணையுங்கள்",
    actionPartner: "நிறுவன கூட்டுறவு",
    actionContact: "மையத்தை பார்வையிடுங்கள்",
    actionExplorePrograms: "திட்டங்களை காண்க",
    actionReadMore: "முழு விவரங்கள்",
    actionDonateNow: "ஆதரவளியுங்கள்",
    actionBecomeVolunteer: "தன்னார்வலராக இணையுங்கள்",
    actionVisitCenter: "மையத்தை பார்வையிடுங்கள்",
    actionCallNow: "அழைக்கவும்",
    actionSendMessage: "செய்தி அனுப்புக",
    actionClose: "மூடுக",
    actionBack: "பின்செல்",

    // Hero Section
    heroTagline: "சத்தியவாணி அறக்கட்டளை",
    heroTitle1: "சமூக முன்னேற்றம்",
    heroTitle2: "மக்களுக்கான சேவை",
    heroTitle3: "ஒளிமயமான எதிர்காலம்",
    heroSubtitle: "அனைவருக்குமான சிறந்த, வளமான எதிர்காலத்திற்காக இலவச கல்வி, நல்வாழ்வு, வாழ்வாதாரம் மற்றும் சமூக பாதுகாப்பு.",
    heroPillarEducationTitle: "இலவச கல்வி",
    heroPillarEducationDesc: "பின்தங்கிய குழந்தைகளுக்கு தரமான இலவச கல்வி & மாலை நேர பயிற்சி.",
    heroPillarHealthcareTitle: "நல்வாழ்வு & பாதுகாப்பு",
    heroPillarHealthcareDesc: "அனைவருக்குமான ஊட்டச்சத்து, ஆரோக்கியம் மற்றும் பாதுகாப்பு.",
    heroPillarLivelihoodTitle: "வாழ்வாதாரம்",
    heroPillarLivelihoodDesc: "திறன் மேம்பாட்டு பயிற்சி மற்றும் மகளிர் வாழ்வாதார உதவி.",
    heroPillarCommunityTitle: "சமூக ஆதரவு",
    heroPillarCommunityDesc: "வலுவான, சமத்துவமான, பாதுகாப்பான சமூகத்தை உருவாக்குதல்.",

    // Impact Section
    impactTitle: "நமது தாக்கம்",
    impactSubhead: "கள பதிவேடுகள் மற்றும் நேரடி சான்றுகள் மூலம் சரிபார்க்கப்பட்ட பயனாளிகள் எண்ணிக்கை.",
    impactStatLives: "பயனடைந்த மனிதர்கள்",
    impactStatChildren: "கல்வி பெற்ற மாணவர்கள்",
    impactStatMedical: "மருத்துவ உதவி",
    impactStatFamilies: "ஆதரவு பெற்ற குடும்பங்கள்",
    impactGandhiQuote: "பிறருக்கு செய்யும் சேவையில் நம்மை அர்ப்பணிப்பதே நம்மை நாம் உணர்வதற்கான சிறந்த வழி.",
    impactGandhiAuthor: "மகாத்மா காந்தி",
    verifiedLabel: "சான்றளிக்கப்பட்ட பதிவு",
    zeroFakeCounterNotice: "போலியான எண்களோ அல்லது அனிமேஷன் செய்யப்பட்ட தரவுகளோ நாங்கள் பயன்படுத்துவதில்லை.",

    // Programs Grid Section
    progGridHeading: "எங்கள் திட்டங்கள்",
    progGridSubhead: "சென்னையில் சமூகத்தின் அடித்தளத்தில் நேரடி, அளவிடக்கூடிய மாற்றத்தை ஏற்படுத்தும் மக்கள் நலப்பணிகள்.",
    progEducationTitle: "இலவச கல்வி மற்றும் மாலை நேர பயிற்சி",
    progEducationDesc: "வறுமையினால் எந்தவொரு குழந்தையும் படிப்பை நிறுத்தக்கூடாது என்பதற்கான இலவச கல்வி உதவி.",
    progChildDevTitle: "முழுமையான குழந்தை வளர்ச்சி",
    progChildDevDesc: "சுயநம்பிக்கை, விளையாட்டு பயிற்சி, பிறந்தநாள் விழாக்கள் மற்றும் கலைகள்.",
    progWelfareTitle: "சமூக உதவி மற்றும் விளிம்புநிலை மக்கள் நலம்",
    progWelfareDesc: "ஒற்றை பெற்றோர், மாற்றுத்திறனாளிகள் மற்றும் பழங்குடி குடும்பங்களுக்கான சமூக பாதுகாப்பு.",
    progFestivalTitle: "பண்டிகை கால உதவி (தீபாவளி மகிழ்ச்சி)",
    progFestivalDesc: "ஆண்டுதோறும் புதிய ஆடைகள், இனிப்புகள் மற்றும் கல்வி உபகரணங்கள் வழங்கும் நற்பணி.",
    progEnvironmentTitle: "சுற்றுச்சூழல் பாதுகாப்பு",
    progEnvironmentDesc: "நகர்ப்புற மரக்கன்றுகள் நடுதல் மற்றும் எக்ஸ்னோராவுடன் இணைந்த தூய்மை விழிப்புணர்வு.",

    // Get Involved Section
    getInvolvedHeading: "மாற்றத்தின் ஒரு பகுதியாக இணையுங்கள்",
    getInvolvedSubhead: "உங்கள் சிறிய ஆதரவு பலரின் வாழ்வில் பெரும் ஒளியேற்றும். ஒன்றாக இணைந்து ஒரு வலுவான, சமத்துவமான சமுதாயத்தை உருவாக்குவோம்.",
    togetherTomorrowBadge1: "ஒன்றாக இணைவோம்",
    togetherTomorrowBadge2: "ஒளிமயமான எதிர்காலத்திற்கு",

    // Founder Section
    founderHeading: "நிறுவனரின் அர்ப்பணிப்பு பயணம்",
    founderSubhead: "சாலையோர வகுப்புகளிலிருந்து சமூக கல்வி மையமாக உருவெடுத்த வரலாறு",
    founderTag: "நிறுவனர் & நிர்வாக அறங்காவலர்",
    founderQuote: "ஒரு குழந்தை கல்வி கற்கும்போது, ஒரு முழு தலைமுறையும் கண்ணியத்துடன் தலைநிமிர்கிறது.",
    founderReadStory: "ரகு அவர்களின் முழு கதையை வாசியுங்கள்",
    stage2020Title: "சாலையோர நடைமேடை வகுப்புகள்",
    stage2020Desc: "கொரோனா காலத்தில் பள்ளிகள் மூடப்பட்ட போது சாலையோர நடைமேடைகளில் பாடம் கற்பிக்கத் தொடங்கினார்.",
    stage2021Title: "கோவில் வளாக வகுப்புகள்",
    stage2021Desc: "வெயில் மற்றும் மழையிலிருந்து குழந்தைகளைப் பாதுகாக்க கோவில் வளாகத்தில் வகுப்புகள் விரிவுபடுத்தப்பட்டன.",
    stage2022Title: "இல்லக் கல்வி மையம்",
    stage2022Desc: "தனது சொந்த இல்லத்தையே மாணவர்களின் தினசரி படிப்பு, புத்தகங்கள் மற்றும் விளக்குகளுக்கான இடமாக மாற்றினார்.",
    stage2023Title: "நூலகக் கல்வி மையம்",
    stage2023Desc: "இச்சேவையை அங்கீகரித்து உள்ளூர் நூலகக் கட்டிடத்தின் தரைதளத்தில் நிரந்தர மையம் வழங்கப்பட்டது.",

    // Transparency Section
    transparencyHeading: "சட்டப்பூர்வ வெளிப்படைத்தன்மை & நம்பிக்கை",
    transparencySubhead: "பதிவு செய்யப்பட்ட அறக்கட்டளை அமைப்பு, வெளிப்படையான வரவு-செலவு மற்றும் தணிக்கை நடைமுறைகள்.",
    transparencyGov1: "பதிவு செய்யப்பட்ட பொது தொண்டு அறக்கட்டளை (2023)",
    transparencyGov2: "குழந்தை பாதுகாப்பு & கண்ணியக் கொள்கை",
    transparencyGov3: "வெளிப்படையான வங்கி கணக்கு & நேரடி UPI",
    transparencyGov4: "நேரடி கள விநியோக பதிவேடுகள் & சான்றுகள்",

    // Forms
    formFullName: "முழு பெயர்",
    formPhone: "கைபேசி எண்",
    formEmail: "மின்னஞ்சல் முகவரி (விருப்பத்தேர்வு)",
    formMessage: "எவ்வாறு உதவலாம்?",
    formSubject: "விருப்பமான திட்டம் / தலைப்பு",
    formSubmit: "பதிவு செய்க",
    formSubmitting: "பதிவாகிறது...",
    formSuccessHeading: "தகவல் வெற்றிகரமாக பெறப்பட்டது",
    formSuccessDesc: "தொடர்பு கொண்டமைக்கு நன்றி. எமது அறக்கட்டளை ஒருங்கிணைப்பாளர் 24 மணி நேரத்திற்குள் உங்களை தொடர்புகொள்வார்.",
    formSafeguardingConsent: "அறக்கட்டளை ஒருங்கிணைப்பாளர்கள் என்னை தொடர்பு கொள்ள ஒப்புக்கொள்கிறேன்.",

    // Contact Page
    contactHeroTitle: "ஒளிமயமான எதிர்காலத்தை ஒன்றிணைந்து உருவாக்குவோம்",
    contactHeroSubtitle: "உங்களின் கேள்விகள், தன்னார்வ ஆர்வம் அல்லது எமது சென்னை மையத்தை பார்வையிட எங்களை எப்போது வேண்டுமானாலும் தொடர்பு கொள்ளுங்கள்.",
    contactCardCall: "நேரடி அழைப்பு",
    contactCardEmail: "மின்னஞ்சல் தொடர்பு",
    contactCardVisit: "எங்கள் மையம்",
    contactCardHours: "வேலை நேரம்",
    contactHoursWeekdays: "திங்கள் – சனி: காலை 9:00 – மாலை 7:30",
    contactHoursSundays: "ஞாயிறு: களப்பணிகள் & சிறப்பு வகுப்புகள்",
    contactFormHeading: "செய்தி அனுப்புங்கள்",
    contactFormSub: "கீழே உள்ள படிவத்தை பூர்த்தி செய்யுங்கள். எமது ஒருங்கிணைப்பாளர்கள் 24 மணி நேரத்திற்குள் உங்களை தொடர்புகொள்வார்கள்.",
    faqHeading: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faqSub: "எங்கள் செயல்பாடுகள் மற்றும் உங்கள் உதவி எவ்வாறு பயனாளிகளை சென்றடைகிறது என்பதற்கான தெளிவான பதில்கள்.",

    // Stories Page
    storiesHeroTitle: "உண்மையான கதைகள், நேரடி சமூக மாற்றம்",
    storiesHeroSubtitle: "இலவச கல்வி, நல்வாழ்வு மற்றும் சமூக ஆதரவின் மூலம் வாழ்வில் புதிய ஒளியேற்றப்பட்ட குழந்தைகள் மற்றும் குடும்பங்களின் உத்வேகக் கதைகள்.",
    storiesFilterAll: "அனைத்து கதைகள்",
    storiesFilterEdu: "கல்வி",
    storiesFilterHealth: "மருத்துவம் & ஊட்டச்சத்து",
    storiesFilterWomen: "மகளிர் முன்னேற்றம்",
    storiesFilterElder: "முதியோர் & சமூக நலம்",
    storiesSearchPlaceholder: "பெயர் அல்லது தலைப்பின் மூலம் தேடுங்கள்...",
    storiesReadFull: "முழு கதையை வாசிக்க",

    // Sponsor Page
    sponsorHeroTitle: "ஒரு குழந்தைக்கு கல்வியெனும் அழியா வரத்தை அளியுங்கள்",
    sponsorHeroSubtitle: "உங்கள் மாத அல்லது ஆண்டு ஆதரவு பள்ளி கட்டணம், புத்தகங்கள், மாலை நேர பயிற்சி மற்றும் ஊட்டச்சத்தை வழங்கி எந்த குழந்தையும் படிப்பை பாதியில் கைவிடாமல் காக்கிறது.",
    sponsorTiersHeading: "வெளிப்படையான கல்வி ஆதரவு திட்டங்கள்",
    sponsorTiersSubhead: "ஒவ்வொரு ரூபாயும் ஏழை மாணவர்களின் கல்வித் தேவைக்கு நேரடியாக பயன்படுத்தப்படுகிறது.",
    sponsorDirectBankTransfer: "நேரடி வங்கி பரிமாற்றம் (கட்டணமில்லா சேவை)",

    // Partnerships Page
    partnerHeroTitle: "நிறுவன சமூக பொறுப்புணர்வு (CSR) கூட்டுறவு",
    partnerHeroSubtitle: "தமிழ்நாட்டில் வெளிப்படையான, அளவிடக்கூடிய மற்றும் சட்டப்பூர்வமான மக்கள் மேம்பாட்டு திட்டங்களை செயல்படுத்த சத்தியவாணி அறக்கட்டளையுடன் இணையுங்கள்.",
    partnerWhyTitle: "சத்தியவாணி அறக்கட்டளையுடன் இணைவது ஏன்?",
    partnerFocusTitle: "முக்கிய பணித் துறைகள்",
    partnerModelsTitle: "நெகிழ்வான CSR கூட்டுறவு முறைகள்",

    // Footer & Compliance
    footerPreTitle: "மக்களுக்கான சமூக இயக்கம்",
    footerChildDeserves: "ஒவ்வொரு குழந்தைக்கும் தொடர்ச்சியான கல்வியும் கண்ணியமான வாழ்வும் கிடைக்க வேண்டும்.",
    footerAboutDesc: "கொரோனா பெருந்தொற்று காலத்தில் சாலையோர வகுப்புகளிலிருந்து தொடங்கிய இந்த மக்கள் இயக்கம், இன்று மாணவர்களுக்கு இலவச கல்வி, தன்னம்பிக்கை மற்றும் நல்வாழ்வு வழங்கும் பெருந்தொண்டாக மலர்ந்துள்ளது.",
    footerProgrammesTitle: "எங்கள் திட்டங்கள்",
    footerOrgTitle: "அமைப்பு",
    footerGetInvolvedTitle: "இணையுங்கள்",
    footerAllProgramsLink: "அனைத்து திட்டங்கள் →",
    footerRights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. சமூக கண்ணியத்திற்கான அர்ப்பணிப்பு.",
    footerPrivacy: "தனியுரிமை மற்றும் குழந்தை பாதுகாப்பு",
    footerTerms: "பயன்பாட்டு விதிமுறைகள்",
  },
};
