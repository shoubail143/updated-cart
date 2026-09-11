function Card({ title, value, img, onAddToCart }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 w-64">
      <img
        src={img}
        alt={title}
        className="w-full h-52 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-lg text-gray-700">{value}</p>
      <button
        onClick={() => {
          console.log("Button clicked for:", title);
          onAddToCart({ title, value, img });
        }}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
