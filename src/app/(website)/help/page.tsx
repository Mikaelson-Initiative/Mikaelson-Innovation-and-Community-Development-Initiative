import HelpCategory from "@/features/website/components/help-center/help-category";
import HelpContact from "@/features/website/components/help-center/help-contact";
import HelpHeader from "@/features/website/components/help-center/help-header";
import HelpResources from "@/features/website/components/help-center/help-resources";
import HelpSearch from "@/features/website/components/help-center/help-search";
import { Calendar, Pen, Sun, Users } from "lucide-react";
import React from "react";


const HelpCenterPage: React.FC = () => {
  return (
    <div
      className="help-wrapper"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem 4rem",
      }}
    >
      <HelpHeader />

      {/* Categories Grid */}
      <div
        className="help-categories"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "4rem",
          alignItems: "stretch",
        }}
      >
        {/* Example Category */}
        <HelpCategory
          icon={<span><Pen className="text-white" /></span>}
          title="Getting Started"
          description="Learn how to join our community and get the most out of your membership."
          details={[
            {
              title: "How to Join the Community",
              description: "Step-by-step guide to becoming a member.",
            },
            {
              title: "Setting Up Your Profile",
              description: "Complete your profile to connect with others.",
            },
          ]}
        />

        <HelpCategory
          icon={<span><Calendar className="text-white" /></span>}
          title="Programs & Events"
          description="Information about our programs, workshops, and community events."
          details={[
            {
              title: "Upcoming Events",
              description: "Stay updated on workshops and gatherings.",
            },
            {
              title: "Program Registration",
              description: "How to register for development programs.",
            },
          ]}
        />

        <HelpCategory
          icon={<span><Sun className="text-white" /></span>}
          title="Technical Support"
          description="Get help with website issues, account problems, and technical difficulties."
          details={[
            {
              title: "Account Issues",
              description: "Trouble logging in or accessing your account?",
            },
            {
              title: "Website Problems",
              description: "Report bugs, broken links, or issues.",
            },
          ]}
        />

        <HelpCategory
          icon={<span><Users className="text-white" /></span>}
          title="Community Support"
          description="Connect with other members and get support from the community."
          details={[
            {
              title: "Finding Mentors",
              description: "How to connect with mentors and advisors.",
            },
            {
              title: "Collaboration Opportunities",
              description: "Discover collaboration options.",
            },
          ]}
        />
      </div>

      <HelpSearch />
      <HelpContact />
      <HelpResources />
    </div>
  );
};

export default HelpCenterPage;
