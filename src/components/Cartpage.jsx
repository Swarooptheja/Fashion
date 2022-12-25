import React from 'react';
import "./Cartpage.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsFillCartFill} from "react-icons/bs"
import {CiMemoPad} from "react-icons/ci"
import {MdPayment} from "react-icons/md"
import {CiPercent} from "react-icons/ci"
import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Viewall } from './Viewall';
import { useEffect } from 'react';
function Cartpage(props) {
    let localdata=JSON.parse(localStorage.getItem("alldata")) || []
    let [count,setcount]=useState(1)

    let handleincrease=()=>{
        setcount(count+1)
    }
    let handlereduce=()=>{
        setcount(count-1)
    }
    console.log(localdata)
    let variant_compare_at_price=0
    let variant_price=0
    let arr=[]
    localdata.forEach((el)=>{
        el.forEach((main)=>{
            arr.push(main)
            variant_compare_at_price+=+main.variant_compare_at_price
            variant_price+=+main.variant_price
        })

    })
    let [product,setproduct]=useState(1)
    // console.log(variant_compare_at_price,variant_price)
    let el=variant_price-200
    let [viewall,setviewall]=useState(false)
    let handlestate=(state)=>{
        setviewall(true)
       
    }
    let deleteproduct=(index)=>{
        setproduct((product)=>product+1)
       localdata.splice(index,1)
       localStorage.setItem("alldata",JSON.stringify(localdata))
       alert("Delete the Product from cart successfully")
    //    setproduct(false)
    }
    let [input,setinput]=useState("")
    let [inputdis,setinputdis]=useState(false)
    let handleclick=()=>{
        if(input=="masai1"){
            setinputdis(true)
            setinput("")
        }
        // alert("Invalid Coupon Code Please Enter Correct Coupon")
      
    }
    let navigate=useNavigate()
    let onplace=()=>{
        navigate("/ordersummary")
    }
   useEffect(()=>{
    console.log(product)
   
   },[product])
    return (
        <>
            <div id="cartpagemain" >
                <div id='cartpageleft'>
                <h3 id='fashionbasket'>Fashion Basket ({arr.length} Items)  </h3>
                    {
                        arr.length>0 && arr.map((el,index)=>{
                            let  photo = el.images.split("|");
                             console.log(arr)
                                return (
                                    <div id='localid'>
                                       <div>
                                        <img  width={100} src={photo[0]} alt="" />
                                       </div>
                                       <div id='localidright'>
                                        <div>
                                            <h4 id='nameid'>{el.title}</h4>
                                        </div>
                                        <div id='pricediv'>
                                            <div>
                                            <h4 id='priceid'>₹{el.variant_price}</h4>
                                            </div>
                                            <div>
                                                <p id='mrpid' > ₹{el.variant_compare_at_price}</p>
                                            </div>
                                            <div>
                                                <p id='saveid'>You Save ₹{el.variant_compare_at_price-el.variant_price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {/* <h4 id='sizeid'>
                                                Size:L
                                            </h4> */}
                                        </div>
                                        <div id='finalbutton'>
                                            <div>
                                            <p>SAVE FOR LATER</p>
                                            </div>
                                            <div id="increasingbutton">
                                               <div>
                                                <button onClick={()=>deleteproduct(index)}>Delete</button>
                                               </div>
                                            </div>
                                            
                                            {/* <div id='increasingbutton'>
                                                <div>
                                                    <button disabled={count==0} onClick={handlereduce}>-</button>
                                                </div>
                                                <div>
                                                    <button>{count}</button>
                                                </div>
                                                <div>
                                                    <button disabled={count==3} onClick={handleincrease}>+</button>
                                                </div>
                             </div> */}
                                        </div>
                                       </div>
                                    </div>
                                )
                            
                        })
                    }
                </div>
                <div>
                    <div id='rightfirst'>
                        <div >
                        <BsFillCartFill  size={30} color="blue"/>
                        Cart
                        </div>
                        <div >
                        <CiMemoPad  size={30}/>
                        Order Summary
                        </div>
                        <div >
                        <MdPayment size={30}/>
                        Payment
                        </div>
                    </div>
                    <div  id='rightmiddle' >
                        
                        <div id='applycoupon' >
                            <div>
                                <h2 id='couponapply'>Apply Coupon</h2>
                            </div>
                            {inputdis || localdata.length==0?
                        "":
                            <div>
                               <button id='viewall'>
                                {/* <Viewall/> */}
                                <Viewall handlestate={handlestate} disabled={inputdis==true || localdata.length==0} />
                               </button>
                            </div>
}
                        </div>
                        

                        {
                            viewall || localdata.length==0?"":
                        
                        <div id='inputfield'>
                           
                            <div>
                                <CiPercent size={25} />
                               
                            <input type="text" placeholder='Enter Coupon Code Here' value={input} onChange={(e)=>setinput(e.target.value)}  />
                            </div>
                            <div>
                                <button id='apply' disabled={localdata.length==0} onClick={handleclick}>Apply</button>
                            </div>

                        </div>
}
                    </div>
                        <h2 id='payment'>Payment Details</h2>
                    <div id='rightbottom'>
                        <div className='details'>
                            <div>
                            <h4>MRP Total</h4>
                            </div>
                            <div>
                           <h4> ₹ {variant_compare_at_price}/-</h4>
                            </div>
                            
                        </div>
                        <div className='details'>
                        <div>
                            <h4>Product Discount</h4>
                            </div>
                            <div>
                           <h4> ₹ {variant_compare_at_price-variant_price}/-</h4>
                            </div>
                        </div>
                        {
                            viewall?
                        <div className='details'>
                            <div>
                            <h4>Coupon Discount</h4>
                            </div>
                           
                            <div>
                           <h4> ₹ {200}/-</h4>
                            </div>
                        </div>: ""
                        }

{
                            inputdis?
                        <div className='details'>
                            <div>
                            <h4>Favorite Coupon Discount</h4>
                            </div>
                           
                            <div>
                           <h4> ₹ {200}/-</h4>
                            </div>
                        </div>: ""
                        }
                        
                        <div className='details'>
                            <div>
                            <h4>Total Amount</h4>
                            </div>
                           
                            <div>
                           {
                            viewall || inputdis?
                            <h4>₹{el}/-</h4>:
                            <h4> ₹{variant_price}/-</h4>
                           }
                            </div>
                        </div>
                    
                        
                       
                    </div>
                    <button id='placeorder' disabled={localdata.length==0} onClick={onplace} >Place order</button>
                </div>
            </div>
            
        </>
    );
}

export default Cartpage;