import NavBar from "./nav"
import Footer from "./footer"

export default function ClientLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}