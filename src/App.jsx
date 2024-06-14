import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import ProtectedPage from "./pages/ProtectedPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Box } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Box p={4}>
        {session ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button as="a" href="/login">Login</Button>
        )}
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;