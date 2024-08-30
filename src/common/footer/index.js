

// import React from "react";
// import "./styles.scss";
// import linkedInIcon from "../../assets/images/LinkedIn.svg"; // update the path to your LinkedIn icon
// import youtubeIcon from "../../assets/images/YouTube.svg"; // update the path to your YouTube icon
// import phoneIcon from "../../assets/images/sbalogo.svg"; // update the path to your phone icon
// import emailIcon from "../../assets/images/sbalogo.svg"; // update the path to your email icon

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-column">
//           <h3>About Us</h3>
//           <ul>
//             <li>SBA Info Solution</li>
//             <li>Careers</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h3>Industries</h3>
//           <ul>
//             <li>BFSI</li>
//             <li>Manufacturing</li>
//             <li>Media</li>
//             <li>IT/ITES</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h3>Resources</h3>
//           <ul>
//             <li>Case Studies</li>
//             <li>Blog</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h3>Solution</h3>
//           <ul>
//             <li>Data and Analytics</li>
//             <li>IT Modernization</li>
//             <li>ML and Generation AI</li>
//             <li>Managed Services</li>
//             <li>Business Consulting</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//         <h3>Services</h3>
//           <ul>
//             <li>Mailing and Collaboration</li>
//             <li>Managed Services</li>
//             <li>Cloud Services</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <div className="social-icons">
//             <ul>
//               <li><img src={linkedInIcon} alt="LinkedIn" /></li>
//               <li><img src={youtubeIcon} alt="YouTube" /></li>
//               <li><img src={phoneIcon} alt="Phone" /></li>
//               <li><img src={emailIcon} alt="Email" /></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <div className="contact-info">
//           <p>Phone: +91 44 24897598, +91 44 24894657</p>
//           <p>Email: sales@sbainfo.in</p>
//         </div>
//       </div>
//       <div className="legal">
//         <p>Copyright © 1996 - 2024, SBA Info Solutions.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./styles.scss";
import linkedInIcon from "../../assets/images/LinkedIn.svg";
import youtubeIcon from "../../assets/images/YouTube.svg";
import phoneIcon from "../../assets/images/sbalogo.svg";
import emailIcon from "../../assets/images/sbalogo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>SBA Info Solution</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Industries</h3>
          <ul>
            <li>BFSI</li>
            <li>Manufacturing</li>
            <li>Media</li>
            <li>IT/ITES</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Case Studies</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Solution</h3>
          <ul>
            <li>Data and Analytics</li>
            <li>IT Modernization</li>
            <li>ML and Generation AI</li>
            <li>Managed Services</li>
            <li>Business Consulting</li>
          </ul>
        </div>
        <div className="footer-column">
        <h3>Services</h3>
          <ul>
            <li>Mailing and Collaboration</li>
            <li>Managed Services</li>
            <li>Cloud Services</li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="social-icons">
            <ul>
              <li><img src={linkedInIcon} alt="LinkedIn" /></li>
              <li><img src={youtubeIcon} alt="YouTube" /></li>
              <li><img src={phoneIcon} alt="Phone" /></li>
              <li><img src={emailIcon} alt="Email" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="contact-info">
          <p>Phone: +91 44 24897598, +91 44 24894657</p>
          <p>Email: sales@sbainfo.in</p>
        </div>
      </div>
      <div className="legal">
        <p>Copyright © 1996 - 2024, SBA Info Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
