import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Button, List, ListItem, SwipeableDrawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sidebar: {
    backgrounColor: theme.palette.primary.main,
  },
  toggleButton: {
    [theme.breakpoints.between("sm", "xl")]: {
      display: "none",
    },
  },
}));

const navLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/rooms",
    name: "Rooms",
  },
  {
    href: "/excursion",
    name: "Excursion",
  },
  {
    href: "/service",
    name: "Service",
  },
];

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const menuId = "primary-search-account-menu";

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const list = () => (
    <div role="presentation" className={classes.sidebar}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.name}>
            <Link href={item.href} key={item.name}>
              <Button color="primary"> {item.name}</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        className={classes.sidebar}
      >
        {list()}
      </SwipeableDrawer>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button
                style={{ color: "#ffffff" }}
                variant="outlined"
                color="primary"
                href="/"
              >
                Home
              </Button>
              <Link
                style={{ color: "#ffffff" }}
                variant="outlined"
                color="primary"
                to="/rooms?id=567890&sm=23456"
              >
                Rooms
              </Link>
              <Button
                style={{ color: "#ffffff" }}
                variant="outlined"
                color="primary"
                href="/excursion"
              >
                Excursion
              </Button>
              <Link
                style={{ color: "#ffffff" }}
                variant="outlined"
                color="primary"
                to="/service?id=234567"
              >
                Service
              </Link>
              <Link
                style={{ color: "#ffffff" }}
                variant="outlined"
                color="primary"
                to="/loco/896587"
              >
                Loco
              </Link>
            </div>
            <div className={classes.sectionMobile} />
            <IconButton
              edge="start"
              className={classes.toggleButton}
              onClick={toggleDrawer}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
