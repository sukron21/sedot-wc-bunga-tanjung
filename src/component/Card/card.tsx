import React from "react";
import { Card } from "antd";

interface CardsProps {
  images?: any; // Define the type of 'images' prop
}

const Cards: React.FC<CardsProps> = ({ images }) => (
  <Card
    hoverable
    style={{
      width: "80%",

      //
    }}
    cover={<img alt="example" src={images} />}
  >
    <p>wew</p>
  </Card>
);

export default Cards;
