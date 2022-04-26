import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from '../HomePage';

export const RouterPage = () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  </Router>
)
