import { Button } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import lightBg from "../../../public/images/light-content-bg.png";
import image1 from "../../../public/images/previews/gd_1_b&w.png";
import darkBg from "../../../public/images/dark-bg.png";

export default function HighlightGD() {
  return (
    <div className="highlight" style={{ backgroundImage: `url(${darkBg.src})` }}>
      <div className="highlight-container highlight-container--drk" style={{ backgroundImage: `url(${lightBg.src})` }}>
        <h2 className="highlight-heading">Highlighted Works</h2>
        <p className="highlight-subheading">Graphic Design</p>
        <div className="highlight-items-container highlight-items-container--drk">
          <div className="highlight-item">
            <img src={image1.src} />
          </div>
          <div className="highlight-item">
            <img src={image1.src} />
          </div>
          <div className="highlight-item">
            <img src={image1.src} />
          </div>
          <div className="highlight-item">
            <img src={image1.src} />
          </div>
          <div className="highlight-item">
            <img src={image1.src} />
          </div>
          <div className="highlight-item">
            <img src={image1.src} />
          </div>
        </div>
        <p className="highlight-content">
          I've designed and created several differing styles of advertisements, animations, Illustrations and more.
        </p>
        <a href="/projects">
          <Button variant="outlined" size="large" color="primary" endIcon={<ArrowForward />} className="highlight-cta">See more</Button>
        </a>
      </div>
    </div>
  );
}
