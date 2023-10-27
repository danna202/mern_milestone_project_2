import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/404";
import Root_Page from './components/root.js';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root_Page />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

