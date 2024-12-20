import React from 'react';
import blog1 from '@/assets/img/blog-1.jpg';
import blog2 from '@/assets/img/blog-2.jpg';
import blog3 from '@/assets/img/blog-3.jpg';
import Pagination from '../../../Components/Pagination';
import RightSection from './Components/RightSection';
const BlogPage = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row pb-3">
                            {[blog1, blog2, blog3, blog1, blog2, blog3, blog1, blog2].map((item, index) => (
                                <div key={index} className="col-md-6 mb-4 pb-2">
                                    <div className="blog-item">
                                        <div className="position-relative">
                                            <img className="img-fluid w-100" src={item} alt="Blog" />
                                            <div className="blog-date">
                                                <h6 className="font-weight-bold mb-n1">01</h6>
                                                <small className="text-white text-uppercase">Jan</small>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4">
                                            <div className="flex mb-2 w-full">
                                                <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                                <span className="text-primary px-2">|</span>
                                                <a className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                                            </div>
                                            <a className="m-0 text-decoration-none font-bold text-black w-full text-xl" href="/detailblog/1">Dolor justo sea kasd lorem clita justo diam amet</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination></Pagination>
                    </div>
                    <RightSection></RightSection>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
