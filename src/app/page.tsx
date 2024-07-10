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
  layanan1,
  layanan2,
  layanan3,
  layanan4,
} from "../../public/asset";
import Navbar from "@/component/Navbar/navbar"; // Pastikan path impor benar sesuai dengan struktur
import { Button, Card, Col, Row, Spin } from "antd";
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import Link from "next/link";

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
      overlay: "253C78",
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
                  width: "100%",
                  height: "100%",
                  // backgroundColor: `${backgrounds[bgIndex].overlay}`,
                  backgroundColor: "#253C78",
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
                paddingTop: isMobile ? "1%" : isTablet ? "10%" : "5%",
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
                    <LeftOutlined
                      style={{
                        fontSize: isMobile
                          ? "20px"
                          : isTablet
                          ? "30px"
                          : "40px",
                      }}
                    />
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
                    <RightOutlined
                      style={{
                        fontSize: isMobile
                          ? "20px"
                          : isTablet
                          ? "30px"
                          : "40px",
                      }}
                    />
                  </button>
                </Col>
              </Row>
            </main>
            {/* ) : null} */}
          </div>

          {/* Main Content Section */}
          <main style={{ color: "black", paddingTop: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // minHeight: "60vh",
                paddingBottom: "20px",
              }}
            >
              <Row justify="center" gutter={[16, 16]}>
                <Col xs={20} sm={10}>
                  <Card
                    // hoverable
                    // style={{
                    //   width: "80%",
                    //   marginBottom: "20px",
                    // }}
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
                      teknologi terbaru untuk memastikan WC Anda kembali
                      berfungsi dalam waktu singkat. Jangan biarkan masalah WC
                      mampet mengganggu kenyamanan Anda - hubungi kami sekarang
                      untuk layanan terbaik!
                    </p>
                  </Card>
                </Col>
                <Col xs={24} sm={10}>
                  <Card
                    // hoverable
                    // style={{
                    //   width: "80%",
                    // }}
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
                    <Link href={"/profile"}>
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
                    </Link>
                  </Card>
                </Col>
              </Row>
            </div>
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
                // minHeight: "60vh",
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
                paddingTop: "20px",
              }}
            >
              <Row justify="center">
                <Col xs={24} sm={12}>
                  <Card
                    hoverable
                    style={{
                      width: "80%",
                      margin: "0 auto", // Centering the card horizontally
                      textAlign: "left", // Aligning text content to the left
                    }}
                    actions={[
                      <Button
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#2B59C3",
                          color: "white",
                        }}
                        onClick={handleWhatsAppClick}
                      >
                        Hubungi kami
                      </Button>,
                    ]}
                    cover={<img alt="example" src={layanan1.src} />}
                  >
                    <h4>01. Sedot WC/SepticTank</h4>
                    <p>
                      Layanan sedot WC dan septictank kami membantu membersihkan
                      dan menguras limbah domestik dari sistem pembuangan rumah,
                      gedung perkantoran, atau bangunan komersial lainnya. Tim
                      kami dilengkapi dengan peralatan modern untuk memastikan
                      proses sedot limbah berjalan lancar dan higienis.
                    </p>
                  </Card>
                </Col>
                <Col xs={24} sm={12}>
                  <Card
                    hoverable
                    style={{
                      width: "80%",
                      margin: "0 auto", // Centering the card horizontally
                      textAlign: "left", // Aligning text content to the left
                    }}
                    actions={[
                      <Button
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#2B59C3",
                          color: "white",
                        }}
                        onClick={handleWhatsAppClick}
                      >
                        Hubungi kami
                      </Button>,
                    ]}
                    cover={<img alt="example" src={layanan2.src} />}
                  >
                    <h4>02. Sedot Restoran</h4>
                    <p>
                      Limbah dari restoran dapat menjadi masalah serius jika
                      tidak ditangani dengan benar. Kami menyediakan layanan
                      khusus untuk mengatasi limbah restoran, termasuk
                      pengurasan lemak, penghilangan bau tidak sedap, dan
                      pembersihan saluran dapur.
                    </p>
                  </Card>
                </Col>
              </Row>
              <Row
                justify="center"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <Col xs={24} sm={12}>
                  <Card
                    hoverable
                    style={{
                      width: "80%",
                      margin: "0 auto", // Centering the card horizontally
                      textAlign: "left", // Aligning text content to the left
                    }}
                    actions={[
                      <Button
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#2B59C3",
                          color: "white",
                        }}
                        onClick={handleWhatsAppClick}
                      >
                        Hubungi kami
                      </Button>,
                    ]}
                    cover={<img alt="example" src={layanan3.src} />}
                  >
                    <h4>03. Sedot Limbah Cair</h4>
                    <p>
                      Kami juga menyediakan layanan sedot limbah cair untuk
                      berbagai keperluan, termasuk limbah dari industri,
                      restoran, atau fasilitas komersial lainnya. Tim kami siap
                      membantu Anda mengatasi masalah limbah cair dengan cepat
                      dan efektif.
                    </p>
                  </Card>
                </Col>
                <Col xs={24} sm={12}>
                  <Card
                    hoverable
                    style={{
                      width: "80%",
                      margin: "0 auto", // Centering the card horizontally
                      textAlign: "left", // Aligning text content to the left
                    }}
                    actions={[
                      <Button
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#2B59C3",
                          color: "white",
                        }}
                        onClick={handleWhatsAppClick}
                      >
                        Hubungi kami
                      </Button>,
                    ]}
                    cover={<img alt="example" src={layanan4.src} />}
                  >
                    <h4>04. Sedot Limbah Industri</h4>
                    <p>
                      Kami memiliki pengalaman dalam menangani limbah cair dari
                      berbagai industri. Layanan kami mencakup penyedotan limbah
                      cair, pengelolaan limbah beracun, dan pengolahan limbah
                      sesuai dengan standar lingkungan yang berlaku.
                    </p>
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
              <div style={{ justifyContent: "center" }}>
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
        </div>
      )}
    </>
  );
};

export default Home;
