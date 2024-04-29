import pro1 from "../assets/pro1.jpg";
export default function Introduction() {
  return (
    <div className="intro">
      <div className="discription">
        <h3>Hi</h3>
        <h1>
          I'm <span>Melat</span>{" "}
        </h1>
        <h1>An AI researcher </h1>
        <p>
          <span>As an AI PhD researcher, my passion lies in the realm of interpretable
          AI, particularly within the context of healthcare.</span>
           My current focus
          revolves around leveraging computer vision techniques to tackle the
          complexities of epilepsy. Through my research, I am dedicated to
          developing interpretable AI models that not only enhance our
          understanding of epilepsy but also facilitate more accurate diagnosis
          and personalized treatment strategies. Additionally, I am actively
          engaged in OCR (Optical Character Recognition) for <span> Ge’ez language,
          aiming to enable the extraction of text from Ge’ez-script documents. </span> the
          By harnessing the power of computer vision, I aim to unveil meaningful
          insights from medical imaging data and textual content, enabling
          clinicians to make informed decisions with confidence. My ultimate
          goal is to bridge the gap between cutting-edge AI technology and
          clinical practice, paving the way for a more transparent and efficient
          healthcare system.
        </p>
      </div>
      <img src={pro1} alt="Picture  of Melat Desta" />
    </div>
  );
}
