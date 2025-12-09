import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/IntroSection.css"; // for bounce effect

const NAVY = "#1e3a8a";

const IntroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="intro" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center" data-aos="fade-right">
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

          <div className="col-lg-6" data-aos="fade-left">
            <p
              className="text-uppercase small fw-bold mb-2"
              data-aos="fade-down"
              data-aos-delay={100}
              style={{ color: NAVY }} 
            >
              Our Introduction
            </p>
            <h2
              className="fw-bold mb-3"
              data-aos="fade-up"
              data-aos-delay={200}
              style={{ color: NAVY }} 
            >
              Premium Portable Cabins for Every Need
            </h2>
            <h6
              className="mb-3"
              data-aos="fade-up"
              data-aos-delay={300}
              style={{ color: NAVY }} 
            >
              Why Choose Us?
            </h6>
            <p
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              Tariq Al Khoud specializes in high-quality portable cabins suitable
              for offices, construction sites, and temporary housing. Our cabins
              are durable, customizable, and delivered quickly to meet your
              project deadlines.
            </p>

            <div className="d-flex flex-wrap gap-4 mb-4">
              <div data-aos="fade-up" data-aos-delay={500}>
                <i className="fa-solid fa-building me-2" style={{ color: NAVY }}></i>
                Office Cabins
              </div>
              <div data-aos="fade-up" data-aos-delay={700}>
                <i className="fa-solid fa-industry me-2" style={{ color: NAVY }}></i>
                Industrial Cabins
              </div>
              <div data-aos="fade-up" data-aos-delay={800}>
                <i className="fa-solid fa-shield-alt me-2" style={{ color: NAVY }}></i>
                Security Rooms
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <i className="fa-solid fa-home me-2" style={{ color: NAVY }}></i>
                Residential Cabins
              </div>
              <div data-aos="fade-up" data-aos-delay={900}>
                <i className="fa-solid fa-hard-hat me-2" style={{ color: NAVY }}></i>
                Labor Cabins
              </div>
            </div>

            <a
              href="#services"
              className="btn rounded-pill px-4"
              data-aos="zoom-in"
              data-aos-delay={1000}
              style={{ backgroundColor: NAVY, color: "#fff" }} 
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
