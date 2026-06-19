import type { StaticImageData } from "next/image";
import floracious from "@/assets/images/product-floracious.jpg";
import lumen from "@/assets/images/product-lumen.jpg";
import presDuCoeur from "@/assets/images/product-pres-du-coeur.jpg";

export interface Product {
  kind: string;
  name: string;
  tagline: string;
  story: string;
  image: StaticImageData;
  /** Side the product image sits on for desktop layout. */
  imageSide: "left" | "right";
}

export const products: Product[] = [
  {
    kind: "Rings",
    name: "Floracious",
    tagline: "Circles of life.",
    story:
      "A solitaire that opens like a bloom — petals of light around a single grown stone. Worn on the hand that builds a life.",
    image: floracious,
    imageSide: "left",
  },
  {
    kind: "Earrings",
    name: "Lumen",
    tagline: "Light in motion.",
    story:
      "They catch the room and give it back. Diamonds suspended in reclaimed gold, made to move with you and never sit still.",
    image: lumen,
    imageSide: "right",
  },
  {
    kind: "Necklaces",
    name: "Près du Cœur",
    tagline: "Worn close.",
    story:
      "A line of light that rests where it means the most. Quiet enough for every day, rare enough for the ones that matter.",
    image: presDuCoeur,
    imageSide: "left",
  },
];
