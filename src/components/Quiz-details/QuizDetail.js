import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizItems from "../Quiz-items/QuizItems";
import "./QuizDetails.css";

const QuizDetail = () => {
  //const [quizQuestion, setQuizQuestion] = useState();
  const QuizData = useLoaderData().data;
  //console.log(QuizData);
  //console.log(QuizData.questions);
  const dataItems = QuizData.questions;
  //console.log(dataItems);
  return (
    <div>
      <h2>Quiz of {QuizData.name}</h2>
      <div className="quiz-card">
        {dataItems.map((item) => (
          <QuizItems id={item.id} item={item}></QuizItems>
        ))}
      </div>
    </div>
  );
};

export default QuizDetail;
