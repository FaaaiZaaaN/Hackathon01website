import Home from "../app/Home/page";
import About from "./About/page";
import Cart from "./Cart/page";
import Contact from "./Contact/page";
import Product from "./Product/page";
import Shop from "./Shop/page";



export default function HomeComponent() {
  return (
    <div className="bg-blue-500">
      <Home />
      {/* <Contact />
      <About />
      <Cart />
      <Product />
      <Shop /> */}

    </div>
  );
}
