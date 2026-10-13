import Image from "next/image";
import { ButtonLink, Container, Eyebrow, Prose, SectionHeading } from "./ui";

/** "Ready To Close The Gap?" call to action. The home page shows it beside the Africa image. */
export function GetInTouch({ withImage = false }: { withImage?: boolean }) {
  return (
    <section className="pt-8 pb-24 lg:pt-16 lg:pb-32">
      <Container className={withImage ? "grid items-center gap-12 lg:grid-cols-2 lg:gap-20" : ""}>
        <div>
          <Eyebrow>Get In Touch</Eyebrow>
          <SectionHeading lines={["Ready To Close The Gap?"]} />
          <Prose className="mt-6 max-w-xl">
            <p>
              Whether you are a government shaping policy, an investor deploying capital, a business navigating
              regulatory complexity, or a developer bringing a project to market, we have the expertise to help you
              move from ambition to execution and from vision to lasting value.
            </p>
          </Prose>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Talk To Us</ButtonLink>
            <ButtonLink href="/practice-areas" variant="outline-dark">
              Explore Our Practice Areas
            </ButtonLink>
          </div>
        </div>
        {withImage && (
          <Image
            src="/assets/home-page/An Africa Led Transition.jpg"
            alt="Rows of solar panels with the shape of Africa highlighted in green"
            width={2121}
            height={1413}
            sizes="(min-width: 1024px) 700px, 100vw"
            className="h-auto w-full"
          />
        )}
      </Container>
    </section>
  );
}
