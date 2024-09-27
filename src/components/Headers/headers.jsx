const Headers = ({ title, subtitle }) => {
  return (
    <div className="mx-auto text-center md:w-3/12 my-8">
      <p className="text-yellow-600 mb-4">---{subtitle}---</p>
      <h3 className="uppercase text-4xl border-y-4 py-4 ">{title}</h3>
    </div>
  );
};

export default Headers;
