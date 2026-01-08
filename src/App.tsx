import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Moments from "@/pages/Moments";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Moments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
