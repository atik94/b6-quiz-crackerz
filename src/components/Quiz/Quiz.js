import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";
const Quiz = ({ quiz }) => {
  const { name, logo, id } = quiz;
  return (
    <div className="quiz">
      <img src={logo} alt="" />
      <div className="quiz-item">
        <h2>{name}</h2>
        <Link to={`/quiz/${id}`}>
          <button>Start practice</button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
