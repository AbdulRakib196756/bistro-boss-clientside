import { useState } from "react";
import coverimg from "../../../assets/home/chef-service.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import Helmetheaders from "../../shared/Helmet/Helmet";
const OrderFood = () => {
  const catagories = ["OFFERD", "SOUP", "SALAD", "PIZZA", "DRINKS", "DESSERT"];
  const { category } = useParams();
  const initialindex = catagories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialindex);
  const [menu] = UseMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <Helmetheaders subtitle={"Order"}></Helmetheaders>
      <Cover img={coverimg} title={"Order Food"}></Cover>
      <div className="text-center mt-5">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>OFFERD</Tab>
            <Tab>SOUP</Tab>
            <Tab>SALAD</Tab>
            <Tab>DESSART</Tab>
            <Tab>PIZZA</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={offered}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
