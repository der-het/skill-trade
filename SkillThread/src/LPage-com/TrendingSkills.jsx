import "./TrendingSkills.css";

import {
  FaCode,
  FaPalette,
  FaLanguage,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

function TrendingSkills() {
  return (
    <section className="trending">
      {/* Header */}

      <div className="trending-header">
        <div className="heading">
          <h2>Trending Skills</h2>

          <p>
            The most in-demand knowledge being exchanged right now across the
            SkillThread community.
          </p>
        </div>

        <button className="view-btn">
          View All 150+ Categories
          <FaArrowRight />
        </button>
      </div>

      {/* Cards */}

      <div className="skill-grid">
        {/* Left Big Card */}

        <div className="large-card">
          <span className="popular">Popular</span>

          <div>
            <h3>Web Development</h3>

            <p>React, Tailwind CSS, & Backend mastery.</p>
          </div>

          <div className="mentor-row">
            <span>2.4k Mentors</span>

            <div className="progress">
              <div className="fill"></div>
            </div>
          </div>

          <div className="arrow-bg">❮</div>
        </div>

        {/* UI Card */}

        <div className="ui-card">
          <div className="icon-box">
            <FaPalette />
          </div>

          <h4>UI/UX Design</h4>

          <p>Figma, Prototyping</p>
        </div>

        {/* Language Card */}

        <div className="language-card">
          <div className="icon-box">
            <FaLanguage />
          </div>

          <h4>Languages</h4>

          <p>Spanish, Japanese, French</p>
        </div>

        {/* Bottom Card */}

        <div className="digital-card">
          <div className="icon-box big">
            <FaChartLine />
          </div>

          <div>
            <h4>Digital Marketing</h4>

            <p>SEO, Content Strategy, Ads</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingSkills;
