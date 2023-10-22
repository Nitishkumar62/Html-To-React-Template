import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css"; // Import the default Owl Carousel theme CSS

const OurClients = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <div>
      <section className="client_section">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="carousel-wrap layout_padding2-top">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="box">
                  <div class="client_id">
                    <div class="img-box">
                      <img src="images/client-1.jpg" alt="" />
                    </div>
                    <div class="client_detail">
                      <div class="client_info">
                        <h6>Jorch morik</h6>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="client_text">
                    <p>
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div class="client_id">
                    <div class="img-box">
                      <img src="images/client-2.jpg" alt="" />
                    </div>
                    <div class="client_detail">
                      <div class="client_info">
                        <h6>Jorch morik</h6>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="client_text">
                    <p>
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div class="client_id">
                    <div class="img-box">
                      <img src="images/client-1.jpg" alt="" />
                    </div>
                    <div class="client_detail">
                      <div class="client_info">
                        <h6>Jorch morik</h6>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="client_text">
                    <p>
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div class="client_id">
                    <div class="img-box">
                      <img src="images/client-2.jpg" alt="" />
                    </div>
                    <div class="client_detail">
                      <div class="client_info">
                        <h6>Jorch morik</h6>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="client_text">
                    <p>
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
