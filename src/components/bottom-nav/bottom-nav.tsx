import { useRouter } from "next/router";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { AutoAwesomeOutlined, RocketLaunchOutlined, SmartToyOutlined, SatelliteAltOutlined, PublicOutlined } from "@mui/icons-material";
import { BottomNavigation, Button } from "@mui/material";

export default function BottomNav() {
  return (
    <div className="bottom-nav-container">
      <BottomNavigation showLabels className="bottom-nav">
        <a href="../../">
          <Button startIcon={<PublicOutlined />} size="large" color="primary">Home</Button>
        </a>

        <a href="/projects/tags/productdesign">
          <Button startIcon={<RocketLaunchOutlined />} size="large" color="primary">UI/UX</Button>
        </a>
        <a href="/projects/tags/graphicdesign">
          <Button startIcon={<AutoAwesomeOutlined />} size="large" color="primary">Graphic</Button>
        </a>
        <a href="../../about">
          <Button startIcon={<SmartToyOutlined />} size="large" color="primary">About</Button>
        </a>
        <a href="../../contact">
          <Button startIcon={<SatelliteAltOutlined />} size="large" color="primary">Contact</Button>
        </a>
      </BottomNavigation>
    </div>
  );
}
