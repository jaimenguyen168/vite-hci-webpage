import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import SidebarLayout from "@/layouts/SidebarLayout";
import HomePage from "@/pages/Home.tsx";
import ResearchPage from "@/pages/Research.tsx";
import CoursesPage from "@/pages/Courses.tsx";
import JoinUsPage from "@/pages/JoinUs.tsx";
import AboutPage from "@/pages/About.tsx";
import PeoplePage from "@/pages/People.tsx";
import SponsorPage from "@/pages/Sponsor.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Pages without sidebar */}
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/join" element={<JoinUsPage />} />

          {/* Pages with sidebar */}
          <Route element={<SidebarLayout />}>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/sponsors" element={<SponsorPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
