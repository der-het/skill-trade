// import React from "react";
// import "./LearningCycle.css";

// const LearningCycle = () => {
//   return (
//     <section className="learning">
//       <div className="learning-left">
//         <h2>The Cycle of Learning</h2>

//         <div className="step active">
//           <div className="number active-number">1</div>

//           <div className="content">
//             <h3>List Your Skills</h3>
//             <p>
//               Whether it's bread baking or Python, someone wants to learn what
//               you know.
//             </p>
//           </div>
//         </div>

//         <div className="step">
//           <div className="number filled">2</div>

//           <div className="content">
//             <h3>Find Your Match</h3>
//             <p>
//               Search for skills you want to gain and find users willing to
//               exchange for your expertise.
//             </p>
//           </div>
//         </div>

//         <div className="step">
//           <div className="number">3</div>

//           <div className="content">
//             <h3>Learn & Grow</h3>
//             <p>
//               Connect via video call or local meetups and start your knowledge
//               exchange journey.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="learning-right">
//         <div className="gallery">
//           <div className="gallery-card tall">
//             <img
//               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
//               alt=""
//             />
//           </div>

//           <div className="gallery-card wide">
//             <img
//               src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=900"
//               alt=""
//             />
//           </div>

//           <div className="gallery-card wide">
//             <img
//               src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
//               alt=""
//             />
//           </div>

//           <div className="gallery-card tall">
//             <img
//               src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LearningCycle;


import React from "react";
import "./LearningCycle.css";

const LearningCycle = () => {
  return (
    <section className="lc-learning">
      <div className="lc-left">
        <h2>The Cycle of Learning</h2>

        <div className="lc-step">
          <div className="lc-number lc-active">1</div>

          <div className="lc-content">
            <h3>List Your Skills</h3>
            <p>
              Whether it's bread baking or Python, someone wants to learn what
              you know.
            </p>
          </div>
        </div>

        <div className="lc-step">
          <div className="lc-number lc-filled">2</div>

          <div className="lc-content">
            <h3>Find Your Match</h3>
            <p>
              Search for skills you want to gain and find users willing to
              exchange for your expertise.
            </p>
          </div>
        </div>

        <div className="lc-step">
          <div className="lc-number">3</div>

          <div className="lc-content">
            <h3>Learn & Grow</h3>
            <p>
              Connect via video call or local meetups and start your knowledge
              exchange journey.
            </p>
          </div>
        </div>
      </div>

      <div className="lc-right">
        <div className="lc-gallery">
          <div className="lc-card lc-tall">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt=""
            />
          </div>

          <div className="lc-card lc-wide">
            <img
              src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=900"
              alt=""
            />
          </div>

          <div className="lc-card lc-wide">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
              alt=""
            />
          </div>

          <div className="lc-card lc-tall">
            <img
              src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCycle;