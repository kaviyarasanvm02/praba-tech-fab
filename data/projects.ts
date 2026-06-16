export interface Project {
  id: string;
  title: string;
  location: string;
  area: string;
  year: string;
  image: string;
  category: "Industrial" | "Warehouse" | "Commercial" | "Custom";
}

export const projects: Project[] = [
  {
    id: "heavy-industrial-shed",
    title: "Industrial PEB Fabrication Shed",
    location: "Karur, Tamil Nadu",
    area: "85,000 Sq.ft",
    year: "2025",
    image: "/Industrial PEB Fabrication Shed.png",
    category: "Industrial"
  },
  {
    id: "logistics-warehouse-hub",
    title: "Logistics Storage Warehouse",
    location: "Trichy, Tamil Nadu",
    area: "1,80,000 Sq.ft",
    year: "2024",
    image: "/Logistics warehouse.jpeg",
    category: "Warehouse"
  },
  {
    id: "peb-manufacturing-unit",
    title: "Factory Manufacturing Building",
    location: "Namakkal, Tamil Nadu",
    area: "65,000 Sq.ft",
    year: "2024",
    image: "/Factory Manufacturing Building.png",
    category: "Industrial"
  },
  {
    id: "heavy-duty-span-complex",
    title: "Multi-Span Steel Structure Hangar",
    location: "Erode, Tamil Nadu",
    area: "2,20,000 Sq.ft",
    year: "2025",
    image: "/WhatsApp Image 2026-06-03 at 8.40.59 PM.jpeg",
    category: "Custom"
  },
  {
    id: "commercial-steel-plaza",
    title: "Commercial PEB Framing Structure",
    location: "Salem, Tamil Nadu",
    area: "45,000 Sq.ft",
    year: "2023",
    image: "/WhatsApp Image 2026-06-03 at 8.41.00 PM.jpeg",
    category: "Commercial"
  },
  {
    id: "e-commerce-fulfilment-yard",
    title: "Turnkey Warehouse Solution Park",
    location: "Coimbatore, Tamil Nadu",
    area: "3,10,000 Sq.ft",
    year: "2025",
    image: "/WhatsApp Image 2026-06-03 at 8.41.01 PM.jpeg",
    category: "Warehouse"
  }
];
