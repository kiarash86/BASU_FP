import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SchedulePage from "./pages/SchedulePage";
import BlogPage from "./pages/BlogPage";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/resources" element={<ResourcesPage />} />


    </Routes>
  );
}
export default App;
//Giving Routing Pages
