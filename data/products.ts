// /data/products.ts

export interface ProductImage {
  id?: string | number;
  src: string;
  alt: string;
}

export interface ProductOption {
  name: string;
  values: string[];
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  vehicle?: string;
  category?: string;
  name: string;
  price: number;
  priceFormatted?: string;
  description: string;
  shortDescription: string; //for ProductCard
  images: ProductImage[];
  features?: string[];
  specifications?: ProductSpecification[];
  installation?: string[];
  includedHardware?: string[];
  installationGuide?: string[];
  installationTip?: string;
  options?: ProductOption[];
  inStock: boolean;
}

export type ProductsDictionary = {
  [vehicle: string]: {
    [category: string]: {
      [id: string]: Product;
    };
  };
};

export const products: ProductsDictionary = {
  "4runner": {
    "4th-gen": {
      "alpine-trail-cubby": {
        id: "alpine-trail-cubby",
        vehicle: "4runner-4th-gen",
        category: "interior",
        name: "Alpine Trail Cubby",
        price: 175.0,
        description:
          "Maximize your 4th Gen 4Runner's interior storage with the Alpine Trail Cubby. This innovative storage solution replaces the unused ashtray to provide a secure spot for your phone, wallet, or essentials.",
        shortDescription:
          "Replaces the factory ashtray with a clean, integrated storage cubby for your 4Runner.",
        images: [
          {
            id: "1",
            src: "/images/alpine-trail/cubby-installed.jpeg",
            alt: "Alpine Trail Cubby installed in a 4th Gen 4Runner",
          },
          {
            id: "2",
            src: "/images/alpine-trail/cubby.jpeg",
            alt: "Alpine Trail Cubby product view",
          },
        ],
        features: [
          "Direct replacement for the factory ashtray",
          "Adds hidden, secure storage space",
          "Clean OEM-like fit and finish",
          "Durable high-impact ABS plastic construction",
          "No drilling or modifications required",
          "Keeps small items organized and accessible",
        ],
        specifications: [
          { label: "Material", value: "High-Impact ABS Plastic" },
          { label: "Finish", value: "Textured Black" },
          { label: "Weight", value: "< 1 lb" },
          { label: "Compatibility", value: "Toyota 4Runner (2003–2009)" },
          { label: "Location", value: "Center console ashtray replacement" },
        ],
        installation: [
          "Remove the factory ashtray unit from the center console.",
          "Align the Alpine Trail Cubby in the same opening.",
          "Push down firmly until it snaps securely into place.",
          "Store small items and enjoy added functionality.",
        ],
        inStock: true,
      },
      "center-console-molle-panel": {
        id: "center-console-molle-panel",
        vehicle: "4runner-4th-gen",
        category: "interior",
        name: "4th Gen Toyota 4Runner Center Console MOLLE Panel",
        price: 129.99,
        description:
          "Add accessible storage to your center console with CNC cut steel MOLLE panels. Perfect for pouches, holsters, phone holders, and small gear.",
        shortDescription:
          "Modular MOLLE panels for the center console — mount pouches and gear within arm's reach.",
        images: [
          {
            id: 1,
            src: "/images/4runner-molle-panel-installed-1.jpeg",
            alt: "Center Console MOLLE Panel installed",
          },
          {
            id: 2,
            src: "/images/4runner-molle-panel-installed-2.jpeg",
            alt: "Center Console MOLLE Panel with gear",
          },
        ],
        features: [
          "Optimized for quick-access storage",
          "CNC-cut steel panels with durable finish",
          "Includes both driver and passenger side panels",
          "No major modifications required",
          "Mount pouches, holsters, or small gear",
        ],
        specifications: [
          { label: "Material", value: "CNC-Cut Steel" },
          { label: "Finish", value: "Black Powder Coat" },
          { label: "Weight", value: "~1.5 lbs per panel" },
          { label: "Compatibility", value: "Toyota 4Runner (2003–2009)" },
        ],
        installation: [
          "Hold the panel in place on the driver or passenger side of the center console.",
          "Mark the 4 mounting hole locations using a punch or screwdriver.",
          "Carefully hand drill pilot holes in the marked spots (avoid over-tightening).",
          "Place the provided spacers behind the panel, align, and thread in the screws.",
          "Tighten screws by hand until snug. Do not overtighten or strip the plastic.",
        ],
        inStock: true,
      },
      "rear-cargo-storage-molle-panel": {
        id: "rear-cargo-storage-molle-panel",
        vehicle: "4runner-4th-gen",
        category: "interior",
        name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
        price: 165.0,
        priceFormatted: "$165.00",
        description:
          "A custom-fit MOLLE panel designed to fit inside the removable rear cargo compartment of your 4th Gen 4Runner, maximizing organization and accessibility.",
        shortDescription:
          "Custom MOLLE panel for the rear cargo compartment — adds secure, modular storage.",
        images: [
          {
            id: 1,
            src: "/images/4runner-rear-cargo-molle.jpeg",
            alt: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel installed",
          },
          {
            id: 2,
            src: "/placeholder.svg?height=600&width=800",
            alt: "More angles of the MOLLE panel",
          },
        ],
        features: [
          "Optimizes unused space within the cargo compartment",
          "MOLLE-compatible grid for pouches, tools, and gear",
          "Durable steel construction with powder coat finish",
          "Simple drop-in, non-invasive installation",
          "Prevents shifting of items during off-road adventures",
        ],
        specifications: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "Textured Black Powder Coat" },
          { label: "Weight", value: "2.5 lbs" },
          { label: "Compatibility", value: "Toyota 4Runner (2003–2009)" },
        ],
        installation: [
          "Remove the factory removable storage panel from the trunk.",
          "Place the MOLLE panel inside the compartment.",
          "Secure with provided hardware (if applicable).",
          "Reinstall the storage panel.",
        ],
        inStock: true,
      },
    },
  },
  tundra: {
    "1st-gen": {
      "tundra-1st-gen-molle-panel": {
        id: "tundra-1st-gen-molle-panel",
        vehicle: "tundra-1st-gen",
        category: "interior",
        name: "1st Gen Tundra Interior Modular Panel",
        price: 145.0,
        priceFormatted: "$145.00",
        description:
          "Custom MOLLE panel designed specifically for the 1st Gen Toyota Tundra center console area. Provides versatile gear mounting and durable off-road performance.",
        shortDescription:
          "Interior MOLLE panel for the 1st Gen Tundra — adds durable, modular storage.",
        images: [
          {
            src: "/images/tundra/1st-gen-interior-panel-main.jpeg",
            alt: "1st Gen Tundra Interior Modular Panel - Full View",
          },
          {
            src: "/images/tundra/1st-gen-molle-panel-1.jpeg",
            alt: "1st Gen Tundra Interior Modular Panel - Main View",
          },
        ],
        features: [
          "Steel construction with powder-coated finish",
          "Multiple MOLLE slots for pouches and gear",
          "Maintains OEM console usability",
          "Includes mounting hardware",
        ],
        specifications: [
          { label: "Material", value: "Steel" },
          { label: "Finish", value: "Black Powder Coat" },
          { label: "Weight", value: "~3 lbs" },
          { label: "Compatibility", value: "Toyota Tundra (2000–2006)" },
        ],
        installation: [
          "Remove trim from the center console area.",
          "Position MOLLE panel inside mounting points.",
          "Secure with included hardware.",
          "Reattach trim and test for stability.",
        ],
        inStock: true,
      },
    },
  },
  apparel: {
    shirts: {
      "alpine-trail-shirt-1": {
        id: "alpine-trail-shirt-1",
        category: "apparel",
        name: "Alpine Trail Co. Signature Tee",
        price: 25.0,
        description:
          "Show your support for Alpine Trail Co. with our signature tee. Comfortable cotton blend with logo front and vintage truck back.",
        shortDescription:
          "Soft cotton-blend t-shirt with Alpine Trail Co. logo and vintage truck graphic.",
        images: [
          {
            id: "1",
            src: "/images/merch/alpine-trail-shirt-front.png",
            alt: "Alpine Trail Co. T-Shirt Front",
          },
          {
            id: "2",
            src: "/images/merch/alpine-trail-shirt-back.png",
            alt: "Alpine Trail Co. T-Shirt Back",
          },
        ],
        options: [{ name: "Size", values: ["Small", "Medium", "Large", "XL"] }],
        features: [
          "Soft and breathable cotton blend",
          "Durable screen-printed graphics",
          "Classic unisex fit with crew neck",
          "Double-stitched hems for durability",
          "Designed and printed in the USA",
        ],
        specifications: [
          { label: "Material", value: "60% Cotton / 40% Polyester" },
          { label: "Fit", value: "Classic / Unisex" },
          { label: "Sizes", value: "S, M, L, XL" },
          { label: "Care", value: "Machine wash cold, tumble dry low" },
        ],
        installation: [
          "Wash before first wear for best comfort.",
          "Machine wash cold with like colors.",
          "Do not bleach.",
          "Tumble dry low or hang dry for longest life.",
        ],
        inStock: true,
      },
    },
  },
};
