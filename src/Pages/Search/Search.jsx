import { useEffect, useState } from "react";
import Card from "../../Pages/HomePage/Section4/Card/Card";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/feature/product/productSlice";
import Footer from "../HomePage/Footer/Footer";
import Header from "../HomePage/Header/Header";

const Search = () => {
  const dispatch = useDispatch();
  const { value = [] } = useSelector((state) => state.product);

  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

 
  useEffect(() => {
    let filteredProducts = [...value];

   
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

  
    if (sortCriteria === "price-asc") {
      filteredProducts.sort(
        (a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice)
      );
    } else if (sortCriteria === "price-desc") {
      filteredProducts.sort(
        (a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice)
      );
    } else if (sortCriteria === "title-asc") {
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCriteria === "title-desc") {
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setSortedProducts(filteredProducts);
  }, [value, sortCriteria, searchQuery]);

  return (
    <>
      <Header />

      <section className="w-full h-auto  flex flex-col items-center my-5">
     
        <div className="w-[90%] flex justify-between items-center p-4">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md w-[60%]"
          />
          <select
            className="p-2 border rounded-md"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option value="">Select Filter</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Title: A to Z</option>
            <option value="title-desc">Title: Z to A</option>
          </select>
        </div>

 
        <div className="w-[90%] h-auto flex flex-col items-center ">
          <div className="h-auto flex justify-center items-center flex-wrap gap-6">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((item) => <Card key={item.id} item={item} />)
            ) : (
              <p className="text-gray-500 mt-4">No products found.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Search;

