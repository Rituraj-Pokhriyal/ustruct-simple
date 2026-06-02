export const COMPANY = {
  name: "UStruct",
  fullName: "UStruct Steel Detailing",
  tagline: "Built on Precision.",
  subtitle: "STEEL DETAILING",
  email: "info@ustructdetailing.com",
  whatsapp: "+91 98765 43210",
  whatsappLink: "https://wa.me/919876543210",
  location: "Delhi, India · Serving USA Market",
  linkedin: "https://linkedin.com/company/ustruct",
};

export const SERVICES = [
  {
    id: 1,
    title: "Structural Steel Detailing",
    slug: "structural-steel",
    icon: "STR",
    description: "Comprehensive shop drawings for structural steel frames — beams, columns, braces, and connections to AISC standards.",
    bullets: [
      "W-section, HSS, and plate girder detailing",
      "AISC 360-22 compliant connections",
      "Full bolt and weld specifications",
      "Material list and BOM included",
    ],
    category: "STRUCTURAL",
  },
  {
    id: 2,
    title: "Miscellaneous Steel Detailing",
    slug: "misc-steel",
    icon: "MSC",
    description: "Stairs, handrails, ladders, catwalks, and architectural steel elements detailed to exact specifications.",
    bullets: [
      "Stair stringers, treads, and landings",
      "Pipe and tube railings",
      "Grating and floor plates",
      "Custom ornamental steel",
    ],
    category: "MISC",
  },
  {
    id: 3,
    title: "Shop Drawings",
    slug: "shop-drawings",
    icon: "SHD",
    description: "Fabrication-ready shop drawings that go straight to the shop floor — clear, precise, and contractor-approved.",
    bullets: [
      "Standard DXF and DWG formats",
      "Piece mark schedule included",
      "Weld symbol callouts",
      "Finish and coating notes",
    ],
    category: "DRAWINGS",
  },
  {
    id: 4,
    title: "GA Drawings",
    slug: "ga-drawings",
    icon: "GAD",
    description: "General arrangement drawings showing member layout, grids, and elevations for coordination and approval.",
    bullets: [
      "Plan, elevation, and section views",
      "Column schedule and grid lines",
      "Anchor bolt plans",
      "Coordination with architectural drawings",
    ],
    category: "DRAWINGS",
  },
  {
    id: 5,
    title: "Erection Drawings",
    slug: "erection-drawings",
    icon: "ERC",
    description: "Field erection plans with piece marks, sequence, and field connection details for efficient site erection.",
    bullets: [
      "Erection sequences and phasing",
      "Field bolt and weld details",
      "Lifting point callouts",
      "Safety and tolerance notes",
    ],
    category: "DRAWINGS",
  },
  {
    id: 6,
    title: "Connection Details",
    slug: "connection-details",
    icon: "CON",
    description: "Moment, shear, and axial connection designs detailed and drawn to resist specified loads per AISC.",
    bullets: [
      "Bolted and welded moment connections",
      "Shear tabs and clip angles",
      "Column base plates and anchor rods",
      "Seismic connection details",
    ],
    category: "STRUCTURAL",
  },
  {
    id: 7,
    title: "Tekla 3D Modeling",
    slug: "tekla-modeling",
    icon: "TKL",
    description: "Full LOD 400 3D models in Tekla Structures — the industry standard for steel BIM.",
    bullets: [
      "Complete 3D steel model",
      "Automated drawing generation",
      "CNC-ready DSTV/NC files",
      "IFC and native Tekla formats",
    ],
    category: "BIM",
  },
  {
    id: 8,
    title: "BIM Coordination",
    slug: "bim-coordination",
    icon: "BIM",
    description: "Multi-discipline BIM coordination, clash detection, and IFC model federation for seamless project delivery.",
    bullets: [
      "IFC model export and import",
      "Clash detection with MEP/architecture",
      "Coordination meeting support",
      "BIM execution plan compliance",
    ],
    category: "BIM",
  },
];

export const STATS = [
  { value: "98%",   label: "Accuracy Rate",       description: "Zero rework guarantee" },
  { value: "500+",  label: "Projects Completed",   description: "Across USA & Canada" },
  { value: "2.5M+", label: "Sq Ft Detailed",       description: "Structural steel area" },
  { value: "15+",   label: "Years Experience",      description: "Combined team expertise" },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Brief & Scope",
    description: "Send us your IFC, Revit, or contract drawings. We review scope, clarify questions, and confirm the deliverable list — all within 4 business hours.",
  },
  {
    number: "02",
    title: "Tekla Modeling",
    description: "Our Tekla-certified engineers build a precise 3D model — every beam, column, connection, and plate modeled to LOD 400.",
  },
  {
    number: "03",
    title: "Detailing",
    description: "Connections designed and detailed per AISC 360-22. Shop drawings generated directly from the 3D model — no manual redraw, zero errors.",
  },
  {
    number: "04",
    title: "QA Review",
    description: "A senior engineer reviews every drawing against the model and original specs. Our 60-point checklist catches everything before it leaves the office.",
  },
  {
    number: "05",
    title: "Delivery",
    description: "Drawings delivered in DXF, DWG, PDF, and Tekla native formats. Revisions turned around promptly. Your fabricator goes straight to work.",
  },
];

