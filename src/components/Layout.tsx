// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopBanner from "./TopBanner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBanner />
      <div className="relative">
        <Header hasBanner={true} />
        <main className="flex-grow min-h-[70vh] pt-32 md:pt-28 transition-all duration-300">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;