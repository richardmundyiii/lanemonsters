import HomepageImage from "../../images/laneMonstersLogo.png";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <img
        src={HomepageImage}
        alt="Lane Monsters Logo"
        className="homepage-logo"
      />
    </>
  );
}
