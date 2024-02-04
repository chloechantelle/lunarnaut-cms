import Layout from "../components/layout/layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import header from "../../public/images/contactheader.jpeg";
import mailbox from "../../public/images/contactimage.jpeg";
import { Button, Tooltip } from "@mui/material";
import { MailOutlined } from "@mui/icons-material";

export default function Contact() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">

        <div className="contact-page-header">
          <img className="contact-page-header-image" src={header.src} />
        </div>

        <div className="contact-page">
          <div className="contact-page-image">
            <img src={mailbox.src} />
          </div>
          <div className="contact-page-content">
            <h2>“Mission Control, I'm coming home.” </h2>
            <p className="contact-page-content-body">
              Thank you for your interest in contacting me!
            </p>
            <p className="contact-page-content-body">
              In order to ensure efficient communication, please include as much information as possible about your inquiry and/or requests and I'll be sure to be in contact regarding projects.
            </p>
            <Tooltip title="Email: corvinedesignx@gmail.com" placement="top">
              <a href="mailto:lunarnaut.co@gmail.com">
                <Button size="large" variant="outlined" color="primary" startIcon={<MailOutlined />} className="contact-cta">
                  Contact me
                </Button>
              </a>
            </Tooltip>
          </div>
        </div>

      </div>
    </Layout >
  );
}
