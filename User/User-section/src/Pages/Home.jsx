import NavBar from "../Components/NavBar";
import Category from "../Components/Category";
import ShoesCard from "../Components/ShoesCard";
import Slider from "../Components/Slider.jsx";
import Login from "./Login";


import Detail from "./Detail";

import { detailpic, productCart } from "../Constants";

const Home = () => {
  return (
    <body>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main className="flex flex-col flex-1 pt-10">
        <Slider images={detailpic} />
        <div className="flex">
          <aside>
            <Category />
          </aside>
          <section className="flex flex-wrap pl-14 gap-10">
            <ShoesCard shoesData={productCart} />
          </section>
        </div>
        <Slider images={detailpic} />
        <section className="flex flex-wrap pl-14 gap-10">
          <ShoesCard shoesData={productCart} />
        </section>
      </main>


    </body>
  );
};

export default Home;
