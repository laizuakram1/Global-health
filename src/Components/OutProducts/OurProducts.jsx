import * as React from "react";
import './OurProducts.css';
import { ItemCard } from "../ItemCard/ItemCard";
import productImg from '../../assets/images/analyzer.jpg'
import products from '../../assets/products.json';



export const OurProducts = () => {
  // const [products, setProducts] = React.useState([]);
  let allTabs = document.querySelectorAll('.tab_btn');
  let allContents = document.querySelectorAll('.content');


        allTabs.forEach((tab, index)=>{
            tab.addEventListener('click',() =>{
                allTabs.forEach((tab) =>{tab.classList.remove('active')});
                tab.classList.add('active');

                allContents.forEach((content) =>{content.classList.remove('active')});
                allContents[index].classList.add('active');
            })

        })

  // React.useEffect(()=>{
  //   fetch('https://dummyjson.com/products')
  //   .then(res => res.json())
  //   .then(data => setProducts(data.products));
  // },[])

  return (
    <div className="our-products">
      <h1>All Products</h1>
    
    <div className="products_container">
      <div className="tabs">
        <button className="tab_btn active">All</button>
        <button className="tab_btn">Equipments</button>
        <button className="tab_btn">Reagents</button>
        <button className="tab_btn">Surgical</button>
        <button className="tab_btn">Kit</button>
      </div>

      <div className="contents_box">
        <div className="content active">
          <h3>All products</h3>

         
          <ItemCard products={products}/>
        </div>

        <div className="content">
          <h3>Equipments</h3>
          <div className="img_container">
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          </div>
        </div>

        <div className="content">
          <h3>Reagent</h3>
          <div className="img_container">
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          </div>
        </div>

        <div className="content">
          <h3>Surgical</h3>
          <div className="img_container">
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          </div>
        </div>

        <div className="content">
          <h3>Kit</h3>
          <div className="img_container">
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          <img src={productImg} alt="product img" />
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};
