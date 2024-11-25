import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import SiteLayout from "./components/layout/site/SiteLayout";
import DashLayout from "./components/layout/dash/DashLayout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SiteLayout/>}>
          <Route index element={<h1>Sity</h1>} />
          <Route path="/dash" element={<DashLayout />}>
            <Route index element={<h1>Dashboard</h1>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
