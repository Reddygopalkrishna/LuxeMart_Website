import React, { useRef, useEffect } from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Items/Item";

const Popular = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const totalWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;
      container.scrollLeft = (totalWidth - visibleWidth) / 2; // Center the items initially
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-carousel">
        <button className="popular-btn popular-prev" onClick={() => scroll("left")}>
          &lt;
        </button>
        <div className="popular-item" ref={scrollRef}>
          {data_product.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))}
        </div>
        <button className="popular-btn popular-next" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Popular;
