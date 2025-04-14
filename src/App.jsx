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
import { CssBaseline, Paper, Typography, Box } from "@mui/material";

const TestCredentials = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 2 }}>
      <Paper elevation={3} sx={{ p: 3, bgcolor: "#f5f5f5" }}>
        <Typography variant="h6" gutterBottom>
          Test Credentials
        </Typography>
        <Typography variant="body1">Email: eve.holt@reqres.in</Typography>
        <Typography variant="body1">Password: cityslicka</Typography>
      </Paper>
    </Box>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
                <TestCredentials />
              </>
            }
          />
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
