import React from "react";

const Voucher = () =>{
    return(
        <React.Fragment>
            <section className="banner">
                <div className=" h-[560px] bg-[url('./img/banner.png')] bg-cover bg-no-repeat bg-center"></div>
            </section>
            <section className="new-user-voucher">
                <div className=" h-[168px] bg-[url('./img/voucher-nguoi-moi.png')] bg-cover bg-no-repeat bg-center"></div>
                <div className=" h-[102px] bg-[url('./img/freeship.png')] bg-cover bg-no-repeat bg-center"></div>
                <div className="voucher flex flex-row items-center h-[200px] border-2 border-solid border-blue-500">
                    <div className="voucher-type basis-1/4 bg-blue-700 h-full text-center justify-center">
                        <p className=" m-[50px] py-5 text-2xl font-bold h-[100px] text-white w-[60%]">Miễn phí vận chuyển</p>
                    </div>
                    <div className="voucher-content basis-2/4 bg-white h-full">
                        <div className="m-6">
                            <p className=" text-xl">Đơn hàng đầu tiên</p>
                            <div className="border border-solid border-red-500 rounded-lg text-red-500 w-fit p-2 mt-8">Tối đa 40K</div>
                            <p className=" text-sm text-gray-500 mt-4">Có hiệu lực từ 01.02</p>
                        </div>
                    </div>
                    <div className="savebtns basis-1/4 bg-white h-full relative">
                        <button class="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded w-[80%] mt-[80px]">
                            Lưu
                        </button>
                        <a href="/#" className=" text-blue-500 bottom-4 right-[-8rem] absolute w-[90%]">Điều kiện</a>
                    </div>
                </div>
            </section>
            <section className="voucher-store">
                <div className="subheadline flex justify-center items-center my-10">
                    <div class="w-[300px] h-px mx-4 bg-gray-200"></div>
                    <div class="uppercase tracking-widest text-orange-500 font-bold text-xl text-center">
                        Kho voucher
                    </div>
                    <div class="w-[300px] h-px mx-4 bg-gray-200"></div>
                </div>
                <div className="voucher-list">
                    <div className="voucher flex flex-row items-center h-[200px] border-2 border-solid border-blue-500 mb-5">
                        <div className="voucher-type basis-1/4 bg-blue-700 h-full text-center justify-center">
                            <p className=" m-[50px] py-5 text-2xl font-bold h-[100px] text-white w-[60%]">Giảm 10%</p>
                        </div>
                        <div className="voucher-content basis-2/4 bg-white h-full">
                            <div className="m-6">
                                <p className=" text-xl">Đơn hàng trên 200k</p>
                                <div className="border border-solid border-red-500 rounded-lg text-red-500 w-fit p-2 mt-8">Tối đa 50K</div>
                                <p className=" text-sm text-gray-500 mt-4">Có hiệu lực từ 02.06</p>
                            </div>
                        </div>
                        <div className="savebtns basis-1/4 bg-white h-full relative">
                            <button class="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded w-[80%] mt-[80px]">
                                Lưu
                            </button>
                            <a href="/#" className=" text-blue-500 bottom-4 right-[-8rem] absolute w-[90%]">Điều kiện</a>
                        </div>
                    </div>
                    <div className="voucher flex flex-row items-center h-[200px] border-2 border-solid border-blue-500 mb-5">
                        <div className="voucher-type basis-1/4 bg-blue-700 h-full text-center justify-center">
                            <p className=" m-[50px] py-5 text-2xl font-bold h-[100px] text-white w-[60%]">Miễn phí vận chuyển</p>
                        </div>
                        <div className="voucher-content basis-2/4 bg-white h-full">
                            <div className="m-6">
                                <p className=" text-xl">Đơn hàng trên 400k</p>
                                <div className="border border-solid border-red-500 rounded-lg text-red-500 w-fit p-2 mt-8">Tối đa 40K</div>
                                <p className=" text-sm text-gray-500 mt-4">Có hiệu lực từ 01.01</p>
                            </div>
                        </div>
                        <div className="savebtns basis-1/4 bg-white h-full relative">
                            <button class="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded w-[80%] mt-[80px]">
                                Lưu
                            </button>
                            <a href="/#" className=" text-blue-500 bottom-4 right-[-8rem] absolute w-[90%]">Điều kiện</a>
                        </div>
                    </div>
                    <div className="voucher flex flex-row items-center h-[200px] border-2 border-solid border-blue-500 mb-5">
                        <div className="voucher-type basis-1/4 bg-blue-700 h-full text-center justify-center">
                            <p className=" m-[50px] py-5 text-2xl font-bold h-[100px] text-white w-[60%]">Giảm 30%</p>
                        </div>
                        <div className="voucher-content basis-2/4 bg-white h-full">
                            <div className="m-6">
                                <p className=" text-xl">Đơn hàng trên 7 món</p>
                                <div className="border border-solid border-red-500 rounded-lg text-red-500 w-fit p-2 mt-8">Tối đa 100K</div>
                                <p className=" text-sm text-gray-500 mt-4">Có hiệu lực từ 01.02</p>
                            </div>
                        </div>
                        <div className="savebtns basis-1/4 bg-white h-full relative">
                            <button class="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded w-[80%] mt-[80px]">
                                Lưu
                            </button>
                            <a href="/#" className=" text-blue-500 bottom-4 right-[-8rem] absolute w-[90%]">Điều kiện</a>
                        </div>
                    </div>
                    <div className="voucher flex flex-row items-center h-[200px] border-2 border-solid border-blue-500 mb-5">
                        <div className="voucher-type basis-1/4 bg-blue-700 h-full text-center justify-center">
                            <p className=" m-[50px] py-2 text-2xl font-bold h-[100px] text-white w-[60%]">Tặng hộp bút Thiên Long</p>
                        </div>
                        <div className="voucher-content basis-2/4 bg-white h-full">
                            <div className="mx-6 my-16">
                                <p className=" text-xl">Đơn hàng trên 800k</p>
                                <p className=" text-sm text-gray-500 mt-4">Có hiệu lực từ 01.02</p>
                            </div>
                        </div>
                        <div className="savebtns basis-1/4 bg-white h-full relative">
                            <button class="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded w-[80%] mt-[80px]">
                                Lưu
                            </button>
                            <a href="/#" className=" text-blue-500 bottom-4 right-[-8rem] absolute w-[90%]">Điều kiện</a>
                        </div>
                    </div>
                    <div className="voucher flex flex-row items-center h-[200px] border-2 border-solid border-blue-500 mb-5">
                        <div className="voucher-type basis-1/4 bg-blue-700 h-full text-center justify-center">
                            <p className=" m-[50px] py-5 text-2xl font-bold h-[100px] text-white w-[60%]">Giảm 10k</p>
                        </div>
                        <div className="voucher-content basis-2/4 bg-white h-full">
                            <div className="mx-6 my-16">
                                <p className=" text-xl">Tất cả hình thức</p>
                                <p className=" text-sm text-gray-500 mt-4">Có hiệu lực từ 01.02</p>
                            </div>
                        </div>
                        <div className="savebtns basis-1/4 bg-white h-full relative">
                            <button class="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded w-[80%] mt-[80px]">
                                Lưu
                            </button>
                            <a href="/#" className=" text-blue-500 bottom-4 right-[-8rem] absolute w-[90%]">Điều kiện</a>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Voucher;