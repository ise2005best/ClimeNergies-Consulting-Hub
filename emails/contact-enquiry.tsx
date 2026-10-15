import { Body, Button, Column, Container, Head, Heading, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components";
import { contactDetails } from "@/lib/content";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export type ContactEnquiryEmailProps = {
  firstName: string;
  surname: string;
  email: string;
  company: string;
  message: string;
  /** When the form was submitted, already formatted for display. */
  receivedAt: string;
};

// The site's palette. Email clients ignore web fonts and CSS variables, so styles are inline with system fonts.
const colors = {
  forest950: "#002a20",
  forest600: "#4a6b5e",
  forest100: "#e3ebe6",
  forest50: "#f1f5f2",
  citron400: "#c9dd6b",
  ink: "#1f3d33",
};
const fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";

/** Sent to the ClimeNergies inbox for each contact form enquiry. Replying answers the enquirer. */
export function ContactEnquiryEmail({ firstName, surname, email, company, message, receivedAt }: ContactEnquiryEmailProps) {
  const name = `${firstName} ${surname}`;
  const replyHref = `mailto:${email}?subject=${encodeURIComponent("Re: Your enquiry to ClimeNergies Consulting Hub")}`;
  const details = [
    { label: "Name", value: name },
    { label: "Email", value: <Link href={`mailto:${email}`} style={styles.link}>{email}</Link> },
    { label: "Company", value: company || <span style={{ color: colors.forest600 }}>Not given</span> },
  ];

  return (
    <Html lang="en">
      <Head>
        {/* Stops Apple Mail recolouring the brand header in dark mode. */}
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>{`${name}${company ? `, ${company}` : ""}: ${message.slice(0, 140)}`}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Img
              src={absoluteUrl("/email/climenergies-logo.png")}
              width="240"
              height="60"
              alt="ClimeNergies Consulting Hub"
            />
          </Section>
          <Section style={styles.accent} />

          <Section style={styles.card}>
            <Text style={styles.eyebrow}>Website enquiry</Text>
            <Heading as="h1" style={styles.heading}>
              {name} would like to talk.
            </Heading>
            <Text style={styles.meta}>Received through the contact form on {receivedAt}.</Text>

            <Section style={styles.details}>
              {details.map((row) => (
                <Row key={row.label} style={styles.detailRow}>
                  <Column style={styles.detailLabel}>{row.label}</Column>
                  <Column style={styles.detailValue}>{row.value}</Column>
                </Row>
              ))}
            </Section>

            <Text style={styles.sectionLabel}>Message</Text>
            <Section style={styles.message}>
              {/* One paragraph per line, since Outlook ignores white-space: pre-wrap. */}
              {message.split(/\r?\n/).map((line, i) => (
                <Text key={i} style={styles.messageLine}>
                  {line || " "}
                </Text>
              ))}
            </Section>

            <Button href={replyHref} style={styles.button}>
              Reply to {firstName}
            </Button>
            <Text style={styles.hint}>Or just reply to this email. Your reply goes straight to {email}.</Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              Sent from the contact form at{" "}
              <Link href={siteUrl} style={styles.footerLink}>
                climenergiesconsulting.com
              </Link>
              .
            </Text>
            <Text style={styles.footerText}>ClimeNergies Consulting Hub · {contactDetails.address.join(", ")}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Shown by the React Email preview server (`npx react-email dev`), if it's ever used.
ContactEnquiryEmail.PreviewProps = {
  firstName: "Amaka",
  surname: "Okafor",
  email: "amaka.okafor@example.com",
  company: "Sahel Grid Partners",
  message:
    "We're developing a 40 MW solar and storage project in northern Nigeria and need support on the PPA and the regulatory approvals.\n\nCould we set up a call next week?",
  receivedAt: "15 October 2026 at 2:30 pm (Lagos time)",
} satisfies ContactEnquiryEmailProps;

const styles = {
  body: { margin: 0, padding: "32px 0", backgroundColor: colors.forest50, fontFamily },
  container: { width: "100%", maxWidth: 600, margin: "0 auto" },
  header: { backgroundColor: colors.forest950, padding: "28px 40px" },
  accent: { backgroundColor: colors.citron400, height: 4, lineHeight: "4px", fontSize: 0 },
  card: { backgroundColor: "#ffffff", padding: "40px 40px 36px" },
  eyebrow: {
    margin: 0,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: colors.forest600,
  },
  heading: { margin: "10px 0 8px", fontSize: 26, lineHeight: "32px", fontWeight: 700, color: colors.forest950 },
  meta: { margin: 0, fontSize: 14, lineHeight: "22px", color: colors.forest600 },
  details: { margin: "28px 0 0", borderTop: `1px solid ${colors.forest100}` },
  detailRow: { borderBottom: `1px solid ${colors.forest100}` },
  detailLabel: { width: 110, padding: "12px 0", fontSize: 13, color: colors.forest600, verticalAlign: "top" as const },
  detailValue: { padding: "12px 0", fontSize: 15, color: colors.ink, verticalAlign: "top" as const },
  sectionLabel: { margin: "28px 0 10px", fontSize: 13, color: colors.forest600 },
  message: { backgroundColor: colors.forest50, borderLeft: `3px solid ${colors.citron400}`, padding: "18px 22px" },
  messageLine: { margin: 0, fontSize: 15, lineHeight: "25px", color: colors.ink },
  button: {
    marginTop: 30,
    backgroundColor: colors.citron400,
    color: colors.forest950,
    borderRadius: 3,
    padding: "14px 28px",
    fontSize: 15,
    fontWeight: 600,
    textDecoration: "none",
  },
  hint: { margin: "14px 0 0", fontSize: 13, lineHeight: "20px", color: colors.forest600 },
  link: { color: colors.forest950, textDecoration: "underline" },
  footer: { padding: "24px 40px 0" },
  footerText: { margin: "0 0 6px", fontSize: 12, lineHeight: "18px", color: colors.forest600, textAlign: "center" as const },
  footerLink: { color: colors.forest600, textDecoration: "underline" },
};
