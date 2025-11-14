"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PrivacyQuestions from "./privacy-questions";

const privacySections = [
  {
    title: "1. Overview",
    content: (
      <>
        <p>
          At the Mikaelson Innovation and Community Development Initiative
          (Mikaelson Initiative), we are committed to protecting your privacy
          and personal information. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our
          website, mobile applications, and related services (collectively, the
          &apos;Services&apos;).
        </p>
        <p>
          By using our Services, you consent to the collection and use of your
          information as described in this Privacy Policy. If you do not agree
          with our policies and practices, please do not use our Services.
        </p>
        <div className="mt-4 rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-4">
          <h4 className="font-bold text-cyan-800">Key Principles</h4>
          <p className="text-cyan-700">
            We are committed to transparency, data minimization, purpose
            limitation, and ensuring your rights are respected throughout your
            interaction with our platform.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">2.1 Information You Provide</h4>
        <p>We collect information you voluntarily provide to us, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Account Information:</strong> Name, email address, username,
            password, educational institution, and profile details
          </li>
          <li>
            <strong>Contact Information:</strong> Phone number, mailing address,
            and emergency contact details
          </li>
          <li>
            <strong>Program Participation:</strong> Applications, resumes,
            project submissions, and participation records
          </li>
          <li>
            <strong>Communications:</strong> Messages, feedback, survey
            responses, and support inquiries
          </li>
          <li>
            <strong>Payment Information:</strong> Billing details for paid
            services (processed securely through third-party providers)
          </li>
        </ul>

        <h4 className="font-semibold">
          2.2 Automatically Collected Information
        </h4>
        <p>
          When you use our Services, we automatically collect certain
          information:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Device Information:</strong> IP address, browser type,
            operating system, and device identifiers
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, time spent, click
            patterns, and feature interactions
          </li>
          <li>
            <strong>Location Data:</strong> General geographic location based on
            IP address
          </li>
          <li>
            <strong>Cookies and Tracking:</strong> Information stored through
            cookies, web beacons, and similar technologies
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">3.1 Service Provision</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Creating and managing your account</li>
          <li>Providing access to community programs and resources</li>
          <li>Processing applications and participation requests</li>
          <li>Facilitating mentorship connections and networking</li>
          <li>Delivering educational content and materials</li>
        </ul>
        <h4 className="font-semibold">3.2 Communication</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Sending program updates and announcements</li>
          <li>Responding to inquiries and providing support</li>
          <li>
            Delivering newsletters and marketing communications (with your
            consent)
          </li>
          <li>Notifying you of policy changes or important information</li>
        </ul>
        <h4 className="font-semibold">3.3 Improvement and Analytics</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Analyzing usage patterns to improve our Services</li>
          <li>Conducting research and generating insights</li>
          <li>Developing new features and programs</li>
          <li>Ensuring platform security and preventing fraud</li>
        </ul>
      </div>
    ),
  },
  {
    title: "4. Information Sharing and Disclosure",
    content: (
      <div className="space-y-2">
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information only in the following limited
          circumstances:
        </p>
        <h4 className="font-semibold">4.1 With Your Consent</h4>
        <p>
          We may share your information when you explicitly consent to such
          sharing, such as:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Connecting you with mentors or program participants</li>
          <li>Featuring your achievements or projects (with permission)</li>
          <li>Facilitating partnerships with educational institutions</li>
        </ul>
        <h4 className="font-semibold">4.2 Service Providers</h4>
        <p>
          We may share information with trusted third-party service providers
          who:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Help us operate and maintain our platform</li>
          <li>Process payments and handle financial transactions</li>
          <li>Provide analytics and marketing services</li>
          <li>Offer customer support and communication tools</li>
        </ul>
        <h4 className="font-semibold">4.3 Legal Requirements</h4>
        <p>We may disclose your information when required by law or to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Comply with legal process, court orders, or government requests
          </li>
          <li>
            Protect the rights, property, or safety of our organization or users
          </li>
          <li>Investigate potential violations of our Terms of Service</li>
          <li>Prevent fraud, security breaches, or illegal activities</li>
        </ul>
      </div>
    ),
  },
  {
    title: "5. Data Security and Protection",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">5.1 Technical Safeguards</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Encryption of data in transit and at rest</li>
          <li>Secure servers and database protection</li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>Multi-factor authentication for sensitive accounts</li>
        </ul>
        <h4 className="font-semibold">5.2 Organizational Measures</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Limited access to personal information on a need-to-know basis
          </li>
          <li>Employee training on data protection and privacy</li>
          <li>Incident response procedures for data breaches</li>
          <li>Regular review and update of security policies</li>
        </ul>
        <div className="mt-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4">
          <h4 className="font-bold text-yellow-800">Security Limitation</h4>
          <p className="text-yellow-700">
            While we implement robust security measures, no method of
            transmission over the internet or electronic storage is 100% secure.
            We cannot guarantee absolute security of your information.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content: (
      <div className="space-y-2">
        <p>
          We use cookies and similar technologies to enhance your experience and
          gather information about usage patterns.
        </p>
        <h4 className="font-semibold">6.1 Types of Cookies</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Essential Cookies:</strong> Required for basic website
            functionality
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us analyze website usage
            and performance
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences and
            settings
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used to deliver relevant
            advertisements (with consent)
          </li>
        </ul>
        <h4 className="font-semibold">6.2 Cookie Management</h4>
        <p>
          You can control cookies through your browser settings. However,
          disabling certain cookies may limit your ability to use some features
          of our Services.
        </p>
      </div>
    ),
  },
  {
    title: "7. Your Privacy Rights",
    content: (
      <div className="space-y-2">
        <p>You have several rights regarding your personal information:</p>
        <h4 className="font-semibold">7.1 Access and Portability</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Request access to your personal information</li>
          <li>Obtain a copy of your data in a portable format</li>
          <li>Receive information about how your data is processed</li>
        </ul>
        <h4 className="font-semibold">7.2 Correction and Updates</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Update or correct inaccurate personal information</li>
          <li>Modify your profile and account settings</li>
          <li>Change your communication preferences</li>
        </ul>
        <h4 className="font-semibold">7.3 Deletion and Restriction</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Request deletion of your personal information</li>
          <li>Restrict processing of your data in certain circumstances</li>
          <li>Object to processing based on legitimate interests</li>
        </ul>
        <h4 className="font-semibold">7.4 Withdrawal of Consent</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Withdraw consent for marketing communications</li>
          <li>Opt out of data processing where consent is the legal basis</li>
          <li>Unsubscribe from newsletters and promotional emails</li>
        </ul>
      </div>
    ),
  },
  {
    title: "8. International Data Transfers",
    content: (
      <div className="space-y-2">
        <p>
          As we operate primarily in Nigeria and serve users across Africa, your
          information may be transferred to and processed in countries other
          than your own. We ensure appropriate safeguards are in place when
          transferring data internationally, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Adequacy decisions by relevant data protection authorities</li>
          <li>Standard contractual clauses with third-party processors</li>
          <li>Certification under recognized privacy frameworks</li>
          <li>Explicit consent for transfers where required</li>
        </ul>
      </div>
    ),
  },
  {
    title: "9. Data Retention",
    content: (
      <div className="space-y-2">
        <p>
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy or as required by
          law:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Account Information:</strong> Retained while your account is
            active and for 2 years after closure
          </li>
          <li>
            <strong>Program Participation:</strong> Kept for 5 years for alumni
            engagement and impact measurement
          </li>
          <li>
            <strong>Communications:</strong> Stored for 3 years for customer
            service and legal purposes
          </li>
          <li>
            <strong>Marketing Data:</strong> Retained until you withdraw consent
            or 2 years of inactivity
          </li>
          <li>
            <strong>Legal Compliance:</strong> Kept as required by applicable
            laws and regulations
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <div className="space-y-2">
        <p>
          Our Services are primarily intended for individuals 16 years of age
          and older. We do not knowingly collect personal information from
          children under 16 without parental consent.
        </p>
        <p>
          If you are between 16 and 18 years old, you must have parental or
          guardian consent before using our Services. If we become aware that we
          have collected information from a child under 16 without proper
          consent, we will take steps to delete such information promptly.
        </p>
      </div>
    ),
  },
  {
    title: "11. Third-Party Services and Links",
    content: (
      <div className="space-y-2">
        <p>
          Our Services may contain links to third-party websites, applications,
          or services that are not operated by us. This Privacy Policy does not
          apply to these external services.
        </p>
        <p>
          We encourage you to review the privacy policies of any third-party
          services you access through our platform. We are not responsible for
          the privacy practices or content of these external sites.
        </p>
      </div>
    ),
  },
  {
    title: "12. Changes to This Privacy Policy",
    content: (
      <div className="space-y-2">
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, legal requirements, or service offerings. When we
          make changes, we will:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Post the updated Privacy Policy on our website</li>
          <li>
            Update the &apos;Last Updated&apos; date at the top of this policy
          </li>
          <li>
            Notify you via email or platform notification for material changes
          </li>
          <li>
            Provide at least 30 days&apos; notice for significant changes
            affecting your rights
          </li>
          <li>Obtain your consent where required by applicable law</li>
        </ul>
        <p>
          Your continued use of our Services after any modifications constitutes
          acceptance of the updated Privacy Policy.
        </p>
      </div>
    ),
  },
  {
    title: "13. Contact Information",
    content: (
      <div className="space-y-2">
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us:
        </p>
        <div className="space-y-2">
          <div>
            <h4 className="font-semibold">General Privacy Inquiries</h4>
            <a href="/contact" className="text-cyan-600 underline">
              Visit our Contact Page
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold">Data Protection Officer</h4>
            <p>Email: privacy@mikaelsoninitiative.org</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold">Data Requests</h4>
            <p>Email: data-requests@mikaelsoninitiative.org</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PrivacyContent() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <Accordion
          type="multiple"
          defaultValue={privacySections.map((_, index) => `item-${index}`)}
          className="space-y-2"
        >
          {privacySections.map((section, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>{section.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <PrivacyQuestions />
    </section>
  );
}
