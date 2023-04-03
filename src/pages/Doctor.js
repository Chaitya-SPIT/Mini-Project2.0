import React from "react";
import Slider from "../components/Slider";
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

function Doctor({state,account}) {

  const createAdmin = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const admin = await contract.createAdmin();
    await admin.wait();
  }

  return (
    <>
      <Navbar />
      <div className="bkgrd h-screen flex">
        <div className="flex flex-col justify-around w-3/5 h-full px-5">
          <div className="rounded-xl w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-[250px] px-5 flex flex-col justify-around items-start">
            <GoodDay user={user.name}/>
            <div>Connected Account: {account}</div>
            <button
              className="button h-12 w-1/2 text-lg font-bold"
              type="button"
              onClick={createAdmin}
            >
              Create Admin
            </button>
          </div>
          <Slider cards={card} state={state}/>
        </div>
        <div className="w-2/5 h-full px-5 flex flex-col justify-around">
          <Profile user={user} />
        </div>
      </div>
    </>
  );
}

export default Doctor;
