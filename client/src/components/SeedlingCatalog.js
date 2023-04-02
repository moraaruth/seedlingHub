import React from "react";
import Seedling from "./Seedling";
import seedlingData from "./seedlingData";

function SeedlingCatalog(props) {
  return (
    <section>
      <h2>Seedling Catalog</h2>

      {/* Map through the seedling data to create Seedling components */}
      {seedlingData.map((seedling) => (
        <Seedling
          key={seedling.id}
          name={seedling.name}
          price={seedling.price}
          addToCart={() => props.addToCart(seedling)}
        />
      ))}
    </section>
  );
}

export default SeedlingCatalog;
