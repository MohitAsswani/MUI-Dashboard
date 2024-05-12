import { makeStyles } from "@mui/styles";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "85vh",
    marginTop: "10px",
    borderTopLeftRadius: "10px",
    background: "#fff",
    padding: "3rem 2rem",
    position: 'relative',
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>Hi, this assignment is made using React JS and MUI components.
      MUI Components used in the project:</p>
      <ul>
        <li> MUI styles</li>
        <li> MUI Icons</li>
        <li>Typography, Box, Paper, Table, Dialog for UI components</li>
      </ul>
      <p>Component Structure</p>
      <ul>
        <li>src</li>
        <ul>
          <li>components</li>
              <ul>
                <li>commom</li>
                <ul>
                  <li>PlInput - common component for input field of all the types</li>
                </ul>
              </ul>

              <ul>
                <li>Dashboard - Parent Component</li>
                <li>DashboardTable - Common Child Component for displaying table</li>
                <li>EditDialog - Common Child Component for edit form modal</li>
                <li>Home - Component for displaying Project Info</li>
                <li>Sidebar - Common component for sidebar</li>
              </ul>
          <li>theme</li>
            <ul>
              <li>PlThemeProvider - Theme file for project</li>
            </ul>
          <li>assets - containing application assets</li>
        </ul>
      </ul>
      <h4>Please navigate to dashboard page on left sidebar menu with this icon <DashboardIcon style={{ color: '#6894F1' }} /></h4>
      <p>or <Link to="/dashboard">click here</Link></p>
    </div>
  );
};

export default Home;
