import { FaCheck } from "react-icons/fa";
import "./ProgressHeader.css";

export default function ProgressHeader({ step, title }) {
  return (
    <>
      <h1 className="logo">SkillThread</h1>

      <p className="subtitle">
        Let's craft your unique journey
      </p>

      <div className="progress">

        {/* Step 1 */}
        <div className={`step ${step > 1 ? "completed" : step === 1 ? "current" : ""}`}>
          {step > 1 ? <FaCheck /> : "1"}
        </div>

        <div className={`line ${step > 1 ? "active" : ""}`}></div>

        {/* Step 2 */}
        <div className={`step ${step > 2 ? "completed" : step === 2 ? "current" : ""}`}>
          {step > 2 ? <FaCheck /> : "2"}
        </div>

        <div className={`line ${step > 2 ? "active" : ""}`}></div>

        {/* Step 3 */}
        <div className={`step ${step > 3 ? "completed" : step === 3 ? "current" : ""}`}>
          {step > 3 ? <FaCheck /> : "3"}
        </div>

        <div className={`line ${step > 3 ? "active" : ""}`}></div>

        {/* Step 4 */}
        <div className={`step ${step === 4 ? "current" : ""}`}>
          4
        </div>

      </div>

      <p className="progress-title">{title}</p>
    </>
  );
}