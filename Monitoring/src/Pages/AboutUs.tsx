import NavButton from "../Components/NavButton";
import "../Design/about.css";
import pic1 from "../assets/carousel1.jpg";
import pic2 from "../assets/carousel2.jpeg";
import { Carousel } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <NavButton />

      <div className="about-container">
        <h1 className="text-center my-2">About Us</h1>
        <div>
          <p className="about-text">
            Welcome to Hydrophonic research team, where technology meets
            sustainable farming! We specialize in designing and developing
            professional websites for hydroponic businesses, farmers, and urban
            gardeners. Our goal is to help you showcase your innovative farming
            techniques, products, and services through a modern, user-friendly,
            and visually stunning website. With expertise in web development,
            SEO, and digital marketing, we ensure your online presence stands
            out, attracts customers, and grows your business. Whether you need
            an e-commerce platform, an informational blog, or a custom-built
            website, we’ve got you covered.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Side: Carousel */}
          <div className="carousel col-lg-6 col-md-12 mb-4">
            <Carousel>
              <Carousel.Item>
                <img
                  src={pic1}
                  className="img-fluid rounded"
                  alt="Hydroponic"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={pic2}
                  className="img-fluid rounded"
                  alt="Hydroponic"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Right Side: Text Content */}
          <div className="col-lg-6 col-md-12">
            <h1 className="font center">Research Team</h1>
            <p className="info-text">
              Over the last few years, hydroponic cultivation has emerged as an
              efficient and sustainable approach to crop production, especially
              in controlled environment conditions like air-vent greenhouses...
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="contact-section">
        <p className="footer-text">Please Message Us:</p>
        <p className="footer-text2">
          You can visit Naga College Foundation-Agri-Technopreneurship Center,
          Brgy. Pacol, Naga City, Philippines
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
