import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/linkedin";

export default function Footer() {
  const handleCopy = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text
    document.execCommand("copy");

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // Optionally, you can provide feedback to the user
    alert("Copied!");
  };

  return (
    <footer id="footer">
      <div className="icon-soical">
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/melat-desta-a08700297/"
        />
        <SocialIcon
          target="_blank"
          url="https://www.facebook.com/melatdesta1040"
        />
        <SocialIcon
          target="_blank"
          url="https://www.instagram.com/melatdesta4?igsh=MXVnZGpjbnl4NzVzNQ=="
        />
      </div>
      <div className="icon-contact">
        <div>
          {" "}
          <FontAwesomeIcon icon={faPhone} />{" "}
          <span
            onClick={() => handleCopy("0989964458")}
            style={{ cursor: "pointer" }}
          >
            0989964458
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMailBulk} />{" "}
          <span
            onClick={() => handleCopy("destamelat27@gmail.com")}
            style={{ cursor: "pointer" }}
          >
            destamelat27@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}
