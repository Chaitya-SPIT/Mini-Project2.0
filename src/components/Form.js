import React, { useState } from "react";

function Form(props) {

  return (
    <div className="bg-white rounded-md shadow-md p-6 w-1/2 absolute z-50 left-1/4 right-1/4 top-1/4">
      <h2 className="text-lg font-medium mb-4">Enter Details</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="patientAddress" className="block font-medium mb-2">
            Patient Address
          </label>
          <input
            type="text"
            id="patientAddress"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="diagnosis" className="block font-medium mb-2">
            Diagnosis
          </label>
          <input
            type="text"
            id="diagnosis"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="treatment" className="block font-medium mb-2">
            Treatment
          </label>
          <input
            type="text"
            id="treatment"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="docname" className="block font-medium mb-2">
            Doctor Name
          </label>
          <input
            type="text"
            id="docname"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="doctorAddress" className="block font-medium mb-2">
            Doctor Address
          </label>
          <input
            type="text"
            id="doctorAddress"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={props.addData}
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            className="ml-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
            onClick={props.onClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
