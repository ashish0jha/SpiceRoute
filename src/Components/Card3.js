import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/constants";

//Destructuring 
const Cards3=({Res})=>{
    const [imgLoaded, setImgLoaded] = useState(false);
    const {resId ,name,rating,timeToReach,cuisines,imageId}=Res;
    const navigate = useNavigate();
    
    return(
        <div className='w-full md:w-70 h-75 my-1.25 mx-auto md:mx-2.5 hover:shadow-2xl rounded-4xl hover:scale-105 duration-300 bg-[#123B22] border border-[#1B5230] overflow-hidden cursor:pointer'
            onClick={()=>{
                navigate(`/restaurant/${resId}`)
            }}>
            <div className="w-full h-43 bg-[#0E2A18] relative">
                <img
                    className={`w-full h-43 rounded-4xl object-cover transition-opacity duration-500 ${
                        imgLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    src={imageId}
                    loading="lazy"
                    onLoad={()=> setImgLoaded(true)}
                />
            </div> 
            <div className='pl-5'>
                <h3 className="font-extrabold text-[#EAF7EE]">{name}</h3>
                <div className="flex items-center">
                    <h3 className="px-1.25 bg-[#0E2A18] rounded-lg text-[#27D673]"><span className="text-amber-300">★ </span>{rating} </h3>
                    <h3 className="text-[#8FBE9F]">. {timeToReach}</h3>
                </div> 
                <p className="text-[#8FBE9F]">{cuisines.join(",")}</p>
            </div>
        </div>
    )
}

export default Cards3;







// const ResCard=()=>(
//     <div className='res-card'>
//         <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
//         <h3 id="TextOnImg">ITEMS AT 99</h3>
//         <div className='textpart'>
//             <h3>Pizza Hut</h3>
//             <h3>4.3 ☆ , 40-45 mins</h3>
//             <p>Pizzas,Chhindwara City</p>
//         </div>
        
//     </div>
//)

//this is my code , when i didn't knew about "Props"
// const ResCard2=function(ResName,TextOnImg,RateTime,Cuisine){
//     return (
//         <div className='res-card'>
//             <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
//             <h3 id="TextOnImg">{TextOnImg}</h3>
//             <div className='textpart'>
//                 <h3>{ResName}</h3>
//                 <h3>{RateTime}</h3>
//                 <p>{Cuisine}</p>
//             </div>
            
//         </div>
//     )
// }

//making of cards using props
// const Cards=(props)=>{
//     return(
//         <div className='res-card'>
//             <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
//             <h3 id="TextOnImg">{props.TextOnimg}</h3>
//             <div className='textpart'>
//                 <h3>{props.ResName}</h3>
//                 <h3>{props.RateTime}</h3>
//                 <p>{props.Cuisines}</p>
//             </div>
//         </div>
//     )
// }
//destructuring to remove props. in every use ;
// const Cards=({TextOnimg,ResName,RateTime,Cuisines})=>{

//     return(
//         <div className='res-card'>
//             <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
//             <h3 id="TextOnImg">{TextOnimg}</h3>
//             <div className='textpart'>
//                 <h3>{ResName}</h3>
//                 <h3>{RateTime}</h3>
//                 <p>{Cuisines}</p>
//             </div>
//         </div>
//     )
// }
//destructuring cal also done by 
// const Cards1=(props)=>{
//     const {TextOnimg,ResName,RateTime,Cuisines}=props;
//     return(
//         <div className='res-card'>
//             <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG'/>
//             <h3 id="TextOnImg">{TextOnimg}</h3>
//             <div className='textpart'>
//                 <h3>{ResName}</h3>
//                 <h3>{RateTime}</h3>
//                 <p>{Cuisines}</p>
//             </div>
//         </div>
//     )
// }
//******************************************************
//Config Driven UI:-UI on the basis of outer data 

// const Cards2=({Res})=>{
//     return(
//         <div className='res-card'>
//             <img src={CDN_Link + Res.info.cloudinaryImageId}/>
//             <div className='textpart'>
//                 <h3>{Res.info.name}</h3>
//                 <h3>{Res.info.avgRating} , {Res.info.sla.slaString}</h3>
//                 <p>{Res.info.cuisines.join(",")}</p>
//             </div>
//         </div>
//     )
// }
//Higher Order Function
// export const close=(cards3)=>{
//     return (props)=>{
//         return (
//             <div>
//                 <label className="absolute translate-x-8 bg-white p-0.5 rounded-xl">Closed</label>
//                 <Cards3 {...props}/>
//             </div>
//         )
//     }
// }
// export const open=(cards3)=>{
//     return (props)=>{
//         return (
//             <div>
//                 <label className="absolute translate-x-30 bg-black text-white px-1 rounded-sm">Opened</label>
//                 <Cards3 {...props}/>
//             </div>
//         )
//     }
// }