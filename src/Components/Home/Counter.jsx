import React from "react";
import CounterItem from "./CounterItem";

const Counter = () => {
  return (
    <>
      <div className="counter-display-section section-gap-tb-165 section-bg-2">
        <div className="counter-display-wrapper">
          <div className="container">
            <div className="row justify-content-center justify-content-sm-start">
              <div className="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4">
                <CounterItem
                  number={"258"}
                  text={"Happy Clients"}
                  image={"assets/images/icon/counterup-icon-1.png"}
                />
              </div>
              <div className="d-block d-md-flex justify-content-md-center col-12 col-sm-4 col-md-4">
                <CounterItem
                  number={"590"}
                  text={"Project Complete"}
                  image={"assets/images/icon/counterup-icon-2.png"}
                />
              </div>
              <div className="d-block d-md-flex justify-content-md-end col-12 col-sm-4 col-md-4">
                <CounterItem
                  number={"28"}
                  text={"Years of Experience"}
                  image={"assets/images/icon/counterup-icon-3.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
