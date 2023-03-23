import Image from "next/image"
import Link from "next/link"


export default function NavBar() {
  return (
    <>
    <div className="flex justify-center">
    <header className=" shadow-lg bg-[url(https://cdn.discordapp.com/attachments/981618787491127306/1088401159821213717/bg.png)] bg-blend-normal bg-blur-lg mt-2 flex text-white font-algeria px-8 fixed z-20 w-11/12 rounded-full ">
        <div className="flex justify-center items-center w-full">
        <Link href="/">
          <Image src="/logo.png" width={50} height={50}/>
        </Link>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="md:mr-auto md:ml-24 md:py-1 text-sm text-[#A215A5] flex flex-wrap items-center justify-center font-bold">
              <Link href="/productlist" className="mr-8">MEN</Link>
              <Link href="/productlist" className="mr-8">WOMEN</Link>
              <Link href="/productlist" className="mr-8">KIDS</Link>
              <Link href="/productlist" className="mr-8">CATEGORIES</Link>
            </nav>
        </div>
        <div className="flex flex-row-reverse">
          <Link href="/login">
              <Image src="/user.png" width={30} height={30} className="ml-10 cursor-pointer"/>
            </Link>
            <Link href="/login">
              <Image src="/search-icon.png" width={30} height={30} className="ml-10 cursor-pointer"/>
            </Link>
        </div>
        </div>
    </header>
    </div>
    </>
  )
}