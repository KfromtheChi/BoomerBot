import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="aboutdetail">
          <h1 className="abouth1">ABOUT</h1>
          <p className="aboutP">
            Developers-in-the-making from General Assembly's Software
            Engineering Immersive program present BoomerBot, a chatbot application that talks to users 
            as if they were speaking to a Boomer. Ask it questions, and the old-fashioned, grumpy 
            AI will respond accordingly.
            We hope that whoever you may be, you enjoy talking to BoomerBot!
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
