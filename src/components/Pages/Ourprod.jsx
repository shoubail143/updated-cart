import React from "react";

export const Ourprod = () => {
  return (
    <section className="py-10">
      <h2 className="text-center font-bold text-4xl">Our Products</h2>

      {/* Removed the empty aside to give the products full width, 
          or you can hide it on smaller screens */}
      <div className="`max-w-[1320px]` mx-auto mt-5 px-4">
        {/* Changed grid-cols-3 to grid-cols-4. 
            Added justify-items-center to center the cards within the grid cells. */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </article>
      </div>
    </section>
  );
};

function Productcard() {
  return (
    <div className="shadow-lg border border-gray-200 p-4 w-full `max-w-[300px]` flex flex-col items-center justify-center bg-white rounded-lg">
      <img
        className="w-full h-48 object-cover rounded-md" // Added sizing classes here
        src="data:image/jpeg;base64,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"
        alt="Product"
      />
    </div>
  );
}
