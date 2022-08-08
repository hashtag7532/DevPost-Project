import React from "react";
import "./Card.css";
import KeyWords from "../Keywords/Keywords";

const Card = (props) => {
  return (
    <div className="campaign-card">
      <img src={props.image} alt="images" className="campaign-image" />

      <div className="title">Campaign</div>

      <div className="description">
        n publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </div>
      <KeyWords>Hello</KeyWords>
      <KeyWords>Hii</KeyWords>
      <KeyWords>Bye</KeyWords>
    </div>
  );
};

export default Card;