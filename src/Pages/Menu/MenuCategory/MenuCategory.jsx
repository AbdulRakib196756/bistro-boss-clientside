import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import Menuitem from "../../shared/Menuitem/Menuitem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="pt-8">
      {title && img && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>

      <Link className="text-center" to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4  ">
          OrderNow
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
