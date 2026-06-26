import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="badge">🚀 Skill Exchange Platform</span>

        <h1>
          Exchange Skills,
          <span>Not Money.</span>
        </h1>

        <p>
          Find people who can teach what you want to learn while sharing what
          you already know. Join a global community growing through
          collaborative knowledge sharing.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>

          <button className="secondary-btn">Browse Skills</button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>20K+</h2>
            <p>Members</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Skills</p>
          </div>

          <div>
            <h2>10K+</h2>
            <p>Matches</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="circle"></div>

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMEOkqlR7Wok5pzf5YdaV69e7CXq2tU74slX3LafzjsWc3TQbMTrDUEizftASzE29WKHGqxmO17gbqZV91e4K2e5dp13Kyawvd74xixFqxhPbsEMBG88j-gm40jxrEG9OuHlQCp6_NgeeOQuhW7-ShvxZo43N1-O1Zwo5CxLtcFjlwMg2q_ZUn3Gv2J_6WIrvlVq-ka8thK4kN044GwxdQa7AejEndvG36ztv8arHx4mieHXq_UogJFHzEQHAP8pNPDF5ezXtpia5Z"
          alt="img"
        />
      </div>
    </section>
  );
}

export default Hero;
