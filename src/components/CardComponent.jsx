import React from "react";
import { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class CardComponent extends Component {
  render() {
    const { data, label } = this.props;
    return (
      <div className="d-flex small-card m-2 px-2">
        <div className="my-2">
          <CircularProgressbar
            value={Math.round((data * 100) / 10000)}
            text={`${Math.round((data * 100) / 10000)}%`}
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mx-2">
          <p>{label}</p>
          <p className="fw-bold">{data}</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mx-2">
          <i className="fa fa-address-card icons" />
        </div>
      </div>
    );
  }
}

export default CardComponent;
