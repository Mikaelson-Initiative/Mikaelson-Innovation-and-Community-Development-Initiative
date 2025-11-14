"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Define each section as an object with title and content (JSX)
const codeOfConductItems = [
  {
    title: "1. Our Pledge",
    content: (
      <>
        <p>
          The Mikaelson Innovation and Community Development Initiative
          (Mikaelson Initiative) is committed to creating a harassment-free,
          inclusive, and respectful environment for all community members,
          participants, volunteers, and staff.
        </p>
        <p>
          We pledge to make participation in our community a welcoming
          experience for everyone, regardless of age, body size, visible or
          invisible disability, ethnicity, sex characteristics, gender identity
          and expression, level of experience, education, socio-economic status,
          nationality, personal appearance, race, religion, or sexual identity
          and orientation.
        </p>
        <div className="mt-4 rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-4">
          <h4 className="font-bold text-cyan-800">Community Vision</h4>
          <p className="text-cyan-700">
            We strive to build the next generation of African leaders through
            excellence, integrity, collaboration, and mutual respect.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "2. Our Standards",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">2.1 Expected Behavior</h4>
        <p className="">
          Examples of behavior that contributes to a positive environment for
          our community include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Demonstrating empathy and kindness toward other people</li>
          <li>
            Being respectful of differing opinions, viewpoints, and experiences
          </li>
          <li>Giving and gracefully accepting constructive feedback</li>
          <li>
            Accepting responsibility and apologizing to those affected by our
            mistakes
          </li>
          <li>
            Focusing on what is best not just for us as individuals, but for the
            overall community
          </li>
          <li>Using welcoming and inclusive language</li>
          <li>
            Supporting fellow members in their personal and professional growth
          </li>
          <li>Sharing knowledge, resources, and opportunities generously</li>
          <li>Celebrating diversity and promoting equal participation</li>
        </ul>
        <h4 className="font-semibold">2.2 Unacceptable Behavior</h4>
        <p>Examples of unacceptable behavior include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            The use of sexualized language or imagery, and sexual attention or
            advances of any kind
          </li>
          <li>
            Trolling, insulting or derogatory comments, and personal or
            political attacks
          </li>
          <li>Public or private harassment, intimidation, or stalking</li>
          <li>
            Publishing others&apos; private information without their explicit
            permission
          </li>
          <li>
            Discrimination or prejudice based on any protected characteristic
          </li>
          <li>
            Disruptive behavior during events, meetings, or online discussions
          </li>
          <li>Deliberate spreading of misinformation or false claims</li>
          <li>
            Inappropriate use of nudity and/or sexual images in community spaces
          </li>
          <li>
            Other conduct which could reasonably be considered inappropriate in
            a professional setting
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "3. Community Guidelines",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">3.1 Excellence and Growth</h4>
        <p>
          We encourage all members to pursue excellence in their personal and
          professional development while supporting others in their journey.
          This includes:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Committing to continuous learning and improvement</li>
          <li>Setting and working toward meaningful goals</li>
          <li>Seeking mentorship and offering guidance to others</li>
          <li>Embracing challenges as opportunities for growth</li>
          <li>Maintaining high standards in all community interactions</li>
        </ul>
        <h4 className="font-semibold">3.2 Collaboration and Support</h4>
        <p>
          We value collaboration over competition. Members should actively
          support each other&apos;s initiatives and contribute to collective
          success through:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sharing resources, knowledge, and opportunities</li>
          <li>Offering help and assistance when needed</li>
          <li>Celebrating others&apos; achievements and milestones</li>
          <li>Building meaningful professional and personal relationships</li>
          <li>Participating actively in community initiatives</li>
        </ul>
        <h4 className="font-semibold">3.3 Integrity and Accountability</h4>
        <p>
          We expect all members to act with integrity, take responsibility for
          their actions, and hold themselves accountable to our community
          standards:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Being honest and transparent in all interactions</li>
          <li>Honoring commitments and following through on promises</li>
          <li>
            Taking responsibility for mistakes and working to correct them
          </li>
          <li>Respecting confidentiality when required</li>
          <li>Acting ethically in all professional and personal endeavors</li>
        </ul>
      </div>
    ),
  },
  {
    title: "4. Participation Guidelines",
    content: (
      <div className="space-y-2">
        <h4 className="font-semibold">4.1 Event and Program Conduct</h4>
        <p>
          During Mikaelson Innovation and Community Development Initiative
          (Mikaelson Initiative) events, workshops, programs, and activities:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Arrive on time and come prepared with necessary materials</li>
          <li>Participate actively and constructively in all activities</li>
          <li>
            Respect speakers, facilitators, organizers, and fellow participants
          </li>
          <li>Follow health and safety guidelines and protocols</li>
          <li>
            Keep mobile devices on silent during sessions unless otherwise
            instructed
          </li>
          <li>Respect venue rules, regulations, and property</li>
          <li>Use designated channels for feedback, questions, and concerns</li>
          <li>Dress appropriately for the occasion and setting</li>
        </ul>
        <h4 className="font-semibold">4.2 Online Community Standards</h4>
        <p>
          In our digital spaces, including social media groups, forums, video
          calls, and virtual events:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Keep discussions relevant, constructive, and on-topic</li>
          <li>Avoid spam, excessive self-promotion, or irrelevant content</li>
          <li>Respect privacy, confidentiality, and intellectual property</li>
          <li>
            Give proper credit and attribution when sharing others&apos; work
          </li>
          <li>
            Use appropriate language, tone, and professional communication
          </li>
          <li>Report violations promptly to moderators or administrators</li>
          <li>Follow platform-specific guidelines and terms of service</li>
          <li>
            Maintain appropriate backgrounds and attire during video calls
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "5. Professional and Academic Integrity",
    content: (
      <div>
        <h4 className="font-semibold">5.1 Academic Honesty</h4>
        <p>
          All members must maintain the highest standards of academic and
          professional integrity:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Avoiding plagiarism and properly citing all sources</li>
          <li>Submitting original work and collaborating ethically</li>
          <li>Respecting intellectual property rights</li>
          <li>
            Being honest about qualifications, achievements, and experience
          </li>
          <li>Maintaining confidentiality of sensitive information</li>
        </ul>
        <h4 className="font-semibold">5.2 Professional Representation</h4>
        <p>
          When representing the Mikaelson Innovation and Community Development
          Initiative (Mikaelson Initiative) or participating in community
          activities:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Conduct yourself in a manner that reflects positively on the
            community
          </li>
          <li>Respect organizational policies and procedures</li>
          <li>Maintain professional boundaries in all relationships</li>
          <li>Avoid conflicts of interest and disclose potential conflicts</li>
          <li>Protect the reputation and integrity of the organization</li>
        </ul>
      </div>
    ),
  },
  {
    title: "6. Enforcement Responsibilities",
    content: (
      <div className="space-y-2">
        <p>
          Community leaders, staff, and designated moderators are responsible
          for clarifying and enforcing our standards of acceptable behavior.
          They will take appropriate and fair corrective action in response to
          any behavior that they deem inappropriate, threatening, offensive, or
          harmful.
        </p>
        <h4 className="font-semibold">6.1 Investigation Process</h4>
        <p>All reports will be reviewed promptly and thoroughly:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Initial assessment within 48 hours of report</li>
          <li>Fair and impartial investigation of all parties involved</li>
          <li>Appropriate documentation of incidents and actions taken</li>
          <li>Follow-up with affected parties as appropriate</li>
          <li>Regular review of policies and procedures</li>
        </ul>
        <h4 className="font-semibold">6.2 Enforcement Guidelines</h4>
        <p>
          Community leaders will follow these Community Impact Guidelines in
          determining the consequences for any action they deem in violation of
          this Code of Conduct:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Correction</strong>
            <p className="pl-4">
              <strong>Impact:</strong> Use of inappropriate language or other
              behavior deemed unprofessional or unwelcome in the community.
            </p>
            <p className="pl-4">
              <strong>Consequence:</strong> A private, written warning from
              community leaders, providing clarity around the nature of the
              violation and an explanation of why the behavior was
              inappropriate.
            </p>
          </li>
          <li>
            <strong>Warning</strong>
            <p className="pl-4">
              <strong>Impact:</strong> A violation through a single incident or
              series of actions.
            </p>
            <p className="pl-4">
              <strong>Consequence:</strong> A warning with consequences for
              continued behavior. No interaction with the people involved for a
              specified period of time.
            </p>
          </li>
          <li>
            <strong>Temporary Ban</strong>
            <p className="pl-4">
              <strong>Impact:</strong> A serious violation of community
              standards, including sustained inappropriate behavior.
            </p>
            <p className="pl-4">
              <strong>Consequence:</strong> A temporary ban from any sort of
              interaction or public communication with the community for a
              specified period of time.
            </p>
          </li>
          <li>
            <strong>Permanent Ban</strong>
            <p className="pl-4">
              <strong>Impact:</strong> Demonstrating a pattern of violation of
              community standards, including sustained inappropriate behavior,
              harassment, or aggression.
            </p>
            <p className="pl-4">
              <strong>Consequence:</strong> A permanent ban from any sort of
              public interaction within the community.
            </p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "7. Reporting Violations",
    content: (
      <div className="space-y-2">
        <p>
          If you experience or witness behavior that violates this Code of
          Conduct, please report it immediately. All community members are
          encouraged to report violations, even if they are not directly
          affected.
        </p>
        <h4 className="font-semibold">7.1 Reporting Channels</h4>
        <p>You can report violations through any of the following channels:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Contact our support team through the official contact form</li>
          <li>Email us directly at conduct@mikaelsoninitiative.org</li>
          <li>Reach out to event organizers or staff during programs</li>
          <li>Use the reporting features available in our digital platforms</li>
          <li>Contact community leaders or mentors directly</li>
          <li>Submit an anonymous report through our online form</li>
        </ul>
        <h4 className="font-semibold">7.2 What to Include</h4>
        <p>
          When reporting a violation, please provide as much information as
          possible:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Date, time, and location of the incident</li>
          <li>Description of what happened</li>
          <li>Names of people involved (if known)</li>
          <li>Any witnesses to the incident</li>
          <li>Screenshots, recordings, or other evidence (if available)</li>
          <li>Impact of the incident on you or others</li>
        </ul>
        <div className="mt-4 rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-4">
          <h4 className="font-bold text-cyan-800">
            Confidentiality and Support
          </h4>
          <p className="text-cyan-700">
            All reports will be handled with discretion and confidentiality. We
            are committed to protecting the privacy of both reporters and those
            being reported. Support resources are available for those affected
            by violations.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: "8. Scope and Application",
    content: (
      <div className="space-y-2">
        <p>
          This Code of Conduct applies within all community spaces, including
          but not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Official events, workshops, and programs</li>
          <li>Online platforms, forums, and social media groups</li>
          <li>Email communications and private messages</li>
          <li>Virtual meetings and video conferences</li>
          <li>Community partnerships and collaborations</li>
          <li>Representation of the community in external forums</li>
        </ul>
        <p>
          This Code of Conduct also applies when an individual is officially
          representing the community in public spaces. Examples include using an
          official email address, posting via an official social media account,
          or acting as an appointed representative at events.
        </p>
      </div>
    ),
  },
  {
    title: "9. Support Resources",
    content: (
      <div className="space-y2">
        <p>
          We are committed to supporting all community members and providing
          resources for those who need assistance:
        </p>
        <h4 className="font-semibold">9.1 Internal Support</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Peer mentorship and buddy system</li>
          <li>Conflict resolution and mediation services</li>
          <li>Counseling and wellness resources</li>
          <li>Academic and professional development support</li>
          <li>Financial assistance programs (when available)</li>
        </ul>
        <h4 className="font-semibold">9.2 External Resources</h4>
        <p>
          For serious incidents or when additional support is needed, we can
          connect members with:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Local law enforcement agencies</li>
          <li>Mental health and counseling services</li>
          <li>Legal aid and advocacy organizations</li>
          <li>Educational institution support services</li>
          <li>Community crisis intervention programs</li>
        </ul>
      </div>
    ),
  },
  {
    title: "10. Policy Updates and Amendments",
    content: (
      <div className="space-y-2">
        <p>
          This Code of Conduct is a living document that may be updated
          periodically to reflect the evolving needs of our community and best
          practices in community management.
        </p>
        <h4 className="font-semibold">10.1 Review Process</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Annual review of the Code of Conduct and its effectiveness</li>
          <li>Community feedback collection and incorporation</li>
          <li>Consultation with experts in community management and ethics</li>
          <li>Alignment with organizational mission and values</li>
          <li>Compliance with applicable laws and regulations</li>
        </ul>
        <h4 className="font-semibold">10.2 Notification of Changes</h4>
        <p>When updates are made to this Code of Conduct, we will:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Post the updated version on our official website</li>
          <li>
            Notify all community members via email or platform announcement
          </li>
          <li>Provide a summary of significant changes</li>
          <li>Offer opportunities for questions and clarification</li>
          <li>Ensure all community leaders are trained on updates</li>
        </ul>
      </div>
    ),
  },
  {
    title: "11. Contact Information",
    content: (
      <div className="space-y-2">
        <p>
          For questions, concerns, or reports related to this Code of Conduct,
          please reach out to us through the following channels:
        </p>
        <div className="space-y-2">
          <div>
            <h4 className="font-semibold">General Conduct Inquiries</h4>
            <a href="/contact" className="text-cyan-600 underline">
              Visit our Contact Page
            </a>
          </div>
          <div>
            <h4 className="font-semibold">Code of Conduct Team</h4>
            <p>Email: conduct@mikaelsoninitiative.org</p>
          </div>
          <div>
            <h4 className="font-semibold">Anonymous Reports</h4>
            <a href="#" className="text-cyan-600 underline">
              Online form: Submit Anonymous Report
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "12. Attribution and Acknowledgments",
    content: (
      <div className="space-y-2">
        <p>
          This Code of Conduct is adapted from the Contributor Covenant, version
          2.1, and incorporates best practices from various community guidelines
          and organizational codes of conduct.
        </p>
        <p>
          We acknowledge the work of community leaders and organizations
          worldwide who have contributed to developing ethical standards for
          inclusive and respectful communities.
        </p>
        <p>
          This Code of Conduct reflects our commitment to building the next
          generation of African leaders through excellence, integrity, and
          mutual respect.
        </p>
      </div>
    ),
  },
];

export default function CodeOfConductContent() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <Accordion
          type="multiple"
          defaultValue={codeOfConductItems.map((_, idx) => `item-${idx}`)}
          className="space-y-2"
        >
          {codeOfConductItems.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
