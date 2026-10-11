import localFont from "next/font/local";

export const sequelDisplay = localFont({
  src: [
    { path: "../public/fonts/Sequel Sans Book Disp.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Sequel Sans Medium Disp.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Sequel Sans Bold Disp.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/Sequel Sans Black Disp.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-sequel-display",
  display: "swap",
});

export const sequelBody = localFont({
  src: [
    { path: "../public/fonts/Sequel Sans Light Body.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Sequel Sans Book Body.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Sequel Sans Medium Body.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Sequel Sans Bold Body.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sequel-body",
  display: "swap",
});

export const asap = localFont({
  src: [
    { path: "../public/fonts/Asap-VariableFont_wdth,wght.ttf", weight: "100 900", style: "normal" },
    { path: "../public/fonts/Asap-Italic-VariableFont_wdth,wght.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-asap-sans",
  display: "swap",
});

export const manrope = localFont({
  src: "../public/fonts/Manrope-VariableFont_wght.ttf",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});
