import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Users from "./pages/Users";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/users" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
