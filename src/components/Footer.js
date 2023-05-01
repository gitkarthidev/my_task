import React from "react";
import { SiUdemy } from "react-icons/si";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_left">
        <div>
          <SiUdemy
            style={{
              fontSize: "24px",
              marginLeft: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          />
        </div>
        <p className="footer_desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          laudantium aliquam modi obcaecati ab tenetur eum molestiae mollitia
          quos eaque, dolorem quibusdam, delectus dolore, id atque esse
          reprehenderit voluptatibus molestias laboriosam. Alias molestias
          temporibus et itaque laborum error perspiciatis eligendi ut pariatur
          nihil, consequatur iste assumenda magnam labore, ullam enim!
        </p>
        <div className="footer_socialcontainer">
          <div className="footer_socialIcon">
            <FacebookIcon style={{ color: "#385999" }} />
          </div>
          <div className="footer_socialIcon">
            <InstagramIcon style={{ color: "#E4405F" }} />
          </div>
          <div className="footer_socialIcon">
            <TwitterIcon style={{ color: "#55ACEE" }} />
          </div>
          <div className="footer_socialIcon">
            <PinterestIcon style={{ color: "E60023" }} />
          </div>
        </div>
      </div>
      <div className="footer_center">
        <h3 className="title">Useful Links</h3>
        <ul className="footer_list">
          <li className="footer_listItem">Home</li>
          <li className="footer_listItem">Mobile</li>
          <li className="footer_listItem">Laptop</li>
          <li className="footer_listItem">Shoes</li>
          <li className="footer_listItem">Watches</li>
          <li className="footer_listItem">Sports</li>
          <li className="footer_listItem">Fashion</li>
        </ul>
      </div>
      <div className="footer_right">
        <h3 className="title">Contact</h3>
        <div className="contact_footer">
          <AddLocationIcon style={{ marginRight: "10px" }} />
          1234 Address,KTC nagar ,Tirunelveli-11
        </div>
        <div className="contact_footer">
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          7489678912
        </div>
        <div className="contact_footer">
          <EmailIcon style={{ marginRight: "10px" }} />
          udemyshop@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
