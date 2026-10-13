export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", match: ["/about", "/team"] },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/blog", label: "Blog" },
] as const;

// These pages don't exist yet; the links will 404 until they're added.
export const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const contactDetails = {
  email: "info@climenergiesconsulting.com",
  phone: "+234 (0) 808 585 5527",
  phoneHref: "tel:+2348085855527",
  address: ["2nd Floor, Alternative Bank building", "21, Admiralty Way", "Lekki Phase 1, Lagos, Nigeria."],
};

export const heroSlides = [
  {
    image: "/assets/carousel/Latest Heroslide 1 -.jpg",
    alt: "Two engineers in hard hats reviewing plans at a large solar installation",
    headline: ["From Policy to Projects.", "From Vision to Value."],
    subheadline: "Integrated advisory across Africa's energy, climate, and industrial transformation.",
    position: "object-center",
  },
  {
    image: "/assets/carousel/Latest Heroslide 3.jpg",
    alt: "A team in green shirts discussing a wind turbine model around a table",
    headline: ["Advisory Built for Africa.", "Grounded in Execution."],
    subheadline: "From ambition to delivery across Africa's energy, climate and industrial economy.",
    position: "object-center",
  },
  {
    image: "/assets/carousel/Connecting Capital Ecosystems Innovation (1).png",
    alt: "A glowing green globe centred on the African continent, connected by a network of points",
    headline: ["Closing the Gap Between", "Ambition and Execution."],
    subheadline:
      "Turning promising energy, climate and resource solutions into investable, scalable businesses.",
    position: "object-center",
  },
];

export const practiceAreas = [
  {
    title: "Oil, Gas & Energy Transition",
    description:
      "We help governments, national oil companies, and investors navigate petroleum regulation, structure transactions across the value chain, monetise gas transition strategies, and position hydrocarbon assets for resilience and long-term value in a changing market.",
  },
  {
    title: "Power and Energy Access",
    description:
      "We advise governments, utilities, developers and investors across the power value chain, from grid-scale generation to off-grid access, on sector reform, regulation, renewables integration and transition finance, helping build bankable markets and close clean energy deals.",
  },
  {
    title: "Climate Strategy, Finance & Carbon Markets",
    description:
      "We help governments, investors and corporates turn climate priorities into investable, low-carbon and resilient outcomes, from policy and decarbonisation pathways to carbon markets, Article 6 and climate finance.",
  },
  {
    title: "ESG & Sustainability Disclosure",
    description:
      "We help corporates, industrials and financial institutions build ESG frameworks and disclosures that stand up to investor, lender and regulator scrutiny, from materiality and reporting to climate risk and supply chain compliance.",
  },
  {
    title: "Critical Minerals & Industrial Value Chains",
    description:
      "We advise governments, investors, and businesses on critical minerals strategy, policy, and regulation; responsible resource development; investment; and the industrial value chains it can enable to strengthen local value creation.",
  },
  {
    title: "Ventures & Innovation",
    description:
      "We advise founders, investors, accelerators, and corporates on venture structuring, investment readiness, capital raising, market entry, and partnership frameworks, turning promising energy and climate solutions into investable, scalable businesses.",
  },
];

export const coreValues = [
  {
    title: "Sustainability",
    description:
      "Every recommendation we make is a commitment to the future. We design solutions that are environmentally responsible, resource-efficient, and built for long-term resilience.",
  },
  {
    title: "Integrity & Professional Excellence",
    description:
      "We uphold the highest ethical standards, transparency, and rigor, delivering insights that our clients can trust without reservation.",
  },
  {
    title: "Collaboration & Partnership",
    description:
      "We build the best solutions with clients, not for them. We work hand in hand with clients and partners to co-create strategies that reflect local realities, align stakeholder interests, and drive measurable, sustainable outcomes.",
  },
  {
    title: "African Context, Global Alignment",
    description:
      "We ground solutions in local market realities while aligning with global standards and markets.",
  },
  {
    title: "Knowledge & Capacity Building",
    description: "We build local expertise and capability for Africa's energy, climate and industrial future.",
  },
];

