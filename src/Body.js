import home from './img/home.png'
import deal from './img/deal.png'
import deal1 from './img/deal1.png'
import deal2 from './img/deal2.png'
import deal3 from './img/deal3.png'
import deal4 from './img/deal4.png'
import deal5 from './img/deal5.png'
import deal6 from './img/deal6.png'
import best from './img/best.png'
import best1 from './img/best1.png'
import best2 from './img/best2.png'
import best3 from './img/best3.png'
import best4 from './img/best4.png'
import best5 from './img/best5.png'
import best6 from './img/best6.png'
import top from './img/top.png'
import top1 from './img/top1.png'
import top2 from './img/top2.png'
import top3 from './img/top3.png'
import top4 from './img/top4.png'
import top5 from './img/top5.png'
import top6 from './img/top6.png'

import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'


import hearticon from './img/heart icon.svg';
import redhearticon from './img/redhearticon.svg';
import { useState } from 'react'



function Body({setBag,bag,addHandler}){
const [isClicked,setClicked]=useState(false);
const [val,setVal]=useState();
const [data1,setData1] =useState(
    [
    { id:0 ,liked:false ,src:deal1,href:"https://www.myntra.com/shop/300foru"},
    { id:2 ,liked:false ,src:deal2,href:"https://www.myntra.com/womens-western-wear?f=Brand%3AONLY%2CRoadster%3A%3ACategories%3ATops%2CTshirts&rf=Price%3A139.0_600.0_139.0%20TO%20600.0&sort=new"},
    { id:3 ,liked:false ,src:deal3,href:"https://www.myntra.com/women-ethnic-wear?f=Categories%3ADresses%2CKurta%20Sets%2CKurtas%2CSarees&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&sort=popularity"},
    { id:4 ,liked:false ,src:deal4,href:"https://www.myntra.com/mfb-brand?f=Categories%3AFlats%2CHeels%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0"},
    { id:5 ,liked:false ,src:deal5,href:"https://www.myntra.com/newmcf-str?rf=Discount%20Range%3A65.0_100.0_65.0%20TO%20100.0"},
    { id:1 ,liked:false ,src:deal6,href:"https://www.myntra.com/ethnic-footwear?f=Gender%3Amen%20women%2Cwomen&sort=popularity"},
])

const [data3,setData3] =useState([
    { id:6 ,liked:false ,src:top1,href:"https://www.myntra.com/mfb-clearance"},
    { id:7 ,liked:false ,src:top2,href:"https://www.myntra.com/mfb-brand?f=Categories%3AKurta%20Sets%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A50.0_66.0_50.0%20TO%2066.0"},
    { id:8 ,liked:false ,src:top3,href:"https://www.myntra.com/mfb-brand?f=Categories%3AKurtas%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A50.0_66.0_50.0%20TO%2066.0"},
    { id:9 ,liked:false ,src:top4,href:"https://www.myntra.com/mfb-brand?f=Categories%3ATops%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A10.0_66.0_10.0%20TO%2066.0"},
    { id:10 ,liked:false ,src:top5,href:"https://www.myntra.com/mfb-brand?f=Brand%3AHERE%26NOW%2CRoadster%3A%3ACategories%3AShirts%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0"},
    { id:11 ,liked:false ,src:top6,href:"https://www.myntra.com/mfb-brand?f=Categories%3ADresses%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0"},
])

const [data2,setData2] =useState([
    { id:11 ,liked:false ,src:best1,href:"https://www.myntra.com/kurta-sets?f=Gender%3Amen%20women%2Cwomen&rf=Price%3A199.0_1299.0_199.0%20TO%201299.0"},
    { id:12 ,liked:false ,src:best2,href:"https://www.myntra.com/kurtas-women?rf=Price%3A299.0_799.0_299.0%20TO%20799.0"},
    { id:13 ,liked:false ,src:best3,href:"https://www.myntra.com/dresses?f=Gender%3Amen%20women%2Cwomen&rf=Price%3A199.0_899.0_199.0%20TO%20899.0"},
    { id:14 ,liked:false ,src:best4,href:"https://www.myntra.com/jeans?f=Gender%3Amen%20women%2Cwomen&rf=Price%3A299.0_999.0_299.0%20TO%20999.0"},
    { id:15 ,liked:false ,src:best5,href:"https://www.myntra.com/men-topwear?f=Categories%3AShirts&rf=Price%3A296.0_799.0_296.0%20TO%20799.0"},
    { id:16 ,liked:false ,src:best6,href:"https://www.myntra.com/t-shirt?f=Gender%3Amen%2Cmen%20women&rf=Price%3A299.0_499.0_299.0%20TO%20499.0"},
])



    return(
        <div>
            <section className = "section1">
                <a href = "https://www.myntra.com/top-and-tees?f=Gender%3Amen%20women%2Cwomen&rf=Price%3A139.0_700.0_139.0%20TO%20700.0">
                <img className = "homeImg" src = {home}/>
                </a>
                <img className = "homeImg" src = {deal}/>
            </section> 

            <section className = "section1 flex flex-wrap space-evenly">
                
                {data1?.map((value, index)=>{
                    return(
                <div>
                <a href ={value?.href}>
                <img className = "itemImg1" src = {value?.src}/>
                </a> 
                <div style={{display:'flex',gap:10}}>
                <button onClick={()=>{addHandler(value)}}>Add to Bag</button> 
                <div>Wishlist{isClicked &&val===index && "ed"}</div>
                <img src={val===value?.id && isClicked? redhearticon : hearticon} onClick={()=>{ setVal(value?.id); setClicked(!isClicked)}}></img>
                </div>
                </div>
                    )
                })}
            </section> 


            <section className = "section1">
                <img className = "homeImg" src = {best}/>
            </section>

            <section className = "section1 flex flex-wrap space-evenly">

                {data2?.map((value,index)=>{

                    return(
                        <div>
                        <a href = {value?.href}>
                        <img className = "itemImg2" src = {value?.src}/>
                        </a>
                        <div style={{display:'flex',gap:10}}>
                        <button onClick={()=>{addHandler(value)}}>Add to Bag</button> 
                        <div>Wishlist{isClicked &&val===value?.id && "ed"}</div>
                        <img src={val===value?.id && isClicked? redhearticon : hearticon} onClick={()=>{ setVal(value?.id); setClicked(!isClicked)}}></img>
                        </div>
                        </div>
                    )
                })}

            </section>
            <section className = "section1">
                <img className = "homeImg" src = {top}/>
            </section>
            <section className = "section1 flex flex-wrap space-evenly">
           {data3?.map((value,index)=>{

            return(
                <div>
                <a href = {value?.href}>
                <img className = "itemImg2" src = {value?.src}/>
                </a>
                <div style={{display:'flex',gap:10}}>
                <button onClick={()=>{addHandler(value)}}>Add to Bag</button> 
                <div>Wishlist{isClicked &&val===value?.id && "ed"}</div>
                <img src={val===value?.id && isClicked? redhearticon : hearticon} onClick={()=>{ setVal(value?.id); setClicked(!isClicked)}}></img>
                </div>
                </div>  
            )
           })}
            </section>

            <section className = "section2 flex flex-wrap space-evenly">
                <ul>
                <li className = "semibold">ONLINE SHOPPING</li>
                <li className = "invisible">invisible</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Cards</li>
                <li>Myntra Insider</li>
                </ul>
                <ul>
                <li className = "semibold">USEFUL LINKS</li>
                <li className = "invisible">invisible</li>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Site map</li>
                <li>Corporate information</li>
                <li>Whitehat</li>
                </ul>
                <ul>
                <li className = "semibold">CUSTOMER POLICIES</li>
                <li className = "invisible">invisible</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Terms Of Use</li>
                <li>Track Orders</li>
                <li>Shipping</li>
                <li>Cancellation</li>
                <li>Returns</li>
                <li>Privacy policy</li>
                <li>Grievance Officer</li>
                </ul>
                <ul>
                <li className = "semibold">KEEP IN TOUCH</li>
                <a href = "https://www.facebook.com/myntra"><img src = {icon1}/></a>
                <a href = "https://twitter.com/myntra"><img src = {icon2}/></a>
                <a href = "https://www.youtube.com/user/myntradotcom"><img src = {icon3}/></a>
                </ul>
                <ul>
                <li><strong>100% ORIGINAL</strong> guarantee<br />for all products at myntra.com</li>
                <li className = "invisible">invisible</li>
                <li><strong>Return within 30days</strong> of<br />receiving your order</li>
                </ul>
                
            </section>

            <section className = "section3">
                <li className = "semibold">POPULAR SEARCHES</li>                                           
                <nav>
                    <a href = "https://www.myntra.com/makeup">Makeup</a> | <a href = "https://www.myntra.com/girls-dresses">Dresses</a> | <a href = "https://www.myntra.com/tshirts">T-Shirts</a> | <a href = "https://www.myntra.com/sandals">Sandals</a> | <a href = "https://www.myntra.com/headphones">Headphones</a> | <a href = "https://www.myntra.com/men-blazers">Blazers For Men</a> | <a href = "https://www.myntra.com/handbags">Handbags</a> | <a href = "https://www.myntra.com/women-watches">Ladies Watches</a> | <a href = "https://www.myntra.com/bags">Bags</a> | <a href = "https://www.myntra.com/sports-shoes">Sport Shoes</a> | <a href = "https://www.myntra.com/reebok-shoes">Reebok Shoes</a>        | <a href = "https://www.myntra.com/puma-shoes">Puma Shoes</a> | <a href = "https://www.myntra.com/men-boxers">Boxers</a> | <a href = "https://www.myntra.com/wallets">Wallets</a> | <a href = "https://www.myntra.com/women-shirts-tops-tees">Tops</a> | <a href = "">Earrings</a> | <a href = "https://www.myntra.com/fastrack-watches">Fastrack Watches</a> | <a href = "https://www.myntra.com/women-kurtas-kurtis-suits">Kurtis</a>
                </nav>
            </section>
            <footer className = "flex space-around">
                <p>In case of any concern, <a href = "https://www.myntra.com/contactus" className = "semibold">Contact Us</a></p>
                <p>Copyright &copy; 2022 myntra.com | All rights reserved.</p>
            </footer>
        </div>
    )
}
export default Body;