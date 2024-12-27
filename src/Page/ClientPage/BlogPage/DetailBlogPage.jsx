import RightSection from "./Components/RightSection";
import uesr from "@/assets/img/user.jpg";
import blog1 from "@/assets/img/blog-1.jpg";
import ListComment from "../../../Components/ListComment";
import CreateComment from "../../../Components/CreateComment";
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
            <ListComment></ListComment>

            <CreateComment></CreateComment>
          </div>
          <RightSection></RightSection>
        </div>
      </div>
    </div>
  );
};

export default DetailBlogPage;
