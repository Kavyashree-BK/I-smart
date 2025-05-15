import React, { useEffect, useState, useRef } from "react";

const AgreementForm = () => {

  const [entityType, setEntityType] = useState("single");

  const agreementTypes = ["Agreement", "WO", "PO", "LOI"];
  

  const [clauses, setClauses] = useState([
    { title: "Term and termination (Duration)", placeholder: "30 days" },
    { title: "Payment Terms", placeholder: "15" },
    { title: "Penalty", placeholder: "500/-" },
    { title: "Minimum Wages", placeholder: "Yearly / Not Allowed / At Actual" },
    { title: "Costing - Salary Breakup", placeholder: "Yes / No" },
    { title: "SLA", placeholder: "Specific Page/Clause" },
    { title: "Indemnity", placeholder: "Specific Page/Clause" },
    { title: "Insurance", placeholder: "Specific Page/Clause" },
  ]);
 const[underList,setUnderList]=useState([
  {type:"text",placeholder:"Under list / annexure",className:"border border-gray-300 p-2 rounded text-sm " },
 

 ])

  const handleAddClause = () => {
    setClauses([...clauses, { title: "", placeholder: "Enter clause details" }]);
  };
 

  const duplicateElement=()=>{

setUnderList([...underList,...underList])
  }

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

          <label className="inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
            Upload
            <input type="file" className="hidden" />
          </label>


          <div className="col-span-2 text-sm">
            <div className="mt-1">
              <label className="block text-sm font-medium text-gray-700">
                Status:
              </label>
              <input
                type="text"
                placeholder="Enter status"
                className="border border-gray-300 p-1 rounded w-full text-sm"
              />

            </div>

          </div>
        </div>
      ))}

      { /* Entity Type */}

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Entity Type</h2>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="entityType" value="single" className="accent-blue-600" checked={entityType === "single"}
              onChange={(e) => setEntityType(e.target.value)}
            />
            Single Entity
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="entityType" value="group" className="accent-blue-600" checked={entityType === "group"}
              onChange={(e) => setEntityType(e.target.value)}
            />
            Single Entity with Group Companies
          </label>
          {
            entityType === 'group' && (
              <>
              { underList.map((value,key)=>(
                
                <input key={key}
                  type={value.type}
                  placeholder={value.placeholder}
                  className={value.className}
                />  
                
              ))
              }

                <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700" 
                onClick={duplicateElement}> +
                </button>
              </>
            )
          }
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
            <input type="email" placeholder="Email" className="w-full border p-2 rounded text-sm" />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Person from Client</h3>
            <input type="text" placeholder="Name" className="w-full border p-2 rounded text-sm mb-2" />
            <input type="text" placeholder="Contact No" className="w-full border p-2 rounded text-sm mb-2" />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded text-sm" />
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




