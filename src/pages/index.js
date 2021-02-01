import React from 'react'
import BlogCard from '../components/BlogCard'
import 'antd/dist/antd.css';
import {
    FacebookOutlined,
    TwitterOutlined,
    GoogleOutlined,
    LinkedinOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom';
function index() {
    return (
    <React.Fragment>
             {/* =========================1st DIV START  ====================================== */}
            <div id="attend" className="firstDivIndexPage"></div>
            {/* ========================== 1st DIV END ===================================== */}

             {/* ============================== BLOG DIV START ================================= */}
            <div id="speakers"><h1 className="speakerHeading" style={{textAlign:"center",marginTop:"20px"}}> Introducing our speakers </h1></div>
           <div className="secondDivMainContainer row d-flex justify-content-around">
            
           <BlogCard
            title="kislay"
            src="https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-13.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
             avsrc="https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-13.jpg" 
            />
           <BlogCard
           title="kislay"
                src="https://indiaincgroup.com/wp-content/uploads/2018/12/Hotspot.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                avsrc="https://indiaincgroup.com/wp-content/uploads/2018/12/Hotspot.jpg" 
           />
                    <BlogCard
           title="kislay"
                src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/LJvr0WJslH.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                avsrc="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/LJvr0WJslH.jpg" 
           />
            <BlogCard
           title="kislay"
                src="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                avsrc="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" 
           />
           </div>
         {/* ============================ BLOG DIV ENDS =================================== */}


              {/* ============================ TEAM DIV STARTS =================================== */}
           <div id="volunteers"><h1 className="speakerHeading" style={{textAlign:"center",marginTop:"20px"}}> Our Team </h1></div>
           <div className="thirdDivMainContainer row d-flex justify-content-around">
           <BlogCard
           title="kislay"
                src="https://indiaincgroup.com/wp-content/uploads/2018/12/Hotspot.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                avsrc="https://indiaincgroup.com/wp-content/uploads/2018/12/Hotspot.jpg" 
           />
                    <BlogCard
           title="kislay"
                src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/LJvr0WJslH.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                avsrc="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/LJvr0WJslH.jpg" 
           />
            <BlogCard
           title="kislay"
                src="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                avsrc="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" 
           />
           </div>
      {/* ==================================  TEAM DIV ENDS  ============================= */}


     {/* =================================  4TH DIV START  ============================== */}
    <div id="partners" className="fourthDivIndexPage"></div>
    {/* ================================== 4TH DIV ENDS ============================= */}


     {/* ============================= CONTACT US DIV STARTS ================================== */}
     <div id="contactUs"><h1 className="speakerHeading" style={{textAlign:"center",marginTop:"20px"}}> Contact Us </h1></div>
    <div className="contactDivMainContainer">
        <div>
     <a href="https://www.facebook.com/tedxkalamaserry">
     <FacebookOutlined 
    style={{fontSize:"40px",color:"red"}}
    />
    <h5 style={{display:"inline-block",marginLeft:"20px",color:"red",fontWeight:"300"}}>  Facebook  </h5>
     </a>
        </div>
   
   <div>
<a href="https://www.twitter.com/kalmaserry">
<TwitterOutlined
style={{fontSize:"40px",color:"red"}}
/>
<h5 style={{display:"inline-block",marginLeft:"20px",color:"red",fontWeight:"300"}}> Twitter </h5>
</a>
   </div>
  
<div>
<GoogleOutlined 
style={{fontSize:"40px",color:"red"}}
/>
<h5 style={{display:"inline-block",marginLeft:"20px",color:"red",fontWeight:"300"}}>tedxkalamasery@gmail.com</h5>
</div>

<div>
<a href="https://www.linkedin.com/tedxkalamaserry">
<LinkedinOutlined 
style={{fontSize:"40px",color:"red"}}
/>
<h5 style={{display:"inline-block",marginLeft:"20px",color:"red",fontWeight:"300"}}>Linkedin</h5>
</a>
</div>

    </div>
 {/* ==============================  CONTACT US DIV ENDS  ================================= */}
    </React.Fragment>
    )
}

export default index
