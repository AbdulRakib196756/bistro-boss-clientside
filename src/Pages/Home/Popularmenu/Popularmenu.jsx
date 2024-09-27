import Headers from "../../../components/Headers/headers";
import Menuitem from "../../shared/Menuitem/Menuitem";
import UseMenu from "../../../Hooks/useMenu";

const Popularmenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12  ">
      <Headers title="From Our Menu" subtitle="Popular Items"></Headers>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4  ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Popularmenu;
