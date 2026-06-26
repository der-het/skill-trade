import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBolt,
  FaCheck,
  FaMagic,
} from "react-icons/fa";

import "./ExperienceLevel.css";

export default function ExperienceLevel() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("Advanced");

  const levels = [
    {
      title: "Beginner",
      desc: "Looking to learn the fundamentals.",
    },
    {
      title: "Intermediate",
      desc: "Know the basics, want to refine skills.",
    },
    {
      title: "Advanced",
      desc: "Expert level, seeking nuanced mastery.",
    },
  ];

  return (
    <div className="experience-page">

      <h1 className="logo">SkillThread</h1>

      <p className="subtitle">
        Let's craft your unique journey
      </p>

      {/* Progress */}

      <div className="progress">

        <div className="step completed">
          <FaCheck />
        </div>

        <div className="line active"></div>

        <div className="step completed">
          <FaCheck />
        </div>

        <div className="line active"></div>

        <div className="step completed">
          <FaCheck />
        </div>

        <div className="line active"></div>

        <div className="step current">4</div>

      </div>

      <p className="progress-title">
        FINAL STEP
      </p>

      <div className="card">

        <div className="icon-circle">
          <FaBolt />
        </div>

        <h2>Experience Level</h2>

        <p className="card-text">
          Help us match you with the right mentors
        </p>

        <div className="levels">

          {levels.map((level) => (

            <div
              key={level.title}
              className={`level-card ${
                selected === level.title ? "selected" : ""
              }`}
              onClick={() => setSelected(level.title)}
            >

              <div className="radio">
                {selected === level.title && (
                  <div className="radio-fill"></div>
                )}
              </div>

              <div>

                <h4>{level.title}</h4>

                <p>{level.desc}</p>

              </div>

            </div>

          ))}

        </div>

        <div className="buttons">

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
            Back
          </button>

          <button
            className="next-btn"
            onClick={() => navigate("/dashboard")}
          >
            Complete Setup
            <FaMagic />
          </button>

        </div>

      </div>

      <p className="login">
        Already have an account?
        <span onClick={() => navigate("/login")}>
          {" "}Log In
        </span>
      </p>

    </div>
  );
}