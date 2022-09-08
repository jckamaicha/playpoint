import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Navbar({ rpcAPI }) {
  const navigate = useNavigate();
  const { rpcData, handleLogin, handleLogout } = rpcAPI;

  /**
   * @dev NavbarSM Devices drawer utils
   */
  const [navSMState, setnavSMState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setnavSMState({ ...navSMState, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-bar-chart-grouped-line"></i>
            <ListItemText primary="Leaderboards" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-message-3-line"></i>
            <ListItemText primary="Chats" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-football-line"></i>
            <ListItemText primary="Leagues" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-notification-4-line"></i>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-fingerprint-line"></i>
            <ListItemText primary="Login / Register" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="navbar__container">
      <div
        onClick={(e) => {
          e.stopPropagation();
          navigate("/");
        }}
        className="logo__container"
      >
        <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
        <h3>Playpoint</h3>

        <div className="navLinks">
          <div
            onClick={(e) => {
              e.stopPropagation();
              navigate("/leaderboards");
            }}
          >
            Leaderboards
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              navigate("/marketplace");
            }}
          >
            Marketplace
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              navigate("/leagues");
            }}
          >
            Leagues
          </div>
        </div>
      </div>
      <div className="navbar__authentication">
        {rpcData?.rpcAccountAddress === "" ? (
          <Button onClick={() => handleLogin()}>
            <i className="ri-fingerprint-line"></i> Login / Register
          </Button>
        ) : (
          <>
            <Button>
              <i className="ri-user-line"></i>{" "}
              {rpcData?.rpcAccountAddress.substring(0, 12) +
                "..." +
                rpcData?.rpcAccountAddress.slice(-8)}
            </Button>
            <Button onClick={() => handleLogout()}>
              <i className="ri-logout-box-line"></i> Logout
            </Button>
          </>
        )}
      </div>
      {window.innerWidth < 576 && (
        <div className="drawer">
          <div onClick={toggleDrawer("right", true)}>
            <i className="ri-menu-3-line"></i>
          </div>
          <Drawer
            anchor={"right"}
            open={navSMState["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </div>
      )}
    </div>
  );
}
