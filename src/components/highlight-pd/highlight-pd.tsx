import { Button } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import darkBg from "../../../public/images/dark-content-bg.jpg";
import image1 from "../../../public/images/previews/pd_1.png";
import image2 from "../../../public/images/previews/pd_2.png";
import image3 from "../../../public/images/previews/pd_3.png";
import image4 from "../../../public/images/previews/pd_4.png";
import image5 from "../../../public/images/previews/pd_5.png";
import image6 from "../../../public/images/previews/pd_6.png";
import lightBg from "../../../public/images/light-bg.png";

export default function HighlightPD() {
  return (
    <div id="highlight" className="highlight" style={{ backgroundImage: `url(${lightBg.src})` }}>
      <div className="highlight-container" style={{ backgroundImage: `url(${darkBg.src})` }}>
        <h2 className="highlight-heading">Highlighted Works</h2>
        <p className="highlight-subheading">Product Design</p>
        <div className="highlight-items-container">
          <div className="highlight-item">
            <a href="./projects/terra-biking-desktop">
              <img src={image1.src} />
            </a>
          </div>
          <div className="highlight-item">
          <a href="./projects/terra-biking-mobile">
              <img src={image2.src} />
            </a>
          </div>
          <div className="highlight-item">
          <a href="./projects/corvine-design">
              <img src={image4.src} />
            </a>
          </div>
          <div className="highlight-item">
          <a href="./projects/micro-bank">
              <img src={image5.src} />
            </a>
          </div>
          <div className="highlight-item">
          <a href="./projects/lunarnaut">
              <img src={image6.src} />
            </a>
          </div>
        </div>
        <p className="highlight-content">I've designed and built several differing styles of websites, apps, projects and more.</p>
        <a href="/projects/tags/productdesign">
          <Button variant="outlined" size="large" color="secondary" endIcon={<ArrowForward />} className="highlight-cta">See more</Button>
        </a>
      </div>
    </div>
  );
}
