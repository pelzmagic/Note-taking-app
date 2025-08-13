import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ForgottenPassword from "./pages/forgotten-password";
import ResetPassword from "./pages/reset-password";
import SignUp from "./pages/signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
