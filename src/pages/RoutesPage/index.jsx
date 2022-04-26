import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from '../HomePage';
import { RegisterPage } from '../RegisterPage';

export const RouterPage = () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  </Router>
)
