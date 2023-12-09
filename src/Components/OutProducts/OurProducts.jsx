import * as React from "react";
import './OurProducts.css';
import { ItemCard } from "../ItemCard/ItemCard";


export const OurProducts = () => {
  const [products, setProducts] = React.useState([]);
  console.log(products)
 

  const all_tabs = document.querySelectorAll('.tab_btn');
  const all_contents = document.querySelectorAll('.content');

  all_tabs.forEach((tab, index) =>{
    tab.addEventListener('click', () =>{
      all_tabs.forEach((tab) =>{tab.classList.remove('active')});
      tab.classList.add('active');

      all_contents.forEach((content) =>{content?.classList.remove('content-active')});
      all_contents[index]?.classList.add('content-active');
    })
  })

  React.useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data.products));
  },[])

  return (
    <div className="our-products">
      <h1>All Products</h1>
      <p>Supply best performance Medical equipments world wide.</p>

      <div className="tabs-container">
        <div className="tabs_box">
          <button className="tab_btn active">Equipment</button>
          <button className="tab_btn">Laboratory</button>
          <button className="tab_btn">Surgical</button>
          <button className="tab_btn">Kit</button>
        </div>

        <div className="content_box">
          <div className="content">
            <h2>Equipments</h2>
          
          
            <div className="products_container">
              {
                products.map((item) => <div
                key={item._id}
                >
                  <img src={item.thumbnail} alt="" />
                  <p><span>$1280</span>| $1170</p>
                  <h3>{item.title}</h3>
                </div>)
              }
            </div>
          

          </div>
          
          
        </div>
      </div>
    </div>
  );
};
