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
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Advanced structural steel fabrication yielding customized industrial structural elements with precision engineering.",
    features: [
      "Structural Steel Fabrication & Heavy Steel Structures",
      "Customized Steel Components",
      "Steel Trusses & Frames",
      "Industrial Platforms & Mezzanine Floors"
    ]
  }
];
