import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizItems from "../Quiz-items/QuizItems";

const QuizDetail = () => {
  //const [quizQuestion, setQuizQuestion] = useState();
  const QuizData = useLoaderData().data;
  //console.log(QuizData);
  //console.log(QuizData.questions);
  const dataItems = QuizData.questions;
  //console.log(dataItems);
  return (
    <div>
      <h2>This is about Quizdetils total</h2>
      {dataItems.map((item) => (
        <QuizItems id={item.id} item={item}></QuizItems>
      ))}
    </div>
  );
};

export default QuizDetail;
