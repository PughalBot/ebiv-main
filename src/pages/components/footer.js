import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-[#A215A5] body-font">
  <div className="container bg-[url(https://cdn.discordapp.com/attachments/981618787491127306/1088401159821213717/bg.png)] bg-fill px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 cursor-pointer flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 ">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
         <Image src="/logo.png" width={50} height={50}/>
        <span className="ml-3 text-xl">Ebiv Clothing
        <p className="font-medium text-xs text-gray">An "USELESS" Product</p></span>
      </a>
      <p className="mt-2 font-medium text-sm text-[#A215A5]">Unleash Your Unique Style Today</p>
    </div>
    <div className="flex-grow flex cursor-pointer flex-wrap md:pr-20 ml-10 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium cursor-none text-[#56005F] tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/contact" className="text-[#A215A5] hover:text-[#FC77FB]">Contact Us</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Track Order</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Return Order</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Cancel Return</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#56005F] cursor-none tracking-widest text-sm mb-3">COMPANY</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">About Us</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Terms and Condition</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Privacy Policy</Link>
          </li>
          <li>
          <Link href="#"  className="text-[#A215A5] hover:text-[#FC77FB]">Jobs at Ebiv</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#56005F] cursor-none tracking-widest text-sm mb-3">CONNECT WITH US</h2>
        <nav className="list-none mb-10 flex flex-col items-center justify-center
                            md:items-start">
              <li>
                <div className='flex items-center justify-start'>
                  <Link href="#"className="text-[#A215A5] hover:text-[#FC77FB]">Facebook</Link>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <Link href="#"className="text-[#A215A5] hover:text-[#FC77FB]">Instagram</Link>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Mail to support</Link>
                </div>
              </li>
              {/* <li>
                <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Fourth Link</Link>
              </li> */}
            </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#56005F] cursor-none tracking-widest text-sm mb-3">ABOUT USELESS</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Website</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Contact</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Blog</Link>
          </li>
          <li>
            <Link href="#" className="text-[#A215A5] hover:text-[#FC77FB]">Jobs at Useless</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-[#FFEFFF]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-[#A215A5] text-sm text-center font-medium sm:text-left">Copyright © 2023 EBIV Clothing, All Rights Reserved.
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href="#" className="text-[#A215A5]">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link href="#" className="ml-3 text-[#A215A5]">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link href="#" className="ml-3 text-[#A215A5]">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link href="#" className="ml-3 text-[#A215A5]">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
  )
}
