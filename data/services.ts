export interface ServiceStep {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  steps: ServiceStep[];
}

export const services: Service[] = [
  {
    id: "design-engineering",
    title: "Design & Engineering",
    shortDescription: "Structural analysis, PEB detailing, shop drawings, 3D modeling, load analysis, and value engineering.",
    longDescription: "Our technical engineering division prepares precise designs using advanced calculation software. We optimize frame weight, carry out detailed seismic and load modeling, and deliver perfect workshop drawings to guarantee a smooth manufacturing path.",
    steps: [
      { name: "Structural Design & Detailings", description: "Creating custom structures with integrated load analysis and value engineering." },
      { name: "3D Modeling", description: "Providing clear spatial alignments for columns, trusses, and purlins." },
      { name: "Shop Drawings", description: "Generating complete fabrication blueprint designs down to single bolt locations." }
    ]
  },
  {
    id: "steel-fabrication",
    title: "Steel Fabrication",
    shortDescription: "Structural steel fabrication, heavy steel structures, steel trusses, frames, industrial platforms, and mezzanines.",
    longDescription: "Components are built inside our modern plant. We cut plates, weld robust columns, and fabricate stable frames, trusses, and mezzanines with absolute size controls.",
    steps: [
      { name: "Heavy Steel Structures", description: "Heavy-duty plates built for large-span factory units and multi-span structures." },
      { name: "Customized Components", description: "Precision-tailored joints, plates, brackets, and structural steel fittings." },
      { name: "Mezzanine & Platforms", description: "Custom modular floors built to increase workspace storage inside industrial hangars." }
    ]
  },
  {
    id: "erection-installation",
    title: "Erection, Installation & Construction",
    shortDescription: "On-site construction, steel structure erection, roofing, cladding, and complete project management.",
    longDescription: "Our site teams oversee safe logistics, crane rigging, high-tensile column bolting, insulation, sheet cladding, and final checks to ensure clean handover.",
    steps: [
      { name: "Site Construction & Erection", description: "Rigid on-site alignment and fast-track steel building erection." },
      { name: "Roofing & Cladding", description: "Installation of leak-proof roofing sheets, thermal sandwich panels, and trims." },
      { name: "Project Management & Inspection", description: "Safe project monitoring, timeline checks, and final layout validation." }
    ]
  }
];
