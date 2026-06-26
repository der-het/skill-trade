
import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // You can save data here later

    navigate("/role");
  };

  return (
    <div className="register-page">
      {/* Navbar */}

      <nav className="top-navbar">
        <div className="logo">
          Skill<span>Thread</span>
        </div>

        <div className="login-link">
          Already have an account?
          <a href="/login"> Login</a>
        </div>
      </nav>

      <div className="register-card">
        {/* LEFT PANEL */}

        <div className="left-panel">
          <h1>
            Master new skills
            <br />
            through exchange.
          </h1>

          <p>
            Join a global network of mentors and learners exchanging expertise
            without the price tag.
          </p>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt="Hero"
            />
          </div>

          <div className="joined-users">
            <div className="avatars">
              <img src="https://i.pravatar.cc/40?img=12" alt="" />
              <img src="https://i.pravatar.cc/40?img=22" alt="" />
              <img src="https://i.pravatar.cc/40?img=34" alt="" />
            </div>

            <span>
              Joined by <b>12,000+</b> experts this month
            </span>
          </div>
        </div>

        {/* RIGHT PANEL */}

        <div className="right-panel">
          <h2>Create your account</h2>

          <p>Start your journey of collaborative learning today.</p>

          <form onSubmit={handleSubmit}>
            {/* Name */}

            <label>Full Name</label>

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Alex Rivers"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}

            <label>Email Address</label>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="alex@skillthread.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}

            <label>Phone Number</label>

            <div className="input-box">
              <FaPhoneAlt />
              <input
                type="text"
                name="phone"
                placeholder="+91 9876543210"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Row */}

            <div className="password-row">
              <div className="password-column">
                <label>Password</label>

                <div className="input-box">
                  <FaLock />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="********"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="password-column">
                <label>Confirm Password</label>

                <div className="input-box">
                  <FaLock />

                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="********"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}

            <div className="checkbox">
              <input type="checkbox" required />

              <span>
                I agree to the
                <a href="/"> Terms of Service </a>
                and
                <a href="/"> Privacy Policy</a>
              </span>
            </div>

            <button className="register-btn" type="submit">
              Create Account
              <FaArrowRight />
            </button>
          </form>
          {/* Divider */}

          <div className="divider">
            <span>OR REGISTER WITH</span>
          </div>

          {/* Social Buttons */}

          <div className="social-buttons">
            <button type="button">
              <FaGoogle />
              Google
            </button>

            <button type="button">
              <FaGithub />
              GitHub
            </button>
          </div>

          {/* Footer */}

          <div className="footer">
            <span>© 2026 SkillThread Inc.</span>

            <div>
              <a href="/">Privacy</a>
              <a href="/">Terms</a>
              <a href="/">Support</a>
            </div>
          </div>
        </div>
        {/* End Right Panel */}
      </div>
      {/* End Register Card */}
    </div>
  );
};

export default Register;
