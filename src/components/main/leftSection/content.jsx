import React from "react";

const Content = () => {
  return (
    <div className="p-4 border-b-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <div className="mb-4">
        <p className="text-lg font-medium">Email:</p>
        <p className="text-gray-700">rahiiimd98@gmail.com</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium">Phone:</p>
        <p className="text-gray-700">+989010875580</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium">Address:</p>
        <address className="text-gray-700">
          2 St.mamaghani, Tehran, Itan
        </address>
      </div>
    </div>
  );
};
export default Content;