export const clientGroups = [
  {
    title: "Public Sector, Regulators & Utilities",
    description:
      "Ministries, sector regulators, state-owned utilities, planning authorities, and state enterprises.",
  },
  {
    title: "Corporates & Industrials",
    description:
      "Multinational and regional corporations, commercial enterprises, manufacturing firms, mining companies, and heavy industrial energy consumers.",
  },
  {
    title: "Capital Providers, Developers & Innovators",
    description:
      "Investors, VC funds, commercial banks, project developers, IPPs, clean-tech innovators, accelerators, and innovation hubs.",
  },
  {
    title: "International Partners",
    description:
      "Development finance institutions (DFIs), multilateral agencies, and international advisory firms.",
  },
];

export const approach = [
  {
    title: "Diagnose",
    icon: "search",
    description:
      "We begin every engagement with a rigorous diagnosis of the client's unique context, analyzing market positioning, capital availability, regulatory dynamics, and political economy to build analytically grounded and actionable strategies.",
  },
  {
    title: "Architect",
    icon: "compass",
    description:
      "Strategy without architecture is aspiration. We build, alongside our clients, integrated, sequenced recommendations that simultaneously account for commercial viability, regulatory alignment, stakeholder dynamics, and implementation capacity.",
  },
  {
    title: "Execute",
    icon: "check",
    description:
      "We don't hand over a report and walk away. We work alongside your team to implement, resolve execution barriers, build capability, and deliver measurable outcomes.",
  },
] as const;

export const mission = {
  title: "Turning Ambition Into Action",
  body: "To close the gap between ambition and execution through integrated advisory that unlocks capital and turns Africa's energy, climate, and industrial potential into lasting value.",
};

