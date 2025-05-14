import React, { useState } from "react";

const AgreementForm = () => {
  const agreementTypes = ["Agreement", "WO", "PO", "LOI"]; 
  
  const [clauses, setClauses] = useState([
    { title: "Term and termination (Duration)", placeholder: "e.g. 30 days" },
    { title: "Payment Terms", placeholder: "e.g. 15" },
    { title: "Penalty", placeholder: "e.g. 500/-" },
    { title: "Minimum Wages", placeholder: "Yearly / Not Allowed / At Actual" },
    { title: "Costing - Salary Breakup", placeholder: "Yes / No" },
    { title: "SLA", placeholder: "Specific Page/Clause" },
    { title: "Indemnity", placeholder: "Specific Page/Clause" },
    { title: "Insurance", placeholder: "Specific Page/Clause" },
  ]);

  const handleAddClause = () => {
    setClauses([...clauses, { title: "", placeholder: "Enter clause details" }]);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Agreement Form</h1>

      {/* Agreement Types */}
      {agreementTypes.map((type) => (
        <div
          key={type}
          className="grid grid-cols-8 gap-4 items-start mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50"
        >
          <div className="col-span-1 font-semibold text-gray-700 pt-2">{type}</div>

          <input
            type="text"
            placeholder="From "
            className="col-span-1 border border-gray-300 p-2 rounded text-sm"
          />

          <input
            type="text"
            placeholder="To"
            className="col-span-1 border border-gray-300 p-2 rounded text-sm"
          />

          <input
            type="text"
            placeholder="NA"
            className="col-span-1 border border-gray-300 p-2 rounded text-sm"
          />

          <input
            type="file"
            className="col-span-2 text-sm text-gray-600"
          />

          <div className="col-span-2 text-sm">
            {type === "Agreement" ? (
              <span className="text-green-600">Alert: prior 30 days of Expiry</span>
            ) : (
              <>
                <span className="text-red-600 block">Alert: Agreement Pending</span>
                {type === "WO" && (
                  <div className="mt-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Status:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter status"
                      className="border border-gray-300 p-1 rounded w-full text-sm"
                    />
                    <p className="text-gray-500 mt-1">
                      Till status gets converted from WO to Agreement
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ))}

{ /* Entity Type */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Entity Type</h2>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="entityType" value="single" className="accent-blue-600" />
            Single Entity
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="entityType" value="group" className="accent-blue-600" />
            Single Entity with Group Companies
          </label>
          <input
            type="text"
            placeholder="Under list / annexure"
            className="border border-gray-300 p-2 rounded text-sm"
          />
        </div>
      </div>


      {/* Clause Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Important Clauses</h2>
        {clauses.map((clause, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 mb-4 items-center">
            <input
              type="text"
              value={clause.title}
              onChange={(e) => {
                const updatedClauses = [...clauses];
                updatedClauses[index].title = e.target.value;
                setClauses(updatedClauses);
              }}
              placeholder="Clause title"
              className="border border-gray-300 p-2 rounded text-sm w-full"
            />
            <input
              type="text"
              placeholder={clause.placeholder}
              className="border border-gray-300 p-2 rounded text-sm w-full"
            />
            {(clause.title === "SLA" || clause.title === "Indemnity" || clause.title === "Insurance") && (
              <input type="file" className="text-sm text-gray-600" />
            )}
          </div>
        ))}
        <button
          onClick={handleAddClause}
          className="text-blue-600 hover:underline text-sm mt-2"
        >
          + Add Clause
        </button>
      </div>

   
      {/* Contact Information */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Person from I Smart</h3>
            <input type="text" placeholder="Name" className="w-full border p-2 rounded text-sm mb-2" />
            <input type="text" placeholder="Contact No" className="w-full border p-2 rounded text-sm" />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Person from Client</h3>
            <input type="text" placeholder="Name" className="w-full border p-2 rounded text-sm mb-2" />
            <input type="text" placeholder="Contact No" className="w-full border p-2 rounded text-sm mb-2" />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded text-sm" />
          </div>
        </div>
      </div>

      {/* Review Workflow */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Review Workflow</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Maker (Executive)</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded text-sm mb-1" />
            <span className="text-xs text-gray-500">Escalation</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Checker (Manager/HOD)</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded text-sm mb-1" />
            <span className="text-xs text-gray-500">Escalation</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Approver (Director)</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded text-sm mb-1" />
            <span className="text-xs text-gray-500">Escalation</span>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-10 text-right">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AgreementForm;
