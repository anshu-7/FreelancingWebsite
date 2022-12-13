import React from "react";
import  "./Home.css";
import NavBar from "../Navbar/Navbar";
import Typewriter from 'typewriter-effect';
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
    <NavBar/>
    <div className="curved upper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#ff3c00"
          fill-opacity="1"
          d="M0,0L60,5.3C120,11,240,21,360,58.7C480,96,600,160,720,186.7C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

    </div>
    <div className="curved">
      <h1><Typewriter
        options={{
            strings: ['Hello World!!'],
            autoStart: true,
            loop: true,
        }}
      />
      </h1>
      <p>
        ksnfkjs kjsdhfkj shfkjsd fkjhs fkslkl;akd w uh jkzc cmnbc chs fw
        n,mwemnfkjbwefjkhndmn bvi sbviuiu ksnfkjs kjsdhfkj shfkjsd fkjhs
        fkslkl;akd w uh jkzc cmnbc chs fw n,mwemnfkjbwefjkhndmn bvi sbviuiu
        ksnfkjs kjsdhfkj shfkjsd fkjhs fkslkl;akd w uh jkzc cmnbc chs fw
        n,mwemnfkjbwefjkhndmn bvi sbviuiu ksnfkjs kjsdhfkj shfkjsd fkjhs
        fkslkl;akd w uh jkzc cmnbc chs fw n,mwemnfkjbwefjkhndmn bvi sbviuiu
        ksnfkjs kjsdhfkj shfkjsd fkjhs fkslkl;akd w uh jkzc cmnbc chs fw
        n,mwemnfkjbwefjkhndmn bvi sbviuiu

        
        
      </p>
      
      
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,0L60,5.3C120,11,240,21,360,58.7C480,96,600,160,720,186.7C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      
    </div>
    

    <Footer/>
    <div>
     &#169; 2022 All Rights Reserved 
    </div>
    </>
  );
}

export default Home;
