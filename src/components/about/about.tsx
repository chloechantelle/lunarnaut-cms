import { Button } from "@mui/material";
import { ArrowForward } from '@mui/icons-material';
import cover from "../../../public/images/about-bg.png";

export default function About() {
  return (
    <div className="about" style={{ backgroundImage: `url(${cover.src})` }}>
      <div className="about-content">
        <h1 className="about-content-heading">Hello, I'm Lachlan</h1>
        <p className="about-content-body">I'm an Artistic and creative person driven by my passion for Digital Artistry, Graphic Design and Animation.</p>
        <p className="about-content-body">I am proficient with graphic platforms such as the Adobe Suite and possess knowledge with Blender, Figma and digital asset creation of 2D and 3D mediums and their implementation within projects.</p>
        <p className="about-content-body">I'm passionate about UI/UX, Concept design, Animation and other creative ventures, and I'm motivated to learn and grow as a Designer and as an artist.</p>
        <Button variant="outlined" color="primary" endIcon={<ArrowForward />} className="about-cta">Learn more about me</Button>
      </div>
    </div>
  );
}
