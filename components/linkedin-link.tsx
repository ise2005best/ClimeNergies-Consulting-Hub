import { FaLinkedin } from "react-icons/fa6";
import type { TeamMember } from "@/lib/content";

export function LinkedInLink({ member }: { member: TeamMember }) {
  const icon = <FaLinkedin className="size-7 text-forest-900" aria-hidden />;

  if (!member.linkedin) return <span className="shrink-0 opacity-90">{icon}</span>;

  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${member.name} on LinkedIn`}
      className="shrink-0 transition-opacity hover:opacity-75"
    >
      {icon}
    </a>
  );
}
