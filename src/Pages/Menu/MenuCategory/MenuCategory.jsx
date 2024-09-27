import Cover from "../../shared/Cover/Cover";
import Menuitem from "../../shared/Menuitem/Menuitem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4  ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
