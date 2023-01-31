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
  desc: "Trong cuốn Thao túng tâm lý, tác giả Shannon Thomas giới thiệu đến độc giả những hiểu biết liên quan đến thao túng tâm lý và lạm dụng tiềm ẩn.",
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
  discount: 20,
  sold: 800,
  category: "Tâm lý",
  brand: "Sách tiếng Việt",
};

const Details = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const [width, setWidth] = useState(0)
  const [start, setStart] = useState(0)
  const [change, setChange] = useState(9)
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  // const [infoTitle, setInfoTitle] = useState(product.infos[0].title)

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
      <section className="product-details bg-[#fff] p-8 grid grid-cols-2 gap-8">
        <div className="product-page-img w-full border border-solid border-[#eee] p-1 overflow-hidden">
          <div className="big-images w-full h-[440px] overflow-hidden relative">
            {product.images.map((image, index) => (
              <div key={index} className="mySlides w-full h-full relative" 
              style={{display: (index + 1) === slideIndex ? "block" : "none "}}>
                <div className="numbertext text-[#f2f2f2] drop-shadow-[0_0_4px_blue] px-2 py-3 absolute top-0 left-0">
                  {index + 1} / {product.images.length}
                </div>
                <img src={image.src} alt="" className="w-full h-full inline-block object-cover"/>
              </div>
            ))}
            <a href="#!" className="prev cursor-pointer absolute top-1/2 translate-y-1/2 w-auto p-2 text-white font-bold text-xl rounded-[0_3px_3px_0] select-none hover:bg-zinc-700" onClick={()=> plusSlides(-1)}>
            &#10094;
            </a>
            <a href="#!" className="next cursor-pointer absolute top-1/2 translate-y-1/2 w-auto p-2 text-white font-bold text-xl rounded-[3px_0_0_3px] select-none hover:bg-zinc-700 right-0" onClick={()=> plusSlides(1)}>
              &#10095;
            </a>
          </div>      

          <div className="slider-img w-full h-12 overflow-x-scroll flex select-none mt-[5px]" draggable={true} ref={slideRef}
          onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
            {
                product.images.map((image, index) =>(
                  <div key={index} className={`slider-box w-12 h-full min-w-[50px] cursor-pointer overflow-hidden border border-solid border-[#ddd] p-[2px] opacity-60 hover:border-2 hover:border-slate-600 hover:opacity-100 ${index + 1 === slideIndex ? ' border-2 border-red-500 opacity-100' : ""}`}
                  onClick={() => setSlideIndex(index+1)}>
                    <img src={image.src} alt="" className="w-full h-full object-cover inline-block"/>
                  </div>
                ))
            }
          </div>
        </div>
        <div className="product-page-details">
          <strong className="text-[#333] text-xl font-bold capitalize">{product.name}</strong>

          <p className="product-category text-sm text-[#535353] font-normal capitalize">
            {product.brand} - {product.category}
          </p>

            <p className="product-price text-[#333] text-xl font-bold mt-3 flex justify-start items-center flex-wrap">
              {Math.round(product.price - product.price * product.discount / 100)}đ <del className="text-[#992153] font-normal text-sm ml-2">{product.price}đ</del>
            </p>

            <div className="product-page-offer inline-block text-[#fff] text-sm px-1 py-2 rounded-lg bg-[#ec1111] mt-2">
              <i className="fa-solid fa-tag mr-1"/> {product.discount}%
            </div>

            <p className="small-desc text-[#4b4b4b] text-sm bg-[#fcfcfc] font-normal p-2 border border-solid border-[#f7f7f7]">
              {product.desc}
            </p>

            <div className="product-options flex justify-start items-center mt-5">
              <span className="text-base text-[#1f1f1f] font-semibold mr-2">Màu bìa</span>
              {
                product.colors.map(color =>(
                  <div key={color}>
                    <button style={{background: color}} 
                    className={`w-6 h-6 border-2 border-solid border-[#ddd] outline-none rounded cursor-pointer overflow-hidden mr-1 ${color === selectedColor ? 'border-red-500' : ""}`}
                    onClick={() => setSelectedColor(color)}
                    />
                  </div>
                ))
              }
            </div>

            

            <div className="product-sold mt-4 flex items-center">
              <img src={SoldIcon} alt="SoldIcon" className="w-8" />
              <strong>{product.sold} <span className=" text-sm capitalize text-red-500 font-medium"> Sản phẩm đã bán.</span></strong>
            </div>

            <div className="cart-btns flex justify-start items-center mt-4">
              <a href="#!"  className="add-cart bg-[#333] text-[#fff] w-[150px] h-10 rounded-2xl flex justify-center items-center text-sm">Thêm vào giỏ hàng</a>
              <a href="#!"  className="buy-now bg-red-600 ml-3 text-[#fff] w-[150px] h-10 rounded-2xl flex justify-center items-center text-sm">Mua ngay</a>
            </div>

        </div>
      </section>
      <section className="product-all-info mt-5">
        <div className=" my-5 bg-white p-5">
          <p className="text-xl mb-3">Thông tin chi tiết</p>
          <table className=" border-collapse border-spacing-0 w-full">
            <thead>
              <tr>
                <th className="bg-[#EFEFEF] text-[#282626] text-left align-top">Công ty phát hành</th>
                <th className="bg-white text-[#242424] text-left align-middle">1980 Books</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-[#EFEFEF] text-[#4F4F4F] text-left align-top">Ngày xuất bản</td>
                <td className=" bg-[#FAFAFA] text-[#242424] text-left align-middle w-[70%]">2022-03-03 00:00:00</td>
              </tr>
              <tr>
                <td className="bg-[#EFEFEF] text-[#4F4F4F] text-left align-top">Kích thước</td>
                <td className="bg-white text-[#242424] text-left align-middle">13x20,5cm</td>
              </tr>
              <tr>
                <td className="bg-[#EFEFEF] text-[#4F4F4F] text-left align-top">Dịch Giả</td>
                <td className=" bg-[#FAFAFA] text-[#242424] text-left align-middle">Trương Tuấn</td>
              </tr>
              <tr>
                <td className="bg-[#EFEFEF] text-[#4F4F4F] text-left align-top">Loại bìa</td>
                <td className="bg-white text-[#242424] text-left align-middle">Bìa mềm</td>
              </tr>
              <tr>
                <td className="bg-[#EFEFEF] text-[#4F4F4F] text-left align-top">Số trang</td>
                <td className=" bg-[#FAFAFA] text-[#242424] text-left align-middle">328</td>
              </tr>
              <tr>
                <td className="bg-[#EFEFEF] text-[#4F4F4F] text-left align-top">Nhà xuất bản</td>
                <td className="bg-white text-[#242424] text-left align-middle">Nhà Xuất Bản Dân Trí</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-5">
          <p className="text-xl mb-3">Mô tả sản phẩm</p>
          <div className=" text-sm">
            Trong cuốn &rdquo;Thao túng tâm lý&rdquo;, tác giả Shannon Thomas giới thiệu đến độc giả những hiểu biết liên quan đến thao túng tâm lý và lạm dụng tiềm ẩn.<br/><br/>

            &rdquo;Thao túng tâm lý&rdquo; là một dạng của lạm dụng tâm lý. Cũng giống như lạm dụng tâm lý, thao túng tâm lý có thể xuất hiện ở bất kỳ môi trường nào, từ bất cứ đối tượng độc hại nào. Đó có thể là bố mẹ ruột, anh chị em ruột, người yêu, vợ hoặc chồng, sếp hay đồng nghiệp… của bạn. Với tính chất bí hiểm, âm thầm gây hại, thao túng, lạm dụng tâm lý làm tổn thương cảm xúc, lòng tự trọng, cuộc sống của mỗi nạn nhân. Những người từng bị lạm dụng tâm lý thường không thể miêu tả rõ ràng điều gì đã xảy ra với mình. Trong nhiều trường hợp, nạn nhân bị thao túng đến mức tự hỏi có phải họ là người có lỗi, thậm chí họ có phải là người độc hại trong mối quan hệ đó.<br/><br/>

            Hành vi của (những) kẻ lạm dụng giống như một trò chơi bí ẩn, tệ hại và lặp đi lặp lại, do một cá nhân hoặc một nhóm người thực hiện với nạn nhân. Những hành vi này được ngụy trang tài tình đến mức hành vi độc ác của họ diễn ra thường xuyên, nhưng không bị phát hiện.<br/><br/>

            Shannon Thomas giới thiệu những kiến thức cơ bản về đặc điểm, các dạng của lạm dụng tâm lý nói chung, thao túng tâm lý nói riêng, và cung cấp cho người đọc hành trình chữa lành gồm 6 giai đoạn:<br/><br/>
            <ul className=" list-disc ml-8">
              <li> Giai đoạn 1: Tuyệt vọng</li>
              <li> Giai đoạn 2: Nhận diện</li>
              <li> Giai đoạn 3: Thức tỉnh</li>
              <li> Giai đoạn 4: Những ranh giới</li>
              <li> Giai đoạn 5: Phục hồi</li>
              <li>Giai đoạn 6: Duy trì</li>
            </ul>
            <br/>
            Bằng những kiến thức chuyên sâu và sự thấu hiểu, tác giả sẽ giúp bạn từng bước vượt qua những rắc rối của thao túng tâm lý, lạm dụng tiểm ẩn để có cuộc sống ý nghĩa và lành mạnh hơn.<br/><br/>

            <strong>Thông tin tác giả:</strong><br/><br/>

            Shannon Thomas, là một nhà giám sát công tác xã hội y tế được cấp phép hành nghề, và là chủ phòng tư vấn/chuyên gia tư vấn tâm lý chính của phòng tư vấn Southlake Christian (SCC) ở Southlake, bang Texas.<br/><br/>

            SCC từng nhận giải thưởng &rdquo;Phòng thực hành tư vấn tâm lý tốt nhất&rdquo; năm 2016 của Living Magazine khu vực Hạt Northeast Tarrant tại Dallas-Fort Worth.<br/><br/>

            Thomas là Trợ giảng chuyên ngành và là thành viên Ủy ban tư vấn của Khoa Công tác xã hội &ndash; Trường Đại học Texas Christian.
            Cách tiếp cận khi tư vấn tâm lý của cô ấy xuất phát từ góc nhìn của một nhà tư vấn tâm lý được cấp phép hành nghề đồng thời từ góc nhìn của một người đi trước, một người sống sót sau khi bị lạm dụng tâm lý.
          </div>
        </div>
        
        <div className=" bg-white mt-5 p-5">
        <p className="text-xl mb-3">Sản Phẩm Tương Tự</p>
          <div className="grid grid-cols-5 gap-4 relative">
            <a href="#!" className="prev cursor-pointer absolute top-1/3 translate-y-1/2 w-auto p-2 text-zinc-600 font-bold text-xl rounded-[0_3px_3px_0] select-none hover:bg-zinc-900 hover:text-white">
              &#10094;
            </a>
            <a href="#!" className="next cursor-pointer absolute top-1/3 translate-y-1/2 w-auto p-2 text-zinc-600 font-bold text-xl rounded-[3px_0_0_3px] select-none hover:bg-zinc-900 hover:text-white right-0">
              &#10095;
            </a>
             <div className="product-card rounded-lg p-2 hover:shadow-xl hover:opacity-100 hover:ease-in-out">
                <a href="/#" className="">
                  <div className="h-[200px] bg-[url('./images/product-img/SoiVaCuu.jpg')] bg-cover bg-no-repeat bg-center">
                  </div>
                  <div className=" text-left my-2">
                    <div>
                      <span className=" text-base">99.000đ</span>
                    </div>
                    <div className=" text-xs h-10">Không phải sói nhưng cũng đừng là cừu</div>
                    <div className=" text-gray-500 text-xs">Đã bán 1000+</div>
                  </div>
                </a>
              </div>
              <div className="product-card rounded-lg p-2 hover:shadow-xl hover:opacity-100 hover:ease-in-out">
              <a href="/#" className="">
                  <div className="h-[200px] bg-[url('./images/product-img/MoiQuanHe.png')] bg-cover bg-no-repeat bg-center">
                  </div>
                  <div className=" text-left my-2">
                    <div>
                      <span className="text-base text-red-500">56.000đ </span><span className="text-xs text-red-500">-24%</span>
                    </div>
                    <div className=" text-xs h-10">Tâm lý học mối quan hệ</div>
                    <div className=" text-gray-500 text-xs">Đã bán 890</div>
                  </div>
                </a>
              </div>
              <div className="product-card rounded-lg p-2 hover:shadow-xl hover:opacity-100 hover:ease-in-out">
              <a href="/#" className="">
                  <div className="h-[200px] bg-[url('./images/product-img/NgheThuatPhanBien.jpg')] bg-cover bg-no-repeat bg-center">
                  </div>
                  <div className=" text-left my-2">
                    <div>
                      <span className="text-base text-red-500">94.000đ </span><span className="text-xs text-red-500">-30%</span>
                    </div>
                    <div className=" text-xs h-10">Nghệ thuật tư duy phản biện</div>
                    <div className=" text-gray-500 text-xs">Đã bán 1000+</div>
                  </div>
                </a>
              </div>
              <div className="product-card rounded-lg p-2 hover:shadow-xl hover:opacity-100 hover:ease-in-out">
              <a href="/#" className="">
                  <div className="h-[200px] bg-[url('./images/product-img/QuanLyThoiGian.jpg')] bg-cover bg-no-repeat bg-center">
                  </div>
                  <div className=" text-left my-2">
                    <div>
                      <span className="text-base text-red-500">70.000đ </span><span className="text-xs text-red-500">-20%</span>
                    </div>
                    <div className=" text-xs h-10">Sổ tay quản lý thời gian</div>
                    <div className=" text-gray-500 text-xs">Đã bán 1000+</div>
                  </div>
                </a>
              </div>
              <div className="product-card rounded-lg p-2 hover:shadow-xl hover:opacity-100 hover:ease-in-out">
              <a href="/#" className="">
                  <div className="h-[200px] bg-[url('./images/product-img/RenLuyenPhanBien.jpg')] bg-cover bg-no-repeat bg-center">
                  </div>
                  <div className=" text-left my-2">
                    <div>
                      <span className="text-base text-red-500">30.000đ </span><span className="text-xs text-red-500">-73%</span>
                    </div>
                    <div className=" text-xs h-10">Rèn luyện tư duy phản biện</div>
                    <div className=" text-gray-500 text-xs">Đã bán 1000+</div>
                  </div>
                </a>
              </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Details;
