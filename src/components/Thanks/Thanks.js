import "./Thanks.css";

import image from "../../images/illustration-thank-you.svg";
function Thanks({select}) {
  return (
    <div className="thanks__container">
      <div className="img__container">
        <img src={image} alt="checkout" />
      </div>
      <p className="select">You selected {select} out of 5</p>
      <div className="text__content">
        <h2 className="title">Thank You!</h2>
        <p className="paragraph">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t
          hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default Thanks;
