import { BiHomeAlt } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { GrCompliance } from "react-icons/gr";
import { TbBrandProducthunt } from "react-icons/tb";
import { Link } from "react-router-dom"; 

export const items = [
  {
    label: "Home",
    key: "home",
    icon: (
      <Link to="/">
        <BiHomeAlt />
      </Link>
    ),
  },
  {
    label: "All Companies",
    key: "All",
    icon: (
      <Link to="/allcomp">
        <GrCompliance />
      </Link>
    ),
  },
  {
    label: "Products",
    key: "Product",
    icon: (
      <Link to="/products">
        <TbBrandProducthunt />
      </Link>
    ),
  },
  {
    label: "About Us",
    key: "About",
    icon: (
      <Link to="/about">
        <FcAbout />
      </Link>
    ),
  },
];
