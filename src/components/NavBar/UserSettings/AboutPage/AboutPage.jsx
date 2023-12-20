import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="aboutdetail">
          <h1 className="abouth1">ABOUT</h1>
          <p className="aboutP">
            Developers-in-the-making from General Assembly's Software
            Engineering Immersive program created this web application to help
            seniors everywhere get used to the ever-changing world of
            technology. Ask it, snap it, and your AI response will be granted.
            Cheers to learning anything and everything. We hope that you and
            your Boomers, whoever they may be, enjoy our site!
          </p>
          <div className="creators">
            <h2>CREATORS</h2>
            <h3>Nisal Attanayake</h3>
            <h3>Krystalin Castillo</h3>
            <h3>Adriana Saavedra</h3>
            <h3>Ahmad Wali</h3>
            <img src="../logo.png" alt="" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
