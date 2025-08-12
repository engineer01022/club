import React,{Component} from "react";
import './App.css'

const Detail=({title,price,describtion,image,ref})=>{
        return(
        <div className="detail">
               <div className="discuss">
    <h1 style={{marginBottom:'2rem'}}>{title}</h1>
    <h4>السعر : {price} <img src="Saudi_Riyal_Symbol-1.png" style={{height:'25px', width:'25px'}}/> </h4>
    <h4>الوصف:</h4>
<p>{describtion}</p>
<p>✅ مشاهدة مباشرة وحصرية</p>
<p>✅ جودة بث عالية (Full HD / 4K)</p>
<p>✅ تعليق عربي وإنجليزي</p>
<p>✅ تغطية شاملة قبل وبعد المباريات</p>
<p>✅ تشغيل على أكثر من جهاز</p>
<p>✅ دعم فني متواصل</p>

   <a href={ref}><button className="btn btn-primary">اشترك الان </button></a> 
</div>
<div className="photo">
    <img src={image} style={{width:'90%',marginRight:'1rem',borderRadius:'0.2rem'}}/>
</div>
        

        </div>
        
        );
    }

export default Detail;