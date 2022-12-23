import"./Footer.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
// import { Icon } from '@chakra-ui/react'
import { FaBeer,FaFacebookSquare, FaGoogle, FaInstagram, FaTelegramPlane, FaTwitter, FaYahoo, FaYoutube } from 'react-icons/fa';
// import {AiFillFacebook} from "@react-md/icon"
function Footer(){
    return (
        <div id="Footermainpage">
            <div id="Footermaincontent">
                <div className="editor">
                    <p className="ptag">About Us</p>
                    <p className="ptag">Advertise With Us</p>
                    <p className="ptag">Image Usage Policy</p>
                    <p className="ptag">Privacy Policy</p>
                    <p className="ptag">Contact Us</p>
                    <p className="ptag">Terms Of Use</p>
                </div>
                <div className="editor">
                    <p className="ptag">Editorial Guidelines</p>
                    <p className="ptag">Affiliate Disclosure</p>
                    <p className="ptag">Join Our Medical Board</p>
                    <p className="ptag">Cookie Policy</p>
                    <p className="ptag">Press Room</p>
                </div>
                <div className="editor">
                    <p className="ptag">Follow us</p>
                   <div id="fafa">
                    <div className="fafaimage">
                        <FaFacebookSquare/>
                    </div>
                    <div>
                        <FaInstagram/>
                    </div>
                    <div>
                    <FaGoogle/>
                    </div>
                    <div>
                        <FaTwitter/>
                    </div>
                    <div>
                        <FaYoutube/>
                    </div>

                    <div>
                        <FaYahoo/>
                    </div>
                    <div>
                        <FaTelegramPlane/>
                    </div>

                   </div>
                    
                
                
               
                
                </div>
                <div className="editor">
                    <p className="ptag">Our Sister Sites</p>
                    <p className="ptag">MomJunction</p>
                    <p className="ptag">The BridalBox</p>
                    <p className="ptag">Skinkraft</p>
                    <p className="ptag">Vedix</p>
                </div>
            </div>
            <div id="Footerbottompage">
                <div>
                    <p className="ptag">Copyright © 2011 - 2022 IncNut Stylecraze Private Limited. All rights reserved.</p>
                    <p className="ptag">StyleCraze provides content of general nature that is designed for informational purposes only. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Click here for additional information.</p>
                </div>
                

                

            </div>

        </div>
    )
}
export default Footer