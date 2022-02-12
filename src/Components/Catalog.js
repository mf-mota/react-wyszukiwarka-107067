import React from "react";
import CarCard from "./CarCard";

const Catalog = ({ cars }) => {
  return (
    <>
      <h3 className="mb-3">Dostępne Modele</h3>
      <div className="catalog">
        {cars.map((m, idx) => (
          <CarCard key={idx} car={m} />
        ))}
      </div>
    </>
  );
};

export default Catalog;

// title
// director
// description
// actors
// imageurl
