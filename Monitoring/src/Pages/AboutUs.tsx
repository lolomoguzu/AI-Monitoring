import NavButton from "../Components/NavButton";
import "../Design/about.css";
import hydrophonic from "../assets/hydrophonic.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <NavButton />
      <h1 className="Title">About Us</h1>
      <p className="about-text">
        Welcome to Quadrons, where technology meets sustainable farming! We
        specialize in designing and developing professional websites for
        hydroponic businesses, farmers, and urban gardeners. Our goal is to help
        you showcase your innovative farming techniques, products, and services
        through a modern, user-friendly, and visually stunning website. With
        expertise in web development, SEO, and digital marketing, we ensure your
        online presence stands out, attracts customers, and grows your business.
        Whether you need an e-commerce platform, an informational blog, or a
        custom-built website, we’ve got you covered. Let’s cultivate success
        together one click at a time.
      </p>
      
      <img src={hydrophonic} className="Hydrophonic" /><p>reqqeqe</p>
    </div>
  );
};

export default AboutUs;
