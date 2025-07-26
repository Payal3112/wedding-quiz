import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "Did you watch *Saiyaara* — the new viral heartbreak movie?",
    options: [
      "Yes, cried like I was the main lead 💔",
      "Of course! Watched it twice already",
      "Nope, still stuck on K3G vibes",
      "Never heard of it, should I?"
    ],
    
    answer: "Yes, cried like I was the main lead 💔",
    tag: "#SaiyaaraFeels"
  },
  {
    question: "What's your role at Indian weddings?",
    options: [
      "Food critic 🍽️",
      "Dance floor tornado 💃",
      "Bride/Groom’s silent observer 👀",
      "I avoid weddings like exams"
    ],
    answer: "Dance floor tornado 💃",
    tag: "#ShaadiModeOn"
  },
  {
    question: "What do you do when 'DJ Wale Babu' starts playing at a wedding?",
    options: [
      "Unleash my inner Govinda",
      "Act cool but vibe hard inside",
      "Go get dessert",
      "Leave. I’m emotionally unavailable"
    ],
    answer: "Unleash my inner Govinda",
    tag: "#DanceKaJalwa"
  },
  {
    question: "Have you ever taken a *shaadi return gift* twice?",
    options: [
      "Everytime. No regrets.",
      "Only if it's chocolates",
      "No, I’m sanskaari",
      "I never get invited to weddings"
    ],
    answer: "Everytime. No regrets.",
    tag: "#LootAtTheShaadi"
  },
  {
    question: "If someone cries during the bidaai, you...",
    options: [
      "Cry even harder 😭",
      "Secretly record for Insta",
      "Eat while everyone’s distracted",
      "Slip out quietly"
    ],
    answer: "Eat while everyone’s distracted",
    tag: "#EmotionalButHungry"
  }
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>How Desi Wedding Coded Are You? 💃🕺</h1>
      {showResult ? (
        <div className="result">
          <h2>You scored {score} out of {questions.length}</h2>
          <p>
            {score === 5 && "You're a full-blown Bollywood shaadi character 🎬✨"}
            {score >= 3 && score < 5 && "You’re vibing through the drama with snacks 🎉"}
            {score < 3 && "Emotionally stable but shaadi-averse. Respect 🧘‍♀️"}
          </p>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[current].question}</h2>
          <div className="question-tag">{questions[current].tag}</div>
          {questions[current].options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(opt)} className="option-btn">
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
