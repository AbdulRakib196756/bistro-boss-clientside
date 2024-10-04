import Cover from "../../shared/Cover/Cover";
import Helmetheaders from "../../shared/Helmet/Helmet";
import img from "../../../assets/menu/banner3.jpg";
import Headers from "../../../components/Headers/headers";
import UseMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import soupimg from "../../../assets/menu/soup-bg.jpg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import dessertimg from "../../../assets/menu/dessert-bg.jpeg";
const Menu = () => {
  const [menu] = UseMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");

  return (
    <>
      <Helmetheaders subtitle={"Menu"}></Helmetheaders>
      <Cover img={img} title="Our Menu"></Cover>
      <Headers title={"Todays Offer"} subtitle={"Don't miss"}></Headers>
      <MenuCategory items={offered} title={"OFFERD"}></MenuCategory>
      <MenuCategory items={soup} img={soupimg} title={"SOUP"}></MenuCategory>
      <MenuCategory items={salad} img={saladimg} title={"SALAD"}></MenuCategory>
      <MenuCategory items={pizza} img={pizzaimg} title={"PIZZA"}></MenuCategory>
      <MenuCategory
        items={dessert}
        img={dessertimg}
        title={"DESSERT"}
      ></MenuCategory>
    </>
  );
};

export default Menu;
