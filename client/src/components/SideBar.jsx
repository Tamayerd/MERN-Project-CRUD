import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import "../styles/dashboard.css";
import { TbMenuDeep } from "react-icons/tb";
import {items} from "./SidebarData"


export default function SideBar() {
  const [collpased, setCollpased] = useState(true);
  return (
    <>
     
        <Sider collapsed={collpased} theme="light">
          <TbMenuDeep
            onClick={() => setCollpased(!collpased)}
            size={30}
            style={{ marginLeft: 20 }}
            color="black"
          ></TbMenuDeep>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["home"]}>
            {items.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        
      
    </>
  );
}
