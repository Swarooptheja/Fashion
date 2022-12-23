import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filterby from './Filterby';
import "./Main.css"
import Pagination from './Pagination';
function Main(props) {
    let presentdata=useSelector((state)=>{
        return state.presentdata
    })


    let handleclickmove=(el)=>{
       console.log(el,"theja")

    }
   
    useEffect(()=>{

    },[])
    return (
        <div>

            <div id='mainpagetop' >
                <div>
                    
                     <Filterby/>
                </div>
            
            <div id='mainpage'>
                {
                    presentdata.map((el)=>{
                        let  photo = el.images.split("|");
                       
                        let ans=((el.variant_compare_at_price-el.variant_price)/(el.variant_compare_at_price))*100
                        let mainans=Math.floor(ans)
                        // console.log(el)
                           
                        return  <a href={`/addtobasket/${el.ID}`}>
                        <div key={el.ID} >

                        <img  src={photo[0]} alt="images" onMouseOver={(e)=>e.currentTarget.src=photo[1]} onMouseOut={(e)=>e.currentTarget.src=photo[0]} />
                        <div id='mainpagediscount' >
                            <div>
                            <h4>Rs.{el.variant_price}</h4>
                            </div>
                            <div>
                             <h4 id='line'> Rs.{el.variant_compare_at_price}</h4>
                            </div>
                            <div>
                                <h4 id='discountdiv'>({mainans} % OFF)</h4>
                            </div>
                        </div>
                        </div>
                        </a>
                    })
                }
    
               
                
            </div>
           
            </div>
            <Pagination/>
        </div>
    );
}

export default Main;