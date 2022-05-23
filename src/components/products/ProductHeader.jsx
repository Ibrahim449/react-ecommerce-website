import React, { useState } from 'react'
import '../../App.css';
import '../products/productHeader.css'
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt, FaSearch } from "react-icons/fa";
import { productsData } from './productsData';
import { Outlet, Link } from "react-router-dom";
// import ProductsDetails from './ProductsDetails';

export default function ProductHeader() {
  const [data, setData] = useState(productsData);
  const [isShown, setIsShown] = useState(true);
  const [filterProducts, setFilterProducts] = useState("");
  const [showIcon, setShowIcon] = useState(-1);
  const [isActive, setIsActive] = useState(1);
  const [order, setOrder] = useState("asc")

  const handleChange = (e) => {
    dropDownData(e.target.value);
  }
  
  // console.log(data);

  const dropDownData = (sortVal) => {
    console.log(sortVal);

    if(sortVal === "priceLowest") {
      if(order === "asc") {
        const sorted = data.sort((a, b) => 
        a.price > b.price ? 1 : -1
      )
      setData(sorted);
      setOrder("dsc");
      }
    }

    if(sortVal === "priceHighest") {
      if(order === "dsc") {
        const sorted = data.sort((a, b) => 
        a.price < b.price ? 1 : -1
      )
      // console.log(sorted);
      setData(sorted);
      setOrder("asc");
      }
    }

    if(sortVal === "name-a") {
        if(order === "asc") {
          const sorted = data.sort((a, b) => 
          a.title > b.title ? 1 : -1
        )
        setData(sorted);
        setOrder('dsc');
        }
    }

    if(sortVal === "name-z") {
        if(order === "dsc") {
          const sorted = data.sort((a, b) => 
          a.title < b.title ? 1 : -1
        )
        setData(sorted);
        setOrder('asc');
        }
    }
  }

  // const handleLink = (id) => {
  //   const filterProductsId = data.filter((item) => item.id === id);
  //   // console.log(filterProductsId);
  //   <ProductsDetails productId={filterProductsId} />
  // }

  const filterData = (category, index) => {
    
    if(category === "all") {
      setIsActive(index)
      setData(productsData);
      return
    }
    
    if(category === "office") {
      setIsActive(index);
    }

    if(category === "living room") {
      setIsActive(index)
    }

    if(category === "kitchen") {
      setIsActive(index);
    }

    if(category === "bedroom") {
      setIsActive(index);
    }

    if(category === "dining") {
      setIsActive(index);
    }

    if(category === "kids") {
      setIsActive(index);
      // console.log(index);
    }

    const newItems = productsData.filter((item) => item.category === category);
    setData(newItems);
  }

  const handleClear = () => {
    setData(productsData);
  }

  const companyProducts = (e) => {
    const companyName = e.target.value;

    if(companyName === "all") {
      setData(productsData);
      return
    }

    const newProducts = productsData.filter((item) => item.company === companyName);
    setData(newProducts);    
  }

  return (
    <div>
      <section className="products">
        <div className="productCenterShow">
          <div className="prodeuctLeftSide">
            <form className="productForm">
              <div className="formControl">
                <input type="text" name="text"
                  placeholder='search'
                  className='searchInput'
                  onChange={(e) => setFilterProducts(e.target.value)}
                  />
              </div>

              <div className="formControl">
                <h5>category</h5>
                <div>
                  <button type='button' name='category' onClick={() => filterData('all', 1)} 
                  className={isActive === 1 ? "active" : "null"}>All</button>
                  <button type='button' name='category'
                  onClick={() => filterData('office', 2)} 
                  className={isActive === 2 ? "active" : "null"}>office</button>
                  <button type='button' name='category' onClick={() => 
                  filterData('living room', 3)} 
                  className={isActive === 3 ? "active" : "null"}>living room</button>
                  <button type='button' name='category' onClick={() => 
                  filterData('kitchen', 4)}
                  className={isActive === 4 ? "active" : "null"}>kitchen</button>
                  <button type='button' name='category' onClick={() => 
                  filterData('bedroom', 5)} 
                  className={isActive === 5 ? "active" : "null"}>bedroom</button>
                  <button type='button' name='category' onClick={() => 
                  filterData('dining', 6)} 
                  className={isActive === 6 ? "active" : "null"}>dining</button>
                  <button type='button' name='category' onClick={() => 
                  filterData('kids', 7)} 
                  className={isActive === 7 ? "active" : "null"}>kids</button>
                </div>
              </div>

              <div className="formControl">
                <h5>company</h5>
                <select name="company" className='company' onChange={companyProducts}>
                  <option value="all">all</option>
                  <option value="marcos">marcos</option>
                  <option value="liddy">liddy</option>
                  <option value="ikea">ikea</option>
                  <option value="caressa">caressa</option>
                </select>
              </div>

              <div className="formControl">
                <h5>colors</h5>
                <div className="colors">
                  <button type='button' name='color' className="allBtn active1">all</button>
                  <button type='button' name='color' className='colorBtn' style={{ backgroundColor: "rgb(255, 0, 0)" }}></button>
                  <button type='button' name='color' className='colorBtn' style={{ backgroundColor: "rgb(0, 255, 0)" }}></button>
                  <button type='button' name='color' className='colorBtn' style={{ backgroundColor: "rgb(0, 0, 255)" }}></button>
                  <button type='button' name='color' className='colorBtn' style={{ backgroundColor: "rgb(0, 0, 0)" }}></button>
                  <button type='button' name='color' className='colorBtn' style={{ backgroundColor: "rgb(255, 185, 0)" }}></button>
                </div>
              </div>

              <div className="formControl shipping">
                <label htmlFor="shipping">Free shipping</label>
                <input type="checkbox" name='shipping' />
              </div> 
              <button type='button' onClick={handleClear} className='clearBtn'>clear Filter</button>
             
            </form>
          </div>

          {/* product rightside starts from here */}
          <div className="rightProduct">
            <div className="productRightSide">

              <div className="btnContainer">
                <button className={isShown ? "active" : "null"} onClick={() => setIsShown(!isShown)}>
                  <BsFillGridFill />
                </button>

                <button className={isShown ? "null" : "active"} onClick={() => setIsShown(!isShown)}>
                  <FaListAlt />
                </button>
              </div>

              <p>{data.length} products found</p>

              <hr />
              <form>
                <label htmlFor="sort">sort by</label>
                <select name="sort" id="sort" className='sortInput' onChange={handleChange}>
                  <option value="priceLowest">price (lowest)</option>
                  <option value="priceHighest">price (highest)</option>
                  <option value="name-a">name (a - z)</option>
                  <option value="name-z">name (z - a)</option>
                </select>
              </form>
            </div>

              { isShown ? <>
                <section className="productImage">
                <div className="productContainer">
                  {
                    data.filter((item) => 
                      item.title.toLowerCase().includes(filterProducts)
                    ).map((item, index) => {
                      return <div key={item.id}>
                        <article className="mainContent contentBar">
                    <div className="cardImage" onMouseEnter={() => setShowIcon(index)} 
                      onMouseLeave={() => setShowIcon(-1)}>
                      <img src={item.img} alt="modern poster"/>
                      {
                        showIcon === index ? <Link to={`/productsdetails/${item.id}`} className='link'>
                        <FaSearch />
                      </Link> : ""
                      }
                    </div>
                    <Outlet />
                    <footer className="foot">
                      <h5>{item.title}</h5>
                      <p>$ {item.price}</p>
                    </footer>
                  </article>
                      </div>
                    })
                  }
                  </div>
                </section> </>

                :
  
                <section className="productImage1">
                <div className="productContainer1">
                    {
                      data.filter((item) => 
                      item.title.toLowerCase().includes(filterProducts))
                      .map((item) => {
                        return <div key={item.id}>
                      <article className="mainImage1">
                        <img src={item.img} alt="modern poster" />
                        <div className='media'>
                          <h4>{item.title}</h4>
                          <h5 className="price">$ {item.price}</h5>
                          <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic ...</p>
                          <Link to={`/productsdetails/${item.id}`} className="btn">Details</Link>
                        </div>
                    </article>
                           </div>
                      })
                    }
                  </div>
                </section>
              }

          </div>
        </div>
      </section>
    </div>
  )
}
