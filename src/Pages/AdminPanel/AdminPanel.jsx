import { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
} from "../../Redux/feature/product/productSlice";
import { MdDelete } from "react-icons/md";
import NestedModal from "../../components/NestedModal/NestedModal";
import UserModal from "../../components/UserModal/UserModal";
import { fetchUsers } from "../../Redux/feature/login/loginSlice";

const AdminPanel = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { value: products = [] } = useSelector((state) => state.product);
  const { usersList: users = [] } = useSelector((state) => state.login);

  const [localProducts, setLocalProducts] = useState(products);

  useEffect(() => {
    if (selectedPage === "All Products") {
      dispatch(getProduct());
    }
  }, [dispatch, selectedPage]);

  useEffect(() => {
    if (selectedPage === "Users") {
      dispatch(fetchUsers());
    }
  }, [dispatch, selectedPage]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const filteredUser = users.filter((user) =>
    user.fullname.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    // Send the delete request to the backend
    await dispatch(deleteProduct(id));

    setLocalProducts(localProducts.filter((product) => product.id !== id)); // Remove product locally
  };

  const renderContent = () => {
    switch (selectedPage) {
      case "Dashboard":
        return (
          <h1 className="text-3xl font-bold p-6 text-center">
            Welcome to the Dashboard
          </h1>
        );

      case "All Products":
        return (
          <div className="p-6 w-full flex justify-center items-center flex-col gap-4">
            <h1 className="text-3xl font-bold mb-6">ALL Products</h1>

            <div className="mb-6 flex justify-center items-center w-[600px]">
              <input
                type="text"
                placeholder="Please enter product name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 w-[80%] border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-300"
              />
              <button className="p-2 w-[20%] bg-black text-white rounded-r-md hover:bg-gray-800">
                Search
              </button>
            </div>

            <div className="overflow-x-auto w-[60%]">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      ID
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Image
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Category
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Title
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Price
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((item) => (
                    <tr key={item.id} className="text-center">
                      <td className="px-4 py-2 border border-gray-300">
                        {item.id}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-full"
                        />
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {item.category}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {item.title}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        $ {item.newPrice}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        <div className="text-black flex gap-3 justify-center items-center rounded-md">
                          <MdDelete
                            onClick={() => handleDelete(item.id)}
                            className="text-2xl duration-700 cursor-pointer hover:text-red-500"
                          />
                          <NestedModal item={item} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Users":
        return (
          <div className="p-6 w-full flex justify-center items-center flex-col gap-4">
            <h1 className="text-3xl font-bold mb-6">Users</h1>

            <div className="mb-6 flex justify-center items-center w-[600px]">
              <input
                type="text"
                placeholder="Please enter user name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 w-[80%] border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-300"
              />
              <button className="p-2 w-[20%] bg-black text-white rounded-r-md hover:bg-gray-800">
                Search
              </button>
            </div>

            <div className="overflow-x-auto w-[60%]">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      ID
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Image
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      FullName
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Email
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Username
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUser.map((item) => (
                    <tr key={item.id} className="text-center">
                      <td className="px-4 py-2 border border-gray-300">
                        {item.id}
                      </td>
                      <td className="px-4 py-2 border border-gray-300 flex justify-center items-center">
                        <img
                          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                          alt={item.title}
                          className="w-28 h-24  object-cover rounded-full"
                        />
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {item.fullname}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {item.email}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {" "}
                        {item.username}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        <div className="text-black flex gap-3 justify-center items-center rounded-md">
                          <MdDelete
                           
                            className="text-2xl duration-700 cursor-pointer hover:text-red-500"
                          />
                          <UserModal item={item} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return (
          <h1 className="text-3xl text-center font-bold p-6">Page Not Found</h1>
        );
    }
  };

  return (
    <div className="flex">
      <Sidebar onMenuClick={setSelectedPage} />
      <div className="w-full">{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;
