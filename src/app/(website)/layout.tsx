import { Footer } from "@/components/footer";
import Header from "@/features/website/components/header";
import React, { PropsWithChildren } from "react";

const WebsiteRootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default WebsiteRootLayout;
