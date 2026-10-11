import { mission, vision } from "@/lib/content";
import { Container, Eyebrow, Prose, SectionHeading } from "./ui";

export function MissionVision() {
  return (
    <section className="pb-16">
      <Container className="grid gap-14 md:grid-cols-2 md:gap-16">
        {[
          { label: "Our Mission", ...mission },
          { label: "Our Vision", ...vision },
        ].map((block) => (
          <div key={block.label}>
            <Eyebrow>{block.label}</Eyebrow>
            <SectionHeading lines={[block.title]} />
            <Prose className="mt-5 max-w-xl">
              <p>{block.body}</p>
            </Prose>
          </div>
        ))}
      </Container>
    </section>
  );
}
