import Head from "next/head";
import Navigation from "../navigation/navigation";
import Copyright from "../../components/Copyright";
import { SocialList } from "../../components/SocialList";
import BottomNav from "../bottom-nav/bottom-nav";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
        <BottomNav/>
      </nav>
      <main>{children}</main>
      <footer>
        <div className={"social-list"}>
          <SocialList />
        </div>
        <Copyright />
      </footer>
    </div>
  );
}
