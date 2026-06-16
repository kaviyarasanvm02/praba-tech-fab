export interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "peb-structures",
    title: "Pre-Engineered Buildings (PEB)",
    image: "/Pre-engineered buildings (PEB).jpeg",
    description: "Design, engineering, manufacturing, and installation of high-quality Pre-Engineered Steel Buildings customized for heavy industries and commercial structures.",
    features: [
      "Industrial PEB Structures",
      "Factory Buildings & Manufacturing Units",
      "Commercial PEB Buildings",
      "Multi-Span Steel Structures & Custom Engineered Buildings"
    ]
  },
  {
    id: "warehouse-construction",
    title: "Warehouse Construction",
    image: "/Logistics warehouse.jpeg",
    description: "Full-scale warehousing construction and logistics infrastructure built for optimum storage efficiency, safety, and faster material handling.",
    features: [
      "Logistics Warehouses & Distribution Centers",
      "Storage Facilities & Cold Storage Warehouses",
      "E-Commerce Warehouses",
      "Turnkey Warehouse Solutions"
    ]
  },
  {
    id: "steel-fabrication",
    title: "Steel Fabrication",
    image: "/Steel Fabrication.png",
    description: "Advanced structural steel fabrication yielding customized industrial structural elements with precision engineering.",
    features: [
      "Structural Steel Fabrication & Heavy Steel Structures",
      "Customized Steel Components",
      "Steel Trusses & Frames",
      "Industrial Platforms & Mezzanine Floors"
    ]
  }
];
