import { Button } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import cover from "../../../public/images/cover.png";
import astronaut from "../../../public/images/astronaut.png";

export default function Cover() {
  return (
    <div className="cover" style={{ backgroundImage: `url(${cover.src})` }}>
      <div className="cover-image">
        <img src={astronaut.src} />
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

        <a href="/projects">
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
