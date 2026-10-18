// ============================================================================
// Sathiyavani Charitable Trust — Dual-Language Localization Dictionary
// Languages: English (en) & Tamil (ta) — Human-reviewed for cultural authenticity
// ============================================================================

export type SupportedLanguage = "en" | "ta";

export interface Translations {
  // Brand & Identity
  brandName: string;
  brandTagline: string;
  registeredNotice: string;

  // Navigation
  navAbout: string;
  navPrograms: string;
  navImpact: string;
  navStories: string;
  navGetInvolved: string;
  navContact: string;

  // Actions & CTAs
  actionSponsor: string;
  actionVolunteer: string;
  actionPartner: string;
  actionContact: string;
  actionExplorePrograms: string;
  actionReadMore: string;

  // Core Programs
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

  // Impact & Transparency
  impactHeadline: string;
  impactSubhead: string;
  verifiedLabel: string;
  zeroFakeCounterNotice: string;

  // Forms
  formFullName: string;
  formPhone: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccessHeading: string;
  formSafeguardingConsent: string;

  // Footer & Compliance
  footerPreTitle: string;
  footerRights: string;
  footerPrivacy: string;
  footerTerms: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  en: {
    brandName: "Sathiyavani Charitable Trust",
    brandTagline: "Empowering Lives Through Education, Care and Community Support",
    registeredNotice: "Registered Public Charitable Trust (2023), Chennai, Tamil Nadu, India.",

    navAbout: "About Us",
    navPrograms: "Programmes",
    navImpact: "Impact",
    navStories: "Stories",
    navGetInvolved: "Get Involved",
    navContact: "Contact",

    actionSponsor: "Sponsor a Student",
    actionVolunteer: "Volunteer With Us",
    actionPartner: "Corporate Partnerships",
    actionContact: "Visit Our Center",
    actionExplorePrograms: "Explore Our Programs",
    actionReadMore: "Read Full Details",

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

    impactHeadline: "Measurable Impact, Built on Transparency",
    impactSubhead: "Real beneficiary numbers verified through physical distribution registers.",
    verifiedLabel: "Verified Documented Metric",
    zeroFakeCounterNotice: "We do not use simulated counter animations or fabricated statistics.",

    formFullName: "Full Name",
    formPhone: "Mobile Phone Number",
    formEmail: "Email Address (Optional)",
    formMessage: "How can we assist you?",
    formSubmit: "Submit Inquiry",
    formSubmitting: "Securing & Transmitting...",
    formSuccessHeading: "Inquiry Successfully Received",
    formSafeguardingConsent: "I agree to be contacted by trust coordinators for genuine community purposes.",

    footerPreTitle: "Grassroots Community Movement",
    footerRights: "All rights reserved. Dedicated to community dignity.",
    footerPrivacy: "Privacy & Child Safeguarding",
    footerTerms: "Terms of Use",
  },
  ta: {
    brandName: "சத்தியவாணி அறக்கட்டளை",
    brandTagline: "கல்வி, அக்கறை மற்றும் சமூக ஆதரவின் மூலம் வாழ்வை மேம்படுத்துதல்",
    registeredNotice: "பதிவுசெய்யப்பட்ட பொது தொண்டு அறக்கட்டளை (2023), சென்னை, தமிழ்நாடு.",

    navAbout: "எங்களை பற்றி",
    navPrograms: "திட்டங்கள்",
    navImpact: "நமது தாக்கம்",
    navStories: "களக்கதைகள்",
    navGetInvolved: "இணையுங்கள்",
    navContact: "தொடர்பு",

    actionSponsor: "மாணவருக்கு ஆதரவளியுங்கள்",
    actionVolunteer: "தன்னார்வலராக இணையுங்கள்",
    actionPartner: "நிறுவன கூட்டுறவு",
    actionContact: "மையத்தை பார்வையிடுங்கள்",
    actionExplorePrograms: "திட்டங்களை காண்க",
    actionReadMore: "மேலும் வாசிக்க",

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

    impactHeadline: "வெளிப்படைத்தன்மையுடன் கூடிய உண்மையான சமூக தாக்கம்",
    impactSubhead: "கள பதிவேடுகள் மற்றும் நேரடி சான்றுகள் மூலம் சரிபார்க்கப்பட்ட பயனாளிகள் எண்ணிக்கை.",
    verifiedLabel: "சான்றளிக்கப்பட்ட பதிவு",
    zeroFakeCounterNotice: "போலியான எண்களோ அல்லது அனிமேஷன் செய்யப்பட்ட தரவுகளோ நாங்கள் பயன்படுத்துவதில்லை.",

    formFullName: "முழு பெயர்",
    formPhone: "கைபேசி எண்",
    formEmail: "மின்னஞ்சல் முகவரி (விருப்பத்தேர்வு)",
    formMessage: "எவ்வாறு உதவலாம்?",
    formSubmit: "பதிவு செய்க",
    formSubmitting: "பதிவாகிறது...",
    formSuccessHeading: "தகவல் வெற்றிகரமாக பெறப்பட்டது",
    formSafeguardingConsent: "அறக்கட்டளை ஒருங்கிணைப்பாளர்கள் என்னை தொடர்பு கொள்ள ஒப்புக்கொள்கிறேன்.",

    footerPreTitle: "மக்களுக்கான சமூக இயக்கம்",
    footerRights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. மனித கண்ணியத்திற்கான அர்ப்பணிப்பு.",
    footerPrivacy: "தனியுரிமை மற்றும் குழந்தை பாதுகாப்பு",
    footerTerms: "விதிமுறைகள்",
  },
};