export const vision = {
  title: "An Africa-Led Transition",
  body: "An energy-secure, climate-resilient, and industrialised Africa, where resources are responsibly stewarded, capital is mobilised for lasting impact, and African economies define their own future.",
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  /** Add the profile URL to show the LinkedIn icon as a link. */
  linkedin?: string;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    slug: "adedoyin-pearse",
    linkedin: "https://www.linkedin.com/in/adpearse",
    name: "Adedoyin Pearse",
    role: "Founder & Managing Principal",
    image: "/assets/our-team/Adedoyin_Pearse_Latest profile picture.jpg",
    imagePosition: "object-top",
    bio: [
      "Adedoyin Pearse brings 25 years of cross-border legal, venture investment, and strategic leadership to Africa's energy and industrial transition. Her edge lies in operating across every angle of transaction delivery: as counsel closing utility-scale power projects, investor underwriting emerging climate technology, and adviser shaping market policy.",
      "Her focus spans energy and infrastructure transactions, regulatory and policy advisory, climate finance and carbon markets, investment structuring and diligence, and the governance frameworks that make projects bankable and disclosure credible.",
      "Previously, as Global Investment Professional and Ventures Lead for Africa at Siemens Energy Ventures, she deployed over €50 million into green hydrogen, Power-to-X and climate technologies, and established the firm's venture presence in its leading African markets.",
      "As pioneer Country General Counsel at Siemens Nigeria, she led legal execution on anchor national infrastructure programmes, including the Presidential Power Initiative, the Geregu II expansion and the landmark 461 MW Azura-Edo IPP, Nigeria's first privately financed gas plant. She began her career in energy and tax advisory at Deloitte and EY.",
      "A 2024 Yale Climate Leaders Fellow, she serves on the NESG Industrial Policy Commission and the Lagos Climate Network Advisory Board, while mentoring clean-tech founders through Techstars, Village Capital, Rising Tide Africa and the AFARA Accelerator.",
      "She is a Fellow of the Chartered Institute of Taxation and the Institute of Chartered Secretaries of Nigeria, and holds an MBA from Cambridge Judge Business School, an LLM in Petroleum Law and Policy from the University of Dundee, and an LLB from the University of Lagos.",
    ],
  },
  {
    slug: "oluwatoyin-abegunde",
    linkedin: "https://www.linkedin.com/in/oluwatoyin-abegunde-28041054",
    name: "Oluwatoyin Abegunde",
    role: "Senior Consultant",
    image: "/assets/our-team/IMG_6570 - Oluwatoyin Abegunde.jpg",
    imagePosition: "object-top",
    bio: [
      "Oluwatoyin Abegunde brings 20 years of commercial leadership, techno-commercial analysis, and project origination to Africa's energy and industrial transition. Her edge lies in reading a project from both sides of the table: the engineering that has to work, and the numbers that have to close.",
      "Her focus spans market-entry strategy, techno-commercial feasibility, power project structuring and investment cases, and energy transition strategy that balances fossil fuel revenues against renewables build-out.",
      "As Executive Director of Sales at GE Vernova, she held P&L accountability for heavy-duty gas turbines across Southern and East Africa, led aeroderivative business development across Sub-Saharan Africa, and pioneered BOOT and lease-to-own deployment models for utilities, IPPs and sovereign stakeholders.",
      "As Head of Business Development at Siemens Limited Nigeria, she ran the industrial gas turbine portfolio. Earlier, as a strategy consultant at Accenture, she led national engagements including the Vision 2020 Strategy Plan for Nigeria's energy sector, the Nigerian Gas Infrastructure Master Plan and the NNPC Nigerian Content Development Strategy.",
      "She holds an Executive Education certificate in Circular Economy and Sustainability Strategies from Cambridge Judge Business School, an MBA from Business School Netherlands, and an MSc in Process Engineering and BSc in Chemical Engineering from the University of Lagos.",
    ],
  },
  {
    slug: "ofonama-archibong",
    linkedin: "https://www.linkedin.com/in/ofonama-archibong-893a822b/",
    // The design headings spell this "Ofonoma"; the bio text and photo file use "Ofonama". Confirm with the client.
    name: "Ofonama Archibong",
    role: "Senior Consultant",
    image: "/assets/our-team/PHOTO-2026-02-17-11-12-24 - Ofonama Archibong.jpg",
    imagePosition: "object-top",
    bio: [
      "Ofonama Archibong brings 14 years of clean hydrogen expertise, climate programme delivery and policy design to Africa's energy transition. His edge lies in working both ends of the same problem: a delivery perspective on policy and a policy perspective on delivery, where most transition programmes in the region fall apart.",
      "His focus spans hydrogen strategy and policy design, renewable energy project structuring, and delivering climate and clean energy programmes with government, donor, and multilateral counterparties.",
      "Under the GIZ H2-Diplo programme, he led the development of Nigeria's Draft National Hydrogen Policy and ran four closed review sessions of the zero draft. He also leads a bilateral donor-funded climate programme in Nigeria, covering its climate governance and clean energy portfolios.",
      "As Chief of Party for a USAID Power Africa health electrification alliance, he oversaw the electrification of 237 health facilities across Nigeria through four grantee organisations, secured follow-on funding through a local USAID mission buy-in, and led the multi-sector Coalition for the Sustainable Electrification of Primary Health Centers in Nigeria.",
      "He is a COREN-registered engineer and a member of the Nigerian Society of Engineers, the Institution of Mechanical Engineers and the Institution of Engineering and Technology, and holds a First-Class Honours degree in Mechanical Engineering from the University of Greenwich.",
    ],
  },
];

export const founderIntro = [
  "Adedoyin ('Doyin) Pearse is a senior energy executive, lawyer, and strategic adviser with over 25 years of experience across oil and gas, power, renewables, energy transition, climate-tech investing, and resource governance spanning Africa and global markets.",
  "She began her career in legal practice at The Law Union before building advisory expertise at EY and Deloitte, and went on to serve as pioneer General Counsel at Siemens Energy Nigeria, leading transaction advisory on landmark projects including the Azura Power Plant (461 MW), Geregu II (434 MW), and the Siemens Federal Government Presidential Power Initiative.",
  "As Global Investment Professional and Ventures Lead, Africa, at Siemens Energy Ventures, she contributed to over €50M in clean energy and climate-tech investments across hydrogen, Power-to-X, and carbon management. She founded ClimeNergies to bring that depth of experience directly to Africa's most consequential energy, resource, and industrial challenges.",
  "A 2024 Yale Climate Leaders Fellow, she holds an MBA from Cambridge Judge Business School, an LLM in Petroleum Law and Policy from the University of Dundee, and a law degree from the University of Lagos.",
];

