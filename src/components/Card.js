import { useState, useEffect } from "react";
import React from "react";

function Card(props) {

  const [patients, setPatient] = useState([]);
  const { contract } = props.state;
  //console.log(state);
  //console.log(account[0]);

  useEffect(() => {
    const patientData = async () => {
      const patient = await contract.getAllData(props.account[0]);
      setPatient(patient);
    }
    contract && patientData();
  }, [contract]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return `${formattedDate} at ${formattedTime}`;
  };

  return (
    props.type === '1' ?
      <div title={props.title} className="card hover:after:content-[attr(title)]">{props.title}</div>
      :
      
        <div className="flex flex-col items-center">
        <img src={props.img} alt="records" className="w-1/2" />
        <p className="text-white mt-5">
          {props.title}
        </p>
          {patients.map((patient) => {
            return (
              <div>
                <div>{patient.diagnosis}</div>
                <div>{patient.treatment}</div>
                <div>{patient.docName}</div>
                <div>{formatTimestamp(String(patient.timestamp))}</div>
              </div>
            );
          })}
      </div>
  );


}

export default Card;
