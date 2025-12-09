// src/App.tsx
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ContactStrip from "./components/ContactStrip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToastsContainer from "./components/ToastsContainer";

import Home from "./pages/Home";
import About from "./pages/About";
import Marketplace from "./pages/Marketplace";
import Contact from "./pages/Contact";
import Services from "./pages/services";
import Blog from "./pages/Blog";


interface Toast {
  id: number;
  title: string;
  message: string;
  type?: "success" | "danger" | "info" | "warning";
}

function AppContent() {
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/register"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  const [search, setSearch] = useState("");
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  // Toast helper
  const addToast = ({
    title,
    message,
    type = "success",
    timeout = 3000,
  }: {
    title: string;
    message: string;
    type?: "success" | "danger" | "info" | "warning";
    timeout?: number;
  }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), timeout);
  };

  const handleSubscribe = () => {
    if (!subscribeEmail.trim()) {
      addToast({ title: "Error", message: "Please enter an email", type: "danger" });
      return;
    }
    addToast({ title: "Subscribed", message: `You subscribed with ${subscribeEmail}` });
    setSubscribeEmail("");
  };

  return (
    <>
      {!hideLayout && (
        <>
          <ContactStrip />
          <Navbar search={search} setSearch={setSearch} />
        </>
      )}

      <ToastsContainer
        toasts={toasts}
        removeToast={(id: number | string) =>
          setToasts((prev) => prev.filter((t) => t.id !== id))
        }
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/gallery"
          element={<Marketplace showToast={addToast} />}
        />
        <Route path="/contact" element={<Contact showToast={addToast} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {!hideLayout && (
        <Footer
          subscribeEmail={subscribeEmail}
          setSubscribeEmail={setSubscribeEmail}
          handleSubscribe={handleSubscribe}
        />
      )}
    </>
  );
}

export default function App() {
  return <AppContent />;
}
