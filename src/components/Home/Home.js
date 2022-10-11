import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {
  const quizs = useLoaderData().data;
  //console.log(quizs);
  return (
    <div className="home-container">
      <div className="header-container">
        <h2>Get started with interect</h2>
      </div>
      <div className="quiz-container">
        {quizs.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
