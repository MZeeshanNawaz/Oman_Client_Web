import React from "react";
import "../styles/style.css";
import HeroAbout from "../components/HeroAbout";
import { TeamMember } from "../types/index";
import { motion } from "framer-motion";

const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Raja Saeed Iqbal",
    role: "Chairman",
    img: "https://i.postimg.cc/L8XHG8NV/chairman.jpg",
  },
  {
    id: 2,
    name: "Amir Shoail Awan",
    role: "Mechanical Supervisor",
    img: "https://i.postimg.cc/GpgT6fFt/mechanical.jpg",
  },
  {
    id: 3,
    name: "Team",
    role: "Meet The Team",
    img: "https://i.postimg.cc/LXSGKy2c/team.jpg",
  },
];

const NAVY = "#1e3a8a";

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <>
      <HeroAbout />

      {/* Intro Section */}
      <motion.section
        className="about-intro py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Images */}
            <div className="col-lg-6 text-center">
              <div className="intro-images position-relative">
                <img
                  src="https://i.postimg.cc/1Xvg18rZ/cabin-2.jpg"
                  alt="Portacabin Site"
                  className="img-fluid rounded-circle shadow"
                  style={{ width: "360px", height: "360px", objectFit: "cover" }}
                />
                <img
                  src="https://i.postimg.cc/3Rv5HVXb/cabin-3.jpg"
                  alt="Portacabin Hand"
                  className="intro-small-img rounded-circle shadow bounce"
                  style={{ width: "150px", height: "150px", bottom: "10%", right: "10%" }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="col-lg-6">
              <p className="text-uppercase small fw-bold mb-2" style={{ color: NAVY }}>
                About Us
              </p>
              <h2 className="fw-bold mb-3">
                Leading Portable Cabin & Prefab Structure Manufacturer in Oman
              </h2>
              <h6 className="mb-3" style={{ color: NAVY }}>
                High-Quality, Durable & Cost-Effective Porta Cabins
              </h6>
              <p className="mb-4">
                Tariq Al Khoud Porta Kabin LLC specializes in designing,
                manufacturing, and delivering high-quality portable cabins
                across Oman. From site offices to portable rooms and prefab
                accommodations, our cabins are built with precision, durability,
                and comfort in mind.
              </p>

              <div className="d-flex gap-4 mb-4 flex-wrap">
                {/* Feature 1 */}
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-building me-2" style={{ color: NAVY }} />
                  <div>
                    <div className="fw-bold">Custom Porta Cabins</div>
                    <small className="text-muted">Designed to match your purpose</small>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-hammer me-2" style={{ color: NAVY }} />
                  <div>
                    <div className="fw-bold">On-Site Installation</div>
                    <small className="text-muted">Fast fabrication & delivery</small>
                  </div>
                </div>
              </div>

              <a
                href="#what-we-do"
                className="btn rounded-pill px-4"
                style={{ background: NAVY, color: "#fff" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="what-we-do"
        className="py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container text-center">
          <p className="text-uppercase small fw-bold" style={{ color: NAVY }}>
            What We Do
          </p>
          <h2 className="fw-bold mb-5" style={{ color: NAVY }}>
            Our Services
          </h2>

          <div className="row g-4">
            {[
              {
                icon: "fa-house",
                title: "Portable Rooms",
                desc: "Comfortable and durable portable rooms for labor, staff, and personal use.",
              },
              {
                icon: "fa-building",
                title: "Prefabricated Cabins",
                desc: "High-quality prefab structures for offices, camps, kitchens, and storage.",
              },
              {
                icon: "fa-truck-fast",
                title: "Fast Delivery",
                desc: "Quick manufacturing and delivery anywhere in Oman.",
              },
              {
                icon: "fa-screwdriver-wrench",
                title: "On-Site Setup",
                desc: "Professional installation and support for all cabin types.",
              },
            ].map((service, idx) => (
              <motion.div
                className="col-sm-6 col-lg-3"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="card h-100 border-0 shadow-sm p-3">
                  <div className="mb-3 display-6">
                    <i className={`fa-solid ${service.icon}`} style={{ color: NAVY }} />
                  </div>
                  <h6 className="fw-bold">{service.title}</h6>
                  <p className="small text-muted">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us with GIF */}
      <motion.section
        className="py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: NAVY }}>
            Why Choose Us?
          </h2>
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-8 position-relative">
              <p className="text-muted">
                Our cabins are built to withstand Oman's climate while ensuring
                superior comfort, safety, and durability. With years of expertise,
                we deliver top-quality portable cabins for construction sites,
                companies, farms, homes, and more — always at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container text-center">
          <p className="fw-semibold mb-2" style={{ color: NAVY }}>
            Our Team
          </p>
          <h2 className="fw-bold mb-5" style={{ color: NAVY }}>
            Meet the Experts
          </h2>
          <div className="row g-4">
            {TEAM.map((m, idx) => (
              <motion.div
                className="col-md-4"
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="card border-0 shadow-sm">
                  <img
                    src={m.img}
                    alt={`${m.name} – ${m.role}`}
                    className="card-img-top"
                    style={{ height: 260, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6 className="fw-bold mb-0">{m.name}</h6>
                    <small className="text-muted">{m.role}</small>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
