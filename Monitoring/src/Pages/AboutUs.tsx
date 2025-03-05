import NavButton from "../Components/NavButton";
import "../Design/about.css";
import hydrophonic from "../assets/AboutUs.jpg";
import plants from "../assets/hydrophonic.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <NavButton />
      <h1 className="Title">About Us</h1>
      <p className="about-text">
        Welcome to Hydrophonic research team, where technology meets sustainable
        farming! We specialize in designing and developing professional websites
        for hydroponic businesses, farmers, and urban gardeners. Our goal is to
        help you showcase your innovative farming techniques, products, and
        services through a modern, user-friendly, and visually stunning website.
        With expertise in web development, SEO, and digital marketing, we ensure
        your online presence stands out, attracts customers, and grows your
        business. Whether you need an e-commerce platform, an informational
        blog, or a custom-built website, we’ve got you covered.
      </p>
      <div className="Hydrophonic">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={hydrophonic} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={plants} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={hydrophonic} className="d-block w-100" alt="New York" />
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <p className="Name">
          Over the last few years, hydroponic cultivation has emerged as an
          efficient and sustainable approach to crop production, especially in
          controlled environment conditions like air-vent greenhouses. Unlike
          soil-based conventional farming, hydroponics utilizes
          nutrient-sufficient water solutions for plant growth, with the
          benefits of increased yield, water-efficient use, and all-season
          production. Nevertheless, ensuring optimal growing parameters in
          hydroponics necessitates accurate measurement of environmental factors
          like temperature, humidity, pH levels. That’s where Quadrons comes in,
          our goal is to provide you with the tools and resources you need to
          monitor and manage your hydroponic farm effectively. Our website is a
          one-stop solution for all your hydroponic needs, from equipment and 3D
          models to tutorials and expert advice.
        </p>
      </div>

      <footer>Please Message Us:</footer>
    </div>
  );
};

export default AboutUs;
