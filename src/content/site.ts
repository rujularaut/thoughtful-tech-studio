/**
 * All editable website content lives here.
 * Change names, copy, contact details, services and projects in this one file.
 */

export const studio = {
  name: "Forma Digital",
  tagline: "Thoughtful tech. Practical solutions.",
  philosophy: "Technology should make things easier, not more complicated.",
  // Placeholder contact details — replace with the real ones.
  email: "hello@formadigital.studio",
  // International format without "+" or spaces, e.g. "919876543210". Leave empty to hide.
  whatsapp: "",
  location: "India · working with clients anywhere",
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "GitHub", href: "" },
  ],
};

export type Founder = {
  slug: string;
  name: string;
  firstName: string;
  initials: string;
  role: string; // editable placeholder
  focus: string[]; // editable placeholder
  linkedin: string; // leave empty until available
  photo?: string; // add a real photo URL when ready
};

export const founders: Founder[] = [
  {
    slug: "rujula",
    name: "Rujula Raut",
    firstName: "Rujula",
    initials: "RR",
    role: "Co-founder",
    focus: ["Add skill", "Add skill", "Add skill"],
    linkedin: "",
  },
  {
    slug: "ritisha",
    name: "Ritisha Bobde",
    firstName: "Ritisha",
    initials: "RB",
    role: "Co-founder",
    focus: ["Add skill", "Add skill", "Add skill"],
    linkedin: "",
  },
];

export const founderIntro =
  "We're Rujula and Ritisha, the people behind Forma Digital. We believe technology should make things easier, not more complicated. We enjoy understanding problems, exploring ideas, and building solutions that genuinely help people and businesses.";

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  intro: string;
  items: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    id: "websites",
    number: "01",
    title: "Websites & Digital Experiences",
    short: "Clear, fast websites that explain what you do and help people reach you.",
    intro:
      "A website is often the first conversation someone has with you. We make sure it's a good one — clear, quick to load and easy to update.",
    items: [
      "Business websites",
      "Portfolios",
      "Landing pages",
      "Website redesign",
      "Basic SEO",
      "E-commerce websites",
    ],
    goodFor: "Freelancers, professionals, small businesses and new brands.",
  },
  {
    id: "software",
    number: "02",
    title: "Software & SaaS",
    short: "Web apps and tools shaped around how you actually work.",
    intro:
      "When spreadsheets and off-the-shelf tools stop fitting, we build software around your real workflow — starting small and growing with you.",
    items: [
      "Custom web applications",
      "SaaS platforms",
      "Online booking systems",
      "Scheduling tools",
      "Customer portals",
      "Dashboards",
      "Startup MVPs",
    ],
    goodFor: "Startups testing an idea, and teams that have outgrown their tools.",
  },
  {
    id: "automation",
    number: "03",
    title: "AI & Automation",
    short: "Hand the repetitive work to software, and keep people for the parts that matter.",
    intro:
      "We look for the tasks that quietly eat your week and explore where automation or AI assistance can genuinely help — and where it shouldn't.",
    items: [
      "AI-assisted customer support",
      "Workflow automation",
      "Automated reminders",
      "AI response assistance",
      "Document processing",
      "Repetitive task automation",
    ],
    goodFor: "Teams answering the same questions or copying data between tools.",
  },
  {
    id: "whatsapp",
    number: "04",
    title: "WhatsApp & Integrations",
    short: "Meet customers where they already are, and connect the tools you rely on.",
    intro:
      "Many of your customers already talk to you on WhatsApp. We help connect those conversations to the rest of your business.",
    items: [
      "WhatsApp Business Platform integrations",
      "Chatbots",
      "Appointment notifications",
      "Lead management",
      "Customer communication workflows",
      "API integrations",
    ],
    goodFor: "Clinics, service businesses and anyone who books or follows up by message.",
  },
  {
    id: "data",
    number: "05",
    title: "Data Analytics",
    short: "Turn scattered numbers into something you can read and act on.",
    intro:
      "Most businesses already have useful data — it's just messy or hard to see. We tidy it up and make it readable.",
    items: [
      "Data storage",
      "Sorting & filtering",
      "Data cleaning",
      "Visualisation",
      "Reporting",
      "Predictive analytics",
      "Business dashboards",
      "Automated reports",
    ],
    goodFor: "Owners and teams who want clearer answers from their own information.",
  },
  {
    id: "creative",
    number: "06",
    title: "Creative Digital Services",
    short: "Short videos and visuals that explain your product or idea well.",
    intro:
      "Sometimes the right solution is a clear explanation. We create visuals that help people understand what you offer.",
    items: [
      "Promotional videos",
      "Product demos",
      "Motion graphics",
      "Social media promotional content",
      "Digital campaign assets",
    ],
    goodFor: "Launches, campaigns and products that need explaining.",
  },
];

