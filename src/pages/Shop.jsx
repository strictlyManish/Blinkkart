import { useWrapper } from "../context/WrapperProvider";
import { Link } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";
function Shop() {
  const { product} = useWrapper();
  const renderProduct = product.map((obj) => (
    <SpotlightCard
      className="custom-spotlight-card transition-shadow hover:shadow-xl"
      spotlightColor="rgba(0, 229, 255, 0.2)"
      key={obj.id}
    >
      <Link
        to={`/shop/${obj.id}`}
        className="flex flex-col items-center gap-4 p-4 rounded-xl hover:bg-gray-700 transition-all duration-300 w-full max-w-[300px] sm:max-w-[260px]"
      >
        <div className="w-full aspect-square overflow-hidden rounded-lg">
          <img
            src={obj.url}
            alt={obj.name}
            className="w-full h-full object-contain p-2"
            loading="lazy"
          />
        </div>

        <div className="text-center text-white space-y-1 w-full">
          <h2 className="text-lg font-bold truncate">{obj.name}</h2>
          <h3 className="text-xl font-semibold text-pink-500">${obj.price}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{obj.disc}</p>
        </div>
      </Link>
    </SpotlightCard>
  ));
  return (
    <div className="flex flex-col gap-6 px-20 py-5">
      <div className="text-center mt-5">
        <h2 className="text-3xl text-zinc-300">Best Seller Products</h2>
        <p className="text-[19px] text-gray-600">
          Speaker there are many variations passages
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">{renderProduct}</div>
    </div>
  );
}

export default Shop;
