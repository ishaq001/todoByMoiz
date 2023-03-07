import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Images from "./image";
import Button from "@mui/material/Button";
import DraftsIcon from "@mui/icons-material/Drafts";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Account from "./Account";
import Help from "./Help";
import SearchApp from "./Search";
import Addcart from "./Addcart";
import Image from "./image";
import ZaraImage from "../../images/zara-logo.png";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { purple, green } from "@mui/material/colors";
import { Login } from "@mui/icons-material";
import Logins from "./login";
import { Routes, Route, Router, Link, BrowserRouter } from "react-router-dom";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(5),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function DrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Image />
      <CssBaseline />

      <AppBar position="fixed" open={open} sx={{ background: "transparent" }}>
        <Toolbar>
          <CssBaseline />

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <Typography
              className="scaled"
              sx={{ width: 150, marginLeft: "-19%", display: "flex" }}
            >
              <img src={ZaraImage} alt="test" />
            </Typography>
          </Box>

          <Box
            sx={{
              width: 300,
              marginLeft: "65%",
              display: "flex",
              color: "#f8f9fa",
              justifyContent: "space-evenly",
            }}
          >
            <Link to="/Search" className="a">
              SEARCH
            </Link>
            <Link to="/login" className="a">
              LOGIN
            </Link>
            <Link to="/Help" className="a">
              HELP
            </Link>
            <Link to="/Addcart" className="a">
              {" "}
              <AddToQueueIcon />{" "}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box></Box>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <Button>COATS</Button>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
