import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaLightbulb,
} from "react-icons/fa";

import "./LearnSkill.css";

export default function LearnSkill() {

  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [skills, setSkills] = useState(["Photography"]);

  const addSkill = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();

      if (!skills.includes(input.trim())) {
        setSkills([...skills, input.trim()]);
      }

      setInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="learn-page">

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

        <div className="step current">3</div>

        <div className="line"></div>

        <div className="step">4</div>

      </div>

      <p className="progress-title">
        WHAT YOU'RE SEEKING
      </p>

      <div className="card">

        <div className="icon-circle">
          <FaLightbulb />
        </div>

        <h2>Skills I Want To Learn</h2>

        <p className="card-text">
          What are you curious about today?
        </p>

        <input
          type="text"
          placeholder="Add skills you're eager to master..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addSkill}
        />

        <div className="tags">

          {skills.map((skill) => (
            <span
              className="tag"
              key={skill}
              onClick={() => removeSkill(skill)}
            >
              {skill} ✕
            </span>
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
            onClick={() => navigate("/exp")}
          >
            Next Step
            <FaArrowRight />
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