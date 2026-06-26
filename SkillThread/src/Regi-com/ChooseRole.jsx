import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { FaCamera, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import "./Onboarding.css";
import ProgressHeader from "./ProgressHeader";

export default function ChooseRole() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-page">
      <ProgressHeader step={1} title="PROFILE SETUP" />

      <h1 className="logo">SkillThread</h1>
      <p className="subtitle">Let's craft your unique journey</p>

      <h1 className="logo">SkillThread</h1>
      <p className="subtitle">Let's craft your unique journey</p>

      {/* Progress */}
      <div className="progress">
        <div className="step active">1</div>
        <div className="line"></div>
        <div className="step">2</div>
        <div className="line"></div>
        <div className="step">3</div>
        <div className="line"></div>
        <div className="step">4</div>
      </div>

      <span className="progress-text">PROFILE SETUP</span>

      <div className="card">
        <div className="profile-upload">
          <div className="upload-circle">
            <FaCamera />
            <div className="edit-icon">✎</div>
          </div>

          <p>Upload Profile Photo</p>
        </div>

        <div className="input-group">
          <label>Professional Bio</label>

          <textarea
            rows="5"
            placeholder="Tell the community about your expertise and interests..."
          ></textarea>
        </div>

        <div className="input-group">
          <label>Your City</label>

          <div className="input-icon">
            <FaMapMarkerAlt />
            <input type="text" placeholder="e.g. San Francisco, CA" />
          </div>
        </div>

        <div className="button-area">
          <div className="top-back" onClick={() => navigate(-1)}>
            <FaArrowLeft />
            <span>Back</span>
          </div>
          <button className="next-btn" onClick={() => navigate("/teach")}>
            Next Step <FaArrowRight />
          </button>
        </div>
      </div>

      <p className="login">
        Already have an account?
        <span onClick={() => navigate("/login")}> Log In</span>
      </p>
    </div>
  );
}
