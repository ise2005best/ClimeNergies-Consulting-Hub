export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us", match: ["/about", "/team"] },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/blog", label: "Blog" },
] as const;

export const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const contactDetails = {
  email: "info@climenergiesconsulting.com",
  phone: "+234 (0) 808 585 5527",
  phoneHref: "tel:+2348085855527",
  address: [
    "2nd Floor, Alternative Bank building",
    "21, Admiralty Way",
    "Lekki Phase 1, Lagos, Nigeria.",
  ],
  linkedin: "https://www.linkedin.com/company/climenergies-consulting-hub/",
};

export const heroSlides = [
  {
    image: "/assets/carousel/Latest Heroslide 1 -.jpg",
    alt: "Two engineers in hard hats reviewing plans at a large solar installation",
    headline: ["From Policy to Projects.", "From Vision to Value."],
    subheadline:
      "Integrated advisory across Africa's energy, climate, resource and industrial transformation.",
    position: "object-center",
  },
  {
    image: "/assets/carousel/Connecting Capital Ecosystems Innovation (1).png",
    alt: "A team in green shirts discussing a wind turbine model around a table",
    headline: ["Advisory Built for Africa.", "Grounded in Execution."],
    subheadline:
      "From ambition to delivery across Africa's energy, climate, critical minerals and industrial economy.",
    position: "object-center",
  },
  {
    image: "/assets/carousel/Latest Heroslide 3.jpg",
    alt: "A glowing green globe centred on the African continent, connected by a network of points",
    headline: ["Connecting Capital,", "Innovation and Ecosystems."],
    subheadline:
      "We turn promising energy, climate and resource solutions into investable, scalable businesses.",
    position: "object-center",
  },
];

/** Hero copy for the inner pages. Each page's title, description and share image reuse it. */
export const pageHeroes = {
  about: {
    image: "/assets/about-page/Heropage Slide 3_shutterstock_533448412 (2).jpg",
    alt: "A light bulb reflecting wind turbines in front of a solar farm and green hills",
    title: ["About", "ClimeNergies."],
    subtitle: "Advisory Built for Africa's Sustainable Future.",
  },
  practiceAreas: {
    image: "/assets/practice-areas/Market Eco-System Development (2).jpg",
    alt: "A glowing green globe centred on the African continent, connected by a network of points",
    title: ["Connected Expertise."],
    subtitle: "Six specialist practices. Four threads. One integrated approach.",
  },
  blog: {
    image: "/assets/blog/iStock-1201144154.jpg",
    alt: "Colleagues in discussion around a tablet and printed charts",
    title: ["Our Blog."],
    subtitle: "Local insights and global perspective on energy, climate, critical minerals and industrial transition.",
  },
  contact: {
    image: "/assets/contact/Investment & Climate Finance (1).jpg",
    alt: "A green light bulb and a young leaf beside stacks of coins",
    title: ["Let's Talk."],
    subtitle: "Tell us what you're working on. We'll tell you how we can help.",
  },
};

/** The team page has no photo hero, just this heading. */
export const teamHeading = ["Led By Expertise.", "Backed By A Powerful Network."];

