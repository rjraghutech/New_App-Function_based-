import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="card" style={{ width: "25rem", height: "30rem" }}>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {" "}
          {source}
        </span>
        <img
          src={imgUrl}
          className="card-img-top"
          alt="..."
          width={"25rem"}
          height={"225rem"}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-danger">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
