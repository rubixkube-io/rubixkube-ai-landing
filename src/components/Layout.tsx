// src/components/Layout.tsx
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopBanner from "./TopBanner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <TopBanner onClose={handleCloseBanner} />
      )}
      <div className="relative">
        <Header />
        <main className={`min-h-[70vh] transition-all duration-300 ${showBanner ? 'pt-24' : 'pt-16'}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;