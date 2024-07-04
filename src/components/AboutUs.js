import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'; //So, that we can use Link and to //REACT-ROUTER hai ye


export default function AboutUs(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#00003e' : '#90e0ef',
  }
  let myStyle2 = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#00003e' : '#90e0ef',
    marginTop: "5vh",
    marginBottom: "5vh",
  }
  let myStyle3 = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#00003e' : '#90e0ef',
    marginTop: "5vh",
    marginBottom: "5vh",
    border: "4px solid darkBlue",
  }

  useEffect(() => {
    document.body.style.backgroundColor = props.mode === 'light' ? '#caf0f8' : '#05081c';
  }, [props.mode])
  

  return (
    <>
      <div className="container rounded py-4 my-4 px-4" style={myStyle3}>
      <h2 style={myStyle2}>Devloped and Managed by Indroneel</h2>
      <p className='justify-content-center'>Hello, I am Indroneel Goswami, a student at Institute of Technical Education and Research, Siksha 'O' Anusandhan University, Bhubaneswar, with a passion for software development. I am dedicated to honing my skills in HyperText Markup Language (HTML), Cascading Style Sheets (CSS), JavaScript (JS), and exploring new technologies like Application Programming Interfaces (APIs) to create impactful solutions. I have also delved into JavaScript, React.js, Data Structures and Algorithms (DSA), Git, and Spring Boot to broaden my expertise in building robust software solutions.</p>
      </div>
      <div className="container rounded py-4 my-4" style={myStyle3}>
        <h2 style={myStyle}>Our Socials</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4 py-3">
          <div className="col">
            <div className="card" style={{border: "4px solid darkBlue", borderRadius: "10px"}}>
              <img src="https://pbs.twimg.com/profile_images/1478307374506995713/6RA1Ax4__400x400.jpg" className="card-img-top" alt="LinkedIn" />
              <div className="card-body rounded-bottom" style={myStyle}>
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text">Connect with us on LinkedIn to stay updated with our latest jaw-dropping activities and insights.</p>
                <Link to="https://www.linkedin.com/in/indroneel-goswami-403350285/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><button className='btn btn-primary'>Click me to open</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{border: "4px solid darkBlue", borderRadius: "10px"}}>
              <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" className="card-img-top" alt="Github" />
              <div className="card-body rounded-bottom" style={myStyle}>
                <h5 className="card-title">Github</h5>
                <p className="card-text">Explore our projects and contributions on GitHub. Follow us for code updates and collaborations!</p>
                <Link to="https://github.com/Indroneel28" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><button className='btn btn-primary'>Click me to open</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{border: "4px solid darkBlue", borderRadius: "10px"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png" className="card-img-top" alt="Instagram" />
              <div className="card-body rounded-bottom" style={myStyle}>
                <h5 className="card-title">Instagram</h5>
                <p className="card-text">Follow us on Instagram for snapshots of our journey and behind-the-scenes moments!</p>
                <Link to="https://www.instagram.com/_indroneel_/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><button className='btn btn-primary'>Click me to open</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{border: "4px solid darkBlue", borderRadius: "10px"}}>
              <img src="https://img.freepik.com/free-vector/twitter-app-new-logo-x-black-background_1017-45425.jpg" className="card-img-top" alt="X" />
              <div className="card-body rounded-bottom" style={myStyle}>
                <h5 className="card-title">X</h5>
                <p className="card-text">Stay updated with our latest announcements and insights on X. Follow us for real-time updates!</p>
                <Link to="https://x.com/Indroneel_28" target="_blank" rel="noopener noreferrer" className="btn btn-primary"><button className='btn btn-primary'>Click me to open</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
