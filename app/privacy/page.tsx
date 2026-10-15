import type { Metadata } from "next";
import { EmailLink, LegalContactDetails, LegalPage, type LegalSection } from "@/components/legal-page";
import { contactDetails } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How ClimeNergies Consulting Hub collects, uses, shares and protects personal data, and the rights you have under the Nigeria Data Protection Act 2023.",
  path: "/privacy",
});

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    body: (
      <>
        <p>
          ClimeNergies is an advisory firm based in Lagos, Nigeria, working across Africa&apos;s energy, climate,
          critical minerals and industrial sectors. For the purposes of the NDPA, we are the data controller of the
          personal data described in this policy. This means we decide how and why that data is processed.
        </p>
        <p>
          You can contact us about anything in this policy by email at <EmailLink />, by phone on{" "}
          <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>, or by post at the address in the{" "}
          <a href="#contact">Contact Us and Complaints</a> section below.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "Scope of This Policy",
    body: (
      <>
        <p>This policy applies to personal data we collect when you:</p>
        <ul>
          <li>visit our website;</li>
          <li>contact us through our website, by email, by phone or through social media;</li>
          <li>subscribe to The ClimeNergies Digest;</li>
          <li>deal with us as a client, prospective client, partner, supplier or other business contact; or</li>
          <li>attend a meeting or event that we organise or take part in.</li>
        </ul>
        <p>
          It does not cover personal data we process on behalf of a client as part of an advisory engagement. That
          processing is governed by our engagement terms with the client and by the client&apos;s own privacy
          notices. It also does not cover other websites we link to, such as LinkedIn.
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Personal Data We Collect",
    body: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Contact form:</strong> your first name, surname, email address, company (if you provide it) and
            the content of your message. We store your enquiry in our database, hosted by Supabase, and forward it
            to our team by email through Resend.
          </li>
          <li>
            <strong>Newsletter sign-up:</strong> your email address.
          </li>
          <li>
            <strong>Business dealings:</strong> your name, job title, organisation, business contact details, our
            correspondence with you, and the information we need to set up and manage an engagement, such as billing
            details.
          </li>
          <li>
            <strong>Meetings and events:</strong> your name, organisation and role, and any other details you
            choose to share with us.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <p>
          When you visit our website, our hosting provider, Vercel, automatically records technical information that
          your browser sends. This includes your IP address, browser and device type, the pages you request, the
          page that referred you, and the date and time of your visit. We use this information to deliver the
          website, keep it secure and diagnose problems.
        </p>
        <p>
          We also collect anonymous statistics about how our website is used, as explained in the{" "}
          <a href="#analytics-cookies">Analytics and Cookies</a> section.
        </p>

        <h3>Information from other sources</h3>
        <p>
          We may receive information about you from people who introduce or refer you to us, from our clients and
          partners in the course of an engagement, and from publicly available professional sources such as company
          websites, official registers and professional networking sites.
        </p>

        <h3>Sensitive personal data</h3>
        <p>
          We do not ask for sensitive personal data through our website, such as information about your health,
          ethnic origin, religious or political beliefs, or biometric data. Please do not include it in messages you
          send us. If an engagement requires sensitive personal data, we will only process it where the NDPA allows,
          for example with your explicit consent.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Data and Our Lawful Bases",
    body: (
      <>
        <p>
          We only use personal data where we have a lawful basis to do so under the NDPA. The main purposes, and
          the lawful basis for each, are:
        </p>
        <ul>
          <li>
            <strong>Responding to enquiries.</strong> To read and reply to messages you send through our contact
            form, by email or by phone, and to follow up on them. Lawful basis: our legitimate interest in
            responding to people who contact us, or taking steps at your request before entering into a contract.
          </li>
          <li>
            <strong>Sending The ClimeNergies Digest.</strong> To email you our monthly news roundup and related
            updates from ClimeNergies, if you have subscribed. Lawful basis: your consent, which you can withdraw at
            any time.
          </li>
          <li>
            <strong>Providing our services.</strong> To scope, deliver, invoice and manage advisory engagements, and
            to keep records of our work. Lawful basis: performance of a contract with you or your organisation, and
            our legitimate interest in managing our business relationships.
          </li>
          <li>
            <strong>Managing business relationships.</strong> To stay in touch with clients, prospective clients,
            partners and other business contacts, including sharing insights we believe are relevant to them. Lawful
            basis: our legitimate interest in developing our business. Where the law requires consent for marketing,
            we will ask for it.
          </li>
          <li>
            <strong>Operating, securing and improving our website.</strong> To deliver the website, protect it
            against spam, abuse and attacks, fix problems, and understand which content is most useful to visitors.
            Lawful basis: our legitimate interest in running a secure, reliable and useful website.
          </li>
          <li>
            <strong>Meeting legal and regulatory obligations.</strong> For example, keeping financial records,
            carrying out conflict and due diligence checks before taking on an engagement, and responding to lawful
            requests from authorities. Lawful basis: compliance with a legal obligation, and our legitimate interest
            in managing risk.
          </li>
          <li>
            <strong>Protecting our rights.</strong> To establish, exercise or defend legal claims. Lawful basis: our
            legitimate interest in protecting our business, or compliance with a legal obligation.
          </li>
        </ul>
        <p>
          Where we rely on legitimate interests, we have balanced those interests against your rights and
          reasonable expectations. You can ask us for more information about this assessment.
        </p>
        <p>
          We do not make decisions about you based solely on automated processing, including profiling, that have
          legal or similarly significant effects on you.
        </p>
      </>
    ),
  },
  {
    id: "newsletter",
    title: "The ClimeNergies Digest",
    body: (
      <p>
        If you subscribe to The ClimeNergies Digest, we store your email address in our mailing list database,
        hosted by Supabase, and use it to send you each issue through our email provider, Resend. Every email
        includes a link to unsubscribe, and you can also unsubscribe at any time by emailing us at <EmailLink />.
        After you unsubscribe, we keep your email address on a suppression list only to make sure we do not email
        you again.
      </p>
    ),
  },
  {
    id: "analytics-cookies",
    title: "Analytics and Cookies",
    body: (
      <>
        <p>
          We use Vercel Web Analytics to understand how visitors use our website, such as which pages are viewed
          most and how people find us. It does not use cookies. Each page view is recorded anonymously, together
          with the time of the visit, the page visited, the website that referred you, your approximate location
          (country, region and city), and your device type, operating system and browser.
        </p>
        <p>
          To count unique visitors, Vercel Web Analytics creates a temporary identifier from your browser&apos;s
          request, which is automatically discarded after 24 hours. We only see aggregated statistics, and we cannot
          use them to identify you or to follow you across other websites.
        </p>
        <p>
          Cookies are small text files that a website stores on your device. Our website does not set cookies for
          analytics, advertising or tracking, and we do not allow advertising networks to track you on our website.
          If we introduce cookies that are not strictly necessary, we will update this policy and ask for your
          consent before setting them, as the NDPA and the GAID require. Websites we link to, such as LinkedIn, set
          their own cookies under their own policies.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who We Share Your Data With",
    body: (
      <>
        <p>We do not sell your personal data. We share it only as described below, and only as far as necessary:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who host our website and provide our analytics (Vercel), send email
            from our website and to newsletter subscribers (Resend), store enquiries and our mailing list in a
            secure database (Supabase), and provide our business email, IT and administrative support. They act
            only on our instructions and are bound by contracts that require them to keep your data secure and
            confidential.
          </li>
          <li>
            <strong>Professional advisers</strong> such as lawyers, auditors, accountants and insurers, where they
            need it to advise us.
          </li>
          <li>
            <strong>Partners and associates</strong> we work with on a particular engagement or event, where this
            is relevant to your enquiry or engagement and you would reasonably expect it.
          </li>
          <li>
            <strong>Authorities, regulators and courts</strong>, where the law requires us to, or where we need to
            establish, exercise or defend legal claims.
          </li>
          <li>
            <strong>A successor business</strong>, if we are involved in a merger, acquisition, restructuring or
            sale of all or part of our business, subject to confidentiality obligations.
          </li>
          <li>
            <strong>Anyone else</strong> with your consent or at your direction.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    body: (
      <>
        <p>
          Some of our service providers store or process data outside Nigeria. Vercel (website hosting and
          analytics), Resend (email delivery) and Supabase (database storage) are based in the United States and
          may process data there and in other countries. When we
          transfer personal data outside Nigeria, we make sure the transfer is permitted under the NDPA. This means
          the destination country provides an adequate level of protection, appropriate safeguards recognised under
          the NDPA are in place, or another lawful basis applies, such as your informed consent or the transfer
          being necessary to perform a contract with you.
        </p>
        <p>You can contact us for more information about the safeguards we use.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How Long We Keep Your Data",
    body: (
      <>
        <p>
          We keep personal data only for as long as we need it for the purposes in this policy, including to meet
          legal, accounting and reporting requirements. In general:
        </p>
        <ul>
          <li>
            <strong>Enquiries</strong> are kept for as long as we need to respond and follow up, and then for a
            limited period in case you contact us again about the same matter.
          </li>
          <li>
            <strong>Newsletter subscriptions</strong> are kept until you unsubscribe, after which we keep only a
            suppression record of your email address.
          </li>
          <li>
            <strong>Client and engagement records</strong> are kept for the duration of the engagement and
            afterwards for as long as required by law, tax and accounting rules, our professional obligations and
            the limitation periods for legal claims.
          </li>
          <li>
            <strong>Website server logs</strong> are kept for a short period, unless we need them to investigate a
            security incident. Analytics identifiers are discarded after 24 hours, and we keep only aggregated
            statistics after that.
          </li>
        </ul>
        <p>When we no longer need personal data, we securely delete or anonymise it.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "How We Protect Your Data",
    body: (
      <>
        <p>
          We use appropriate technical and organisational measures to protect personal data against unauthorised
          access, loss, misuse and alteration. These include encrypted connections to our website, access controls
          that limit who can see personal data, and requiring our service providers to meet appropriate security
          standards.
        </p>
        <p>
          No method of sending or storing data is completely secure, so we cannot guarantee absolute security. If a
          personal data breach is likely to put your rights and freedoms at risk, we will notify the Nigeria Data
          Protection Commission within 72 hours of becoming aware of it. If the breach is likely to pose a high risk
          to you, we will also tell you immediately, in clear language, along with the steps you can take to protect
          yourself.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>Under the NDPA, you have the right to:</p>
        <ul>
          <li>
            <strong>be informed</strong> about how we process your personal data, which is the purpose of this
            policy;
          </li>
          <li>
            <strong>access</strong> your personal data and receive a copy of it;
          </li>
          <li>
            <strong>rectify</strong> personal data that is inaccurate, out of date or incomplete;
          </li>
          <li>
            <strong>erase</strong> your personal data where we no longer have a lawful reason to keep it;
          </li>
          <li>
            <strong>restrict</strong> how we process your personal data in certain circumstances, for example while
            we check its accuracy;
          </li>
          <li>
            <strong>object</strong> to processing based on our legitimate interests, and object at any time to
            direct marketing;
          </li>
          <li>
            <strong>withdraw your consent</strong> at any time where we rely on it, such as for The ClimeNergies
            Digest. This does not affect processing that took place before you withdrew it;
          </li>
          <li>
            <strong>data portability</strong>, meaning you can receive the personal data you gave us in a
            structured, commonly used and machine-readable format, and ask us to send it to another organisation
            where technically feasible;
          </li>
          <li>
            <strong>not be subject to decisions based solely on automated processing</strong> that have legal or
            similarly significant effects on you. We do not make such decisions; and
          </li>
          <li>
            <strong>complain</strong> to the Nigeria Data Protection Commission, as explained in the{" "}
            <a href="#contact">Contact Us and Complaints</a> section.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email us at <EmailLink /> with &ldquo;Data Protection Request&rdquo; in
          the subject line. We may need to verify your identity before acting on your request. We will not charge a
          fee unless your request is clearly unfounded or excessive, and we will respond within the time the law
          requires. Some rights have legal limits. If we cannot fully meet your request, we will explain why.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        Our website and services are intended for businesses, governments and professionals. They are not directed
        at children, and we do not knowingly collect personal data from anyone under 18. If you believe a child has
        given us personal data, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "other-websites",
    title: "Links to Other Websites",
    body: (
      <p>
        Our website links to other websites and platforms, such as LinkedIn. We are not responsible for the privacy
        practices of those websites, and we encourage you to read their privacy policies.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time to reflect changes in our practices, our services or the law.
        We will post the updated version on this page and change the &ldquo;Last updated&rdquo; date at the top. If
        the changes are significant, we will take reasonable steps to let you know, such as by email if you
        subscribe to The ClimeNergies Digest.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us and Complaints",
    body: (
      <>
        <p>
          If you have questions about this policy or how we handle your personal data, or if you want to make a
          complaint, please contact us first so we can try to resolve it:
        </p>
        <LegalContactDetails />
        <p>
          If you are not satisfied with our response, you have the right to lodge a complaint with the{" "}
          <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer">
            Nigeria Data Protection Commission
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          . If you live outside Nigeria, you may also be able to complain to the data protection authority in your
          country.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy."
      lastUpdated="15 October 2026"
      intro={
        <p>
          ClimeNergies Consulting Hub (&ldquo;ClimeNergies&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
          &ldquo;our&rdquo;) respects your privacy. This policy explains what personal data we collect through our
          website and in the course of our business, how we use it, who we share it with, and the rights you have
          over it. We process personal data in line with the Nigeria Data Protection Act 2023 (the
          &ldquo;NDPA&rdquo;), the General Application and Implementation Directive 2025 (the &ldquo;GAID&rdquo;)
          issued by the Nigeria Data Protection Commission, and any other laws that apply to us.
        </p>
      }
      sections={sections}
    />
  );
}
