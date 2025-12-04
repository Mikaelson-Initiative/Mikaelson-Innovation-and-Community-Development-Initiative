
import React from "react";

const HelpContact: React.FC = () => {
  return (
    <div
      className="help-contact dark:text-brand-text-dark-heading text-black"
      style={{ textAlign: "center", marginBottom: "4rem" }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "2rem",
        }}
      >
        Still Need Help?
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Email Support */}
        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 6px",
            border: "1px solid rgb(229, 231, 235)",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            Email Support
          </h3>
          <p
            style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1rem" }}
          >
            Get detailed help via email
          </p>
          <a href="/contact">
            <button
              style={{
                background: "rgb(32, 201, 192)",
                color: "white",
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "50px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </a>
        </div>

        {/* WhatsApp */}
        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 6px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            WhatsApp
          </h3>
          <p
            style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1rem" }}
          >
            Quick support via WhatsApp
          </p>
          <a href="https://wa.me/your-number" target="_blank">
            <button
              style={{
                background: "#25d366",
                color: "white",
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "50px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Chat with Us
            </button>
          </a>
        </div>

        {/* FAQ */}
        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 6px",
            border: "1px solid rgb(229, 231, 235)",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            FAQ
          </h3>
          <p
            style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1rem" }}
          >
            Common questions answered
          </p>
          <a href="/faq">
            <button
              style={{
                background: "rgb(37, 99, 235)",
                color: "white",
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "50px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              View FAQ
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpContact;
