import React from "react";
import {
  Typography,
  ListItemIcon,
  Divider,
  MenuList,
  MenuItem
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import logo from "../assets/youarelucky-logo_1.png";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/ListAlt";
import ExitIcon from "@material-ui/icons/ExitToApp";
import OfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import ThumbsUpDown from "@material-ui/icons/ThumbsUpDown";
import ContactPhone from "@material-ui/icons/ContactPhone";
import HowToReg from "@material-ui/icons/HowToReg";
import { useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "../config/dev";
import { signOut } from "../actions/authactions";

function AppMenu() {
  const dispatch = useDispatch();
  let history = useHistory();
  const LogOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    history.push("/");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <img
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            width: "120px",
            height: "120px"
          }}
          src={logo}
          alt="Logo"
        />
      </div>
      <Divider />
      <MenuList>
        <MenuItem component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Typography variant="inherit">Dashboard</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Typography variant="inherit">Users</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/applicants">
          <ListItemIcon>
            <AssignmentInd />
          </ListItemIcon>
          <Typography variant="inherit">Applicants</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/prospects">
          <ListItemIcon>
            <ThumbsUpDown />
          </ListItemIcon>
          <Typography variant="inherit">Prospects</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/partners">
          <ListItemIcon>
            <ContactPhone />
          </ListItemIcon>
          <Typography variant="inherit">Partners</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/customers">
          <ListItemIcon>
            <HowToReg />
          </ListItemIcon>
          <Typography variant="inherit">Customers</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/referral">
          <ListItemIcon>
            <MoneyIcon />
          </ListItemIcon>
          <Typography variant="inherit">Referral Bonus</Typography>
        </MenuItem>
        <MenuItem onClick={LogOut}>
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <Typography variant="inherit">Log Out</Typography>
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default AppMenu;
