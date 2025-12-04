"use client";
import React, { useState } from "react";
import { WireTransferDialog } from "./transfer-wire-modal";
import CompanyPaymentOptionsDialog from "./company-payment";

export const SponsorHeader: React.FC = () => {
  const [openWireTransfer, setOpenWireTransfer] = useState(false);
  const [openPaymentMethod, setOpenPaymentMethod] = useState(false);
  const handleOpenWireTransfer = () => {
    setOpenWireTransfer(true);
    handleClosePaymentMethod();
  };
  const handleCloseWireTransfer = () => {
    setOpenWireTransfer(false);
  };

  const handleOpenPaymentMethod = () => {
    setOpenPaymentMethod(true);
  };
  const handleClosePaymentMethod = () => {
    setOpenPaymentMethod(false);
  };
  return (
    <section
      className="sponsor-header"
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        background: "rgba(92, 225, 230, 0.5)",
        borderRadius: 24,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <h1
        className="text-2xl md:text-[3rem] text-black dark:text-brand-text-dark-heading"
        style={{ fontWeight: 800 }}
      >
        Sponsor and Support Our Initiative
      </h1>
      <p
        className="text-base md:text-[1.2rem] w-full  lg:max-w-[800px] dark:text-brand-text-dark-heading text-gray-700"
        style={{
          margin: "1rem auto",
        }}
      >
        Your support empowers the next generation of African leaders, builders,
        and innovators. By sponsoring a program, you directly contribute to our
        mission of transforming the continent from the inside out.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleOpenPaymentMethod}
          className="text-sm md:text-[1.1rem] font-semibold cursor-pointer border-none rounded-[2rem]"
          style={{
            background: "rgb(37, 99, 235)",
            color: "white",
            padding: "1rem 2rem",
          }}
        >
          As an Individual
        </button>
        <button
          onClick={handleOpenPaymentMethod}
          className="text-sm md:text-[1.1rem] font-semibold cursor-pointer border-none rounded-[2rem]"
          style={{
            background: "rgb(31, 41, 55)",
            color: "white",
            padding: "1rem 2rem",
          }}
        >
          As a Company/Organization
        </button>
      </div>
      <WireTransferDialog
        open={openWireTransfer}
        onClose={handleCloseWireTransfer}
      />
      <CompanyPaymentOptionsDialog
        onWireTransfer={handleOpenWireTransfer}
        open={openPaymentMethod}
        onClose={handleClosePaymentMethod}
      />
    </section>
  );
};
