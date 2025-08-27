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
  generation?: string;
  category?: string;
  name: string;
  price: number;
  priceFormatted?: string;
  shortDescription: string; // for ProductCard
  description: string;
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
export type GenerationData = {
  image?: string;
  categories: {
    [category: string]: {
      [id: string]: Product;
    };
  };
};

export type ProductDictionary = {
  [vehicle: string]: {
    [generation: string]: GenerationData;
  };
};

export const products: ProductDictionary = {
  "4runner": {
    "3rd-gen": {
      image: "/images/4runner/4runner-3rd-gen-stock.jpg",
      categories: {},
    },

    "4th-gen": {
      image: "/images/4runner/4runner-4th-gen-stock.jpg",
      categories: {
        interior: {
          "alpine-trail-cubby": {
            id: "alpine-trail-cubby",
            vehicle: "4runner",
            generation: "4th-gen",
            category: "Interior",
            name: "Alpine Trail Cubby",
            price: 175.0,
            priceFormatted: "$175.00",
            shortDescription:
              "Maximize storage by replacing the unused ashtray with a secure cubby.",
            description:
              "Maximize your 4th Gen 4Runner's interior storage with the Alpine Trail Cubby. This innovative storage solution replaces the often-unused ashtray to provide a secure and convenient spot for your phone, wallet, or other small essentials.",
            images: [
              {
                id: "1",
                src: "/images/4runner/alpine-trail/cubby-installed.jpeg",
                alt: "Alpine Trail Cubby installed in a 4th Gen 4Runner",
              },
            ],
            features: [
              "Perfect fit for 4th Gen Toyota 4Runner (2003–2009)",
              "Replaces factory ashtray for a clean, integrated look",
              "Durable, high-impact plastic construction",
              "Easy no-drill installation",
              "Provides convenient storage for small items",
              "Designed and manufactured in the USA",
            ],
            specifications: [
              { label: "Material", value: "High-impact ABS plastic" },
              {
                label: "Compatibility",
                value: "4th Gen Toyota 4Runner (2003–2009)",
              },
              { label: "Installation", value: "No-drill, drop-in fit" },
              { label: "Weight", value: "~0.5 lbs" },
            ],
            installation: [
              "Remove the factory ashtray from the center console.",
              "Insert the Alpine Trail Cubby into the opening.",
              "Ensure it sits flush and securely in place.",
              "Start storing essentials immediately.",
            ],
            inStock: true,
          },
          "center-console-molle-panel": {
            id: "center-console-molle-panel",
            vehicle: "4runner",
            generation: "4th-gen",
            category: "interior",
            name: "Center Console MOLLE Panel",
            price: 129.99,
            priceFormatted: "$129.99",
            shortDescription:
              "Add modular MOLLE panels to your center console for quick-access storage.",
            description:
              "Add accessible storage to your center console with CNC cut steel MOLLE panels. Perfect for mounting pouches, holsters, phone holders, and other small gear.",
            images: [
              {
                id: "1",
                src: "/images/4runner-molle-panel-installed-1.jpeg",
                alt: "Center Console MOLLE Panel installed",
              },
              {
                id: "2",
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
              {
                label: "Compatibility",
                value: "4th Gen Toyota 4Runner (2003–2009)",
              },
            ],
            installation: [
              "Hold the panel in place on the driver or passenger side of the console.",
              "Mark the 4 mounting hole locations with a punch or screwdriver.",
              "Hand drill pilot holes in the marked spots.",
              "Align the panel with spacers and thread in the screws provided.",
              "Tighten screws by hand until snug. Do not overtighten.",
            ],
            inStock: true,
          },
          "rear-cargo-storage-molle-panel": {
            id: "rear-cargo-storage-molle-panel",
            vehicle: "4runner",
            generation: "4th-gen",
            category: "interior",
            name: "Rear Cargo Storage MOLLE Panel",
            price: 165.0,
            priceFormatted: "$165.00",
            shortDescription:
              "Custom MOLLE panel for the rear cargo compartment of your 4Runner.",
            description:
              "A custom-fit MOLLE panel designed to fit inside the removable storage compartment in the rear cargo area of your 4th Gen 4Runner, maximizing organization and accessibility.",
            images: [
              {
                id: "1",
                src: "/images/4runner-rear-cargo-molle.jpeg",
                alt: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel installed",
              },
              {
                id: "2",
                src: "/placeholder.svg?height=600&width=800",
                alt: "More angles of the MOLLE panel",
              },
            ],
            features: [
              "Optimizes unused space within the factory storage compartment",
              "MOLLE-compatible grid for attaching pouches, tools, and gear",
              "Durable steel construction with a textured black powder coat finish",
              "Simple, non-invasive installation",
              "Keeps items secure and organized",
            ],
            specifications: [
              { label: "Material", value: "Steel" },
              { label: "Finish", value: "Textured Black Powder Coat" },
              { label: "Weight", value: "2.5 lbs" },
              {
                label: "Compatibility",
                value: "All 4th Gen Toyota 4Runner (2003–2009)",
              },
            ],
            installation: [
              "Remove the factory removable storage panel from the trunk.",
              "Place the MOLLE panel inside the compartment.",
              "Secure using the provided hardware or friction fit.",
              "Reinstall the factory storage panel into the trunk.",
              "Organize gear with MOLLE-compatible accessories.",
            ],
            inStock: true,
          },
        },
      },
    },

    "5th-gen": {
      image: "/images/4runner/4runner-5th-gen-stock.jpg",
      categories: {},
    },
    "6th-gen": {
      image: "/images/4runner/4runner-6th-gen-stock.jpeg",
      categories: {},
    },
  },

  tundra: {
    "1st-gen": {
      image: "/images/tundra/toyota-tundra-1st-generation-pickup-truck.jpeg",
      categories: {
        interior: {
          "tundra-1st-gen-molle-panel": {
            id: "tundra-1st-gen-molle-panel",
            vehicle: "tundra",
            generation: "1st-gen",
            category: "interior",
            name: "Interior Modular Panel",
            price: 145.0,
            priceFormatted: "$145.00",
            shortDescription:
              "Custom MOLLE panel designed for the 1st gen Tundra center console.",
            description:
              "Custom MOLLE panel designed specifically for the 1st generation Toyota Tundra center console area.",
            images: [
              {
                src: "/images/tundra/1st-gen-molle-panel/1st-gen-interior-panel-main.jpeg",
                alt: "1st Gen Tundra Interior Modular Panel - Full View",
              },
            ],
            features: [
              "Durable construction designed for off-road use",
              "Easy installation with included hardware",
              "Custom fit for 1st generation Tundra (2000–2006)",
            ],
            specifications: [
              { label: "Material", value: "Powder-coated steel" },
              { label: "Compatibility", value: "Toyota Tundra (2000–2006)" },
              { label: "Weight", value: "~2 lbs" },
            ],
            installation: [
              "Align the MOLLE panel with the designated mounting area.",
              "Use the provided hardware to secure the panel.",
              "Tighten screws until snug.",
              "Mount your preferred MOLLE-compatible gear.",
            ],
            inStock: true,
          },
        },
      },
    },
  },

  tacoma: {
    "2nd-gen": {
      image: "/images/tacoma/tacoma-2nd-gen-stock.avif",
      categories: {},
    },
    "3rd-gen": {
      image: "/images/tacoma/tacoma-3rd-gen-trd-stock.webp",
      categories: {},
    },
    "4th-gen": {
      image: "/images/tacoma/tacoma-4th-gen-stock.jpg",
      categories: {},
    },
  },

  merch: {
    apparel: {
      image: "/images/merch/alpine-trail-shirt-front.png",
      categories: {
        shirts: {
          "alpine-trail-shirt-1": {
            id: "alpine-trail-shirt-1",
            vehicle: "merch",
            generation: "apparel",
            category: "shirts",
            name: "Alpine Trail Co. Signature Tee",
            price: 2.0,
            priceFormatted: "$25.00",
            shortDescription: "Rep the brand with our signature t-shirt.",
            description:
              "Show your support for Alpine Trail Co. with our signature t-shirt. Made from a comfortable cotton blend, this shirt features our classic logo on the front and a custom vintage truck design on the back. Perfect for on and off the trail.",
            images: [
              {
                id: "1",
                src: "/images/merch/alpine-trail-shirt-front.png",
                alt: "Front",
              },
            ],
            options: [
              { name: "Size", values: ["Small", "Medium", "Large", "XL"] },
            ],
            features: [
              "Soft and comfortable cotton blend",
              "Durable screen-printed graphics",
              "Classic fit with crew neck",
              "Designed and printed in the USA",
            ],
            inStock: true,
          },
        },
      },
    },
  },
};
