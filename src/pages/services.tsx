import React from "react";
import CurvyEdge from "../components/CurvyEdge";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../styles/style.css";

const NAVY = "#1e3a8a";

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // -------------------------
  // SERVICES LIST (Your Original)
  // -------------------------
  const serviceList = [
    {
      icon: "fa-building",
      title: "Office Cabins",
      desc: "Durable, air-conditioned office cabins ideal for site offices and temporary workspaces.",
      points: ["Available anytime", "Fully customizable layouts", "Designed for safety & comfort"],
    },
    {
      icon: "fa-hard-hat",
      title: "Labor Accommodation Cabins",
      desc: "Safe and comfortable housing units for labor and staff across construction and industrial sites.",
      points: ["Cost-effective", "Modular and relocatable", "Durable materials"],
    },
    {
      icon: "fa-shield-alt",
      title: "Security Rooms",
      desc: "Compact cabins for security personnel, equipped for continuous monitoring and comfort.",
      points: ["Weather-resistant", "Customizable", "Quick deployment"],
    },
    {
      icon: "fa-toilet",
      title: "Toilet & Shower Units",
      desc: "Portable washrooms and shower units for work sites, events, and remote areas.",
      points: ["Hygienic & durable", "Easy to install", "Modular design"],
    },
    {
      icon: "fa-warehouse",
      title: "Storage & Workshop Cabins",
      desc: "Custom storage solutions and small workshop units with reinforced flooring and safety features.",
      points: ["Flexible layouts", "Weather-proof", "Secure and robust"],
    },
    {
      icon: "fa-cogs",
      title: "Custom Design Cabins",
      desc: "Tailor-made modular cabins for executive offices, clinics, or specialized site needs.",
      points: ["Fully customized", "Durable construction", "Rapid deployment"],
    },
  ];

  // -------------------------
  // PRODUCTS LIST (Added)
  // -------------------------
  const products = [
    {
      id: 1,
      image: "https://i.postimg.cc/Hngvgk5V/durable.jpg",
      description:
        "Durable modular cabins built with insulated panels to ensure comfort and performance in harsh climates.",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/sD29ZW3N/portable.jpg",
      description:
        "Portable cabin offices designed for efficient workspace setup, with modern layouts and reliable structures.",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/HnwKcyH9/flexible.jpg",
      description:
        "Flexible prefabricated rooms developed for quick installation and safe onsite use across various industries.",
    },
  ];

  return (
    <div className="services-page">
      <Helmet>
        <title>Tariq Al Khoud LLC | Porta Cabin Services Oman</title>
        <meta
          name="description"
          content="Tariq Al Khoud LLC provides high-quality portable cabins in Oman. Explore office cabins, labor housing, security rooms, sanitary units, storage, and custom modular cabins."
        />
      </Helmet>

      {/* HERO SECTION */}
      <header className="hero hero-section position-relative">
        <div className="hero-overlay" />
        <div className="container hero-content text-center text-white">
          <small className="text-uppercase breadcrumb">Home / Services</small>
          <h1 className="display-5 fw-bold">Our Porta Cabin Services</h1>
        </div>
        <CurvyEdge color="#fff" />
      </header>

      {/* SERVICES SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 style={{ color: NAVY }}>🏗 Our Services</h6>
            <h2 className="fw-bold">High-Quality Portable Cabins for Every Requirement in Oman</h2>
          </div>

          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              className="row align-items-center mb-5"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="col-md-2 text-center fs-1" style={{ color: NAVY }}>
                <i className={`fas ${service.icon}`}></i>
              </div>

              <div className="col-md-10">
                <h4 className="fw-bold" style={{ color: NAVY }}>{service.title}</h4>
                <p>{service.desc}</p>

                <ul className="list-unstyled">
                  {service.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      style={{ display: "flex", alignItems: "center", gap: "8px", color: NAVY, fontWeight: "bold" }}
                    >
                      <i className="fas fa-check" style={{ fontSize: "18px" }}></i>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* HELP BOX */}
          <motion.div
            className="text-center p-5 bg-light rounded shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <i className="fas fa-comments fs-1 mb-3" style={{ color: NAVY }}></i>
            <h4 className="fw-bold" style={{ color: NAVY }}>Need Help Choosing a Cabin?</h4>
            <p>Contact us to find the perfect portable cabin for your needs. You can also visit our gallery page.</p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------- */}
      {/* PRODUCTS SECTION (NEW)       */}
      {/* ---------------------------- */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h6 style={{ color: NAVY }}>🏢 Our Products</h6>
            <h2 className="fw-bold">Portable Cabins Available for You</h2>
          </div>

          <div className="row g-4">
            {products.map((p) => (
              <div key={p.id} className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img
                    src={p.image}
                    className="card-img-top"
                    alt={p.description}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <div className="card-body">
                    <p>{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
