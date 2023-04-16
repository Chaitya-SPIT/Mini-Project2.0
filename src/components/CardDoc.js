import React,{useState,useEffect} from "react";

function CardDoc(props) {

  const [patients, setPatient] = useState([]);
    const { contract } = props.state;
    //console.log(state);
    //console.log(account[0]);

    useEffect(() => {
        const patientData = async () => {
            const account1="0xF17D97E0FF763ce541fAD4aae5C141FCeCcEF5D1"
            const patient = await contract.getPatientData(account1);
            setPatient(patient);
        }
        contract && patientData();
    }, [contract]);

  return (
    <>
      <div>{patients[0]}</div>
      <div>{patients[1]}</div>
      <div>{patients[2]}</div>
      {/* <div>{patients[3]}</div> */}
    </>
  );


}

export default CardDoc;
