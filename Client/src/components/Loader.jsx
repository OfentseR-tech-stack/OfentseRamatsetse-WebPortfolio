import { useEffect, useState } from "react";
import logoImg from "../assets/images/portrait/Text Animation@1-412x192 (2).png";

export default function Loader({ onComplete }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(onComplete, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader ${hiding ? "loader--hide" : ""}`}>
      <div className="loader__content">
        <div className="loader__logo">
          <img src={logoImg} alt="WebTech" className="loader__img" />
        </div>
        <div className="loader__bar">
          <div className="loader__progress" />
        </div>
      </div>
    </div>
  );
}