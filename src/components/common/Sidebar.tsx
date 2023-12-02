import { FC } from "react";
import CollapseSidebar from "./CollapseSidebar";
import { sidebarOptions } from "src/utils/common";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="sidebar-container">
      {sidebarOptions.map((option, index) => (
        <CollapseSidebar key={index} option={option} />
      ))}
    </div>
  );
};

export default Sidebar;
