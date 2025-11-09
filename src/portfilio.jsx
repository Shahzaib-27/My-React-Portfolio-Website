import { useRef } from "react";

function portdata(){

    const homebtn = useRef();
    const firstImageSection = () =>{
        homebtn.current.scrollIntoView({ behavior: "smooth" });
    }

    const aboutBtn = useRef();
    const secondImageSection = () =>{
        aboutBtn.current.scrollIntoView({ behavior: "smooth" });
    }

    const contctbtn = useRef();
    const conatcarea = () =>{
        contctbtn.current.scrollIntoView({ behavior: "smooth" });
    }

    const moreinfoBtn = useRef();
    const infoarea = () =>{
        moreinfoBtn.current.scrollIntoView({ behavior: "smooth" });
    }

return(
<>

<header>

    <nav>
        <div className="container">
            <h3 onClick={firstImageSection}  id="hov"> Home</h3>
            <h3 onClick={secondImageSection} id="hov1">About Me</h3>
            <h3 onClick={conatcarea} id="hov3">Contact</h3>
            <h3 onClick={infoarea} id="hov4">For More Info</h3>
        </div>
    </nav>  
</header>



<main>
    
    <div className="gap"></div>

      <div className="heading" 
        contentEditable="true"
       suppressContentEditableWarning={true}
       >
            <h1>WELCOME TO MY POORTFILIO</h1>
      </div>

    <div className="gap"></div>

     <div className="container1" ref={homebtn}>
        <div className="conhead">
            <h2>Welcome To My World</h2><br />
            <h2>Hi, Im Shahzaib Shahid</h2><br />
            <h2>FrontEnd Developer</h2><br />

<div className="conhead1">
            <p>" Passionate Frontend Developer. I build responsive,
            user-friendly, and visually engaging web interfaces. <br/> 
            I transform design concepts into fast, functional, <br/>
            and seamless websites that deliver excellent user experiences. "</p><br />
         <div className="imgset">
                <img src="/images/a3.jpg" alt="randominage"/>
            </div>

     </div>  
     </div>


<div className="pd">
    <div className="pd1">
        <h3 id="hov5">
          
          <a href=" " target="_blank" >Projects</a>
.m,        </h3>
  </div>

  <div className="pd2" >
    <h3>Download CV</h3>
  </div>
<div className="icons">
  <a href="https://www.instagram.com/reels/DPmEZPTDxZY/" target="_blank" id="instagram">
    <i className="fa-brands fa-instagram"></i>  
  </a>

  <a href="https://www.facebook.com/" target="_blank" id="facebook">
    <i className="fa-brands fa-facebook"></i>
  </a>

  <a href="https://web.whatsapp.com/" target="_blank" id="whatsapp">
    <i className="fa-brands fa-whatsapp"></i>
  </a>

  <a href="https://www.messenger.com/" target="_blank" id="messenger">
    <i className="fa-brands fa-facebook-messenger"></i>
  </a>
</div>
</div>
</div>

{/* nextdiv */}


     <div className="gap"></div>
     

<div className="container2" ref={aboutBtn}>
<div className="img">
<img src="/images/a5.jpg" alt="randominage"/>

</div>

<div className="imgtext">
    <h1>About Me</h1><br/>
    <p>Welcome to my portfolio! Im Shahzaib, a passionate Frontend Developer <br/> <br/>Dedicated 
to building seamless, responsive, and
visually engaging web experiences. With
2 years of experience, I specialize in translating
UI/UX designs into clean, efficient code <br/>that enhances performance and user satisfaction. <br/>
<br/>
My skills include HTML, CSS, JavaScript, and modern frameworks like<br/> React and Tailwind CSS. I ensure each website or application is both aesthetically pleasing and functionally robust.
<br/><br/>
Ive worked on a variety of projects, including
mobile-responsive websites,dashboards,
and web apps-always focused <br/>on delivering
intuitive, user-centered solutions.
<br/><br/>
Im deeply committed to writing scalable
and maintainable code, combining creativity
with precision to deliver unique
and effective digital products.</p>
</div>
</div>
</main>





 <footer>
            <div className="container3">

  <h1>Contact</h1>
  <br />

  <div className="contex3" ref={contctbtn}>
    <h2>Let's Create Something Amazing Together</h2>
    <br />

    <form>
      <input type="text" placeholder="Enter Name" required />
      <input type="email" placeholder="Enter Email" required />
      <a href="" target="_blank">
      <br />
      <button>Send</button>
    </a>
    </form>

    
  </div>
</div>

<div className="gap2"></div>

<div className="container4" ref={moreinfoBtn}>
  <div className="context">
    <h1>For More Info</h1>
    

<form >
    <input type="email" placeholder="Enter Email" required />
    <a href="#" target="_blank">
      <br />
      <button>Submit</button>
    </a>
</form>

  </div>
</div>

<div className="gap2"></div>


</footer> 

</>
);
}


export default portdata