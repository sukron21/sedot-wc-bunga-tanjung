import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { logo } from "../../../public/asset";
import styles from "../../app/page.module.css"; // Import CSS Module
import Link from "next/link";
import { link } from "fs";
import { usePathname } from "next/navigation";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname();

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

  const getCurrentMenuKey = () => {
    switch (pathname) {
      case "/profile":
        setCurrent("profile");
        return;
      case "/":
        setCurrent("home");
        return;
      default:
        setCurrent("home");
        return;
    }
    console.log("current", current);
  };
  useEffect(() => {
    getCurrentMenuKey();
  }, []);

  // Menu items definition
  const menuItems = [
    { key: "home", title: "Home", link: "/" },
    { key: "profile", title: "Profile", link: "/profile" },
    { key: "contact", title: "Contact", link: "/https://wa.me/6285772420855" },
  ];

  // Render menu items
  const renderMenuItems = () => {
    return menuItems.map((item) => {
      const isContact = item.key === "contact";
      return (
        <Menu.Item
          key={item.key}
          style={{
            color: current === item.key ? "blue" : "inherit",
            padding: "0 12px",
          }}
        >
          {isContact ? (
            <a
              href="https://wa.me/6285772420855"
              style={{ color: "black" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          ) : (
            <Link href={item.link} style={{ color: "black" }}>
              {item.title}
            </Link>
          )}
        </Menu.Item>
      );
    });
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
            // onClick={handleClick}
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
            <Menu
              style={{ backgroundColor: "#F9F9F9" }}
              selectedKeys={[current]}
            >
              {renderMenuItems()}
            </Menu>
          }
          trigger={["click"]}
          placement="bottomRight"
        >
          <MenuOutlined
            style={{ color: "black" }}
            className={styles.menuIcon}
          />
        </Dropdown>
      )}
    </Header>
  );
};

export default Navbar;