export type PracticeArea = {
  slug: string;
  title: string;
  /** Short summary used in the home page "What We Do" accordion. */
  description: string;
  tagline: string;
  intro: string[];
  coverage: { title: string; description: string }[];
  image: string;
  imageAlt: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "oil-gas-energy-transition",
    title: "Oil, Gas & Energy Transition",
    description:
      "We help governments, national oil companies, and investors navigate petroleum regulation, structure transactions across the value chain, monetise gas transition strategies, and position hydrocarbon assets for resilience and long-term value in a changing market.",
    tagline: "Managing Africa's Hydrocarbons for the Transition Ahead",
    intro: [
      "Oil and gas remain central to many African economies, funding public revenues, driving exports and powering growth. The challenge is not choosing between hydrocarbons and the transition, but managing both well in a changing global market.",
      "Tighter ESG mandates, DFIs pulling back from fossil fuel finance, decarbonisation pressure and stranded asset risk are reshaping the sector, and capital will follow those who adapt.",
      "We advise governments, national and international oil companies, investors and developers on managing, monetising and positioning hydrocarbon assets within this evolving landscape.",
    ],
    coverage: [
      {
        title: "Petroleum Regulatory Frameworks",
        description:
          "Advisory on petroleum regulatory frameworks, host community, upstream fiscal terms, midstream and downstream licensing, and equivalent frameworks across African jurisdictions.",
      },
      {
        title: "Petroleum Value Chain Advisory",
        description:
          "Legal, regulatory, and commercial advisory across the oil and gas value chain, covering upstream contracts (licensing, PSCs, JVs, farm-ins) and midstream gas/LNG export structures and downstream distribution frameworks alongside EPC, long-term service agreements, offtake structures, and project finance documentation.",
      },
      {
        title: "Gas Monetisation & Energy Transition",
        description:
          "Gas monetisation, domestic supply obligations, LNG structuring, flare reduction and commercialisation frameworks across Africa, with gas positioned for transition pathways, climate commitments, investor expectations and stranded asset risk.",
      },
      {
        title: "Regulatory, Compliance & Government Advisory",
        description:
          "Petroleum sector governance, fiscal regime design, regulatory reform, market entry, local content, anti-corruption, environmental, social and governance requirements, and engagement with governments and regulators across African markets.",
      },
    ],
    image:
      "/assets/practice-areas/Latest Oil Gas Energy Transition Practice Area .jpg",
    imageAlt:
      "Pressurised storage tanks and pipework at a gas processing plant",
  },
  {
    slug: "power-energy-access",
    title: "Power & Energy Access",
    description:
      "We advise governments, utilities, developers and investors on sector reform, regulation, renewables integration and transition finance. Working across the power value chain, from grid-scale generation to off-grid access, we help build bankable markets and close clean energy deals.",
    tagline: "Derisking Africa's Power Systems, From Policy to Execution.",
    intro: [
      "Africa's power gap is not just a technology challenge. Fragmented regulation, weak offtake structures, grid constraints, and limited legal certainty continue to hold back investment and delivery.",
      "We advise governments, investors, developers, utilities, grid operators, and development finance institutions on the legal, regulatory, and commercial frameworks needed to finance and deliver power projects across conventional generation, renewables, and energy access.",
    ],
    coverage: [
      {
        title: "Power Sector Reform & Electricity Regulation",
        description:
          "Electricity sector regulation, market structure, tariff reform, and regulatory frameworks governing generation, transmission, and distribution. Legal and institutional design of independent regulatory bodies, electricity market rules, and grid access frameworks.",
      },
      {
        title: "Project Development & Procurement",
        description:
          "Advisory across conventional generation, renewables, and gas-to-power from permitting through procurement, financing, construction, and commissioning. Advisory on competitive procurement programs, auction design, and standardized PPA frameworks.",
      },
      {
        title: "Power Purchase Agreements & Offtake Structures",
        description:
          "Drafting, review, and negotiation of power purchase agreements, offtake arrangements, and grid connection agreements, including bankability advisory for DFI and commercial lender financing.",
      },
      {
        title: "Energy Access & Distributed Systems",
        description:
          "Advisory on energy access frameworks, mini-grid licensing, rural electrification policy, and the commercial and financing structures supporting last-mile energy access delivery.",
      },
      {
        title: "Clean Energy Finance & Investment Structuring",
        description:
          "Legal and commercial structuring of clean energy investments, project finance, equity structures, DFI requirements, green bond issuance, and blended finance for renewable energy projects.",
      },
      {
        title: "Energy Transition Policy & NDC Implementation",
        description:
          "National energy transition plans, Nationally Determined Contribution (NDC) implementation frameworks, and the legal and regulatory reforms needed to accelerate clean energy deployment, including just transition frameworks and community benefit sharing.",
      },
      {
        title: "Grid Infrastructure & Transmission",
        description:
          "Grid infrastructure development, open access and wheeling frameworks, transmission licensing, and regulatory structures governing grid expansion, interconnection, and regional power pooling.",
      },
      {
        title: "Gas-to-Power",
        description:
          "Legal, regulatory, and commercial frameworks governing gas-to-power projects; gas supply agreements, power plant development, and integration of gas-fired generation into national power sector transition plans as a bridge fuel.",
      },
      {
        title: "Emerging Technologies",
        description:
          "Legal, regulatory, and commercial advisory on green hydrogen projects, power-to-x value chains, battery energy storage (BESS), offshore wind, and distributed energy resources across African markets.",
      },
    ],
    image: "/assets/practice-areas/image10.jpg",
    imageAlt: "Aerial view of a utility-scale solar farm and its substation",
  },
  {
    slug: "climate-policy-finance-carbon-markets",
    title: "Climate Policy, Finance & Carbon Markets",
    description:
      "We help governments, investors and corporates turn climate priorities into investable, low-carbon and resilient outcomes, from policy and decarbonisation pathways to carbon markets, Article 6 and climate finance.",
    tagline: "Turning Climate Priorities into Investable, Resilient Outcomes.",
    intro: [
      "We help governments, investors, corporates and project developers navigate the fast-evolving climate economy, bridging national ambition and private capital, shaped by local realities and international climate standards.",
      "Our work spans policy and decarbonization planning, investment structuring, and carbon market transactions.",
    ],
    coverage: [
      {
        title: "Climate Policy, NDCs & Strategic Frameworks",
        description:
          "Advising governments and institutions on translating Nationally Determined Contributions (NDCs) and long-term climate strategies into actionable policies, sector roadmaps, and investable project pipelines.",
      },
      {
        title: "Carbon Market Strategy & Article 6 Advisory",
        description:
          "Legal, strategy, and transaction advisory for compliance and voluntary carbon markets. Guidance on Article 6 mechanisms, ITMO trading structures, national carbon registries, host-country approvals, and sovereign carbon strategies.",
      },
      {
        title: "Climate Finance Structuring & Capital Mobilization",
        description:
          "Commercial and legal structuring for climate investments: blended finance, green and sustainability-linked bonds, debt-for-climate swaps, and DFI co-financing frameworks designed to crowd in commercial capital.",
      },
      {
        title: "Adaptation, Resilience & Just Transition",
        description:
          "Advisory on integrating physical and transition risk assessments into asset valuation, designing resilient infrastructure frameworks, and structuring just transition plans with clear community benefit-sharing models.",
      },
      {
        title:
          "Corporate Climate Risk & Carbon Border Adjustment (CBAM) Readiness",
        description:
          "Helping enterprises and corporates assess climate risk, design internal carbon pricing, and prepare for CBAM.",
      },
      {
        title: "Decarbonisation & Net Zero Pathways",
        description:
          "Baseline emissions modelling, science-based target setting, and actionable decarbonisation pathways across energy-intensive, industrial, and extractive operations.",
      },
    ],
    image: "/assets/practice-areas/image6.jpg",
    imageAlt:
      "Seedlings growing from stacks of coins beside a moss globe marked CO2",
  },
  {
    slug: "esg-sustainability-disclosure",
    title: "ESG & Sustainability Disclosure",
    description:
      "We help corporates, industrials and financial institutions build ESG frameworks and disclosures that stand up to investor, lender and regulator scrutiny, from materiality and reporting to climate risk and supply chain compliance.",
    tagline: "Moving from ESG Commitments to Credible, Verifiable Disclosure.",
    intro: [
      "For African businesses seeking international capital, supply chain access, or DFI partnerships, ESG performance and disclosure are no longer differentiators. They are conditions of entry.",
      "We help clients cut through regulatory complexity to build material, audit-ready ESG frameworks and disclosures that meet domestic mandates and international standards, delivering real value without draining resources.",
    ],
    coverage: [
      {
        title: "ESG Strategy & Framework Design",
        description:
          "Advisory on materiality assessments, governance structures, and strategic roadmaps aligned with GRI, SASB, ISSB, and sector-specific standards relevant to African energy, extractives, and industrial enterprises.",
      },
      {
        title: "Sustainability Reporting & Compliance Readiness",
        description:
          "Sustainability report development, disclosure framework alignment, and assurance readiness under IFRS S1 and S2 and GRI, including the mandatory disclosure requirements reaching Nigerian and other African businesses through international partners, supply chains, and capital relationships.",
      },
      {
        title: "Climate Risk & Scenario Analysis",
        description:
          "Physical and transition risk assessment, scenario analysis to support IFRS S2 and investor disclosures, with climate risk built into governance and reporting.",
      },
      {
        title: "Supply Chain ESG & Trade Compliance",
        description:
          "ESG due diligence and supply chain frameworks for international trade mandates, including the EU CSRD and CSDDD, and emissions reporting for the Carbon Border Adjustment Mechanism (CBAM).",
      },
      {
        title: "Executive & Board Capacity Building",
        description:
          "Training for boards, C-suite executives, and sustainability leads on climate governance, ESG fiduciary duties, disclosure standards, and regulatory risk across Nigeria and sub-Saharan Africa.",
      },
    ],
    image: "/assets/practice-areas/image36.jpg",
    imageAlt:
      "A professional reviewing sustainability data dashboards across several monitors",
  },
  {
    slug: "critical-minerals-industrial-value-chains",
    title: "Critical Minerals & Industrial Value Chains",
    description:
      "We advise governments, investors, and businesses on critical minerals strategy, policy, and regulation; responsible resource development; investment; and the industrial value chains it can enable to strengthen local value creation.",
    tagline: "From Resource Endowment to Industrial Value.",
    intro: [
      "Africa holds a significant share of the world's critical minerals. Whether they build industrial value or leave as raw material depends on governance: licensing, fiscal terms, value-addition rules and industrial policy.",
      "We advise governments, investors and developers on mineral policy, licensing and fiscal design, investment structuring, local processing and community benefit sharing, turning resources into manufacturing capability and export competitiveness.",
    ],
    coverage: [
      {
        title: "Mineral Policy, Licensing & Institutional Reform",
        description:
          "Advisory on national critical mineral strategies, licensing frameworks, royalty and fiscal regime design, environmental permitting, and the regulatory reforms needed to establish investment-ready, responsibly governed mining sectors across African jurisdictions.",
      },
      {
        title: "Investment Structuring & Transactions",
        description:
          "Mining investment structuring, joint venture agreements, offtake agreements, project finance documentation, and M&A advisory across critical minerals projects in African markets.",
      },
      {
        title: "Green Industrialization & Value Addition",
        description:
          "Advisory on domestic processing and beneficiation requirements, green manufacturing frameworks, clean technology supply chains, industrial policy, special economic zones, and the trade instruments supporting export-competitive, low-carbon industrial growth.",
      },
      {
        title: "ESG, Social License & Responsible Mining",
        description:
          "Advisory on ESG frameworks and human rights due diligence for mining, aligned with IRMA, ICMM and the Equator Principles, plus community development agreements, FPIC, resettlement and benefit-sharing models that build a lasting social licence to operate.",
      },
      {
        title: "Trade & Export Frameworks",
        description:
          "Advisory on trade agreements, export regulations, and the bilateral and multilateral frameworks governing critical mineral trade, including alignment with AfCFTA, EU Critical Raw Materials Act requirements, and US Inflation Reduction Act supply chain provisions.",
      },
    ],
    image:
      "/assets/practice-areas/Latest Critical Minerals and Industrial Value Chains.jpg",
    imageAlt: "Crushed ore travelling along a conveyor belt at a mine",
  },
  {
    slug: "ventures-innovation",
    title: "Ventures & Innovation",
    description:
      "We advise founders, investors, accelerators, and corporates on venture structuring, investment readiness, capital raising, market entry, and partnership frameworks, turning promising energy and climate solutions into investable, scalable businesses.",
    tagline: "From Promising Ventures to Investable Businesses.",
    intro: [
      "Africa's energy and climate innovation is not short of ideas or founders. The challenge is turning promising solutions into investable, scalable businesses with the right strategy, governance, commercial model, and regulatory pathway.",
      "We advise founders, investors, accelerators, and corporates on building investment-ready ventures and the ecosystems that enable them to scale.",
    ],
    coverage: [
      {
        title: "Venture Strategy & Legal Support",
        description:
          "Legal support for early-stage and growth-stage ventures: corporate structuring, founder arrangements, governance frameworks, commercial agreements, intellectual property protection, and the legal foundations that enable ventures to attract investment and scale.",
      },
      {
        title: "Investment Readiness & Capital Raising",
        description:
          "Readiness assessment, business model and financial review, data room preparation, term sheet negotiation, and preparation for DFI, venture capital, and strategic investor diligence and capital raising.",
      },
      {
        title: "Market Entry Advisory",
        description:
          "Market assessment, regulatory mapping, licensing and permit requirements, and entry strategy for ventures and international companies expanding across African markets.",
      },
      {
        title: "Partnership & Collaboration Frameworks",
        description:
          "Joint venture structuring, technology licensing agreements, distribution and agency arrangements, offtake structures, and the commercial frameworks that govern partnerships between international and African market participants.",
      },
      {
        title: "Ecosystem & Program Advisory",
        description:
          "Advisory to accelerators, incubators, innovation hubs, and development partners on program design, deal flow quality, mentorship structures, and the capital and capability infrastructure that enables African ventures to scale.",
      },
    ],
    image: "/assets/practice-areas/image18.jpg",
    imageAlt:
      "Hands on a laptop keyboard beneath venture capital and growth icons",
  },
];

