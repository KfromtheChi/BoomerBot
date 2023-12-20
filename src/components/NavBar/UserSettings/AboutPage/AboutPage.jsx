import './AboutPage.css';

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-section">
                <h1>ABOUT</h1>
                <p>
                    Just a group of developers-in-the-making from General Assembly's Software Engineering Immersive program who created this website to help seniors everywhere get used to the ever-changing world of technology. We hope you enjoy our site!
                </p>
                <h2 className="creators">CREATORS</h2>
                <h3>Nial Attanayake</h3>
                <h3>Krystalin Castillo</h3>
                <h3>Adriana Saavedra</h3>
                <h3>Ahmad Wali</h3>
            </div>
            <img src="../../../public/logo.png" alt="Logo" />
        </div>
    );
}