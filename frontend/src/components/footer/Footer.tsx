import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
        © 2024 NovaAI. All rights reserved.<p style={{ fontSize: "25px"}}>Created By <span style={{ fontSize: "25px"}} ><a href="https://github.com/SyntaxNova" target="_blank" style={{fontSize: '25px', color:'#667eea', textDecoration: 'none', background: 'linear-gradient(45deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}> Atharva Pachpute (Syntax Nova)</a></span></p> 
          <span>
            <Link
              style={{ color: "white", fontSize: '30px' }}
              className="nav-link"
          
              to={"https://github.com/SyntaxNova"}
            >
             
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
