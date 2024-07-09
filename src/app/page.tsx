"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
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
} from "../../public/asset";
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
      image: bgHeader.src,
      overlay:
        "linear-gradient(90deg, rgba(40, 60, 120, 0.8) 44.36%, rgba(0, 0, 0, 0.2) 100%)",
    },
    {
      image: header2.src,
      // overlay:
      //   "linear-gradient(90deg, rgba(60, 80, 140, 0.8) 44.36%, rgba(0, 0, 0, 0.2) 100%)",
    },
  ];

  useEffect(() => {
    let interval: any;
    if (isSlideshowRunning) {
      interval = setInterval(() => {
        setBgIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Ganti gambar setiap 5 detik
    }

    return () => clearInterval(interval);
  }, [isSlideshowRunning]);

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
              height: isMobile ? "40vh" : isTablet ? "55vh" : "100vh",
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
                src={backgrounds[bgIndex].image}
                layout="fill"
                objectFit="cover"
                alt="Background Image"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  background: backgrounds[bgIndex].overlay,
                  opacity: 0.7,
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
                paddingTop: isMobile ? "10%" : isTablet ? "15%" : "5%",
                paddingLeft: "8%",
                minHeight: "100vh",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <Row>
                <Col span={3} style={{ paddingTop: "10%" }}>
                  {" "}
                  <button
                    onClick={() =>
                      setBgIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
                    }
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <LeftOutlined style={{ fontSize: "40px" }} />
                  </button>
                </Col>
                <Col span={18}>
                  {bgIndex === 0 ? (
                    <>
                      <span style={{ fontSize: 12 }}>
                        <span
                          style={{
                            backgroundColor: "#2B59C3",
                            color: "#FFFF00",
                            padding: "2px 5px",
                            borderRadius: "3px",
                          }}
                        >
                          Bunga Tanjung Sedot Wc
                        </span>
                      </span>
                      <h1
                        style={{ fontSize: isMobile ? 20 : isTablet ? 30 : 44 }}
                      >
                        PENYEDOTAN WC PENUH dan
                      </h1>
                      <h1
                        style={{
                          fontSize: isMobile ? 20 : isTablet ? 30 : 44,
                          paddingBottom: "5px",
                        }}
                      >
                        MENGATASI MAMPET
                      </h1>
                      <p
                        style={{
                          color: "white",
                          fontSize: 14,
                          paddingTop: "10px",
                        }}
                      >
                        Layanan Sedot WC
                      </p>
                      <p style={{ color: "white", fontSize: 14 }}>
                        Tangerang Raya, Tangerang Kota, Kabupaten tangeran dan
                        Tangerang Selatan
                      </p>
                    </>
                  ) : null}
                </Col>
                <Col span={3} style={{ paddingTop: "10%" }}>
                  {" "}
                  <button
                    onClick={() =>
                      setBgIndex((prevIndex) => (prevIndex === 1 ? 0 : 1))
                    }
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <RightOutlined style={{ fontSize: "40px" }} />
                  </button>
                </Col>
              </Row>
            </main>
            {/* ) : null} */}
          </div>

          {/* Main Content Section */}
          <main style={{ color: "black" }}>
            <Row
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "5%",
              }}
            >
              <Col xs={24} sm={12}>
                <Card
                  hoverable
                  style={{
                    width: "80%",
                    marginBottom: "20px", // Memberikan ruang antar card di perangkat mobile
                  }}
                  cover={
                    <img
                      alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                      src={wcMampet.src}
                    />
                  }
                >
                  <h4>WC Mampet</h4>
                  <p style={{ color: "#6E6E6E", fontSize: 12 }}>
                    Temukan solusi terbaik untuk masalah WC mampet di area
                    Tangerang dengan layanan kami yang cepat dan berkualitas.
                    Kami menyediakan penanganan profesional menggunakan
                    teknologi terbaru untuk memastikan WC Anda kembali berfungsi
                    dalam waktu singkat. Jangan biarkan masalah WC mampet
                    mengganggu kenyamanan Anda - hubungi kami sekarang untuk
                    layanan terbaik!
                  </p>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  hoverable
                  style={{
                    width: "80%",
                  }}
                  cover={
                    <img
                      alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                      src={mobil.src}
                    />
                  }
                >
                  <h5
                    style={{
                      color: "#253C78",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                  >
                    WHO WE ARE
                  </h5>
                  <h2 style={{ paddingBottom: "12px" }}>
                    Sedot WC Bunga Tanjung: Layanan Profesional di Tangerang
                  </h2>
                  <Button
                    style={{
                      backgroundColor: "#2B59C3",
                      color: "white",
                      paddingBottom: "12px",
                      paddingTop: "12px",
                    }}
                  >
                    Learn More <ArrowRightOutlined />
                  </Button>
                </Card>
              </Col>
            </Row>

            {/* Featured Service Section */}
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

            {/* What We Do Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
              }}
            >
              <h5
                style={{
                  color: "#253C78",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  textAlign: "center", // Menyimpan teks di tengah horizontal
                }}
              >
                WHAT WE DO
              </h5>
              <h2 style={{ marginBottom: "12px", textAlign: "center" }}>
                OUR SERVICE
              </h2>
              <Row justify="center">
                <Col xs={12} sm={6}>
                  <Card
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      padding: "20px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                      src={building.src}
                    />
                    <h4>Sedot Wc Kantor</h4>
                  </Card>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  style={{ paddingLeft: "12px", paddingRight: "12px" }}
                >
                  <Card
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      padding: "20px",
                      alignItems: "center",
                      backgroundColor: "#253C78",
                      color: "white",
                    }}
                  >
                    <img
                      alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                      src={house.src}
                    />
                    <h4>Sedot Wc Rumah</h4>
                  </Card>
                </Col>
                <Col xs={12} sm={6} style={{ paddingRight: "12px" }}>
                  <Card
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      padding: "20px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                      src={setting.src}
                    />
                    <h4>Maintenance Toliet</h4>
                  </Card>
                </Col>
                <Col xs={12} sm={6}>
                  <Card
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      padding: "20px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="Perbaikan WC mampet dengan layanan cepat di Tangerang"
                      src={industry.src}
                    />
                    <h4>Pemasangan Toilet</h4>
                  </Card>
                </Col>
              </Row>
            </div>

            {/* Footer Section */}
            <footer
              style={{
                backgroundColor: "#253C78",
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ margin: "0", paddingRight: "10px" }}>Use Client</p>
                {/* Add more relevant content for SEO */}
                <p style={{ margin: "0", paddingRight: "10px" }}>
                  Email: info@bungatanjung.com
                </p>
                <p style={{ margin: "0" }}>Phone: +62 812-4003-0238</p>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a href="/faq" style={{ color: "white", marginRight: "10px" }}>
                  FAQ
                </a>
                <a
                  href="/terms"
                  style={{ color: "white", marginRight: "10px" }}
                >
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
          </main>
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
