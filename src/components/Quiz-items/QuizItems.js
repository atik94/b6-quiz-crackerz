import React, { useState } from "react";
import "./QuizItems.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const QuizItems = ({ item }) => {
  const { options, question, id, correctAnswer } = item;
  //   const [quizQuestion, setQuizQuestion] = useState(question);
  //   const [quizOption, setQuizOption] = useState(options);
  //   console.log(quizQuestion, quizOption);
  //   function isTrue(options) {
  //     console.log(options);
  //   }
  //console.log(correctAnswer);
  function isTrue(option) {
    if (option === correctAnswer) {
      console.log(correctAnswer);

      toast.success("Your answer is correct");
    } else {
      toast.error("Your answer is wrong");
    }
  }
  function correctAnswers() {
    // alert(correctAnswer);
    toast.success(correctAnswer);
  }
  return (
    <div className="quiz-item">
      <h2>
        {question}{" "}
        <span onClick={correctAnswers}>
          <i class="fa-solid fa-eye"></i>
        </span>
      </h2>
      <div className="quiz-item-show">
        {options.map((option) => (
          <button onClick={() => isTrue(option)}>{option}</button>
        ))}
        <ToastContainer autoClose={1000} />
      </div>
    </div>
  );
};

export default QuizItems;
