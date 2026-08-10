export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  image: string;
  technicalSpecs: Record<string, string>;
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "design-engineering",
    slug: "design-engineering",
    title: "Design & Engineering",
    shortDescription: "Structural engineering, detailing, and architectural planning with advanced 3D CAD and Tekla modeling.",
    overview: "Our Design & Engineering division uses state-of-the-art modeling software (including Tekla Structures and STAAD.Pro) to deliver optimized, value-engineered solutions for complex steel structures. We transform architectural concepts into precise fabrication drawings, ensuring structural safety, compliance with IS/AISC codes, and seamless site execution. By planning every beam, column, and connection in 3D, we identify and eliminate design conflicts before fabrication starts, ensuring high efficiency and cost savings.",
    benefits: [
      "Advanced 3D modeling with Tekla Structures for error-free fabrication",
      "Strictest compliance with IS (Indian Standards), AISC, and MBMA guidelines",
      "Value engineering to optimize steel weight without compromising safety",
      "High-speed generation of accurate shop drawings and bill of materials (BOM)",
      "Comprehensive structural analysis and load testing under extreme conditions"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
    technicalSpecs: {
      "Modeling Software": "Tekla Structures, AutoCAD, STAAD.Pro",
      "Design Standard Codes": "IS 800:2007, AISC 360, MBMA 2010",
      "Deliverables": "3D Models, GA Drawings, Shop Detailing Sheets, Anchor Bolt Plans",
      "Turnaround Time": "2-4 Weeks (depending on project scale)",
      "Quality Assurance": "Double-peer review by certified structural engineers"
    },
    faqs: [
      {
        question: "What modeling software do you use for structural steel design?",
        answer: "We primarily use Tekla Structures for detailed 3D structural modeling and detailing, STAAD.Pro for structural analysis and load calculations, and AutoCAD for 2D drafting and planning."
      },
      {
        question: "How do you optimize the steel weight of a building?",
        answer: "Through value engineering, we perform advanced stress analysis and customize member shapes (tapered vs. straight columns/rafters) to place steel exactly where needed, reducing overall steel tonnage while keeping full safety factors."
      }
    ]
  },
  {
    id: "primary-steel-structure-manufacturing",
    slug: "primary-steel-structure-manufacturing",
    title: "Primary Steel Structure Manufacturing",
    shortDescription: "Precision fabrication of built-up sections, columns, rafters, and heavy frames for primary structural loads.",
    overview: "We manufacture heavy-duty primary steel components—including columns, rafter sections, crane beams, and portal frames—in our state-of-the-art fabrication facility. Using high-tensile steel plates and automated submerged arc welding (SAW), we create built-up members that deliver superior load-bearing capacity and seismic resistance. Every member undergoes strict quality control, non-destructive testing (NDT), and surface preparation before delivery.",
    benefits: [
      "Automated plate cutting and Submerged Arc Welding (SAW) for deep penetration",
      "Use of high-grade steel plates (E250/E350 Grade) with mill test certificates",
      "Custom fabrication of tapered and straight built-up sections to match structural plans",
      "Rigorous Non-Destructive Testing (NDT) including Ultrasonic and Dye Penetrant testing",
      "High-performance anti-corrosive primer and finish paint systems"
    ],
    image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1785704882/Primary-Steel-Structure_xa68xr.gif",
    technicalSpecs: {
      "Material Grade": "IS 2062 E250 / E350 BR/BO, ASTM A572 Grade 50",
      "Welding Standards": "AWS D1.1 / ASNT Level II certified welders",
      "Surface Treatment": "Shot blasting to Sa 2.5 standard, epoxy-based primers",
      "Section Types": "Built-up H-beams, I-beams, Box columns, crane runway beams",
      "Testing Protocols": "Ultrasonic Testing (UT), Magnetic Particle Testing (MPT), Visual Inspection"
    },
    faqs: [
      {
        question: "What steel grades do you use for primary columns and rafters?",
        answer: "We use high-tensile steel plates complying with IS 2062 E250 and E350 grades, as well as ASTM standards, depending on the client's specifications and load requirements."
      },
      {
        question: "How do you ensure the quality of welds in primary members?",
        answer: "All our welders are certified to AWS D1.1 standards. We perform Ultrasonic Testing (UT) on 100% of full-penetration butt joints, alongside daily visual and dye-penetrant testing."
      }
    ]
  },
  {
    id: "secondary-steel-structure-manufacturing",
    slug: "secondary-steel-structure-manufacturing",
    title: "Secondary Steel Structure Manufacturing",
    shortDescription: "Fabrication of secondary members including purlins, girts, eave struts, bracing, and connection plates.",
    overview: "Secondary structural members provide essential stability and support for roofing and wall cladding. We manufacture high-precision purlins, girts, eave struts, sag rods, flange bracings, and anchor bolts. By utilizing cold-formed steel and advanced CNC punching machines, we guarantee perfect hole alignment and dimensions. This ensures that the secondary framework connects flawlessly to the primary columns and rafters on site, accelerating the erection process.",
    benefits: [
      "CNC cold-formed fabrication for precise dimensions and pre-punched holes",
      "High corrosion resistance with pre-galvanized coils (zinc coating options)",
      "Perfect compatibility with main steel frame, reducing on-site modifications",
      "Lightweight yet structurally strong profiles to handle roof loads",
      "Rapid delivery of complete accessories including bracings, sag rods, and clips"
    ],
    image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1785704409/Steel_frame_structure_k0v326.webp",
    technicalSpecs: {
      "Component Profiles": "C & Z Purlins, Eave Struts, Sag Rods, Wall Girts, Bracings",
      "Material Standards": "IS 277 / IS 10748 (High-tensile pre-galvanized coils)",
      "Zinc Coating GSM": "120 GSM to 275 GSM options",
      "Thickness Range": "1.5 mm to 3.2 mm cold-formed profiles",
      "Connection Methods": "Grade 8.8 High-Strength bolts, custom connection plates"
    },
    faqs: [
      {
        question: "What is the role of secondary steel structures in a PEB?",
        answer: "Secondary structures (like purlins and girts) act as the support framework for wall and roof panels, transfer lateral loads to the primary frame, and provide essential bracing to prevent primary frame buckling."
      },
      {
        question: "Do you offer pre-galvanized secondary members?",
        answer: "Yes, we offer secondary members fabricated from pre-galvanized high-tensile steel coils, typically ranging from 120 GSM to 275 GSM, ensuring long-term protection against rust."
      }
    ]
  },
  {
    id: "warehousing",
    slug: "warehousing",
    title: "Warehousing",
    shortDescription: "Design, fabrication, and erection of large-span commercial warehouses and logistics parks.",
    overview: "We design and deliver large-span, column-free steel warehouses optimized for modern logistics and supply chain operations. Our warehousing structures accommodate heavy dynamic loads, high storage heights, crane integrations, and multiple docking bays. With advanced thermal insulation (PUF/Rockwool) and passive ventilation systems, our warehouses provide safe, climate-controlled spaces for inventory storage.",
    benefits: [
      "Large clear-spans up to 60+ meters for maximum storage and aisle flexibility",
      "Multi-tier mezzanine integrations for office spaces or pick-pack stations",
      "Climate control options with insulated sandwich panels and ventilation systems",
      "Fast erection times allowing logistics parks to start operations quickly",
      "Durable, low-maintenance design with modern fire-resistance features"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    technicalSpecs: {
      "Clear Span Range": "20 m to 80 m (without interior columns)",
      "Mezzanine Decking": "Composite steel decks with concrete overlays",
      "Ventilation Systems": "Continuous ridge monitors, turbo ventilators, gravity louvers",
      "Bay Spacings": "6 m to 9 m standard (custom spacing available)",
      "Design Loadings": "Wind loads up to 50 m/s, seismic zones I-V compliance"
    },
    faqs: [
      {
        question: "What is the maximum clear-span you can achieve without columns?",
        answer: "We can design clear-spans up to 80 meters without internal columns, providing maximum usable space for pallet racks, forklifts, and staging areas."
      },
      {
        question: "Can you integrate multi-story offices inside a warehouse?",
        answer: "Yes, we regularly design warehouses with integrated multi-level mezzanines using composite floor decks to house administrative offices, electrical control rooms, or high-value inventory."
      }
    ]
  },
  {
    id: "roofing-and-cladding-systems",
    slug: "roofing-and-cladding-systems",
    title: "Roofing and Cladding Systems",
    shortDescription: "Leak-proof metal roof panels, insulated sandwich panels, wall sheeting, and trims.",
    overview: "We manufacture and install premium roofing and wall cladding sheets designed to withstand extreme weather. From 100% leak-proof standing seam roofing systems with concealed clips, to standard screw-down profile sheets and insulated PUF/Rockwool sandwich panels, we provide complete, weatherproof skins. Our roofing solutions reduce energy bills through high thermal reflectance and keep structures protected for decades.",
    benefits: [
      "Concealed standing seam roofing systems with 100% leak-proof guarantees",
      "Insulated PUF and Rockwool sandwich panels for thermal and acoustic regulation",
      "High UV resistance and color retention using Galvalume sheets with AZ150 coatings",
      "Sleek aesthetics with customized trims, flashings, bargeboards, and gutters",
      "Excellent wind uplift resistance tested for cyclonic storm conditions"
    ],
    image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1785704406/images_utytsf.webp",
    technicalSpecs: {
      "Material Sheets": "Alu-Zinc alloy coated steel (Galvalume) AZ150",
      "Roofing Profiles": "Standing Seam (concealed clips), Trapezoidal (screw-down)",
      "Thickness Range": "0.45 mm to 0.60 mm sheet thickness",
      "Thermal Insulation": "PUF (Polyurethane Foam), Rockwool, Glasswool",
      "Color Options": "Standard RAL shades with premium polyester paints (SMP/PVDF)"
    },
    faqs: [
      {
        question: "What is a standing seam roof, and why is it leak-proof?",
        answer: "A standing seam roof uses double-locked vertical seams that fold together to connect panels, using concealed clips under the panels instead of screws. Without exposed screw holes, it is 100% leak-proof."
      },
      {
        question: "How do insulated sandwich panels help save energy?",
        answer: "Insulated panels have a core of high-density PUF or Rockwool, which keeps heat out of the building. This reduces internal temperatures and cuts down air conditioning/HVAC energy usage."
      }
    ]
  },
  {
    id: "cz-purlin-and-downspout-pipe",
    slug: "cz-purlin-and-downspout-pipe",
    title: "C/Z Purlin and Downspout Pipe",
    shortDescription: "High-tensile cold-formed structural C/Z purlins, eave struts, and rainwater drainage systems.",
    overview: "We manufacture premium-grade, cold-formed C and Z purlins alongside rectangular and circular downspout pipes. Our purlins are custom-fabricated from high-tensile galvanized steel to support heavy roof and wall loads. Z-purlins are designed with unequal flanges, allowing them to overlap seamlessly for continuous structural beams, which increases overall frame rigidity and load capacity.",
    benefits: [
      "Overlapping Z-purlin designs for continuous beam strength",
      "High-tensile steel coils providing maximum bending resistance",
      "Accurate pre-punched hole patterns on CNC lines for fast assembly",
      "Heavy-duty galvanized finishes protecting parts from moisture",
      "Custom downspouts and gutters designed for rapid rainwater drainage"
    ],
    image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1785704405/images_1_vzi3kh.webp",
    technicalSpecs: {
      "Profile Shapes": "C-purlins, Z-purlins, nested shapes, custom struts",
      "Material Grade Range": "ASTM A653 Grade 50, IS 10748 Grade 340",
      "Punched Holes": "Pre-punched elongated slot holes for adjustment",
      "Rainwater Systems": "Seamless rectangular downspouts, galvanized steel gutters",
      "Purlin Heights": "150 mm, 200 mm, 250 mm, 300 mm web depth sizes"
    },
    faqs: [
      {
        question: "What is the benefit of overlapping Z-purlins?",
        answer: "Overlapping Z-purlins creates a continuous support system over columns, doubling the steel thickness at high-stress points. This allows for lighter sections to span longer distances, saving steel weight."
      },
      {
        question: "Are your purlins pre-punched for fast installation?",
        answer: "Yes, our purlins are pre-punched to exact spacing on automated roll-forming lines, so they can be bolted directly to cleats without any on-site drilling."
      }
    ]
  },
  {
    id: "turnkey-industrial-projects",
    slug: "turnkey-industrial-projects",
    title: "Turnkey Industrial Projects",
    shortDescription: "Complete EPC services for manufacturing units, factories, refineries, and chemical plants.",
    overview: "We provide complete end-to-end (EPC) execution for complex industrial facilities. Our turnkey solutions span from architectural concepts, civil foundations, structural design, and steel fabrication to cladding, MEP utility piping, flooring, and final handover. With a single point of accountability, we ensure that your manufacturing plant, process building, or industrial shed is delivered on time, within budget, and ready for immediate operation.",
    benefits: [
      "Single-point contract management for civil, structural, MEP, and architecture",
      "Smooth coordination between foundation civil engineering and steel erection",
      "Expert integration of heavy gantry cranes, machinery foundations, and utility lines",
      "Optimized construction schedules saving months of project coordination",
      "Strict safety systems and quality audits throughout the project timeline"
    ],
    image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1786395394/DJI_0513_fg1lw1.jpg",
    technicalSpecs: {
      "Execution Scope": "Engineering, Procurement, Civil Construction, Steel Erection, MEP",
      "Civil Integration": "Heavy machine foundations, pile/raft footings, industrial flooring",
      "Utility Support": "Compressed air piping, electrical trays, chemical drainages",
      "Project Management": "MS Project/Primavera scheduling, dedicated QA/QC managers",
      "Regulatory Approvals": "MIDC, fire safety, factory inspectorate compliance documentation support"
    },
    faqs: [
      {
        question: "What does turnkey industrial project management include?",
        answer: "Our turnkey service covers the entire life of the project: design/engineering, site grading, pile foundations, steel frame fabrication and erection, roofing, wall sheeting, industrial flooring, electrical systems, and plumbing, delivering a ready-to-use factory."
      },
      {
        question: "How do you coordinate civil foundations with structural steel frames?",
        answer: "Since our in-house engineering team designs both the civil foundations and the steel structure, we verify every anchor bolt position and foundation load early on, eliminating fitment errors on site."
      }
    ]
  }
];