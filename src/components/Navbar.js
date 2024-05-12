import { makeStyles } from "@mui/styles";
import searchIco from "../assets/search.svg";

const useStyles = makeStyles((theme) => ({
    contentSearch: {
      display: "flex",
      marginBottom:"15px",
      "& .searchInput": {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        pointerEvents: "none",
        // filter: "contrast(0.7)",
      },
    },
    searchInput: {
      borderRadius: "6px",
      border: "1px solid #C9CFFC",
      background: "#FFF",
      boxShadow: "2px 2px 10px 0px #CCDBFF",
      padding: "15px 15px 15px 45px",
      fontSize: 13,
      width: "400px",
    },
    searchIpIco: {
      position: "absolute",
      left: 15,
      top: "50%",
      transform: "translateY(-50%)",
      width:20
    },
   
  }));
function Navbar() {
  const classes = useStyles();

  return (
    <div>
        <span className={classes.contentSearch}>
            <span className="searchInput">
              <input
                type="text"
                className={classes.searchInput}
                placeholder="Search Coming Soon"
              />
              <img src={searchIco} className={classes.searchIpIco} />
            </span>
          </span>
    </div>
  )
}

export default Navbar