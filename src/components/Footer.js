import React from "react";
import './App.css'
import { FaFacebook, FaInstagram, FaPhone, FaVoicemail, FaWhatsapp, FaEnvelope} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Politic from "../pages/Politic";
function Footer(){
    return(
        <div className="footer" style={{margin:'0'}}>
        <p style={{padding:'0 1rem', fontSize:'18px'}}>اهلا بكم في عالم المتعة والجودة ... متجر مزن لبيع رسيفرات بي ان المخفضة باسعار تنافسية </p>
        <FaInstagram id="icons"/>
        <FaFacebook id="icons"/>
        <hr />
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <div>
                <h3>روابط مهمه </h3>
                   <p><Link style={{textDecoration:'none', color:'white'}} to="politic" >سياسة الاستخدام و الخصوصية</Link></p> 
                   <p><Link style={{textDecoration:'none', color:'white'}} to="charge">سياسة الشحن و الاسترجاع</Link></p> 

            </div>
            <div>
            <h3 >تواصل معنا </h3>
            <p> <span ><FaWhatsapp id="icons"/></span>+966544294000 </p>
            <p><a> <FaPhone id="icons"/> +966544294000 </a></p>
            <p><a> <FaEnvelope id="icons"/> +966544294000 </a></p>

            </div>
        </div>
<hr />
<p style={{paddingBottom:'3rem'}}>جميع الحقوق محفوظة | 2025 متجر مزن</p>
        </div>
    );
}
export default Footer;