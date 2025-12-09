import React from "react";
import { motion } from "framer-motion";
import { Service } from "../types/index";

const NAVY = "#1e3a8a";

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Office Cabins",
      image: "https://i.postimg.cc/nrnXj4cy/cabin-4.jpg",
      description:
        "Modern, air-conditioned office cabins designed for site offices and temporary setups.",
    },
    {
      id: 2,
      title: "Labor Accommodation Cabins",
      image: "https://i.postimg.cc/D0StcDZC/cabin-6.jpg",
      description:
        "Durable and safe labor accommodation units ideal for on-site workers and staff housing.",
    },
    {
      id: 3,
      title: "Security Rooms",
      image: "https://i.postimg.cc/NFxpmk8H/cabin-7.jpg",
      description:
        "Compact, comfortable security rooms built for continuous outdoor use and surveillance needs.",
    },
    {
      id: 4,
      title: "Toilet & Shower Units",
      image: "https://i.postimg.cc/L54zKKf0/cabin-8.jpg",
      description:
        "Portable washroom and shower solutions for worksites, events, and remote areas.",
    },
    {
      id: 5,
      title: "Storage & Workshop Cabins",
      image: "https://i.postimg.cc/MH4XshYQ/cabin-9.jpg",
      description:
        "Customized storage and small workshop units with reinforced flooring and safety design.",
    },
    {
      id: 6,
      title: "Custom Design Cabins",
      image: "https://i.postimg.cc/3WMwT20k/cabin-1.jpg",
      description:
        "Tailored cabins to match your specifications — from executive offices to site clinics.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-4"
          style={{ color: NAVY }} // changed from primary
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          Our Portable Cabin Solutions
        </motion.h2>
        <motion.p
          className="mb-5 text-muted"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Tariq Al Khoud LLC, we design, manufacture, and deliver high-quality portable cabins
          that meet diverse industrial and residential needs.
        </motion.p>

        <div className="row g-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="col-md-6 col-lg-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top rounded-top"
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: NAVY }}>
                    {service.title}
                  </h5>
                  <p className="card-text text-muted small">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
