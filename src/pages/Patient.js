import React from "react";
import Authorize from "../components/Authorize";
import Slider from "../components/Slider";
import Profile from "../components/Profile";
import Greeeting from "../components/Greeeting";
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
  name: "Mohit Agarwal",
  work: "Software Engineer",
  location: "Bottrop, Germany",
  birth: "27-07-03",
  blood: "A+",
  profile: "Patient"
}

function Patient( {state, account} ) {
  return (
    <>
      <Navbar />
      <div className="bkgrd h-screen flex">
        <div className="flex flex-col justify-around w-3/5 h-full px-5">
          <Greeeting user={user.name} state={state} account={account}/>
          <Slider cards={card} state={state} account={account}/>
        </div>
        <div className="w-2/5 h-full px-5 flex flex-col justify-around">
          <Profile user={user} />
          <div className="bg-blue-500 bg-opacity-[0.5] h-2/5 flex rounded-xl p-5 flex-col space-y-5 overflow-y-scroll">
            <Authorize state={state} account={account} />
            <Authorize state={state} account={account} />
            <Authorize state={state} account={account} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Patient;
