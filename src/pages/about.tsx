import Layout from "../components/layout/layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import header from "../../public/images/aboutheader.jpg";
import esus from "../../public/images/esusimage.jpeg";
import { Public } from '@mui/icons-material';
import { Brush } from '@mui/icons-material';
import { Palette } from '@mui/icons-material';

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">

        <div className="about-page-header">
          <img className="about-page-header-image" src={header.src} />
        </div>

        <div className="about-page">
          <div className="about-page-image">
            <img src={esus.src} />
          </div>
          <div className="about-page-content">
            <h2><Public /> Origins</h2>
            <p className="about-page-content-body">Lunarnaut is an idea, a representation of the desire and determination to push the limits and beyond, to discover the vastness and wonder of discovery and innovation and implementing them within creative and unique projects.</p>

            <p className="about-page-content-body">Lunarnaut, is a fusion of two captivating concepts - "Lunar" and "Astronaut." "Lunar" symbolizes my fascination with space-faring of celestial space beings such as the moon, which represents the mystery and unknowing of the universe, and the endless possibilities that lie beyond our terrestrial boundaries. "Astronaut," on the other hand, embodies the spirit of exploration, pushing boundaries, and venturing into these unknowns; and lastly, the dandelion, the desire to separate and push into uncharted territories and discover new methods and skills to integrate and expand, with these ideals I try to collectively incorporate them with all my designs, to dare to be adventurous and inspire by design.</p>

            <h2><Palette /> Product Design</h2>
            <p className="about-page-content-body">
              My product design philosophy revolves around creating functional and visually stunning prototypes that enhance user accessibility and flow. Whether it's a simple yet elegant design, or an advanced interface for application use, my designs strive to create a balance of ease and usability to create the best experience for users. Each product I create is carefully crafted to evoke a sense of harmony and balance yet strive to push the boundaries of Product Design.</p>

            <h2><Brush /> Graphic Design</h2>
            <p className="about-page-content-body">
              In line with my passion for exploration and discovery, I strive to capture the essence of the unknown, transforming ideas into captivating visuals. From brand identities, marketing materials to digital art, I specialize in creating cohesive visual experiences that leave a lasting impression. My designs incorporate bold typography, vivid colours, and awe-inspiring imagery, all crafted to captivate the adventurous souls who seek inspiration.
            </p>

            <p className="about-page-content-body">
              Join me on my journey through the cosmos, as we combine artistry, science, and a thirst for knowledge to create a universe of endless possibilities.
            </p>

            <p className="about-page-content-body">
              Lunarnaut — Where Discovery Meets Design.
            </p>
          </div>
        </div>

      </div>
    </Layout >
  );
}
