import React from "react";
import GoodDay from "./GoodDay";
import {ethers} from 'ethers';

function Greeeting(props) {

  const grantPermission = async (event) => {
    event.preventDefault();
    const { contract } = props.state;
    const doctorAddress = document.querySelector("#doctorAddress").value;
    if (!ethers.utils.isAddress(doctorAddress)) {
      alert("Invalid Address!");
      return;
    }
    const givePermission = await contract.givePermission(doctorAddress);
    await givePermission.wait();
  }

  const revokePermission = async (event) => {
    event.preventDefault();
    const { contract } = props.state;
    const doctorAddress = document.querySelector("#doctorAddress").value;
    if (!ethers.utils.isAddress(doctorAddress)) {
      alert("Invalid Address!");
      return;
    }
    const RevokePermission = await contract.RevokePermission(doctorAddress);
    await RevokePermission.wait();
  }


  return (
    <div className="rounded-xl w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-[250px] px-5 flex flex-col justify-around">
      <GoodDay user={props.user}/>
      <div>Connected Account: {props.account}</div>
      <div className="flex items-center">
        <input
          type="text"
          id="doctorAddress"
          className="bg-transparent placeholder-white rounded-md h-12 w-3/5 p-5 border-solid border-2 border-white text-xl"
          placeholder="Enter Doctor Address"
        />
        <button className="button mx-5 h-12 text-lg font-bold" type="button" onClick={grantPermission}>
          Grant
        </button>
        <button className="button mx-5 h-12 text-lg font-bold" type="button" onClick={revokePermission}>
          Revoke
        </button>
      </div>
    </div>
  );
}

export default Greeeting;
