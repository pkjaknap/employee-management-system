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

const TestCredentials = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Test Credentials</h2>
        <p className="text-gray-700">Email: eve.holt@reqres.in</p>
        <p className="text-gray-700">Password: cityslicka</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
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
