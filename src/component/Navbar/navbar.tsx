import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { logo } from "../../../public/asset";
import styles from "../../app/page.module.css"; // Import CSS Module
import Link from "next/link";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to handle screen resize
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768); // Example breakpoint: 768px
  };

  // Effect to handle initial screen size and resize event
  useEffect(() => {
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize); // Add listener for resize events
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on component unmount
    };
  }, []);

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  // Menu items definition
  const menuItems = [
    { key: "home", title: "Home" },
    { key: "about", title: "About" },
    { key: "contact", title: "Contact" },
  ];

  // Render menu items
  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Menu.Item
        key={item.key}
        style={{
          color: current === item.key ? "white" : "inherit",
          padding: "0 12px",
        }}
      >
        <Link href="/">{item.title}</Link>
      </Menu.Item>
    ));
  };

  return (
    <Header
      style={{
        zIndex: 2,
        position: "relative",
        width: "100%",
        background: "transparent",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <div className={styles.logoContainer}>
        <img src={logo.src} alt="" className={styles.logo} />
      </div>

      {/* Display Menu on larger screens */}
      {!isSmallScreen && (
        <>
          <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={handleClick}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white", // Set default text color to white
            }}
            className={styles.menuItems}
          >
            {renderMenuItems()}
          </Menu>
          <div></div>
          <div></div>
        </>
      )}

      {/* Display Dropdown on small screens */}
      {isSmallScreen && (
        <Dropdown
          overlay={
            <Menu onClick={handleClick} selectedKeys={[current]}>
              {renderMenuItems()}
            </Menu>
          }
          trigger={["click"]}
          placement="bottomRight"
        >
          <MenuOutlined
            style={{ color: "white" }}
            className={styles.menuIcon}
          />
        </Dropdown>
      )}
    </Header>
  );
};

export default Navbar;
