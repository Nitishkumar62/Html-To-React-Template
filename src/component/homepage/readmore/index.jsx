import { Link } from "react-router-dom";
const ReadMore = () => {
  return (
    <div>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="detail-box">
                <h2>About us</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomisedThere are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised
                </p>
                <Link to="/">Read More</Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadMore;