import React from "react";

type Props = {};

function Pagination({}: Props) {
  return (
    <nav className="pagination">
      <div className="container">
        <div className="pagination__inner">
          <div className="pagination__list">
            <span className="pagination__prev disabled">
              <i className="ion ion-ios-arrow-back"></i> Prev
            </span>

            <div className="pagination__count">
              Page <span>1</span>
              of <span>1</span>
            </div>

            <span className="pagination__next disabled">
              Next <i className="ion ion-ios-arrow-forward"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Pagination;
