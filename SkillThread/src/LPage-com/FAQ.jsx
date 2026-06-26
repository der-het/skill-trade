import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is SkillThread?",
    answer:
      "SkillThread is a collaborative learning platform where users can learn, teach, and exchange skills with others."
  },
  {
    question: "Is SkillThread free to use?",
    answer:
      "Yes. You can access most features for free, while premium features are available for advanced learners."
  },
  {
    question: "How do I start learning?",
    answer:
      "Create an account, browse available courses or skill exchanges, and enroll with a single click."
  },
  {
    question: "Can I become an instructor?",
    answer:
      "Absolutely! Anyone with expertise can create a profile and publish learning sessions after verification."
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Upon successful completion of eligible courses, you'll receive a digital certificate."
  }
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">

        <div className="faq-heading">
          <span>Frequently Asked Questions</span>
          <h2>Everything you need to know</h2>
          <p>
            Find answers to common questions about SkillThread.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                <span className="icon">
                  {active === index ? "-" : "+"}
                </span>
              </button>

              <div
                className={`faq-answer ${
                  active === index ? "show" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;