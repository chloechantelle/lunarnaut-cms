import { useRouter } from "next/router";
import { useState } from "react";
import { AppBar, IconButton, Typography, Button, Toolbar } from "@mui/material";
import logo from "../../../public/images/logo.png";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <AppBar position="static" color="secondary" className="navigation">
        <Toolbar>
          <div className="navigation-logo">
            <img src={logo.src} />
          </div>
          <div className="navigation-links">
            <Button color="inherit">Home</Button>
            <Button color="inherit">Portfolios</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
      {/* <Burger active={active} onClick={() => setActive(!active)} /> */}
      {/* <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
              <a className={router.pathname === "/" ? "active" : null}>about</a>
          </li>
          <li>
              <a
                href="/posts"
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                blog
              </a>
          </li>
        </ul>
      </div> */}
    </>
  );
}
