import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade bg-dark"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div
          className="carousel-inner"
          id="carousel"
          style={{ minHeight: "500px" }}
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2 bg-dark text-white"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="/my-images/burger.jpeg"
              className="d-block w-100"
              alt=""
              style={{
                filter: "brightness(30%)",
                width: "1899px",
                height: "900px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/my-images/pastry.jpeg"
              className="d-block w-100"
              alt="..."
              style={{
                filter: "brightness(30%)",
                width: "900px",
                height: "700px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/my-images/barbeque.jpeg"
              className="d-block w-100"
              alt="..."
              style={{
                filter: "brightness(30%)",
                width: "900px",
                height: "700px",
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
