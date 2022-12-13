import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter as Router,Route } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading  from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"



function App() {

  return (
  <Router>
       <PreNavbar/>
       <Navbar />

       <Route exact path="/miPhones">
       <NavOptios  miPhones={data.miPhones}  />
       </Route>

       <Route exact path="/redmiPhones">
       <NavOptios  redmiPhones={data.redmiPhones}   />
       </Route>

       <Route exact path="/tv">
       <NavOptios tv={data.tv}   />
       </Route>

       <Route exact path="/laptops">
       <NavOptios laptop={data.laptop}   />
       </Route>

       <Route exact path="/lifeStyle">
       <NavOptios  fitnessAndLifeStyle={data.fitnessAndLifeStyle}   />
       </Route>

       <Route exact path="/home">
       <NavOptios home={data.home}   />
       </Route>

       <Route exact path="/audio">
       <NavOptios audio={data.audio} />
       </Route>
       <Route exact path="/accessories">
       <NavOptios accessories={data.accessories}  />
       </Route>

        <NavOptios miPhones={data.miPhones}
         redmiPhones={data.redmiPhones} 
          />


       <Slider start={data.banner.start} />
       <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
       <Heading text="HOT ACCESSORIES" />
       <HotAccessoriesMenu />

       <Route exact path="/music">
       <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
       </Route>

       <Route exact path="/smartDevice">
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       </Route>

       <Route exact path="/home">
       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
       </Route>

       <Route exact path="/lifestyle">
       <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
       </Route>


       <Route exact path="/mobileAccessories">
       <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
       </Route>

       <Heading text="PRODUCT REVIEWS"/>

       <ProductReviews productReviews={data.productReviews}/>

       <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />
   </Router>

  );
}

export default App;
