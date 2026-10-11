import Image from "next/image";
import Link from "next/link";

const sizes = {
  nav: { className: "h-8 w-auto sm:h-9", sizes: "160px" },
  footer: { className: "h-12 w-auto sm:h-14", sizes: "260px" },
};

export function Logo({
  className = "",
  preload = false,
  size = "nav",
}: {
  className?: string;
  preload?: boolean;
  size?: keyof typeof sizes;
}) {
  return (
    <Link href="/" aria-label="ClimeNergies Consulting Hub, home" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src="/logos/ClimeNergies_Primary-Logo-(Lemon-Green-&-Off-White).png"
        alt="ClimeNergies Consulting Hub"
        width={10409}
        height={2617}
        sizes={sizes[size].sizes}
        preload={preload}
        className={sizes[size].className}
      />
    </Link>
  );
}
