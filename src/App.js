import {Navbar, Hero, Footer} from "./components"

export default function App()
{
  // const name = process.env.NAVBAR_NAME
  return (
    <>
      <Navbar style={{backgroundColor: "darkgray", color: "white"}} name="Suyash" width={100} height={10}/>
      <Hero hero="Suyash"/>
      <Footer footer="Suyash"/>
    </>
  )
}