import { useRouter } from "next/router";
import { useState } from "react";
import { AppBar, Menu, MenuItem, Button, Toolbar } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../../../public/images/logo.png";

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
      <AppBar position="fixed" color="secondary" className="navigation">
        <Toolbar>
          <div className="navigation-logo">
            <a href="/">
              <img className="navigation-logo-image" src={logo.src} />
            </a>
          </div>
          <div className="navigation-links">
            <Button size="large" color="inherit">Home</Button>

            <Button size="large"
              id="button"
              aria-controls={open ? 'menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
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
              <a href="/projects">
                <MenuItem>Product Design</MenuItem>
              </a>
              <a href="/projects">
                <MenuItem onClick={handleClose}>Graphic Design</MenuItem>
              </a>
            </Menu>

            <Button size="large" color="inherit">About</Button>
            <Button size="large" color="inherit">Contact</Button>
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
