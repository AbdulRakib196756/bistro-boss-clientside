import { Helmet } from "react-helmet-async";

const Helmetheaders = ({ subtitle }) => {
  return (
    <Helmet>
      <title>Bistro-Boss|{subtitle}</title>
    </Helmet>
  );
};

export default Helmetheaders;
