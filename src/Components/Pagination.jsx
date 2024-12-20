import React from "react";

const Pagination = () => {
  return (
    <div className="col-12">
      <nav aria-label="Page navigation">
        <ul
          className="pagination pagination-lg justify-content-center bg-white mb-0"
          style={{ padding: "30px" }}
        >
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {[1, 2, 3].map((page) => (
            <li
              key={page}
              className={`page-item ${page === 1 ? "active" : ""}`}
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
