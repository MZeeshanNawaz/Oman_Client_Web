import React, { useRef } from "react";
import "../styles/style.css";
import CurvyEdge from "./CurvyEdge";
import { Helmet } from "react-helmet";
import { motion, useInView } from "framer-motion";

const NAVY = "#1e3a8a";

const HeroHome = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <>
      <Helmet>
        <title>Tariq Al Khoud LLC | Modular & Portable Rooms in Oman</title>
        <meta
          name="description"
          content="Tariq Al Khoud LLC designs and builds high-quality modular and portable rooms, site offices, and prefabricated structures in Oman. Fast installation, durable materials, and custom designs."
        />
        <meta
          name="keywords"
          content="Tariq Al Khoud, modular rooms, portable rooms, prefabricated offices, Oman construction"
        />
      </Helmet>

      <header className="hero-home position-relative" ref={containerRef}>
        <div className="hero-overlay" />

        <div className="container hero-content text-white">
          <motion.p
            className="small text-uppercase fw-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Leading Provider of Modular & Portable Spaces in Oman
          </motion.p>

          <motion.h1
            className="display-4 fw-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Tariq Al Khoud LLC
          </motion.h1>

          <motion.p
            className="lead mb-4"
            style={{ maxWidth: "520px"}}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            We design and build high-quality modular portable rooms and site offices across Oman.
            Fast installation, durable materials, and custom designs tailored to your business needs.
          </motion.p>

          <motion.a
            href="#intro"
            className="btn rounded-pill btn-lg px-4"
            style={{ backgroundColor: NAVY, color: "#fff" }}
            title="Explore Solutions - Tariq Al Khoud LLC"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Explore Our Solutions
          </motion.a>
        </div>

        <CurvyEdge color="#fff" />
      </header>
    </>
  );
};

export default HeroHome;
