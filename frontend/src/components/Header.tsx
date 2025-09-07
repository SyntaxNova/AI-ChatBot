
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{backgroundImage: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`, 
        position: "static", 
        boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)"
                to="/chat"
                text="Go To Chat"
                textColor="white"
              />
              <NavigationLink
                bg="linear-gradient(45deg, #ff6b6b 0%, #ee5a24 100%)"
                textColor="white"
                to="/"
                text="logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
             <NavigationLink
                bg="linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)"
                to="/login"
                text="Login"
                textColor="white"
              />
              <NavigationLink
                bg="linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)"
                textColor="#2c3e50"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
