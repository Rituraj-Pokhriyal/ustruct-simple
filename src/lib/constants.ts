export const COMPANY = {
  name: "UStruct",
  fullName: "UStruct Steel Detailing",
  tagline: "Built on Precision.",
  subtitle: "STEEL DETAILING",
  email: "info@ustructdetailing.com",
  whatsapp: "+91 98765 43210",
  whatsappLink: "https://wa.me/919876543210",
  location: "Pune, India · Serving USA Market",
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
    title: "Miscellaneous Steel",
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
  { value: "98%",  label: "Accuracy Rate",      description: "Zero rework guarantee" },
  { value: "48hr", label: "Turnaround",          description: "Standard project delivery" },
  { value: "500+", label: "Projects Completed",  description: "Across USA & Canada" },
  { value: "15+",  label: "Years Experience",    description: "Combined team expertise" },
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
    description: "Drawings in DXF, DWG, PDF, and Tekla native formats. Revisions turned around in 24 hours. Your fabricator goes straight to work.",
  },
];

export const WHY_US = [
  {
    title: "48-Hour Turnaround",
    description: "Standard delivery in 48 hours. Rush jobs in 24. Your schedule never waits on detailing.",
    accent: "#1E90FF",
  },
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
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "UStruct delivered our 200,000 sq ft warehouse steel package in under 72 hours. The accuracy was flawless — not a single RFI from our fabricator. This is now our go-to detailing team.",
    author: "David Chen, PE",
    company: "Apex Structural Engineers",
    city: "Chicago, IL",
  },
  {
    id: 2,
    quote: "We switched to UStruct after being burned by another offshore firm. Night and day difference. They understand AISC, they communicate in real time, and their Tekla models are exceptional.",
    author: "Sarah Martinez",
    company: "Ironworks Fabrication Co.",
    city: "Houston, TX",
  },
  {
    id: 3,
    quote: "Three projects in, and I won't use anyone else. The 48-hour turnaround has changed how we bid work. We can take more jobs knowing detailing won't be the bottleneck.",
    author: "Mike Thompson",
    company: "Thompson Steel & Construction",
    city: "Atlanta, GA",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Chicago Logistics Hub",
    location: "Chicago, IL",
    type: "INDUSTRIAL",
    scope: "450,000 sq ft warehouse · Tekla 3D · 180 shop drawings",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    tags: ["Tekla Model", "Shop Drawings", "Erection Plan"],
  },
  {
    id: 2,
    title: "Houston Office Tower",
    location: "Houston, TX",
    type: "COMMERCIAL",
    scope: "18-story steel frame · Moment connections · BIM coordination",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    tags: ["Moment Frame", "BIM", "AISC"],
  },
  {
    id: 3,
    title: "Atlanta Distribution Center",
    location: "Atlanta, GA",
    type: "INDUSTRIAL",
    scope: "Pre-engineered metal building · Misc steel · Mezzanine",
    imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    tags: ["PEMB", "Mezzanine", "Misc Steel"],
  },
  {
    id: 4,
    title: "Dallas Mixed-Use Tower",
    location: "Dallas, TX",
    type: "MIXED-USE",
    scope: "Composite deck · Transfer beams · Connection details",
    imageUrl: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
    tags: ["Composite Deck", "Transfer Beams", "High-Rise"],
  },
  {
    id: 5,
    title: "Phoenix Cold Storage",
    location: "Phoenix, AZ",
    type: "INDUSTRIAL",
    scope: "Refrigerated warehouse · Drift analysis · 96 shop drawings",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    tags: ["Cold Storage", "Drift Design", "Shop Dwgs"],
  },
  {
    id: 6,
    title: "Seattle Office Campus",
    location: "Seattle, WA",
    type: "COMMERCIAL",
    scope: "3-building campus · Seismic SFRS · Full BIM package",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    tags: ["Seismic", "SFRS", "BIM Package"],
  },
];
