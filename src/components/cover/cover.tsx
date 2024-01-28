import { Button } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import cover from "../../../public/images/cover.png";
import lunarnaut from "../../../public/images/lunarnaut.gif";
import circle from "../../../public/images/circle.png";

export default function Cover() {
  return (
    <div className="cover" style={{ backgroundImage: `url(${cover.src})` }}>

      <div className="cover-animation">
        <div className="cover-animation-image cover-animation-l" style={{ backgroundImage: `url(${circle.src})` }}></div>
        <div className="cover-animation-image cover-animation-r" style={{ backgroundImage: `url(${circle.src})` }}></div>
      </div>

      <div className="cover-image">
        <img src={lunarnaut.src} />
      </div>

      <div className="cover-content">

        <div className="cover-content-heading">
          <h1 className="cover-content-heading-text">
            For the Wise Man looks into space
          </h1>
          <h1 className="cover-content-heading-text">
            and knows there is limitless potential
          </h1>
        </div>

        <div className="cover-content-subheading">
          <h2 className="cover-content-subheading-text">Hello, I'm Lachlan. and I'm a digital Designer</h2>
          <h2 className="cover-content-subheading-text">I specialize in Graphic Design & Product Design</h2>
        </div>

        <a href="#highlight">
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<ArrowForward />}
            className="cover-cta">
            Stargaze my works
          </Button>
        </a>
      </div>
    </div>
  );
}
