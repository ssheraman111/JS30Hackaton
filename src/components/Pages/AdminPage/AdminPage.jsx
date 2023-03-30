import React from "react";
import AddProduct from "../../Product/AddProduct";

const AdminPage = () => {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="admin_page"
    >
      <AddProduct />
    </div>
  );
};

export default AdminPage;
