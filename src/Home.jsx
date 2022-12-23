import React from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleSlider from './Banner';
import Carousel from './Carousel';
import "./Home.css"
function Home(props) {
    let navigate=useNavigate()
    let handleclick=()=>{
        navigate("/main")
    }
    return (
        <div id='homepagemain'>
            
            <div id='homepagenavbar'>
                
             <SimpleSlider/>
            </div>



          
            <div id='homepageimgs'onClick={handleclick} >
                <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/UZBe3AKFvj6pZ5ZwGgFb5/36c352507e317232f6f0dc9fa0b08262/120522_HPG_SS_M4.jpg?w=1125&q=80&fm=webp" alt="" />
                </div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/6pbNc8jiAbQ8G2ayyvghpp/2c0c574351f821a3d82ad881c7014201/120522_HPG_SS_M5.jpg?w=1125&q=80&fm=webp" alt="" />
              </div>
              <div>
                <img src="https://images.ctfassets.net/5de70he6op10/3V6KLhzzDn72Elq46Htwom/c329861ced522eef194836deb7e40929/120522_HPG_LS_M2c.jpg?w=856&q=80&fm=webp" alt="" />
              </div>
                <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/3QA8gNNAoiI3zkKeY5LuEE/79fe5b7f229e053ec3d99a94a60e861b/120522_HPG_SS_M1a.jpg?w=856&q=80&fm=webp" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/45316486_011_b1?$an-category$&qlt=80&fit=constrain" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/64208986_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/78659927_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/78661154_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/4133402250064_020_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                
            </div>

            <div id="banner" onClick={handleclick}>
                <img src="https://images.ctfassets.net/5de70he6op10/6By9sDtTOuhwIliZuLqIs9/b9cf19c0e0d4a9343b772e3f90a5ad53/120522_HPG_LS_M3.jpg?w=2640&q=80&fm=webp" alt="" />
            </div>

              
                <hr />
            <div id='homepageslider'>
               <Carousel/>
            </div>

            <div id="banner1">
                <img src="https://images.ctfassets.net/5de70he6op10/2pPs7JIRCZbDHB7PCcBlTe/2d837d51eb3a9838c4e33b37a77ac0e5/120522_HPG_LS_M5.jpg?w=2641&q=80&fm=webp" alt="" />
            </div>

                <h2 id='trendingnow'>Trending Now</h2>
            <div id='homepagesliderbottom' onClick={handleclick}>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/4130347470058_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/4130652010062_001_c14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/4130900600046_266_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/4130652010060_086_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/4130638280250_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
                <div>
                    <img src="https://images.urbndata.com/is/image/Anthropologie/4130638280247_049_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
                </div>
            </div>
              <h2>More To Explore</h2>
            <div id="moretoexplore" onClick={handleclick} >
                <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/3O1QxXVRnPnvmiO7l67Hsr/38f1b90088ff348a1133c85a956c26da/MTE_2.jpg?w=856&q=80&fm=webp" alt="" />
                </div>
                <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/76eQ6p5KpXqNGHdFd4fmfu/f0f709da52823f7d301f40f4a32d0397/120522_HPG_MTE_2.jpg?w=856&q=80&fm=webp" alt="" />
                </div>
                <div>
                    <img src="https://images.ctfassets.net/5de70he6op10/5rXqHDYoqXytAscv6my5TW/26470fa9cfec82723705866d62c341bb/MTE_3.jpg?w=856&q=80&fm=webp" alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Home;