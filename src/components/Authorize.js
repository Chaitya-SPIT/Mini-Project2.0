import React from "react";
import { useState, useEffect } from "react";

function Authorize(props) {

  const [doctors, setDoctor] = useState([]);
  const { contract } = props.state;

  useEffect(() => {
    const doctorData = async () => {
      const doctor = await contract.getAllDocs(props.account[0]);
      setDoctor(doctor);
      console.log(doctor);
    }
    contract && doctorData();
  }, [contract]);

  // const grantPermission = async (event, doctorAddress) => {
  //   event.preventDefault();
  //   const { contract } = props.state;
  //   const givePermission = await contract.givePermission(doctorAddress);
  //   await givePermission.wait();
  // }

  return (
    <div className="flex justify-between">
      {doctors.map((doctor) => {
        return (
          <>
            <p className="bg-blue-500 text-white rounded-md h-12 w-4/5 py-2 text-center border-solid border-2 border-white text-xl">
              {doctors}
            </p>
            <button className="button mx-5 h-12 text-lg font-bold" type="button">
              Grant
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Authorize;
