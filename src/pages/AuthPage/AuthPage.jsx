import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(false);

  function handleRegOrLogin() {
    setShowLogin(!showLogin);
  }

  return (
    <>
      {showLogin ? (
        <LoginForm handleRegOrLogin={handleRegOrLogin} setUser={setUser} />
      ) : (
        <SignUpForm handleRegOrLogin={handleRegOrLogin} setUser={setUser} />
      )}
    </>
  );
}
