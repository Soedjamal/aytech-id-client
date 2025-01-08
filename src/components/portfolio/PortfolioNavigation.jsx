const categories = ["View All", "IOT", "Mobile", "Web"];

const PortfolioNavigation = ({ handleCategory, selectedCategory }) => {
  return (
    <>
      <div className="portfolio-nav-container w-full px-[30px]">
        <div className="portfolio-nav-list text-lg font-semibold flex w-full justify-between py-4 items-center">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => handleCategory(category)}
              className={
                selectedCategory === category
                  ? "text-blue-500"
                  : "text-gray-700"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioNavigation;
