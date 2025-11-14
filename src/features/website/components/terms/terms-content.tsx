import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TermsQuestion } from "./terms-question";

const termsContent = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <div className="space-y-2">
        <p>
          Welcome to the Mikaelson Innovation and Community Development
          Initiative (Mikaelson Initiative) (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;)
          constitute a legally binding agreement between you (&quot;User,&quot;
          &quot;you,&quot; or &quot;your&quot;) and the Mikaelson Innovation and
          Community Development Initiative (Mikaelson Initiative) regarding your
          access to and use of our website, mobile applications, and all related
          services (collectively, the &quot;Services&quot;).
        </p>
        <p>
          <strong>
            By accessing or using our Services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms.
          </strong>{" "}
          If you do not agree to these Terms, you must not access or use our
          Services.
        </p>
        <div className="mt-4 rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-4">
          <h4 className="font-bold text-cyan-800">Important Notice</h4>
          <p className="text-cyan-700">
            These Terms apply to all users of our Services, including but not
            limited to community members, program participants, partners, and
            visitors to our website.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2. Definitions",
    content: (
      <div className="space-y-2">
        <dl>
          <dt className="font-semibold">&apos;Services&apos;</dt>
          <dd className="mb-2 pl-4">
            All products, services, platforms, and resources provided by the
            Mikaelson Innovation and Community Development Initiative (Mikaelson
            Initiative), including but not limited to our website, community
            platform, educational programs, events, and labs.
          </dd>
          <dt className="font-semibold">&apos;User Content&apos;</dt>
          <dd className="mb-2 pl-4">
            Any content, information, data, text, images, videos, or other
            materials that you submit, post, or share through our Services.
          </dd>
          <dt className="font-semibold">&apos;Community&apos;</dt>
          <dd className="mb-2 pl-4">
            The Mikaelson Innovation and Community Development Initiative
            (Mikaelson Initiative) community platform and all associated
            programs, events, and member interactions.
          </dd>
          <dt className="font-semibold">&apos;Account&apos;</dt>
          <dd className="mb-2 pl-4">
            Your registered user account on our platform.
          </dd>
          <dt className="font-semibold">&apos;Intellectual Property&apos;</dt>
          <dd className="pl-4">
            All copyrights, trademarks, patents, trade secrets, and other
            intellectual property rights.
          </dd>
        </dl>
      </div>
    ),
  },
  {
    title: "3. Our Services",
    content: (
      <div className="space-y-2">
        <p>
          The Mikaelson Innovation and Community Development Initiative
          (Mikaelson Initiative) provides:
        </p>
        <ul className="space-y-1">
          <li>
            <strong>Community Platform:</strong> A digital space for students
            and young professionals to connect, learn, and grow together
          </li>
          <li>
            <strong>Educational Programs:</strong> Structured learning
            experiences focused on personal development, leadership, and skill
            building
          </li>
          <li>
            <strong>Innovation Labs:</strong> Technology solutions and product
            development initiatives
          </li>
          <li>
            <strong>Networking Events:</strong> Virtual and in-person gatherings
            for community building
          </li>
          <li>
            <strong>Mentorship Programs:</strong> Connections between
            experienced professionals and emerging talent
          </li>
          <li>
            <strong>Resources and Content:</strong> Educational materials,
            tools, and resources for personal and professional development
          </li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect of
          our Services at any time, with or without notice.
        </p>
      </div>
    ),
  },
  {
    title: "4. Eligibility and Registration",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">4.1 Age Requirements</h4>
        <p>
          You must be at least 16 years old to use our Services. If you are
          under 18, you must have parental or guardian consent to use our
          Services.
        </p>
        <h4 className="font-semibold">4.2 Registration</h4>
        <p>
          To access certain features of our Services, you may need to create an
          account. When registering, you must:
        </p>
        <ul className="space-y-1">
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and update your information as necessary</li>
          <li>Keep your login credentials confidential</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>
        <h4 className="font-semibold">4.3 Account Security</h4>
        <p>
          You are responsible for maintaining the security of your account and
          password. You must immediately notify us of any unauthorized use of
          your account.
        </p>
      </div>
    ),
  },
  {
    title: "5. Community Guidelines",
    content: (
      <div className="space-y-2">
        <p>
          The Mikaelson Innovation and Community Development Initiative
          (Mikaelson Initiative) is built on principles of respect, growth, and
          collaboration. All community members must adhere to the following
          guidelines:
        </p>
        <h4 className="font-semibold">5.1 Respectful Interaction</h4>
        <ul className="space-y-2">
          <li>Treat all community members with respect and dignity</li>
          <li>Use inclusive and appropriate language</li>
          <li>Respect diverse perspectives and backgrounds</li>
          <li>Engage constructively in discussions and debates</li>
        </ul>
        <h4 className="font-semibold">5.2 Prohibited Behavior</h4>
        <ul className="space-y-1">
          <li>Harassment, bullying, or intimidation of any kind</li>
          <li>
            Discrimination based on race, gender, religion, nationality, or
            other protected characteristics
          </li>
          <li>Sharing of false, misleading, or harmful information</li>
          <li>
            Spam, self-promotion, or commercial solicitation without permission
          </li>
          <li>Sharing of inappropriate or offensive content</li>
        </ul>
        <h4 className="font-semibold">5.3 Content Standards</h4>
        <p>All User Content must be:</p>
        <ul className="space-y-1">
          <li>Relevant to the community and platform purpose</li>
          <li>Original or properly attributed</li>
          <li>Free from malicious code or harmful links</li>
          <li>Compliant with applicable laws and regulations</li>
        </ul>
      </div>
    ),
  },
  {
    title: "6. User Responsibilities",
    content: (
      <div className="space-y-2">
        <p>As a user of our Services, you are responsible for:</p>
        <ul className="space-y-1">
          <li>
            <strong>Compliance:</strong> Following all applicable laws,
            regulations, and these Terms
          </li>
          <li>
            <strong>Account Security:</strong> Maintaining the confidentiality
            of your login credentials
          </li>
          <li>
            <strong>Accurate Information:</strong> Providing truthful and
            current information
          </li>
          <li>
            <strong>Content Ownership:</strong> Ensuring you have the right to
            share any content you post
          </li>
          <li>
            <strong>Reporting Violations:</strong> Reporting any violations of
            these Terms or community guidelines
          </li>
          <li>
            <strong>Device Security:</strong> Maintaining appropriate security
            measures on your devices
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "7. Intellectual Property Rights",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">7.1 Our Content</h4>
        <p>
          All content, features, and functionality of our Services, including
          but not limited to text, graphics, logos, images, videos, software,
          and their compilation, are owned by the Mikaelson Innovation and
          Community Development Initiative (Mikaelson Initiative) and are
          protected by copyright, trademark, and other intellectual property
          laws.
        </p>
        <h4 className="font-semibold">7.2 Your Content</h4>
        <p>
          You retain ownership of any intellectual property rights in content
          you create and share through our Services. However, by sharing content
          on our platform, you grant us a non-exclusive, royalty-free, worldwide
          license to use, display, reproduce, modify, and distribute your
          content for the purposes of operating and promoting our Services.
        </p>
        <h4 className="font-semibold">7.3 Respect for Third-Party Rights</h4>
        <p>
          You must respect the intellectual property rights of others. Do not
          post content that infringes on copyrights, trademarks, or other
          intellectual property rights.
        </p>
      </div>
    ),
  },
  {
    title: "8. Privacy and Data Protection",
    content: (
      <div className="space-y-2">
        <p>
          Your privacy is important to us. Our collection and use of personal
          information is governed by our Privacy Policy, which is incorporated
          into these Terms by reference.
        </p>
        <p>By using our Services, you consent to:</p>
        <ul className="space-y-1">
          <li>
            The collection and processing of your personal data as described in
            our Privacy Policy
          </li>
          <li>The use of cookies and similar technologies</li>
          <li>
            Communications from us regarding our Services and community
            activities
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "9. Payment Terms",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">9.1 Free Services</h4>
        <p>
          Many of our Services are provided free of charge. We reserve the right
          to introduce fees for certain services with appropriate notice.
        </p>
        <h4 className="font-semibold">9.2 Paid Services</h4>
        <p>For any paid services or events:</p>
        <ul className="space-y-1">
          <li>
            All fees are stated in Nigerian Naira unless otherwise specified
          </li>
          <li>Payment is required before access to paid services</li>
          <li>Refunds are subject to our refund policy</li>
          <li>
            We reserve the right to change pricing with 30 days&apos; notice
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "10. Prohibited Conduct",
    content: (
      <div className="space-y-2">
        <p>You may not use our Services to:</p>
        <ul className="space-y-1">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Transmit malicious code or engage in hacking activities</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt our Services</li>
          <li>Create fake accounts or impersonate others</li>
          <li>Engage in fraudulent or deceptive practices</li>
          <li>Collect personal information without consent</li>
          <li>Use our Services for commercial purposes without permission</li>
        </ul>
      </div>
    ),
  },
  {
    title: "11. Disclaimers and Warranties",
    content: (
      <div className="space-y-2">
        <p>
          Our Services are provided &quot;as is&quot; and &quot;as
          available&quot; without warranties of any kind, either express or
          implied. To the fullest extent permitted by law, we disclaim all
          warranties, including but not limited to:
        </p>
        <ul className="space-y-1">
          <li>Merchantability and fitness for a particular purpose</li>
          <li>Non-infringement of third-party rights</li>
          <li>Accuracy, completeness, or reliability of content</li>
          <li>Uninterrupted or error-free operation</li>
          <li>Security or freedom from viruses</li>
        </ul>
        <div className="mt-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4">
          <h4 className="font-bold text-yellow-800">Educational Purposes</h4>
          <p className="text-yellow-700">
            Our educational content and programs are for informational purposes
            only and do not constitute professional advice. Always consult with
            qualified professionals for specific guidance.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "12. Limitation of Liability",
    content: (
      <div className="space-y-2">
        <p>
          To the maximum extent permitted by law, the Mikaelson Innovation and
          Community Development Initiative (Mikaelson Initiative) shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, including but not limited to:
        </p>
        <ul className="space-y-1">
          <li>Loss of profits, data, or business opportunities</li>
          <li>Personal injury or property damage</li>
          <li>Loss of privacy or security breaches</li>
          <li>Failure to meet professional or educational goals</li>
        </ul>
        <p>
          Our total liability for any claims related to these Terms or our
          Services shall not exceed the amount you have paid us in the 12 months
          preceding the claim.
        </p>
      </div>
    ),
  },
  {
    title: "13. Termination",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">13.1 Termination by You</h4>
        <p>
          You may terminate your account at any time by contacting us or using
          the account deletion feature in your profile settings.
        </p>
        <h4 className="font-semibold">13.2 Termination by Us</h4>
        <p>
          We may suspend or terminate your access to our Services immediately,
          without prior notice, if you:
        </p>
        <ul className="space-y-1">
          <li>Violate these Terms or our community guidelines</li>
          <li>Engage in harmful or disruptive behavior</li>
          <li>Provide false or misleading information</li>
          <li>Fail to pay required fees</li>
          <li>Request deletion of your account</li>
        </ul>
        <h4 className="font-semibold">13.3 Effect of Termination</h4>
        <p>Upon termination:</p>
        <ul className="space-y-1">
          <li>
            Your right to access and use our Services will cease immediately
          </li>
          <li>We may delete your account and associated data</li>
          <li>
            Provisions regarding intellectual property, liability, and dispute
            resolution will survive
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "14. Governing Law and Jurisdiction",
    content: (
      <div className="space-y-2">
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the Federal Republic of Nigeria. Any legal action or proceeding
          arising under these Terms will be brought exclusively in the competent
          courts of Nigeria, and you consent to personal jurisdiction in such
          courts.
        </p>
      </div>
    ),
  },
  {
    title: "15. Changes to These Terms",
    content: (
      <div className="space-y-2">
        <p>
          We reserve the right to modify these Terms at any time. When we make
          changes, we will:
        </p>
        <ul className="space-y-1">
          <li>Post the updated Terms on our website</li>
          <li>Update the &quot;Last Updated&quot; date</li>
          <li>
            Notify users of material changes via email or platform notification
          </li>
          <li>Provide at least 30 days&apos; notice for significant changes</li>
        </ul>
        <p>
          Your continued use of our Services after any modifications constitutes
          acceptance of the updated Terms.
        </p>
      </div>
    ),
  },
  {
    title: "16. Contact Information",
    content: (
      <div className="space-y-2">
        <p>
          If you have any questions, concerns, or complaints regarding these
          Terms, please contact us:
        </p>
        <div className="space-y-2">
          <div>
            <h4 className="font-semibold">General Inquiries</h4>
            <a href="/contact" className="text-cyan-600 underline">
              Visit our Contact Page
            </a>
          </div>
          <div>
            <h4 className="font-semibold">Legal Matters</h4>
            <p>Email: legal@mikaelsoninitiative.org</p>
          </div>
          <div>
            <h4 className="font-semibold">Community Guidelines</h4>
            <p>Email: community@mikaelsoninitiative.org</p>
          </div>
        </div>
      </div>
    ),
  },
];

export const TermsContent = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <Accordion
          type="multiple"
          defaultValue={termsContent.map((_, index) => `item-${index}`)} 
          className="space-y-2"
        >
          {termsContent.map((section, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg md:text-xl">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg">
                {section.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <TermsQuestion />
    </section>
  );
};
