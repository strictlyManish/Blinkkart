import { Link } from "react-router-dom";
import earphonpng from "../assets/Fifth_headphones.png";
import consoleImg from "../assets/console.png";
import laptop from "../assets/first_laptop.png";
import speaker from "../assets/boxa_audio2.png";
import gadgets from "../assets/second_headphones.png";

const categories = [
  {
    title: "Enjoy",
    subtitle: "With",
    highlight: "HEADPHONE",
    image: earphonpng,
    bg: "bg-black",
    textColor: "text-white",
    buttonColor: "bg-red-500 text-white",
  },
  {
    title: "New",
    subtitle: "Wearable",
    highlight: "GADGET",
    image: gadgets,
    bg: "bg-yellow-400",
    textColor: "text-black",
    buttonColor: "bg-white text-black",
  },
  {
    title: "Trend",
    subtitle: "Devices",
    highlight: "LAPTOP",
    image: laptop,
    bg: "bg-red-500",
    textColor: "text-white",
    buttonColor: "bg-white text-black",
  },
  {
    title: "Best",
    subtitle: "Gaming",
    highlight: "CONSOLE",
    image: consoleImg,
    bg: "bg-white",
    textColor: "text-black",
    buttonColor: "bg-red-500 text-white",
    isWide: true,
  },
  {
    title: "New",
    subtitle: "Amazon",
    highlight: "SPEAKER",
    image: speaker,
    bg: "bg-blue-500",
    textColor: "text-white",
    buttonColor: "bg-white text-black",
  },
];

const CategoryGrid = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <Link
            to="/shop"
            key={index}
            className={`
              block rounded-2xl
              ${item.isWide ? "lg:col-span-2" : ""}
              ${item.bg} 
              ${item.textColor}
              transition-transform duration-300 ease-in-out hover:scale-105
            `}
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <h3 className="text-2xl font-bold mt-1">{item.subtitle}</h3>
                <h2 className="text-3xl font-extrabold opacity-30">
                  {item.highlight}
                </h2>
              </div>

              <div className="relative w-full h-48 mt-4">
                <img
                  src={item.image}
                  alt={item.highlight}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              <div
                className={`
                  mt-5 w-fit px-5 py-2 rounded-full font-semibold
                  ${item.buttonColor}
                `}
              >
                Browse
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
