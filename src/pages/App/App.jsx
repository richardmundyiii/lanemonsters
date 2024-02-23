import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import AuthPage from "../AuthPage/AuthPage";
import ShopPage from "../ShopPage/ShopPage";
import TournamentsPage from "../TournamentsPage/TournamentsPage";
import CreateTournamentPage from "../CreateTournamentPage/CreateTournamentPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import FindAnAlleyPage from "../FindAnAlleyPage/FindAnAlleyPage";
import AlleyProfilePage from "../AlleyProfilePage/AlleyProfilePage";

function App() {
  const [user, setUser] = useState(getUser());

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       fetch("/api/validateToken", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`, // Adjust based on how your server expects the token
  //         },
  //       })
  //         .then((response) => {
  //           if (response.ok) {
  //             return response.json();
  //           } else {
  //             throw new Error("Unauthorized");
  //           }
  //         })
  //         .then((user) => {
  //           // Update client state with user data
  //         })
  //         .catch((error) => {
  //           localStorage.removeItem("authToken");
  //         });
  //     }
  //   }, []);

  return (
    <div className="App">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth"
          element={<AuthPage user={user} setUser={setUser} />}
        />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/tournaments/create" element={<CreateTournamentPage />} />
        <Route path="/alleys" element={<FindAnAlleyPage />} />
        <Route path="/alleys/:alleyId" element={<AlleyProfilePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
