import pro2 from "../assets/pro2.jpg";

export default function About() {
  return (
    <div className="about">
      <img src={pro2} alt="Melat photo " />
      <div className="about-me">
        <h2>
          About <span>Me</span>
        </h2>
        <h1>
          AI <span>PHD candidate</span>
        </h1>
        <p>
          From automating manual coil winding processes to designing 3D robotics
          systems and delving into the complexities of fuzzy sliding mode
          control, my journey reflects a relentless pursuit of innovation in
          engineering. Now, as a Ph.D. researcher, I'm focused on interpretable
          AI for healthcare, aiming to revolutionize diagnostics and treatment
          strategies. With projects spanning OCR for Ge’ez language and beyond,
          my passion lies in bridging cutting-edge technology with real-world
          challenges to make impactful contributions at the intersection of
          technology and humanity.
        </p>
      </div>
    </div>
  );
}
