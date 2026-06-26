import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCube
} from "react-icons/fa";
import "./TeachSkill.css";

export default function TeachSkill() {

  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [skills, setSkills] = useState([
    "UI Design",
    "React"
  ]);

  const suggestions = [
    "Coding",
    "Cooking",
    "Piano"
  ];

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
    <div className="teach-page">

      {/* Logo */}

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

        <div className="step current">2</div>

        <div className="line"></div>

        <div className="step">3</div>

        <div className="line"></div>

        <div className="step">4</div>

      </div>

      <p className="progress-title">
        WHAT YOU CAN SHARE
      </p>

      {/* Card */}

      <div className="card">

        <div className="icon-circle">
          <FaCube />
        </div>

        <h2>Skills I Can Teach</h2>

        <p className="card-text">
          Share your expertise with the community
        </p>

        <input
          type="text"
          placeholder="Type a skill and press Enter..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addSkill}
        />

        <div className="tags">

          {skills.map((skill) => (
            <span
              key={skill}
              className="tag"
              onClick={() => removeSkill(skill)}
            >
              {skill} ✕
            </span>
          ))}

        </div>

        <div className="suggested">

          <p>Suggested skills:</p>

          <div className="suggestions">

            {suggestions.map((item) => (

              <span
                key={item}
                className="suggestion"
                onClick={() => {
                  if (!skills.includes(item))
                    setSkills([...skills, item]);
                }}
              >
                + {item}
              </span>

            ))}

          </div>

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
            onClick={() => navigate("/learn")}
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