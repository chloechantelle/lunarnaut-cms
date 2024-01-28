import { useRouter } from "next/router";
import { useState } from "react";
import { AppBar, Menu, MenuItem, Button, Toolbar } from "@mui/material";
import { KeyboardArrowDown, RocketLaunchOutlined, PublicOutlined, SmartToyOutlined, SatelliteAltOutlined } from '@mui/icons-material';
import logo from "../../../public/images/lunarnautheader.jpg";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary" className="navigation" elevation={0}>
        <Toolbar>
          <div className="navigation-logo">
            <a href="../../">
              <img className="navigation-logo-image" src={logo.src} />
            </a>
          </div>
          <div className="navigation-links">
            <a href="../../">
              <Button startIcon={<PublicOutlined />} size="large" color="primary">Home</Button>
            </a>

            <Button size="large"
              id="button"
              aria-controls={open ? 'menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="primary"
              startIcon={<RocketLaunchOutlined />}
              endIcon={<KeyboardArrowDown />}
            >
              Portfolios
            </Button>

            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'button',
              }}
            >
              <a href="/projects/tags/productdesign">
                <MenuItem onClick={handleClose}>Product Design</MenuItem>
              </a>
              <a href="/projects/tags/graphicdesign">
                <MenuItem onClick={handleClose}>Graphic Design</MenuItem>
              </a>
            </Menu>

            <a href="../../about">
              <Button startIcon={<SmartToyOutlined />} size="large" color="primary">About</Button>
            </a>

            <a href="../../contact">
              <Button startIcon={<SatelliteAltOutlined />} size="large" color="primary">Contact</Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>

      {/* TODO move to mobile view */}
      {/* <Burger active={active} onClick={() => setActive(!active)} /> */}
      {/* <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
              <a className={router.pathname === "/" ? "active" : null}>about</a>
          </li>
          <li>
              <a
                href="/projects"
                className={
                  router.pathname.startsWith("/projects") ? "active" : null
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
