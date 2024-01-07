import { Button } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import cover from "../../../public/images/contact-bg.png";

export default function Contact() {
  return (
    <div className="contact" id="contact" style={{ backgroundImage: `url(${cover.src})` }}>
      <div className="contact-content">
        <h1 className="contact-content-heading">Send a transmission</h1>
        <p className="contact-content-body">Needing to get in contact with a humble space traveler? You can reach out to me regarding any potential opportunities and collaborations in all manners of design; don't hesitate to get in contact </p>
        <Button variant="outlined" color="secondary" endIcon={<ArrowForward />} className="contact-cta">Send out a transmission</Button>
      </div>
    </div>
  );
}
