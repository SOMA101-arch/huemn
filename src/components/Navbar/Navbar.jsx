import React from 'react';
import Style from "./Navbar.module.css";
const Navbar = () => {
    return (
        <>
          <div className={Style.Nav1}>
          <div className={Style.Nav01}>
             <div className={Style.Nav11}>
              <input type="text" placeholder='search'/>
              <h1>HUEMN</h1>
              <ul>
               <li>login</li>
               <li>store</li>
              </ul>
             </div>
             <div className={Style.Nav12}>
              <ul>
               <li><select><option value="COLLECTIONS">COLLECTIONS</option>
               <option value="COLLECTIONS">COLLECTIONS</option>
               <option value="COLLECTIONS">COLLECTIONS</option>
               <option value="COLLECTIONS">COLLECTIONS</option>
               <option value="COLLECTIONS">COLLECTIONS</option>
               <option value="COLLECTIONS">COLLECTIONS</option>
               <option value="COLLECTIONS">COLLECTIONS</option>
               <option value="COLLECTIONS">COLLECTIONS</option></select></li>
               <li>NEWIN</li>
               <li>COLLABORATIONS</li>
               <li>SARI</li>
               <li>CAPSULES</li>
               <li>SUPERHUEMN</li>
              </ul>
             </div>
          </div>
          <div className={Style.Nav2}>
          <div className={Style.Nav02}>
               <h1>Burning Flames</h1>
               <h4>-New Additions-</h4>
               <button>Shop Now</button>
          </div>
          </div>    
           <img src="https://huemn.in/cdn/shop/files/flames.yuh.png?v=1724351376&width=2000" alt="" />
             </div>     
          <div className={Style.Nav3}>
            <h2>Incoming - Shop the latest arrivals here</h2>
          </div>  
          <div className={Style.Nav4}>
                 
          </div>  

        </>
    )
}


export default Navbar
