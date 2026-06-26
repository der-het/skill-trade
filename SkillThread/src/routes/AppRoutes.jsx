import { Routes, Route } from "react-router-dom";

import LandingPage from "../Pages/LandingPage";
import Register from "../Pages/Register";
import ChooseRole from "../Regi-com/ChooseRole";
import LearnSkill from "../Regi-com/LearnSkill";
import TeachSkill from "../Regi-com/TeachSkill";
import ExperienceLevel from "../Regi-com/ExperienceLevel";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/register" element={<Register />} />

      <Route path="/role" element={<ChooseRole />} />

      <Route path="/teach" element={<TeachSkill />} />

      <Route path="/learn" element={<LearnSkill />} />
      <Route path="/exp" element={<ExperienceLevel />} />

     
    </Routes>
  );
};

export default AppRoutes;
