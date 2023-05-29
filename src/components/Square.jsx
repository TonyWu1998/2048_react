import React from "react";

function Square(props) {
  return (
    <div
      className="square"
      style={
        props.number !== 0
          ? {
              backgroundColor:
                "rgb(" +
                (250 - props.number * 0.02) +
                "," +
                (255 - props.number * 5) +
                "," +
                (80 + props.number * 0.3) +
                ")"
            }
          : null
      }
    >
      <h1>{props.number !== 0 ? props.number : null}</h1>
    </div>
  );
}

export default Square;
