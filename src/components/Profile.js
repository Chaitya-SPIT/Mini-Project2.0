import React from "react";

function Profile(props) {
  return (
    <div className="rounded-xl bg-blue-500 bg-opacity-[0.3] h-[300px] text-white flex flex-col justify-around hover:bg-opacity-100 transition-all ease-out duration-500">
      <div className="flex justify-around h-3/5">
        <img className="rounded-lg" src="https://i.pravatar.cc/300" alt="Hello" />
        <div className="flex flex-col">
          <p className="text-4xl uppercase">{props.user.name}</p>
          <p className="text-3xl  mt-3 before:content-['🗒️']">{props.user.work}</p>
          <p className="text-3xl mt-4 before:content-['🏡']">{props.user.location}</p>
        </div>
      </div>
      <div className="flex h-1/5 justify-around">
        <div>
          <p className="font-semibold text-xl uppercase">Date Birth</p>
          <p className="text-xl text-center">{props.user.birth}</p>
        </div>
        <div>
          <p className="font-semibold text-xl uppercase">Blood Group</p>
          <p className="text-xl text-center">{props.user.blood}</p>
        </div>
        <div>
          <p className="font-semibold text-xl uppercase">profile type</p>
          <p className="text-xl text-center">{props.user.profile}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
