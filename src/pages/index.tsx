import About from "../components/about/about";
import Cover from "../components/cover/cover";
import HighlightGD from "../components/highlight-gd/highlight-gd";
import HighlightPD from "../components/highlight-pd/highlight-pd";
import Layout from "../components/layout/layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <Cover/>
        <HighlightPD/>
        <HighlightGD/>
        <About/>
      </div>
    </Layout>
  );
}
