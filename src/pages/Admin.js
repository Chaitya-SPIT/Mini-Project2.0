import React from "react";
import { useState,useEffect } from "react";
import Profile from "../components/Profile";
import LineGraph from "../components/LineGraph";
import GoodDay from "../components/GoodDay";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const user = {
  name: "Vikas Rajpurohit",
  work: "Database Manager",
  location: "Bottrop, Germany",
  birth: "18-07-03",
  blood: "A+",
  profile: "Admin",
};

function Admin({state, account}) {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow((prev) => !prev);
  };

  const addData = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const patientAddress = document.querySelector("#patientAddress").value;
    const diagnosis = document.querySelector("#diagnosis").value;
    const treatment = document.querySelector("#treatment").value;
    const docname = document.querySelector("#docname").value;
    const doctorAddress = document.querySelector("#doctorAddress").value;
    //console.log(diagnosis, treatment, docname, contract);
    // const createAdmin = await contract.createAdmin(); --> use it while admin login
    // await createAdmin.wait();
    const addPatientData = await contract.addPatientData(patientAddress, diagnosis, treatment, docname, doctorAddress);
    await addPatientData.wait();
    //console.log("Data Added!");
    setShow((prev) => !prev);
  }

  const [patients, setPatient] = useState([]);
  const { contract } = state;
  //console.log(state);
  //console.log(account[0]);

  useEffect(() => {
    const patientCount = async () => {
      const patientCount = await contract.countPatient();
      setPatient(patientCount);
    }
    contract && patientCount();
  }, [contract]);

  return (
    <>
      {show && <Form onClick={onClick} addData={addData} />}
      <Navbar />
      <div className={`bkgrd h-screen flex flex-col p-5 ${show ? 'filter blur-sm' : ''}`}>
        <div className="flex w-full h-3/6 justify-around items-center">
          <div className="w-3/5 px-5">
            <div className="rounded-xl w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-[250px] px-5 flex flex-col justify-around items-start">
              <GoodDay user={user.name} />
              <div>Connected Account: {account}</div>
              <div>Total Records Added: {Number(patients)}</div>
              <button
                className="button h-12 w-1/2 text-lg font-bold"
                type="button"
                onClick={onClick}
              >
                Add Patient Data
              </button>
            </div>
          </div>
          <div className="w-2/5  px-5">
            <Profile user={user} />
          </div>
        </div>
        <div className="w-full h-3/6 px-5">
          <LineGraph />
        </div>
      </div>
    </>
  );
}

export default Admin;
