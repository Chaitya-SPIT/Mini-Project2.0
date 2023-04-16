import React from "react";
import {ethers} from 'ethers'
import SliderDoc from "../components/SliderDoc";
import Profile from "../components/Profile";
import GoodDay from "../components/GoodDay";
import Navbar from "../components/Navbar";

const card = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
  { title: "6" },
];

const user = {
  name: "Chaitya Dobariya",
  work: "Neurologist",
  location: "Bottrop, Germany",
  birth: "15-07-03",
  blood: "A+",
  profile: "Doctor"
}

function Doctor({ state, account }) {

  const createAdmin = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const admin = await contract.createAdmin();
    await admin.wait();
  }

  const addAdmin = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const adminAddress = document.querySelector("#adminAddress").value;
    if (!ethers.utils.isAddress(adminAddress)) {
      alert("Invalid Address!");
      return;
    }
    const addAdmin = await contract.addAdmin(adminAddress);
    await addAdmin.wait();
  }

  return (
    <>
      <Navbar />
      <div className="bkgrd h-screen flex">
        <div className="flex flex-col justify-around w-3/5 h-full px-5">
          <div className="rounded-xl w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-[250px] px-5 flex flex-col justify-around items-start">
            <GoodDay user={user.name} />
            <div>Connected Account: {account}</div>
            <input
              type="text"
              className="bg-transparent placeholder-white rounded-md border-solid border-2 border-white text-xl"
              id="adminAddress"
              placeholder="Enter Admin Address"
            />
            <button type="button" onClick={addAdmin}>
              Add Admin
            </button>
            <button
              className="button h-12 w-1/2 text-lg font-bold"
              type="button"
              onClick={createAdmin}
            >
              Create Admin
            </button>

          </div>
          <SliderDoc cards={card} state={state} />
        </div>
        <div className="w-2/5 h-full px-5 flex flex-col justify-around">
          <Profile user={user} />
        </div>
      </div>
    </>
  );
}

export default Doctor;
