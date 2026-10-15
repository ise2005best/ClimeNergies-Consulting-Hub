import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, LegalContactDetails, LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the ClimeNergies Consulting Hub website, including The ClimeNergies Digest.",
};

const sections: LegalSection[] = [
  {
    id: "about-us",
    title: "About Us",
    body: (
      <p>
        ClimeNergies is an advisory firm based in Lagos, Nigeria, providing regulatory, policy, strategy and capital
        advisory across Africa&apos;s energy, climate, critical minerals and industrial sectors. You can contact us
        by email at <EmailLink />, or using the details in the <a href="#contact">Contact Us</a> section below.
      </p>
    ),
  },
  {
    id: "no-advice",
    title: "Information Only, Not Professional Advice",
    body: (
      <>
        <p>
          The content on the Website, including The ClimeNergies Digest, our practice area descriptions and other
          materials, is provided for general information only. It is not legal, regulatory, financial, investment,
          tax, technical or other professional advice, and it does not take your particular circumstances into
          account.
        </p>
        <p>
          You should not act, or refrain from acting, on the basis of any content on the Website without first
          getting advice suited to your situation from a qualified professional. Nothing on the Website is an
          offer, solicitation or recommendation to buy or sell any security, commodity or other investment, or to
          enter into any transaction.
        </p>
      </>
    ),
  },
  {
    id: "no-client-relationship",
    title: "No Client Relationship",
    body: (
      <>
        <p>
          Using the Website, reading our content, subscribing to The ClimeNergies Digest or contacting us through
          the Website does not create a client, advisory or other professional relationship between you and
          ClimeNergies. A client relationship begins only when we have agreed to act for you and we have both
          signed a written engagement letter or contract. Our services are governed by that agreement, not by these
          Terms.
        </p>
        <p>
          Until we have confirmed that we can act for you, please do not send us confidential or commercially
          sensitive information. We cannot treat information sent before an engagement as confidential, and
          receiving it will not prevent us from acting for another party in the same or a related matter.
        </p>
      </>
    ),
  },
  {
    id: "digest",
    title: "The ClimeNergies Digest and Third-Party Information",
    body: (
      <>
        <p>
          The ClimeNergies Digest is a monthly news roundup that summarises developments reported by third parties,
          such as news outlets, governments, regulators and companies. We select and summarise this information
          carefully, but we do not independently verify it and cannot guarantee that it is accurate, complete or up
          to date. Prices, figures, forecasts and other market information can change quickly after publication.
        </p>
        <p>
          Views expressed in The ClimeNergies Digest or elsewhere on the Website reflect the authors&apos; views at
          the time of writing. They may change without notice, and we are not obliged to update content after it is
          published.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <>
        <p>
          The Website and its content, including text, The ClimeNergies Digest, graphics, logos, page layouts and
          design, are owned by or licensed to ClimeNergies. They are protected by copyright, trade mark and other
          intellectual property laws, including the Copyright Act 2022 of Nigeria. The ClimeNergies name and logo
          belong to us. Photographs and other images on the Website may be licensed from third parties and must not
          be copied or reused.
        </p>
        <p>Subject to these Terms, you may:</p>
        <ul>
          <li>view, download and print content for your own information or for internal use within your organisation;</li>
          <li>
            share The ClimeNergies Digest in its complete, unaltered form, or quote short extracts from it, as long
            as you credit ClimeNergies Consulting Hub as the source; and
          </li>
          <li>
            link to any page of the Website, as long as you do so fairly and do not suggest that we endorse you or
            are associated with you when we are not.
          </li>
        </ul>
        <p>You may not, without our prior written permission:</p>
        <ul>
          <li>copy, reproduce, republish, sell or distribute Website content for commercial purposes;</li>
          <li>modify content or remove any copyright, trade mark or other notices from it;</li>
          <li>
            use our name, logo or trade marks, including in any way that suggests a relationship with or endorsement
            by ClimeNergies; or
          </li>
          <li>frame the Website or present its content as part of another website or service.</li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: (
      <>
        <p>
          You agree to use the Website only for lawful purposes and in a way that does not infringe anyone
          else&apos;s rights. In particular, you must not:
        </p>
        <ul>
          <li>use the Website in any way that breaches any applicable law or regulation;</li>
          <li>try to gain unauthorised access to the Website, its servers or any connected system or database;</li>
          <li>
            introduce viruses, malware or other harmful code, or interfere with the operation or security of the
            Website;
          </li>
          <li>
            use robots, scrapers or other automated means to access, copy or collect content or data from the
            Website, including to train or develop artificial intelligence or machine learning models, other than
            standard search engine indexing;
          </li>
          <li>send spam, or submit false, misleading or unlawful information through our forms; or</li>
          <li>impersonate any person, or misrepresent your connection with any person or organisation.</li>
        </ul>
      </>
    ),
  },
  {
    id: "submissions",
    title: "Information You Send Us",
    body: (
      <>
        <p>
          When you contact us or subscribe through the Website, you confirm that the information you give us is
          accurate and that you are entitled to share it. We handle any personal data you provide in line with our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <p>
          If you send us ideas, proposals or other unsolicited material, you agree that we are free to use similar
          ideas in our work and that we have no obligation to keep them confidential or to pay you for them, unless
          we have agreed otherwise in writing. We are not obliged to respond to every message, and responding does
          not mean we have agreed to act for you.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Links to Third-Party Websites",
    body: (
      <p>
        The Website contains links to websites and services run by others, such as LinkedIn and the sources cited in
        The ClimeNergies Digest. We provide these links for convenience only. We do not control and are not
        responsible for their content, availability or privacy practices, and a link does not mean we endorse the
        linked website.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Availability of the Website",
    body: (
      <p>
        We aim to keep the Website available and up to date, but we do not guarantee that it, or any content on it,
        will always be available, uninterrupted or free from errors. We may change, suspend or withdraw all or part
        of the Website at any time without notice.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        To the fullest extent permitted by law, the Website and its content are provided &ldquo;as is&rdquo; and
        &ldquo;as available&rdquo;, without any representations, warranties or conditions of any kind, whether
        express or implied, including as to accuracy, completeness, fitness for a particular purpose or
        non-infringement. We do not guarantee that the Website will be secure or free from viruses, and you are
        responsible for using your own virus protection.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, ClimeNergies and its officers, employees, consultants and
          associates will not be liable for any loss or damage arising out of or in connection with your use of, or
          inability to use, the Website, or your reliance on any of its content. This includes direct, indirect,
          incidental, special or consequential loss, and loss of profits, revenue, business, opportunity, data or
          goodwill, whether arising in contract, tort (including negligence), breach of statutory duty or
          otherwise.
        </p>
        <p>
          Nothing in these Terms excludes or limits any liability that cannot be excluded or limited by law,
          including liability for death or personal injury caused by negligence, or for fraud or fraudulent
          misrepresentation. Nothing in these Terms affects any rights you have under the Federal Competition and
          Consumer Protection Act 2018.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        You agree to indemnify ClimeNergies against any claims, losses, liabilities, costs and expenses, including
        reasonable legal fees, arising from your breach of these Terms or your misuse of the Website.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we collect and use personal data when you use
        the Website or contact us, and the rights you have over it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. We will post the updated version on this page with a new
        &ldquo;Last updated&rdquo; date, and it will apply from the time it is posted. Please check this page
        regularly. By continuing to use the Website after changes are posted, you accept the updated Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    body: (
      <p>
        These Terms, and any dispute or claim arising out of or in connection with them or your use of the Website
        (including non-contractual disputes or claims), are governed by the laws of the Federal Republic of Nigeria.
        The courts of Lagos State, Nigeria, have exclusive jurisdiction over any such dispute or claim, although we
        may bring proceedings to protect our intellectual property in any jurisdiction.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <p>
        If any part of these Terms is found to be invalid or unenforceable, the rest will continue in full force. If
        we do not enforce any of these Terms straight away, we can still enforce them later. These Terms, together
        with our <Link href="/privacy">Privacy Policy</Link>, form the entire agreement between you and us about
        your use of the Website. They do not affect any engagement letter or contract for our services, which
        prevails if there is any conflict.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about these Terms, please contact us:</p>
        <LegalContactDetails />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service."
      lastUpdated="15 October 2026"
      intro={
        <p>
          These Terms of Service (the &ldquo;Terms&rdquo;) govern your use of the ClimeNergies Consulting Hub
          website, including The ClimeNergies Digest and other content published on it (together, the
          &ldquo;Website&rdquo;). The Website is operated by ClimeNergies Consulting Hub (&ldquo;ClimeNergies&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing or using the Website, you agree to
          these Terms. If you do not agree, please do not use the Website.
        </p>
      }
      sections={sections}
    />
  );
}
