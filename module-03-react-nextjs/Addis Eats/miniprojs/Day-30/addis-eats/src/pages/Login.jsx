import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin() {
    login();

    const from = location.state?.from?.pathname || "/";

    navigate(from, { replace: true });
  }

  return (
    <section>
      <h2>Sign In</h2>

      <p>Please sign in to continue.</p>

      <button onClick={handleLogin}>
        Sign In
      </button>
    </section>
  );
}

export default Login;