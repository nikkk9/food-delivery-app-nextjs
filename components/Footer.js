import Link from "next/link";
import classes from "./Footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.contact}>
          <h1>CONTACT US</h1>
          <form action="" className={classes.form}>
            <div className={classes.inputContainer}>
              <input type="email" placeholder="Email" />
            </div>
            <div className={classes.inputContainer}>
              <input type="text" placeholder="Message" />
            </div>
            <button
              onClick={() => (window.location = "mailto:4coderss@gmail.com")}
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className={classes.social}>
          <h1>CONNECT WITH US</h1>
          <div className={classes.socialLinks}>
            <Link href="https://github.com/nikkk9">
              <a>
                <GitHubIcon className={classes.muiIcons} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/nikk9/">
              <a>
                <LinkedInIcon className={classes.muiIcons} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/nikk.9/">
              <a>
                <InstagramIcon className={classes.muiIcons} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <p>&copy; 2022 FOOD-ZONE. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
