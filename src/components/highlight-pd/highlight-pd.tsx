import { Button } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import darkBg from "../../../public/images/dark-content-bg.png";
import image1 from "../../../public/images/previews/pd_1_b&w.png";
import lightBg from "../../../public/images/light-bg.png";

export default function HighlightPD() {
  return (
    <div className="highlight" style={{ backgroundImage: `url(${lightBg.src})` }}>
      <div className="highlight-container" style={{ backgroundImage: `url(${darkBg.src})` }}>
        <h2 className="highlight-heading">Highlighted Works</h2>
        <p className="highlight-subheading">Product Design</p>
        <div className="highlight-items-container">
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
        <p className="highlight-content">I've designed and built several differing styles of websites, apps, projects and more.</p>
        <a href="/projects">
          <Button variant="outlined" size="large" color="secondary" endIcon={<ArrowForward />} className="highlight-cta">See more</Button>
        </a>
      </div>
    </div>
  );
}
