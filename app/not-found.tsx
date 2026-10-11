import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-36 pb-20">
      <Container>
        <Eyebrow>404</Eyebrow>
        <SectionHeading as="h1" lines={["We Couldn't Find That Page."]} />
        <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/80">
          The page you&apos;re looking for may have moved, or may not be published yet.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href="/">Back To Home</ButtonLink>
          <ButtonLink href="/contact" variant="outline-dark">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