export const practiceAreaHref = (slug: string) => `/practice-areas/${slug}`;

export const getPracticeArea = (slug: string) =>
  practiceAreas.find((area) => area.slug === slug);

/** The four lenses applied across every practice area. */
export const practiceLenses = [
  {
    title: "Regulatory",
    description: "The rules, institutions and governance that enable markets.",
  },
  {
    title: "Policy",
    description:
      "Strategies, reforms and public-sector interventions that shape industries.",
  },
  {
    title: "Strategy",
    description: "Commercial, operational, and implementation pathways.",
  },
  {
    title: "Capital",
    description:
      "Financing structures, investment mobilization and bankability.",
  },
];

export const coreValues = [
  {
    title: "Sustainability",
    description:
      "Every recommendation we make is a commitment to the future. We design solutions that are environmentally responsible, resource-efficient, and built for long-term resilience.",
  },
  {
    title: "Integrity & Excellence",
    description:
      "We uphold the highest ethical standards, transparency, and rigor, delivering insights that our clients can trust without reservation.",
  },
  {
    title: "Collaboration & Partnership",
    description:
      "We build the best solutions with clients, not for them. We work hand in hand with clients and partners to co-create strategies that reflect local realities, align stakeholder interests, and drive measurable, sustainable outcomes.",
  },
  {
    title: "African Context, Global Standards",
    description:
      "We ground solutions in local market realities while aligning with global standards and markets.",
  },
  {
    title: "Knowledge & Capacity Building",
    description:
      "We build local expertise and capability for Africa's energy, climate, resource, and industrial future.",
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
      "Investors, VC funds, commercial and regional banks, project developers, IPPs, clean & climate tech innovators, accelerators, and innovation hubs.",
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
      "Every engagement starts with a close diagnosis of your context: your market position, access to capital, and the regulatory and political forces shaping your options. Then we build your strategy.",
  },
  {
    title: "Architect",
    icon: "compass",
    description:
      "Strategy without architecture is only aspiration. Together with our clients, we build plans that hold up commercially, fit the regulation, bring stakeholders along and can actually be delivered.",
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
  body: "To close the gap between ambition and execution through integrated advisory that unlocks capital and turns Africa's energy, climate, resource, and industrial potential into lasting value.",
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
      "She is a Fellow of the Chartered Institute of Taxation of Nigeria, Associate member of the Institute of Chartered Secretaries & Administrators of Nigeria. She holds an MBA from Universite Of Cambridge, an LLM in Petroleum Law and Policy from the University of Dundee, Scotland and an LLB from the University of Lagos.",
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
      "Oluwatoyin Abegunde is a senior energy executive and strategic advisor with over 22 years of experience driving commercial strategy, investment opportunities, and business growth across Sub-Saharan Africa's energy and power infrastructure sectors. She brings a distinctive combination of engineering expertise, commercial leadership, and strategic insight to board-level discussions on growth, capital deployment, risk, partnerships, and energy transition.",
      "Her advisory expertise spans market entry and expansion, project bankability, techno-commercial evaluation, transaction structuring, strategic partnerships, and energy transition strategy. She helps boards, investors, developers, OEMs, and public-sector stakeholders assess complex opportunities, navigate market and execution risks, align stakeholder interests, and translate strategic ambition into commercially sustainable outcomes.",
      "As Executive Director of Sales at GE Vernova, she held P&L accountability for heavy-duty gas turbines across Southern and East Africa, led aeroderivative business development across Sub-Saharan Africa, pioneered BOOT and lease-to-own deployment models, significantly expanded the regional pipeline within two years, and secured the company's first small-scale LNG project in the region. At Siemens Limited Nigeria, she led the industrial gas turbine portfolio and facilitated the partnership underpinning Eko Disco's preferred-bidder selection.",
      "Previously, at Accenture, she contributed to landmark national initiatives, including Nigeria's Vision 2020 Energy Sector Strategy, the Nigerian Gas Infrastructure Master Plan, and the NNPC Nigerian Content Development Strategy.",
      "Oluwatoyin holds BSc and MSc degrees from the University of Lagos, an MBA from Business School Netherlands, a Cambridge Judge certificate in Circular Economy and Sustainability Strategies, and is a graduate of McKinsey Academy's Black Executive Leadership Program.",
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

/** Shown in semibold where it opens the founder intro on the home page. */
export const founderFullName = "Adedoyin ('Doyin') Pearse";

export const founderIntro = [
  `${founderFullName} is a senior energy executive, lawyer, and strategic adviser with over 25 years of experience across oil and gas, power, renewables, energy transition, climate-tech investing, and resource governance spanning Africa and global markets.`,
  "She began her career in law practice at The Law Union before building advisory expertise at EY and Deloitte, and went on to serve as pioneer Country General Counsel at Siemens Nigeria, leading transaction advisory on landmark projects including the Azura Power Plant (461 MW), Geregu II (434 MW), and the Siemens Federal Government Presidential Power Initiative.",
  "As Global Investment Professional and Ventures Lead, Africa, at Siemens Energy Ventures, she contributed to over €50M in clean energy and climate-tech investments across hydrogen, Power-to-X, and carbon management. She founded ClimeNergies to bring that depth of experience directly to Africa's most consequential energy, resource, and industrial challenges.",
  "A 2024 Yale Climate Leaders Fellow, she holds an MBA from the University of Cambridge, an LLM in Petroleum Law and Policy from the University of Dundee, Scotland, and a law degree from the University of Lagos.",
];

/** Every issue of The ClimeNergies Digest, newest first. Covers are the first page of each PDF. */
export const digests = [
  {
    issue: "Issue No. 6",
    date: "September 2026",
    // DRAFT TITLE AND EXCERPT: drawn from the issue's top stories; needs client sign-off.
    title: "September 2026: Nigeria Wins the Mambilla Arbitration as Dangote Breaks Ground in Kenya",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. Nigeria sees off Sunrise's $400m claim over the 3,050MW Mambilla hydropower project, Dangote breaks ground on a $16bn East African refinery in Kenya, and Brent tops $113 as the IEA warns the oil supply shock is deepening.",
    cover: "/assets/blog/covers/digest-2026-09.jpg",
    href: "/assets/blog/ClimeNergies Digest Sept 2026.pdf",
  },
  {
    issue: "Issue No. 5",
    date: "August 2026",
    // DRAFT TITLE AND EXCERPT: drawn from the issue's top stories; needs client sign-off.
    title:
      "August 2026: Dangote Files for a $5bn IPO as the DRC Bans Copper and Cobalt Concentrate Exports",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. Dangote files for what would be the largest listing in African market history, Kinshasa forces value retention onshore, and Brent touches $95 as the Strait of Hormuz stays shut.",
    cover: "/assets/blog/covers/digest-2026-08.jpg",
    href: "/assets/blog/ClimeNergies Digest Aug 2026.pdf",
  },
  {
    issue: "Issue No. 4",
    date: "July 2026",
    // DRAFT TITLE AND EXCERPT: drawn from the issue's lead stories; needs client sign-off.
    title:
      "July 2026: Nigeria Puts 50 Oil Blocks Up for Bidding as Lagos Opens a Greenhouse Gas Registry",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. The licensing round finally reaches commercial bidding, Nigeria opens West Africa's largest lithium plant, and cobalt jumps around 130% on DRC export restrictions.",
    cover: "/assets/blog/covers/digest-2026-07.jpg",
    href: "/assets/blog/ClimeNergies Digest July 2026.pdf",
  },
  {
    issue: "Issue No. 3",
    date: "June 2026",
    // DRAFT TITLE: the design repeated May's headline here; this one is drawn from the June issue's lead stories.
    title:
      "June 2026: Washington and Tehran Agree to Reopen Hormuz as Dangote Tops 700,000 bpd",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. Washington and Tehran agree to reopen the Strait of Hormuz under a 60-day ceasefire, Dangote tops 700,000 bpd, and Nigeria's DisCos earn N597.55bn in Q1 despite persistent blackouts.",
    cover: "/assets/blog/covers/digest-2026-06.jpg",
    href: "/assets/blog/ClimeNergies Digest June 2026.pdf",
  },
  {
    issue: "Issue No. 2",
    date: "May 2026",
    title:
      "May 2026: Nigeria's Downstream War Goes to Court as Africa Bets on Financing Itself",
    excerpt:
      "The ClimeNergies Digest Monthly News Roundup. Dangote moves to end fuel imports, fifteen states take over regulation of their power markets, and a new Gas Master Plan redraws the map.",
    cover: "/assets/blog/covers/digest-2026-05.jpg",
    href: "/assets/blog/ClimeNergies Digest May 2026.pdf",
  },
  {
    issue: "Issue No. 1",
    date: "April 2026",
    title:
      "April 2026: Nigeria Turns Net Exporter as the Hormuz Shock Redraws Global Energy",
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

/** The three cards in the "Insights & Perspective" section. They show the same covers as the blog page. */
export const insights = [
  digestFor("September 2026"),
  digestFor("August 2026"),
  digestFor("July 2026"),
];
