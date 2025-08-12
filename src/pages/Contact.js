import React from 'react';
import Detail from '../components/Detail';

const Contact = () => {
  return (
    <div>
         <div className="bg-secondary bg-opacity-50 text-white p-5 rounded-1 " style={{listStyle:'none'}}>
            <div >
              <h2>مرحبا!</h2>
            </div>
<p> شركة مزن الفضائية توفر لكم جميع اشتراكات بي ان سبورت </p>            <ul>
              <li style={{listStyle:'none'}}><span>العنوان:</span><br/> سيهات -السلام -شارع مكه- المملكةالعربية السعودية</li><br/>
              <li style={{listStyle:'none'}}><span>الهاتف:</span><br/> +966544294000</li><br/>
              <li style={{listStyle:'none'}}><span>البريد الالكتروني:</span><br/> mozon@gmail.com</li><br/>
            </ul>
          </div>
   
                <div >
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3571.376712190361!2d50.033775999999996!3d26.475813000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI4JzMyLjkiTiA1MMKwMDInMDEuNiJF!5e0!3m2!1sar!2ssa!4v1742411115837!5m2!1sar!2ssa"  width="100%" height="325px"  style={{border:'0', borderRadius: '23px', marginTop: '5rem'}} frameborder="0" allowfullscreen=""></iframe>
              </div>
    </div>
  );
};

export default Contact;