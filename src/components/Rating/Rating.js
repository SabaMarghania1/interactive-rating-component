import "./Rating.css";
import starImg from "../../images/icon-star.svg";

function Rating({select, setSelect}) {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="rating__container">
      <div className="image__container">
        <img src={starImg} alt="" />
      </div>
      <div className="text__content">
        <h2 className="title">How did we do?</h2>
        <p className="paragraph">
          Please let us know how we did with your support request. All feedback is appreciated to
          help us improve our offering!
        </p>
      </div>
      <ul className="numbers">
        {arr.map(number => {
          return (
            <li
              className={select === number ? "active numbers__item" : "numbers__item"}
              onClick={() => setSelect(number)}
            >
              {number}
            </li>
          );
        })}
      </ul>
      <button className="btn">Submit</button>
    </div>
  );
}

export default Rating;
