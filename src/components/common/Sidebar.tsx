import React, { FC } from "react";
import { Arrow } from "@icons/Arrow";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="sidebar-container">
      <div className="collapse-container">
        <div className="title">
          <p>BRAND</p>
          <Arrow />
        </div>
        <div className="checkbox-options">
          <input type="checkbox" name="mango" id="mango" />
          <label htmlFor="mango">Mango</label>
        </div>
        <div className="checkbox-options">
          <input type="checkbox" name="hm" id="hm" />
          <label htmlFor="hm">H&M</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
