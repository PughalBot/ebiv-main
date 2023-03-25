export default function Categories() {
  return (
    <div>
        <h1 className='font-bangers flex justify-center text-[#A215A5] font-bold text-3xl mt-10 mb-6 px-10'>C O L L E C T I O N S</h1>
        <section className="text-gray-600 body-font">
            <div className="container  mb-24 px-5 mx-auto flex flex-wrap">
                <div className="lg:w-2/3 mx-auto">
                <div className="flex flex-wrap w-full bg-white py-32 px-10 relative mb-4">
                    <img alt="gallery" className="w-full object-cover h-full object-center rounded-lg block hover:opacity-75 absolute inset-0" src="https://cdn.discordapp.com/attachments/981618787491127306/1089202840100147311/1124.png"/>
                    <div className="text-center opacity-0 hover:opacity-100 relative z-10 w-full cursor-pointer">
                    <h2 className="text-2xl text-white font-medium title-font mb-2">SweatShirts</h2>
                    <p className="leading-relaxed text-off-white">A wide range Collection of Designer Premium Sweatshirts.</p>
                    <a className="mt-3 text-[#A215A5] inline-flex items-center">Go to Collection
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-white sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img alt="gallery" className="w-full object-cover rounded-lg h-full object-center block hover:opacity-75 absolute inset-0" src="https://cdn.discordapp.com/attachments/981618787491127306/1089187255039565924/22.png"/>
                        <div className="text-center opacity-0 hover:opacity-100 relative z-10 w-full cursor-pointer">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Oversized T-shirts</h2>
                        <p className="leading-relaxed">A wide Collection of Premium Oversized T-shirts</p>
                        <a className="mt-3 text-[#A215A5] inline-flex items-center">Go to Collection
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-white sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img alt="gallery" className="w-full  object-cover rounded-lg h-full object-center block hover:opacity-75 absolute inset-0" src="https://cdn.discordapp.com/attachments/981618787491127306/1089189442138423316/33.png"/>
                        <div className="text-center opacity-0 hover:opacity-100 relative z-10 w-full cursor-pointer">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Oversized T-shirts</h2>
                        <p className="leading-relaxed">A wide Collection of Premium Oversized T-shirts</p>
                        <a className="mt-3 text-[#A215A5] inline-flex items-center">Go to Collection
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
