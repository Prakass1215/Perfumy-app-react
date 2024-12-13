

import one from "../assets/images/one.png"
import two from "../assets/images/two.png"
import three from "../assets/images/three.png"

// ------------------Product component
function Product() {
    return (
      <div className="products">
          <div className="box">
            <img src={one} alt="one"></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
          </div>
  
          <div className="box">
            <img src={two} alt="two"></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
          </div>
          <div className="box">
            <img src={three} alt="three"></img>
            <p>
              Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long
              Lasting Perfume
            </p>
          </div>
      </div>
    );
  }

  export default Product