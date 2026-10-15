/* eslint-disable @next/next/no-img-element -- share images are drawn by next/og, which only understands plain <img>. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fromPublic = (path: string) => join(process.cwd(), "public", path);

const logoSize = { width: 300, height: 75 };

// Files are read with top-level await, before any image is drawn. File reads inside an image handler, or promises
// still pending when it runs, make Next.js render that image on request instead of at build time.

// next/og can't read variable fonts, so Asap-Bold.ttf is a fixed bold copy of the site's Asap font, made with
// `fonttools varLib.instancer <variable font> wght=700 wdth=100`.
const [asap, sequel] = await Promise.all([
  readFile(fromPublic("/fonts/Asap-Bold.ttf")),
  readFile(fromPublic("/fonts/Sequel Sans Book Body.otf")),
]);
const fonts = [
  { name: "Asap", data: asap, weight: 700 as const, style: "normal" as const },
  { name: "Sequel Sans", data: sequel, weight: 400 as const, style: "normal" as const },
];

const logoPng = await sharp(fromPublic("/logos/ClimeNergies_Primary-Logo-(Lemon-Green-&-Off-White).png"))
  .resize({ width: logoSize.width * 2 })
  .png()
  .toBuffer();
const logoSrc = `data:image/png;base64,${logoPng.toString("base64")}`;

/**
 * Crops and shrinks a hero photo (up to 9000px wide) to the card size. Await it at the top level of the
 * opengraph-image file, for the reason above.
 */
export async function shareBackground(image: string) {
  const jpeg = await sharp(fromPublic(image))
    .rotate()
    .resize(ogSize.width, ogSize.height, { fit: "cover" })
    .jpeg({ quality: 82 })
    .toBuffer();
  return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
}

const fill = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } as const;

/** The 1200×630 card shown when a page is shared: hero photo, logo, and the page's hero heading and description. */
export function shareImage({
  title,
  description,
  background,
  eyebrow,
}: {
  title: string[];
  description?: string;
  /** From shareBackground(). Pages without a hero photo get the plain dark green background. */
  background?: string;
  /** A small label above the heading, for cards that don't have a hero photo to set the scene. */
  eyebrow?: string;
}) {
  const longestLine = Math.max(...title.map((line) => line.length));
  const titleSize = longestLine <= 16 ? 104 : longestLine <= 26 ? 84 : 68;

  return new ImageResponse(
    (
      <div style={{ ...fill, display: "flex", backgroundColor: "#002a20", color: "#ffffff", fontFamily: "Sequel Sans" }}>
        {background && <img src={background} alt="" width={ogSize.width} height={ogSize.height} style={fill} />}
        {/* The page hero's shading, so the white text reads on any photo. */}
        <div
          style={{
            ...fill,
            backgroundImage:
              "linear-gradient(to top, rgba(0,26,20,0.9) 0%, rgba(0,26,20,0.5) 55%, rgba(0,26,20,0.2) 100%)",
          }}
        />
        <div style={{ ...fill, backgroundImage: "linear-gradient(to right, rgba(0,26,20,0.6), rgba(0,26,20,0) 70%)" }} />

        <div
          style={{
            ...fill,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 72px",
          }}
        >
          <img src={logoSrc} alt="" width={logoSize.width} height={logoSize.height} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {eyebrow && (
              <div style={{ display: "flex", alignItems: "center", marginBottom: 22, fontSize: 28, color: "#c9dd6b" }}>
                {/* The brand's stepped line, as in the site's section labels. */}
                <svg viewBox="0 0 18 8" width={40} height={18} style={{ marginRight: 14 }}>
                  <path d="M0 1.5h7l2.5 5H18" fill="none" stroke="#c9dd6b" strokeWidth={1.75} />
                </svg>
                {eyebrow}
              </div>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Asap",
                fontWeight: 700,
                fontSize: titleSize,
                lineHeight: 1,
                letterSpacing: titleSize * -0.025,
              }}
            >
              {title.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            {description && (
              <div style={{ marginTop: 26, maxWidth: 1000, fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.9)" }}>
                {description}
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
