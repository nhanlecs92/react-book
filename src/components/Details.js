import React, {useState, useEffect, useRef} from "react";
import "../styles/Details.css";
import SoldIcon from "../images/sold.png";

const product = {
  // Product Data
  id: 1,
  name: "Thao túng tâm lý",
  slug: "sach-tieng-viet",
  photo:
    "https://salt.tikicdn.com/cache/w1200/media/catalog/producttmp/80/19/44/8f85b0f87f166b93f8b692034cc15f50.jpg",
  price: 169000,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!",
  images: [
    {
      src: "https://salt.tikicdn.com/cache/w1200/media/catalog/producttmp/80/19/44/8f85b0f87f166b93f8b692034cc15f50.jpg",
    },
    {
      src: "https://salt.tikicdn.com/cache/w1200/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg",
    },
    {
      src: "https://salt.tikicdn.com/cache/w1200/ts/product/f8/19/be/225aff44a56972bb4f90ce31a44c6ca5.jpg",
    },
    {
      src: "https://salt.tikicdn.com/cache/w1200/ts/product/30/1f/7d/fc49905b75d5a1e5b8d106dbeea45643.jpg",
    },
    {
      src: "https://salt.tikicdn.com/cache/w1200/ts/product/3a/7d/cb/40914dff2c00817fffc74c167b988de8.jpg",
    },
  ],
  colors: ["#2287fa", "#f71b1b", "green"],
  infos: [
    {
      title: "Mô tả sản phẩm",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni illum, sint explicabo esse temporibus! Dicta, voluptatum dolorem numquam deserunt, doloribus, voluptatem consequuntur praesentium deleniti nulla in repellendus eum vero.",
    },
    {
      title: "Nhà xuất bản",
      content: "NXB Kim Đồng",
    },
    {
      title: "Thể loại",
      content: "Tâm lý",
    },
    {
      title: "Thông tin chi tiết",
      content: "Kích thước: 13x20.5cm",
    },
  ],
  discount: 20,
  sold: 52,
  category: "Tâm lý",
  brand: "Sách tiếng Việt",
};

const Details = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const [width, setWidth] = useState(0)
  const [start, setStart] = useState(0)
  const [change, setChange] = useState(9)
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const [infoTitle, setInfoTitle] = useState(product.infos[0].title)

  const slideRef = useRef();

  useEffect(()=>{
    if(!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width)
  }, [])

  function plusSlides(n){
    setSlideIndex(prev => prev + n);
    slideShow(slideIndex + n);
  }

  function slideShow(n){
    if(n > product.images.length) { setSlideIndex(1)}
    if(n < 1) { setSlideIndex(product.images.length)}
  }


  // Drag
  function dragStart(e){
    setStart(e.clientX)
  }

  function dragOver(e){
    let touch = e.clientX;
    setChange(start - touch);
  }

  function dragEnd(e){
    if(change > 0){
      slideRef.current.scrollLeft += width
    }else{
      slideRef.current.scrollLeft -= width
    }
  }

  useEffect(() => {
    if(!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0 ;
  }, [width, slideIndex]);


  return (
    <React.Fragment>
      <section className="product-details">
        <div className="product-page-img">
          <div className="big-images">
            {product.images.map((image, index) => (
              <div key={index} className="mySlides" 
              style={{display: (index + 1) === slideIndex ? "block" : "none "}}>
                <div className="numbertext">
                  {index + 1} / {product.images.length}
                </div>
                <img src={image.src} alt="" />
              </div>
            ))}
            <a href="#!" className="prev" onClick={()=> plusSlides(-1)}>
            &#10094;
            </a>
            <a href="#!" className="next" onClick={()=> plusSlides(1)}>
              &#10095;
            </a>
          </div>      

          <div className="slider-img" draggable={true} ref={slideRef}
          onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
            {
                product.images.map((image, index) =>(
                  <div key={index} className={`slider-box ${index + 1 === slideIndex ? 'active' : ""}`}
                  onClick={() => setSlideIndex(index+1)}>
                    <img src={image.src} alt=""/>
                  </div>
                ))
            }
          </div>
        </div>
        <div className="product-page-details">
          <strong>{product.name}</strong>

          <p className="product-category">
            {product.brand} - {product.category}
          </p>

            <p className="product-price">
              {Math.round(product.price - product.price * product.discount / 100)}đ <del>{product.price}đ</del>
            </p>

            <div className="product-page-offer">
              <i className="fa-solid fa-tag"/> {product.discount}%
            </div>

            <p className="small-desc">
              {product.desc}
            </p>

            <div className="product-options">
              <span>Colors</span>
              {
                product.colors.map(color =>(
                  <div key={color}>
                    <button style={{background: color}} 
                    className={color === selectedColor ? 'active' : ""}
                    onClick={() => setSelectedColor(color)}
                    />
                  </div>
                ))
              }
            </div>

            

            <div className="product-sold">
              <img src={SoldIcon} alt="SoldIcon" />
              <strong>{product.sold} <span> Sản phẩm đã bán.</span></strong>
            </div>

            <div className="cart-btns">
              <a href="#!"  className="add-cart">Thêm vào giỏ hàng</a>
              <a href="#!"  className="add-cart buy-now">Mua ngay</a>
            </div>

        </div>
      </section>
      <section className="product-all-info">
        <ul className='product-info-menu'>
          {
            product.infos.map(info=>(
              <li key={info.title} onClick={() => setInfoTitle(info.title)}
              className={`p-info-list ${info.title === infoTitle ? 'active':''}`}>
                {info.title}
              </li>
            ))
          }          
        </ul>
        {
          product.infos.map(info => (
            <div key={info.title} 
            className={`info-container ${info.title === infoTitle ? 'active':''}`}>
                {info.content}              
            </div>
          ))
        }
      </section>
    </React.Fragment>
  );
};

export default Details;
