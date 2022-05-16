import React from "react";

const CounterItem = (props) => {
  const { image, number, text } = props;
  return (
    <>
      {/* Start Counterup Single Item */}
      <div className="counterup-single-item">
        <div className="icon">
          <img src={image} alt={image} />
        </div>
        <div className="content">
          <h2 className="number">
            <span className="counter">{number}</span>+
          </h2>
          <span className="text">{text}</span>
        </div>
      </div>
      {/* End Counterup Single Item */}
    </>
  );
};

export default CounterItem;
