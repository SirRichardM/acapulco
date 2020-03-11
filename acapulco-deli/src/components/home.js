import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Home() {
  

  return (
    <div id="home" className="homie">
      <h1>Acapulco Deli</h1>
      <h4>1116 Manhattan Ave, Brooklyn, NY 11122</h4>
      <AutoplaySlider className="yes" animation="cubeAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      >
        
        <div data-src="https://www.gannett-cdn.com/presto/2019/07/26/PPHX/39d32f5b-feb1-48a2-a84b-fd051c65e665-Birrieria_Tijuana_-_Torta.jpg?crop=3102,2439,x648,y28&width=540&height=&fit=bounds&auto=webp" />
        
          <div data-src="https://res.cloudinary.com/popmenu/image/upload/c_limit,f_auto,h_1920,q_auto,w_1920/v1570730751/gnhbvdxynohkub0vdnnv.jpg" />
          
        
          <div data-src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201406-xl-barbacoa-beef-tacos-with-two-sauces.jpg%3Fitok%3DDAgymsEl"/>
        
          <div data-src="https://dorastable.com/wp-content/uploads/2018/05/enmoladas-2.jpg"/>
        
          <div data-src="https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/01/low-calorie-huevos-rancheros.jpg?fit=1200%2C879&ssl=1" />
        


      </AutoplaySlider>

      {/* <img src="https://res.cloudinary.com/popmenu/image/upload/c_limit,f_auto,h_1440,q_auto,w_1440/vfkxuj3py1fg5aamqwnk.jpg" /> */}
      <p className="hometext">Welcome to Acapulco Deli & Restaurant, home of great, authentic Mexican food! We have a full menu of all your favorite foods for the enire family. Check out our fajitas, they are fantastic, made with steak, chicken or shrimp. Check out our nachos; chips, beans, red sauce & melted mexican cheese topping...delicious!</p>
      <div className="hours">
      <p> Hours: <br/> Monday - Friday <br/> 7am to 10pm
      </p>

    <p>Hours: <br /> Saturday & Sunday <br /> 9am to 10pm </p>
    </div>
    </div>
  )
}

export default Home;