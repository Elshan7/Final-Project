import { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct, addProduct } from "../../Redux/feature/product/productSlice";
import { deleteUser, fetchUsers, addUser } from "../../Redux/feature/login/loginSlice";
import { MdDelete } from "react-icons/md";
import NestedModal from "../../components/NestedModal/NestedModal";
import UserModal from "../../components/UserModal/UserModal";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
  });
  const [newUser, setNewUser] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { value: products = [] } = useSelector((state) => state.product);
  const { usersList: users = [] } = useSelector((state) => state.login);

  useEffect(() => {
    if (selectedPage === "All Products") {
      dispatch(getProduct());
    } else if (selectedPage === "Users") {
      dispatch(fetchUsers());
    }
  }, [dispatch, selectedPage]);

  const handleAddProduct = () => {
    if (newProduct.title && newProduct.category && newProduct.price && newProduct.image) {
      dispatch(addProduct(newProduct));
      setNewProduct({ title: "", category: "", price: "", image: "" });
    } else {
      alert("Please fill in all fields to add a product!");
    }
  };

  const handleAddUser = () => {
    if (newUser.fullname && newUser.email && newUser.username && newUser.password) {
      dispatch(addUser(newUser));
      setNewUser({ fullname: "", email: "", username: "", password: "" });
    } else {
      alert("Please fill in all fields to add a user!");
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter((user) =>
    user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="p-6 w-full flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold">All Products</h1>
            <div className="input-search w-[60%]">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="admin-input p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="add-product-form w-[60%] flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
              <h2 className="text-xl font-semibold">Add New Product</h2>
              <input
                type="text"
                placeholder="Title"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add Product
              </button>
            </div>

            <table className="table-auto w-[60%] border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-black text-white px-4 py-2 border">ID</th>
                  <th className="bg-black text-white px-4 py-2 border">Image</th>
                  <th className="bg-black text-white px-4 py-2 border">Category</th>
                  <th className="bg-black text-white px-4 py-2 border">Title</th>
                  <th className="bg-black text-white px-4 py-2 border">Price</th>
                  <th className="bg-black text-white px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="border px-4 py-2">{product.id}</td>
                    <td className="border px-4 py-2">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </td>
                    <td className="border px-4 py-2">{product.category}</td>
                    <td className="border px-4 py-2">{product.title}</td>
                    <td className="border px-4 py-2">${product.newPrice}</td>
                    <td className="border px-4 py-2 flex justify-center gap-2">
                      <MdDelete
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-500 cursor-pointer text-xl hover:text-red-700"
                      />
                      <NestedModal item={product} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "Users":
        return (
          <div className="p-6 w-full flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold">Users</h1>
            <div className="input-search w-[60%]">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="admin-input p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

           
            <div className="add-user-form w-[60%] flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
              <h2 className="text-xl font-semibold">Add New User</h2>
              <input
                type="text"
                placeholder="Full Name"
                value={newUser.fullname}
                onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                className="p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={handleAddUser}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add User
              </button>
            </div>

            <table className="table-auto w-[60%] border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-black text-white px-4 py-2 border">ID</th>
                  <th className="bg-black text-white px-4 py-2 border">Full Name</th>
                  <th className="bg-black text-white px-4 py-2 border">Email</th>
                  <th className="bg-black text-white px-4 py-2 border">Username</th>
                  <th className="bg-black text-white px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="border px-4 py-2">{user.id}</td>
                    <td className="border px-4 py-2">{user.fullname}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.username}</td>
                    <td className="border px-4 py-2 flex justify-center gap-2">
                      <MdDelete
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-500 cursor-pointer text-xl hover:text-red-700"
                      />
                      <UserModal item={user} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return <h1 className="text-3xl font-bold p-6 text-center">Page Not Found</h1>;
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

















