import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const UserDashboard = () => {
  // Sample user data and orders
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
    address: '123 Fashion St, Style City, 45678',
    profilePicture: 'https://via.placeholder.com/100' // Placeholder image URL
  };

  const orders = [
    {
      id: 1,
      productName: 'Designer Dress',
      rentalDate: '2024-08-01',
      returnDate: '2024-08-10',
      price: '$50',
      status: 'Returned'
    },
    {
      id: 2,
      productName: 'Elegant Gown',
      rentalDate: '2024-08-05',
      returnDate: '2024-08-15',
      price: '$70',
      status: 'Rented'
    }
  ];

  // State for showing more user details
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.profilePicture}
            alt="User"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/user-profile"
            className="text-lg font-semibold text-gray-700 hover:text-primary"
          >
            Profile
          </NavLink>
          <NavLink
            to="/user-orders"
            className="text-lg font-semibold text-gray-700 hover:text-primary"
          >
            Orders
          </NavLink>
          <NavLink
            to="/logout"
            className="text-lg font-semibold text-red-500 hover:text-red-700"
          >
            Logout
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>

          {/* User Info Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              {showDetails && (
                <>
                  <p className="text-gray-600">{user.phone}</p>
                  <p className="text-gray-600">{user.address}</p>
                </>
              )}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-2 text-primary font-bold"
              >
                {showDetails ? 'Hide Details' : 'Show More'}
              </button>
            </div>

            <div className="flex items-center mt-4 sm:mt-0">
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Orders Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Your Orders</h3>
            {orders.length > 0 ? (
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Product</th>
                    <th className="py-2 px-4 border-b">Rental Date</th>
                    <th className="py-2 px-4 border-b">Return Date</th>
                    <th className="py-2 px-4 border-b">Price</th>
                    <th className="py-2 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="py-2 px-4 border-b">{order.productName}</td>
                      <td className="py-2 px-4 border-b">{order.rentalDate}</td>
                      <td className="py-2 px-4 border-b">{order.returnDate}</td>
                      <td className="py-2 px-4 border-b">{order.price}</td>
                      <td className="py-2 px-4 border-b">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No orders found.</p>
            )}
          </div>

          {/* Logout Button */}
          <div className="text-right">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
