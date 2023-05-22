import React from "react";
import MenuItem from "./MenuItem";

import "./header.css";

const MenuBar = () => {
  return (
    <div className={"menuBar"}>
      <MenuItem label={"Home"} to={"/"} />
      {/* <MenuItem label={'About Me'} to={'/about_me'}/> */}
      <MenuItem label={"Work Experience"} to={"/work_experience"} />
      <MenuItem label={"Projects"} to={"projects"} />
      <MenuItem label={"UI Design"} to={"ui_design"} />
      <MenuItem label={"3D Modeling"} to={"3d_modeling"} />
    </div>
  );
};

export default MenuBar;
