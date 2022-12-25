import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Successdata } from "./components/actiontype";
import "./Pagination.css"

function Pagination() {
  let data = useSelector((state) => {
    return state.mainArr;
  });
 
  let dispatch = useDispatch();
  let [currentpage, setcurrentpage] = useState(1);
  let [postperpage, setpostperpage] = useState(30);
  //  let [searchParams,setSearchParams]=useSearchParams()
  let lastPostIndex = currentpage * postperpage;
  let firstpostindex = lastPostIndex - postperpage;
  let currentposts = data.slice(firstpostindex, lastPostIndex);
  let totalposts = data.length;
  console.log(totalposts,"thjeaswaroop")
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalposts / postperpage); i++) {
    pages.push(i);
  }
  useEffect(() => {
    // let params={}
    // if(currentpage){
    //   params.Pages=currentpage
    // }
    // setSearchParams(params)
    //    dispatch(Success(currentposts))
  }, [currentpage]);
  let handleclick = (el) => {
   
    setcurrentpage(el);
    console.log(el);
    dispatch(Successdata(currentposts));
  };
  return (
    <div id="pagemain">
      <div>

      <h3 id="pageh3">Pages :</h3>
      </div>
    <div id="paginationbuttonbutton">
      {/* <h2>Pages : </h2> */}
      {pages.map((el, index) => {
        return (
          // <h2>pages</h2>
          <>
          {/* <h2>page</h2> */}
          <button
            id="paginationbutton"
            key={index}
            onClick={() => handleclick(el)}
          >
            {el}
          </button>
          </>
        );
      })}
    </div>
    </div>
  );
}

export default Pagination;