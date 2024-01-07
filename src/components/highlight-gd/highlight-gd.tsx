import { Button } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import lightBg from "../../../public/images/light-content-bg.jpg";
import image1 from "../../../public/images/previews/gd_1.png";
import image2 from "../../../public/images/previews/gd_2.png";
import image3 from "../../../public/images/previews/gd_3.png";
import image4 from "../../../public/images/previews/gd_4.png";
import image5 from "../../../public/images/previews/gd_5.png";
import image6 from "../../../public/images/previews/gd_6.png";
import darkBg from "../../../public/images/dark-bg.jpg";

export default function HighlightGD() {
  return (
    <div className="highlight" style={{ backgroundImage: `url(${darkBg.src})` }}>
      <div className="highlight-container highlight-container--drk" style={{ backgroundImage: `url(${lightBg.src})` }}>
        <h2 className="highlight-heading">Highlighted Works</h2>
        <p className="highlight-subheading">Graphic Design</p>
        <div className="highlight-items-container highlight-items-container--drk">
          <div className="highlight-item">
            <a href="./projects/shingen-ko">
              <img src={image1.src} />
            </a>
          </div>
          <div className="highlight-item">
            <a href="./projects/rising-tokyo">
              <img src={image2.src} />
            </a>
          </div>
          <div className="highlight-item">
            <a href="./projects/tanuki-hut">
              <img src={image3.src} />
            </a>
          </div>
          <div className="highlight-item">
            <a href="./projects/dessert-first">
              <img src={image4.src} />
            </a>
          </div>
          <div className="highlight-item">
          <a href="./projects/astrophobia">
              <img src={image5.src} />
            </a>
          </div>
          <div className="highlight-item">
          <a href="./projects/lovecraft-posters">
              <img src={image6.src} />
            </a>
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
