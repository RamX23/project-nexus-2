import React from 'react'
import Card from './Card'
export default function cardlist() {
   const listof={
       width:'100%',
        display:'flex',
        gap:'4vh',
        wrap:'flexWrap',
        margin:'2vh',
        justifyContent: 'center',
        overflow:'none',
    }
  return (
    <>
    <div className="main">
    <h1 style={{textAlign:'center', color:'black', fontSize:'8vh'}}>Special Menu Offers</h1>
    <div style={listof}>
      <Card url="https://images01.military.com/sites/default/files/styles/full/public/2022-09/2022-Veterans-Day-restaurants-1800.jpg?itok=Xq_hw-29" title="VETERANS DAY SPECIAL" content="To honor our veterans, we are delighted to offer a special Veterans Day discount at our restru. Join us on and enjoy off on your entire meal."/>
      <Card url="https://www.gasofast.com/media/images/blogpost/image/avoid-gas-problems-after-bbq-time-1687352902.jpg" title="BARBEQUEE Night" content="Savor an unforgettable night! Join us for a Special Barbecue Night featuring succulent grills, vibrant flavors, and a lively atmosphere. Don't miss out!"/>
      <Card url="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/keep-an-attractive-and-creative-name-of-your-food-combo.jpg" title="DELICIOUS WEEKEND MENU" content="Elevate your weekend with our Delectable Weekend Menu. Indulge in exquisite flavors, for an unforgettable dining experience. "/>
      <Card url="https://www.debon.co.in/cdn/shop/files/WhatsApp_Image_2023-10-09_at_12.17.13_e42c7443.jpg?v=1696878535" title="SPECIAL RICH MEALS" content=" Savor our Special Rich and Juicy Meals, a burst of flavor awaits. Indulge in every bite for a delightful dining experience like no other. "/>
    </div>

    </div>
    </>
  )
}