export type Project = {
  slug: "medibook" | "tickreply";
  number: string;
  name: string;
  category: string;
  status: string;
  oneLiner: string;
  heading: string;
  problem: string;
  solution: string;
  plannedFeatures: { title: string; text: string }[];
  questions: string[];
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "medibook",
    number: "01",
    name: "MediBook",
    category: "Healthcare Technology",
    status: "In development",
    oneLiner: "An online hospital appointment booking and availability platform.",
    heading: "Making healthcare appointments easier to access and manage.",
    problem:
      "Patients can face difficulties finding appointment availability and coordinating bookings.",
    solution:
      "A digital platform designed to help patients view appointment availability and book hospital appointments.",
    plannedFeatures: [
      { title: "Appointment scheduling", text: "Choose a department, doctor and time slot online." },
      { title: "Availability display", text: "See open slots clearly before committing to a visit." },
      { title: "Booking management", text: "View, reschedule or cancel an appointment in one place." },
      { title: "Admin dashboard", text: "Help hospital staff manage schedules and bookings." },
      { title: "Confirmations", text: "Send a clear confirmation once a booking is made." },
      { title: "Reminders", text: "Remind patients before their appointment." },
    ],
    questions: [
      "How do patients find out when a doctor is actually available?",
      "What's the simplest way to book without a phone call?",
      "How can staff keep schedules accurate without extra work?",
    ],
    services: ["Software & SaaS", "WhatsApp & Integrations"],
  },
  {
    slug: "tickreply",
    number: "02",
    name: "TickReply",
    category: "SaaS · Review Management · AI Automation",
    status: "In development",
    oneLiner:
      "A SaaS platform for Google review management with WhatsApp integration and AI-assisted automation.",
    heading: "Helping businesses manage conversations, feedback, and reputation more efficiently.",
    problem:
      "Businesses often struggle to monitor customer reviews, manage responses, and organise feedback efficiently.",
    solution:
      "A centralised platform designed to streamline review management, communication, and AI-assisted workflows.",
    plannedFeatures: [
      { title: "Review monitoring", text: "Keep track of new Google reviews in one place." },
      { title: "AI-assisted drafts", text: "Suggest response drafts that a person reviews and sends." },
      { title: "WhatsApp integration", text: "Bring review alerts and follow-ups into WhatsApp." },
      { title: "Review organisation", text: "Sort feedback by theme, rating or status." },
      { title: "Analytics", text: "Show patterns in feedback over time." },
    ],
    questions: [
      "How does a busy owner notice every new review?",
      "Can AI help draft replies without sounding robotic?",
      "What does feedback tell a business over months, not days?",
    ],
    services: ["Software & SaaS", "AI & Automation", "WhatsApp & Integrations", "Data Analytics"],
  },
];

export const problems = [
  { text: "“We still take bookings over phone calls and notebooks.”", tag: "Booking" },
  { text: "“Our website doesn't really explain what we do.”", tag: "Website" },
  { text: "“We answer the same customer questions every day.”", tag: "Automation" },
  { text: "“Customer messages are scattered across WhatsApp and email.”", tag: "Integrations" },
  { text: "“We have data, but no idea what it's telling us.”", tag: "Data" },
  { text: "“I have an app idea but don't know where to start.”", tag: "MVP" },
];

export const processSteps = [
  {
    number: "01",
    title: "Tell us what you need.",
    text: "Share your idea, problem or goal in your own words. No technical brief needed.",
  },
  {
    number: "02",
    title: "We figure it out together.",
    text: "We ask questions, suggest practical options and agree on a realistic scope for your budget.",
  },
  {
    number: "03",
    title: "We build your solution.",
    text: "You'll see progress regularly and talk directly to the people building it.",
  },
  {
    number: "04",
    title: "We make sure it works.",
    text: "We test, launch, explain how it works, and stay around for questions afterwards.",
  },
];

export const serviceOptions = [
  ...services.map((s) => s.title),
  "I'm not sure yet",
] as const;

export const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "Above ₹2,00,000",
  "Let's discuss",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Flexible",
] as const;
