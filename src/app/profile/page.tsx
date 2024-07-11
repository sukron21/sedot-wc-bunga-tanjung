"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import {
  bgHeader,
  wcMampet,
  mobil,
  mobil2,
  tinja,
  building,
  house,
  setting,
  industry,
  bgHeader2,
  iconWa,
  bgWa,
  header2,
  layanan1,
  layanan2,
  layanan3,
  layanan4,
} from "../../../public/asset";
import Navbar from "@/component/Navbar/navbar"; // Pastikan path impor benar sesuai dengan struktur
import { Button, Card, Col, Row, Spin } from "antd";
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
  const [isSlideshowRunning, setIsSlideshowRunning] = useState(true);

  const toggleSlideshow = () => {
    setIsSlideshowRunning(!isSlideshowRunning);
  };

  // Function to handle screen resize
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    setIsMobile(windowWidth < 768);
    setIsTablet(windowWidth >= 768 && windowWidth < 1024);
  };

  // Effect to handle initial screen size and resize event
  useEffect(() => {
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize); // Add listener for resize events
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on component unmount
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const backgrounds = [
    {
      image: bgHeader2.src,
      overlay:
        "linear-gradient(90deg, rgba(40, 60, 120, 0.9) 0%, rgba(0, 0, 0, 0.2) 100%)",
    },
    {
      image: header2.src,
      // overlay:
      //   "linear-gradient(90deg, rgba(60, 80, 140, 0.8) 44.36%, rgba(0, 0, 0, 0.2) 100%)",
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "6285772420855"; // Ganti dengan nomor WhatsApp yang diinginkan
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 999,
            color: "#fff",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <div
            className="container-fluid"
            onClick={toggleSlideshow}
            style={{
              backgroundColor: "white",
              height: isMobile ? "40vh" : isTablet ? "55vh" : "50vh",
              width: "100vw",
              overflow: "hidden",
              position: "relative",
              color: "black",
            }}
          >
            {/* Background Image */}
            <div
              style={{
                zIndex: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={backgrounds[0].image}
                layout="fill"
                objectFit="cover"
                alt="Background Image"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#253C78",
                  //   background: backgrounds[0].overlay,
                  opacity: 0.6,
                  zIndex: 1,
                }}
              />
            </div>

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            {/* {bgIndex === 0 ? ( */}

            <main
              style={{
                zIndex: 2,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                paddingTop: isMobile ? "10%" : isTablet ? "15%" : "2%",
                paddingLeft: "8%",
                minHeight: "100vh",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <Row>
                <Col span={24}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column", // Mengatur elemen dalam kolom
                      alignItems: "flex-start", // Mengatur elemen agar menyusut sesuai konten
                      gap: "10px", // Jarak antara elemen
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#2B59C3",
                        padding: "2px 5px",
                        borderRadius: "3px",
                        display: "inline", // Menjadikan elemen selebar teks
                      }}
                    >
                      <h5
                        style={{
                          color: "#FFFF00",
                          fontSize: isMobile ? 20 : isTablet ? 30 : 35,
                          margin: 0,
                        }}
                      >
                        Sedot Wc
                      </h5>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#2B59C3",
                        padding: "2px 5px",
                        borderRadius: "3px",
                        display: "inline", // Menjadikan elemen selebar teks
                      }}
                    >
                      <h5
                        style={{
                          color: "#FFFF00",
                          fontSize: isMobile ? 20 : isTablet ? 30 : 35,
                          margin: 0,
                        }}
                      >
                        Bunga Tanjung Tangerang
                      </h5>
                    </div>
                    <h3
                      style={
                        {
                          // Gaya tambahan jika diperlukan
                        }
                      }
                    >
                      Solusi WC penuh dan mengatasi mampet
                    </h3>
                  </div>
                </Col>
              </Row>
            </main>
          </div>

          {/* Main Content Section */}
          <main style={{ color: "black", paddingTop: "20px" }}>
            <Row style={{ backgroundColor: "#F9F9F9", padding: "20px" }}>
              <Col
                xs={24}
                sm={12}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Card
                  style={{
                    backgroundColor: "transparent",
                    textAlign: "left",
                    maxWidth: "80%",
                    padding: "20px",
                  }}
                >
                  <h5
                    style={{
                      color: "#253C78",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                  >
                    FEATURED SERVICE
                  </h5>
                  <h2 style={{ marginBottom: "12px" }}>
                    Lorem Ipsum Dolor Sit Amet, Consectur
                  </h2>
                  <p style={{ marginBottom: "0" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card>
              </Col>
              <Col
                xs={24}
                sm={12}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Row gutter={[16, 16]} style={{ maxWidth: "80%" }}>
                  <Col style={{ paddingTop: "20px" }} span={12}>
                    <img
                      alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                      src={mobil2.src}
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </Col>
                  <Col span={12}>
                    <img
                      alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                      src={tinja.src}
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </main>
          <footer
            style={{
              backgroundColor: "#253C78",
              color: "white",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ justifyContent: "center" }}>
              {/* <p style={{ margin: "0", paddingRight: "10px" }}>Use Client</p> */}
              {/* Add more relevant content for SEO */}
              <p style={{ margin: "0", paddingRight: "10px" }}>
                Email: info@bungatanjung.com
              </p>{" "}
              <p style={{ margin: "0" }}>Phone: +62 857-7242-0855</p>
            </div>
            <div style={{ marginTop: "10px" }}>
              <a href="/faq" style={{ color: "white", marginRight: "10px" }}>
                FAQ
              </a>
              <a href="/terms" style={{ color: "white", marginRight: "10px" }}>
                Terms & Conditions
              </a>
              <a href="/privacy" style={{ color: "white" }}>
                Privacy Policy
              </a>
            </div>
            <div style={{ marginTop: "10px" }}>
              <a
                href="https://facebook.com/bungatanjung"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", marginRight: "10px" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/bungatanjung"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", marginRight: "10px" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com/bungatanjung"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p style={{ marginTop: "10px", fontSize: "12px" }}>
              &copy; 2024 Bunga Tanjung Sedot WC. All rights reserved.
            </p>
          </footer>

          <div className={styles["whatsapp-icon-container"]}>
            <a
              href="https://wa.me/6285772420855"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles["whatsapp-icon-link"]} ${styles["fixed-icon"]}`}
            >
              <img
                className={styles["icon-wa"]}
                alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                src={iconWa.src}
              />
              <img
                className={styles["bg-wa"]}
                alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                src={bgWa.src}
              />
            </a>
          </div>
          {/* <a
            href="https://wa.me/6285772420855"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["whatsapp-icon"]}`}
          >
            <img
              alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
              src={iconWa.src}
            />
            <img
              alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
              src={bgWa.src}
            />
            <WhatsAppOutlined style={{ fontSize: "32px", color: "#25D366" }} />
          </a> */}
        </div>
      )}
    </>
  );
};

export default Home;
