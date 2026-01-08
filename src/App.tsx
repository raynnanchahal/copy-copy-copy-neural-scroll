import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Index";

// Policy pages
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import GDPR from "@/pages/GDPR";
import Refunds from "@/pages/Refunds";
import Disclaimer from "@/pages/Disclaimer";

// Onboarding page
import Onboarding from "@/pages/Onboarding";

// Hidden pages
import Moments from "@/pages/Moments";

function App() {
  return (
    <Router>
      <Routes>

        {/* Main site */}
        <Route path="/" element={<Home />} />

        {/* Onboarding */}
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Hidden Pages */}
        <Route path="/moments" element={<Moments />} />

        {/* Policy pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* Fallback – redirect unknown pages back to Home */}
        <Route path="*" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
