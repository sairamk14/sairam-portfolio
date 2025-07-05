import React from "react";
import "./Home.css";

function Home() {
  // Only handle action when the text is clicked
  const handleLetsConnectClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadClick = (e) => {
    e.stopPropagation();
    // Let the default <a> behavior take over for download
    // Optionally, if you want to force download via JS as fallback:
    // window.open("/SaiRamK_Resume.pdf", "_blank");
  };

  return (
    <section className="home">
      <h1>Hi, I'm Sai Ram </h1>
      <h2 className="home-h2">Full Stack Developer</h2>
      <div className="home-desc-row">
        <p className="home-desc">
          Aspiring Full Stack Developer with hands-on experience in Java, MySQL, Spring Boot, and Angular. Eager to build
          scalable web applications in a collaborative team environment while continuously enhancing technical expertise
          and growing as a developer.
        </p>
      </div>
      <div className="home-btn-group">
        {/* Let's Connect */}
        <button
          type="button"
          className="home-btn lets-connect-desktop"
          tabIndex={0}
          // Do NOT add any onClick here so only text is actionable
        >
          <span
            className="btn-text"
            tabIndex={0}
            onClick={handleLetsConnectClick}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                handleLetsConnectClick(e);
              }
            }}
            role="button"
          >
            Let's Connect
          </span>
        </button>
        {/* Download Resume */}
        <button
          type="button"
          className="home-btn resume-btn"
          tabIndex={0}
        >
          <a
            href="/SaiRamK_Resume.pdf"
            className="btn-text"
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadClick}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                handleDownloadClick(e);
              }
            }}
            role="button"
          >
            Download Resume
          </a>
        </button>
      </div>
    </section>
  );
}

export default Home;