import { Link } from "react-router-dom";
import Button3 from "./Button3";

const Gridpara = ({ subtitle, title, link, para, linkname }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "500px",
      }}
      className="mt-5"
    >
      <div>
        {/* <h4 className="headingtext1 mb-3">{title}</h4> */}
        <h3 className="subheadintext1 mb-3">{subtitle}</h3>
        <p className="paragraphtext1" style={{ marginBottom: "10%" }}>
          {para}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Link className="linktext" to={link}>
            <Button3 />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Gridpara;
