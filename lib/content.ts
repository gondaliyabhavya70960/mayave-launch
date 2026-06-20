import type { StaticImageData } from "next/image";
import floracious from "@/assets/images/product-floracious.jpg";
import lumen from "@/assets/images/product-lumen.jpg";
import presDuCoeur from "@/assets/images/product-pres-du-coeur.jpg";

export interface Pillar {
  /** Short label shown above the headline. */
  label: string;
  headline: string;
  tagline: string;
  body: string;
  image: StaticImageData;
  /** Side the image sits on for desktop layout. */
  imageSide: "left" | "right";
}

export const pillars: Pillar[] = [
  {
    label: "Craft",
    headline: "The beauty is in the details.",
    tagline: "Worked until the light is right.",
    body: "Every setting, every finish, every diamond — worked until the light falls exactly as it should. We don’t settle for a piece that almost works: multiple rounds, multiple rejections, until what survives couldn’t be made better.",
    image: floracious,
    imageSide: "left",
  },
  {
    label: "Expression",
    headline: "Designed to mesmerise.",
    tagline: "Go further than you think.",
    body: "We tell our designers to go further than they think — new forms, different proportions, shapes that haven’t been tried. Then one question: would she love to wear it? Everything starts there. Everything ends there too.",
    image: lumen,
    imageSide: "right",
  },
  {
    label: "Experience",
    headline: "Not a product. A feeling.",
    tagline: "Somewhere you walk into.",
    body: "The truest Mayavé is somewhere you walk into and get immersed in. Our spaces were made by people who understood that jewellery is not a product — it is a feeling. Every surface, every material, the warmth of every advisor carries it.",
    image: presDuCoeur,
    imageSide: "left",
  },
];
