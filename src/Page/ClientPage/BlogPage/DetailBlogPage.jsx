import RightSection from "./Components/RightSection";
import uesr from "@/assets/img/user.jpg";
import blog1 from "@/assets/img/blog-1.jpg";
const DetailBlogPage = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Detail Start */}
            <div className="pb-3">
              <div className="blog-item">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={blog1} alt="" />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">01</h6>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Detail End */}

            {/* Comment List Start */}
            <div
              className="bg-white"
              style={{ padding: "30px", marginBottom: "30px" }}
            >
              <h4
                className="text-uppercase mb-4"
                style={{ letterSpacing: "5px" }}
              >
                3 Comments
              </h4>
              <div className="media mb-4 flex justify-start">
                <img
                  src={uesr}
                  alt=""
                  className="img-fluid mr-3 mt-1"
                  style={{ width: "45px" }}
                />
                <div className=" flex flex-col items-start">
                  <h6>
                    <a href="">John Doe</a>{" "}
                    <small>
                      <i>01 Jan 2045</i>
                    </small>
                  </h6>
                  <p className="text-left">
                    Diam amet duo labore stet elitr invidunt ea clita ipsum
                    voluptua, tempor labore accusam ipsum et no at. Kasd diam
                    tempor rebum magna dolores sed sed eirmod ipsum. Gubergren
                    clita aliquyam consetetur sadipscing, at tempor amet ipsum
                    diam tempor consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-outline-primary">
                    Reply
                  </button>
                </div>
              </div>
              <div className="media">
                <img
                  src={uesr}
                  alt=""
                  className="img-fluid mr-3 mt-1"
                  style={{ width: "45px" }}
                />
                <div className="flex flex-col items-start">
                  <h6>
                    <a href="">John Doe</a>{" "}
                    <small>
                      <i>01 Jan 2045</i>
                    </small>
                  </h6>
                  <p className="text-left">
                    Diam amet duo labore stet elitr invidunt...
                  </p>
                  <button className="btn btn-sm btn-outline-primary">
                    Reply
                  </button>
                  <div className="media mt-4">
                    <img
                      src={uesr}
                      alt=""
                      className="img-fluid mr-3 mt-1"
                      style={{ width: "45px" }}
                    />
                    <div className="flex flex-col items-start">
                      <h6>
                        <a href="">John Doe</a>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p className="text-left">
                        Diam amet duo labore stet elitr invidunt...
                      </p>
                      <button className="btn btn-sm btn-outline-primary">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white mb-3" style={{ padding: "30px" }}>
              <h4
                className="text-uppercase mb-4"
                style={{ letterSpacing: "5px" }}
              >
                Leave a comment
              </h4>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input type="url" className="form-control" id="website" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="5"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group mb-0">
                  <input
                    type="submit"
                    value="Leave a comment"
                    className="btn btn-primary font-weight-semi-bold py-2 px-3"
                  />
                </div>
              </form>
            </div>
          </div>
          <RightSection></RightSection>
        </div>
      </div>
    </div>
  );
};

export default DetailBlogPage;
