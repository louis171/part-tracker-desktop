import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddCircleRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Add new part" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      System
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <SettingsRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CancelRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Exit" />
    </ListItemButton>
  </React.Fragment>
);
