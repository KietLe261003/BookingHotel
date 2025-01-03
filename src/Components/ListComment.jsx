import React from "react";
import uesr from "@/assets/img/user.jpg";
const ListComment = () => {
  return (
    <div className="bg-white" style={{ padding: "30px", marginBottom: "30px" }}>
      <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
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
            Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua,
            tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
            dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur
            sadipscing, at tempor amet ipsum diam tempor consetetur at sit.
          </p>
          <button className="btn btn-sm btn-outline-primary">Reply</button>
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
          <button className="btn btn-sm btn-outline-primary">Reply</button>
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
              <button className="btn btn-sm btn-outline-primary">Reply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComment;
