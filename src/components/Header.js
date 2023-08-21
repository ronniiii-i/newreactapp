import React, { useState } from "react";

function Header() {
  const [showOverlay, setShowOverlay] = useState(false);

  const imgClick = () => {
    setShowOverlay(!showOverlay)
  }

  return (
    <header>
      <div className="inner" onClick={imgClick}>
        <div className="img">
          <img
            src="https://roni-linktree.vercel.app/static/media/profile.267fce3792e672e0a0f1.jpg"
            alt="Profile"
          />
          <div className={`overlay ${showOverlay ? "show" : ""}`}>
            <img src="https://roni-linktree.vercel.app/static/media/camera.6317244a5381be929492c969c7c62821.svg" alt="change prifile pic" />
          </div>
        </div>
        <img
          src="https://roni-linktree.vercel.app/static/media/desktop.8b4369de8ab30a8ae240d027dafeccf0.svg"
          alt="Share"
        />
        <h3>Roni Egbu</h3>
      </div>
    </header>
  );
}

export default Header;
