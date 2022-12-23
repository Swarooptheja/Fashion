import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Successdata } from './components/actiontype';
import "./Filter.css"
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
function Filterby(props) {
    let data=useSelector((state)=>{
        return state.mainArr
    })
    let dispatch=useDispatch()
    let [searchParams, setSearchParams] = useSearchParams();
     let [sortby,setsortby]=useState("")
     let [category,setcategory]=useState("")
     let [brand,setbrand]=useState("")

     console.log(sortby,"aia")
    let handlefilter=(e)=>{
        setsortby(e.target.value)
        let value=e.target.value;
        let filter=data.filter((el)=>{
            return el.ideal_for==value
        })
        dispatch(Successdata(filter))
        

    }
    let handlecategory=(e)=>{
        setbrand(e.target.value)
        let value=e.target.value;
        let filter=data.filter((el)=>{
            return el.product_type==value
        })
        dispatch(Successdata(filter))

    }
    let handlebrand=(e)=>{
        setcategory(e.target.value)
        let value=e.target.value;
        let filter=data.filter((el)=>{
            return el.brand==value
        })
        dispatch(Successdata(filter))
    }
    let handlesort=(e)=>{
        if(e.target.value=="asc"){
            let filter=data.sort((a,b)=>{
                return a.variant_price-b.variant_price
            })
            dispatch(Successdata(filter))
        }
        if(e.target.value=="desc"){
            let filter=data.sort((a,b)=>{
                return b.variant_price-a.variant_price
            })
            dispatch(Successdata(filter))

        }

    }
    useEffect(()=>{
        let params={}
        if(sortby){
            params.sortby=sortby
        }
        if(category){
            params.category=category
        }
        if(brand){
            params.Brand=brand
        }
        setSearchParams(params)
    },[sortby,category,brand,searchParams])
    return (
        <div>
            <h5>FILTERS</h5>
            <div id="filter" onChange={handlefilter}>
             <div>

            <input type="radio"  value="Women" name='filterby'   />
            <label htmlFor="">Women</label><br/>
             </div>
             <div>

            <input type="radio" value="Men" name='filterby'  />
            <label htmlFor="">Men</label><br/>
             </div>
             <div>

            <input type="radio" value="Girls"  name='filterby' />
            <label htmlFor="">Girls</label><br/>
             </div>
             <div>

            <input type="radio" value="Boys" name='filterby' />
            <label htmlFor="">Kids</label><br/>
             </div>
            </div>
            <div id='categories' onChange={handlecategory} >
             <h5>CATEGORIES</h5>
                <input type="radio" value="Treggings" name='filterby' />
                <label htmlFor="">Treggings</label><br/>
                <input type="radio" value="Kurta with Pyjamas"  name='filterby' />
                <label htmlFor="">Kurta with Pyjamas</label><br/>
                <input type="radio" value="A-Line Dress" name='filterby' />
                <label htmlFor="">Clothing</label><br/>
                <input type="radio" value="Leggings" name='filterby' />
                <label htmlFor="">Leggings</label><br/>
                <input type="radio" value="Kurta with Palazzos"name='filterby'  />
                <label htmlFor="">Kurta with Palazzos</label><br/>
                <input type="radio" value="Straight Kurta" name='filterby'  />
                <label htmlFor="">kurta Sets</label><br/>
                <input type="radio" value="Kurta with Churidar" name='filterby'  />
                <label htmlFor="">Kurta with Churidar</label><br/>
                <input type="radio" value="Flared Palazzo"  name='filterby'  />
                <label htmlFor="">Flared Palazzo</label><br/>
                <input type="radio" value="Dupatta" name='filterby'  />
                <label htmlFor="">Dupatta</label><br/>
                <input type="radio" value="Straight Kurti"  name='filterby'  />
                <label htmlFor="">Dresses</label><br/>
              
            </div>
            <div id='brand' onChange={handlebrand}>
               <h5>BRAND</h5>

            <input type="radio" value="Anouk" name="filterby" />
                <label htmlFor="">Anouk</label><br/>
                <input type="radio" value="Libas" name="filterby"/>
                <label htmlFor="">Libas</label><br/>
                <input type="radio" value="House of Pataudi"name="filterby" />
                <label htmlFor="">House of Pataudi</label><br/>
                <input type="radio" value="URBAN DREAM"name="filterby" />
                <label htmlFor="">URBAN DREAM</label><br/>
                <input type="radio" value="Dupatta Bazaar" name="filterby"/>
                <label htmlFor="">Dupatta Bazaar</label><br/>
                <input type="radio" value="Manyavar" name="filterby"/>
                <label htmlFor="">Manyavar</label><br/>
                <input type="radio" value="Wintage" name="filterby"/>
                <label htmlFor="">Wintage</label><br/>
                
              

            </div>
            <h5>SORT</h5>
            <div id=''>
                <select name="" id="sort" onChange={handlesort} >
                    <option value="">Sort By</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            
        </div>
    );
}

export default Filterby;