/** Every issue of The ClimeNergies Digest, newest first. Covers are the first page of each PDF. */
export const digests = [
  {
    issue: "Issue No. 5",
    date: "August 2026",
    // DRAFT TITLE AND EXCERPT: drawn from the issue's top stories; needs client sign-off.
    title: "August 2026: Dangote Files for a $5bn IPO as the DRC Bans Copper and Cobalt Concentrate Exports",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. Dangote files for what would be the largest listing in African market history, Kinshasa forces value retention onshore, and Brent touches $95 as the Strait of Hormuz stays shut.",
    cover: "/assets/blog/covers/digest-2026-08.jpg",
    href: "/assets/blog/ClimeNergies Digest Aug 2026.pdf",
  },
  {
    issue: "Issue No. 4",
    date: "July 2026",
    // DRAFT TITLE AND EXCERPT: drawn from the issue's lead stories; needs client sign-off.
    title: "July 2026: Nigeria Puts 50 Oil Blocks Up for Bidding as Lagos Opens a Greenhouse Gas Registry",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. The licensing round finally reaches commercial bidding, Nigeria opens West Africa's largest lithium plant, and cobalt jumps around 130% on DRC export restrictions.",
    cover: "/assets/blog/covers/digest-2026-07.jpg",
    href: "/assets/blog/ClimeNergies Digest July 2026.pdf",
  },
  {
    issue: "Issue No. 3",
    date: "June 2026",
    // DRAFT TITLE: the design repeated May's headline here; this one is drawn from the June issue's lead stories.
    title: "June 2026: Washington and Tehran Agree to Reopen Hormuz as Dangote Tops 700,000 bpd",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. Washington and Tehran agree to reopen the Strait of Hormuz under a 60-day ceasefire, Dangote tops 700,000 bpd, and Nigeria's DisCos earn N597.55bn in Q1 despite persistent blackouts.",
    cover: "/assets/blog/covers/digest-2026-06.jpg",
    href: "/assets/blog/ClimeNergies Digest June 2026.pdf",
  },
  {
    issue: "Issue No. 2",
    date: "May 2026",
    title: "May 2026: Nigeria's Downstream War Goes to Court as Africa Bets on Financing Itself",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. Dangote moves to end fuel imports, fifteen states take over regulation of their power markets, and a new Gas Master Plan redraws the map.",
    cover: "/assets/blog/covers/digest-2026-05.jpg",
    href: "/assets/blog/ClimeNergies Digest May 2026.pdf",
  },
  {
    issue: "Issue No. 1",
    date: "April 2026",
    title: "April 2026: Nigeria Turns Net Exporter as the Hormuz Shock Redraws Global Energy",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. From the Dangote export milestone to the UAE's exit from OPEC and OPEC+ after six decades, Nigeria's energy landscape pivots in real time.",
    cover: "/assets/blog/covers/digest-2026-04.jpg",
    href: "/assets/blog/ClimeNergies Digest Apr 2026.pdf",
  },
];

const digestFor = (date: string) => {
  const digest = digests.find((d) => d.date === date);
  if (!digest) throw new Error(`No digest for ${date}`);
  return digest;
};

/** The three cards in the home page's "Latest" section, each with its own photo. */
export const insights = [
  { ...digestFor("April 2026"), image: "/assets/blog/iStock-1201144154.jpg" },
  { ...digestFor("May 2026"), image: "/assets/contact/Investment & Climate Finance (1).jpg" },
  { ...digestFor("June 2026"), image: "/assets/home-page/Latest Section 1 Image .jpg" },
];
