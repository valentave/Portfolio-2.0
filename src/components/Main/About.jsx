import ProfilePicture from '../../assets/images/profile.webp'

export default function About() {
    
    return(
        <section className="main__about main__section" id="About">
            <h1 className="about-title">About</h1>
            <div className="profile-container">
                <h2 className="profile-title">Profile</h2>
                <img src={ProfilePicture} alt="Profile picture of Valentín Taverna" className="profile-img" />
                <div className="profile-info">
                    <p className="profile-name">
                        <span className="profile-bold">Name:</span> Valentín Andrés Taverna
                    </p>
                    <p className="profile-birthday">
                        <span className="profile-bold">Birthday:</span> March 9
                    </p>
                    <p className="profile-location">
                        <span className="profile-bold">Location:</span> Casilda, Argentina
                    </p>
                    <p className="profile-location">
                        <span className="profile-bold">Email:</span> <a href="mailto:valentintaverna99@gmail.com">valentintaverna99@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="aboutme-container">
                <h2 className="aboutme-title">About me</h2>
                <p className="aboutme-text">Hello, I am a self-taught <strong>Web Developer</strong>.</p>
                <p className="aboutme-text">Currently I specialize in <strong>Frontend Development</strong>, but I am also training in Backend Development.</p>
                <p className="aboutme-text">I love to code and I enjoy the process of racking my brain to solve programming problems.</p>
                <p className="aboutme-text">I am meticulous with details, I like everything to be as close as possible to perfection.</p>
            </div>
        </section>
    )
}