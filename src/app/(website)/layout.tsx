import { Footer } from "@/components/footer";
import Header from "@/features/website/components/header";
import React, { PropsWithChildren } from "react";

const WebsiteRootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="dark:bg-brand-dark-bg-nav ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default WebsiteRootLayout;