export const WHY_US = [
  {
    title: "USA Timezone Sync",
    description: "Our team overlaps with EST and CST business hours. Real-time coordination, not next-day email.",
    accent: "#1E90FF",
  },
  {
    title: "AISC 360-22 Standards",
    description: "Every connection, every drawing — designed and detailed per AISC 360-22 and IBC.",
    accent: "#FF6B1A",
  },
  {
    title: "98% First-Pass Accuracy",
    description: "60-point internal QA checklist. We find it before your engineer does.",
    accent: "#FF6B1A",
  },
  {
    title: "40% Cost Savings",
    description: "Premium USA-grade quality at a fraction of domestic detailing costs. No compromise.",
    accent: "#1E90FF",
  },
  {
    title: "Tekla Structures Only",
    description: "We use one tool and we use it perfectly. No AutoCAD workarounds — pure Tekla LOD 400.",
    accent: "#FF6B1A",
  },
  {
    title: "Round-the-Clock Support",
    description: "We provide support across USA time zones — EST, CST, PST. Your project never waits.",
    accent: "#1E90FF",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "UStruct delivered our 200,000 sq ft warehouse steel package with flawless accuracy — not a single RFI from our fabricator. This is now our go-to detailing team.",
    author: "David Chen, PE",
    company: "Apex Structural Engineers",
    city: "Chicago, IL",
    active: true,
  },
  {
    id: 2,
    quote: "We switched to UStruct after being burned by another offshore firm. Night and day difference. They understand AISC, they communicate in real time, and their Tekla models are exceptional.",
    author: "Sarah Martinez",
    company: "Ironworks Fabrication Co.",
    city: "Houston, TX",
    active: true,
  },
  {
    id: 3,
    quote: "Three projects in, and I won't use anyone else. The turnaround has changed how we bid work. We can take more jobs knowing detailing won't be the bottleneck.",
    author: "Mike Thompson",
    company: "Thompson Steel & Construction",
    city: "Atlanta, GA",
    active: true,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Structural Steel Package",
    location: "Chicago, IL",
    type: "INDUSTRIAL",
    scope: "450,000 sq ft warehouse · Tekla 3D · 180 shop drawings",
    imageUrl: "/portfolio/structure/MODEL_SNAP.png",
    tags: ["Tekla Model", "Shop Drawings", "Erection Plan"],
    active: true,
  },
  {
    id: 2,
    title: "Houston Office Tower",
    location: "Houston, TX",
    type: "COMMERCIAL",
    scope: "18-story steel frame · Moment connections · BIM coordination",
    imageUrl: "/portfolio/structure/MODEL_SNAP1.png",
    tags: ["Moment Frame", "BIM", "AISC"],
    active: true,
  },
  {
    id: 3,
    title: "Miscellaneous Steel Package",
    location: "Atlanta, GA",
    type: "INDUSTRIAL",
    scope: "Stairs · Handrails · Catwalks · Mezzanine",
    imageUrl: "/portfolio/misc/MISC.png",
    tags: ["Misc Steel", "Stair", "Handrail"],
    active: true,
  },
  {
    id: 4,
    title: "Dallas Mixed-Use Tower",
    location: "Dallas, TX",
    type: "MIXED-USE",
    scope: "Composite deck · Transfer beams · Connection details",
    imageUrl: "/portfolio/structure/MODEL_SNAP2.png",
    tags: ["Composite Deck", "Transfer Beams", "High-Rise"],
    active: true,
  },
  {
    id: 5,
    title: "Stair & Railing System",
    location: "Phoenix, AZ",
    type: "INDUSTRIAL",
    scope: "Stair stringers · Guardrails · Grating floors",
    imageUrl: "/portfolio/misc/MISC1.png",
    tags: ["Stair", "Guardrail", "Misc Steel"],
    active: true,
  },
  {
    id: 6,
    title: "Seattle Office Campus",
    location: "Seattle, WA",
    type: "COMMERCIAL",
    scope: "3-building campus · Seismic SFRS · Full BIM package",
    imageUrl: "/portfolio/structure/MODEL_SNAP3.png",
    tags: ["Seismic", "SFRS", "BIM Package"],
    active: true,
  },
];
