import React from "react";

const HelpHeader: React.FC = () => {
  return (
    <div
      className="help-header dark:text-brand-text-dark-heading text-black"
      style={{ textAlign: "center", margin: "2rem 0 3rem" }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          marginBottom: "1rem",
        }}
      >
        Help Center
      </h1>
      <p
        className="text-gray-700 dark:text-brand-text-dark"
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Find answers, get support, and learn how to make the most of your
        Mikaelson Initiative experience.
      </p>
    </div>
  );
};

export default HelpHeader;
