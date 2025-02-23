import React from "react";

const RecipientListPane = ({ onBack, onNext }) => {
  const recipients = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", certificateName: "Certificate 1" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", certificateName: "Certificate 2" },
    { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", certificateName: "Certificate 3" },
    { id: 4, firstName: "Bob", lastName: "Brown", email: "bob.brown@example.com", certificateName: "Certificate 4" },
    { id: 5, firstName: "Charlie", lastName: "Davis", email: "charlie.davis@example.com", certificateName: "Certificate 5" },
    { id: 6, firstName: "Diana", lastName: "Evans", email: "diana.evans@example.com", certificateName: "Certificate 6" },
    { id: 7, firstName: "Eve", lastName: "Garcia", email: "eve.garcia@example.com", certificateName: "Certificate 7" },
    { id: 8, firstName: "Frank", lastName: "Harris", email: "frank.harris@example.com", certificateName: "Certificate 8" },
    { id: 9, firstName: "Grace", lastName: "Lee", email: "grace.lee@example.com", certificateName: "Certificate 9" },
  ];

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-medium">Recipient List</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Save as draft</span>
          <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
            />
            <img
              src="/img/search.png"
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
          <button className="text-gray-600 hover:text-gray-900">Filter ▼</button>
          <button className="bg-[#5570F1] text-white px-4 py-2 rounded text-sm">
            Upload Details
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Firstname</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lastname</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Certificate Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recipients.map((recipient) => (
              <tr key={recipient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{recipient.id}</td>
                <td className="px-6 py-4">{recipient.firstName}</td>
                <td className="px-6 py-4">{recipient.lastName}</td>
                <td className="px-6 py-4">{recipient.email}</td>
                <td className="px-6 py-4">{recipient.certificateName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded-lg">1</button>
          <button className="px-3 py-1 border rounded-lg">2</button>
          <button className="px-3 py-1 border rounded-lg">3</button>
          <span className="text-gray-600">...</span>
          <button className="px-3 py-1 border rounded-lg">9</button>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-100 text-gray-600 px-4 py-2 rounded flex items-center gap-1 text-sm hover:bg-gray-200"
          onClick={onBack}
        >
          <span>Back</span>
        </button>
        <button
          className="bg-[#5570F1] text-white px-4 py-2 rounded flex items-center gap-1 text-sm hover:bg-[#4056b5]"
          onClick={onNext}
        >
          <span>Next Step</span>
          <img src="/img/arrow-forward.png" alt="" className="" />
        </button>
      </div>
    </div>
  );
};

export default RecipientListPane;