import React, { Component } from "react";
import "../../blogs/sections/Sections.css";
import "./Rs.css";
import { section3 } from "./Data";
import { Link } from "react-router-dom";

class Rs extends Component {
  display_rs = () => {
    let items = section3.map((item, index) => {
      return (
        <div className="c col-lg-3 col-md-6 col-12" key={index}>
          <div className="card mx-auto shadow-lg mb-5">
            <img
              className="img-fluid mb-3"
              src={item.image}
              alt={`section ${index}`}
            />
            <div className="card-body p-4">
              <h5 className="card-img-top card-title mb-">{item.title}</h5>
              <p className="card-text mb-4">
                {item.description}
              </p>
              <div className="_footer d-flex flex-wrap justify-content-between align-items-center">
                <button className="btn btn-primary text-capitalize mb-3 btn-sm myedit-readmorebtn-recentblogs">
                  read more <i className="fas fa-chevron-right ms-2"></i>
                </button>
                {/* <p className="date text-muted">{item.date}</p> */}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return items;
  };

  render() {
    return (
      <div className="sections blogs _rs py-5 mb-5">
        <div className="container">
          <div className="title py-5 text-md-start text-center">
            <h4 className="sub-title text-capitalize">
              recent <span>Courses</span>
            </h4>
          </div>
          <div className="_s row justify-content-start">
            {this.display_rs()}
            <div className="rs text-center">
              <Link className="blogs text-capitalize" to="/blogs">
                see all blogs of ours{" "}
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rs;
