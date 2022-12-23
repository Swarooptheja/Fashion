import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillStarFill } from 'react-icons/bs';
import {FaStarHalfAlt} from "react-icons/fa"
import {BiStore} from "react-icons/bi"
import { useParams } from 'react-router-dom';
import "./Addtobasket.css"
import { InternalStateEx } from './Productdetails';
import { InternalStateEx1 } from './Return';
import { TransitionExample } from './Modal';
function Addtobasket(props) {
    let {id}=useParams()
    console.log(id)
    let data=useSelector((state)=>{
        return state.mainArr
    })
    // console.log(data)
    let filter=data.filter((el)=>{
        return el.ID==id
    })
    console.log(filter)
    return (
        <div id='addtobasketmain' >
           <div id='addtobasketleft'>
              {
                filter.map((el)=>{
                    let  photo = el.images.split("|");
                       
                    let ans=((el.variant_compare_at_price-el.variant_price)/(el.variant_compare_at_price))*100
                    let mainans=Math.floor(ans)
                    
                    return (
                        <>
                        <div>
                            <img src={photo[0]} alt="" />
                        </div>
                        <div>
                            <img src={photo[1]} alt="" />

                        </div>
                        <div>
                            <img src={photo[2]} alt="" />
                        </div>
                        <div>
                            <img src={photo[3]} alt="" />

                        </div>
                       
                        </>
                    )
                })
              }

           </div>
           <div id="addtobasketright">

            {
                filter.map((el)=>{
                    let  photo = el.images.split("|");
                    return (
                        <>
                        <h1>

                            {el.product_type}
                        </h1>
                        <div>
                            <BsFillStarFill color='gold' size={20} />
                            <BsFillStarFill color='gold' size={20} />
                            <BsFillStarFill color='gold' size={20} />
                            <BsFillStarFill color='gold' size={20} />
                            <FaStarHalfAlt color="gold" size={20}/>
                        </div>
                        <div id='namediv'>
                            <div>
                                <h3>

                                $ {el.variant_price}
                                </h3>

                            </div>
                            <div>
                                <h3 className='varientpriceadd'> $ {el.variant_compare_at_price}</h3>
                            </div>
                            <div>
                                <h3>Limited Time</h3>
                            </div>
                        </div>

                        <div>
                            <p>Available on orders between $1.00 - $2,000.00 with Klana or Afterpay</p>
                        </div>
                        <hr />
                        <div>
                            <h3>Color: {el.dominant_color}</h3>
                            </div>      
                                <label htmlFor="">Size*</label>
                            <div>
                                <button id='onesize'>One Size</button>
                                </div>     
                                    <label htmlFor="">Qty*</label>
                                <div>
                                    <select name="" id="selectid">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                        <option value="">7</option>
                                    </select>
                                </div>

                                <div id='addtobasket'>
                                    <button>
                                        <TransitionExample photo={photo} variantprice={el.variant_price} producttype={el.product_type}  actual_color={el. actual_color} size={el.size} brand={el.brand} title={el.title}   />

                                    </button>
                                    </div>            
                               <div>
                                
                                <h4 id='homeh4'><BiStore  size={25} />
                                    Free In Store Pick Up</h4>
                                <p>Please enter a location to check store availability</p>
                               </div>
                               <hr />
                               <div id='inter1'>
                               <InternalStateEx  actual_color={el. actual_color} size={el.size} brand={el.brand} title={el.title} />
                               
                               </div>
                               <div id='inter2'>
                               <InternalStateEx1/>
                               </div>
                             </>

                    )
                })
            }


           </div>
            
        </div>
    );
}

export default Addtobasket;