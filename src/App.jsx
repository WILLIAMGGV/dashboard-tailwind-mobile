import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-slate-200 font-sans w-60 mx-auto m-5 h-[550px] rounded-3xl">
        <div className=" h-36 bg-blue-800 bg-opacity-80 rounded-3xl p-3 shadow-2xl border-2 border-blue-950 border-opacity-60 flex flex-col place-content-end">
          <p className=" text-yellow-500 text-lg">Welcome Back, </p>
          <p className=" text-white text-xl">William,</p>
          <div className="flex place-content-end text-white">
            <p className="text-[10px] text-justify">Book your next trip</p>
          </div>
        </div>
        <div className="">
          <div className="flex p-4 items-center mt-4">
            <div className="bg-white rounded-md pl-3 pr-3 pt-1 pb-1">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="text-[12px] ml-2">Your Destination</div>
          </div>
          <div className="flex p-4 items-center">
            <div className="bg-white rounded-md pl-3 pr-3 pt-1 pb-1">
              <i class="fa-solid fa-calendar"></i>
            </div>
            <div className="text-[12px] ml-2">Date, Sun, 19 - Sat, Jul 25</div>
          </div>
          <div className="flex p-4 items-center">
            <div className="bg-white rounded-md pl-3 pr-3 pt-1 pb-1">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="text-[12px] ml-2">1 Adult, 0 Children, Room</div>
          </div>
          <div className="flex m-4 items-center">
            <button className="bg-blue-600 text-white shadow-2xl hover:bg-blue-950 rounded-lg w-full h-10">
              Search
            </button>
          </div>
        </div>

        <div className="flex rounded-md bg-white p-4 m-4 place-content-between">
          <div className="flex flex-col place-content-center">
            <div className=" bg-blue-400 mx-auto pt-1 pb-1 pl-2 pr-2 my-auto rounded-md hover:bg-blue-900 cursor-pointer">
              <i className="fa-solid fa-plane hover:text-white"></i>
            </div>
            <p className=" text-[10px] text-center">Flight</p>
          </div>
          <div className="flex flex-col">
            <div className=" bg-red-500 mx-auto cursor-pointer hover:text-white pt-1 pb-1 pl-2 pr-2 my-auto rounded-md">
              <i class="fa-solid fa-car  hover:text-white cursor-pointer"></i>
            </div>
            <p className=" text-[10px] text-center">Car Rental</p>
          </div>
          <div className="flex flex-col">
            <div className=" bg-amber-400 cursor-pointer hover:text-white mx-auto pt-1 pb-1 pl-2 pr-2 my-auto rounded-md">
              <i class="fa-solid fa-car  hover:text-white cursor-pointer"></i>
            </div>
            <p className=" text-[10px] text-center">Taxi</p>
          </div>
          <div className="flex flex-col  place-content-center">
            <div className=" bg-yellow-600 cursor-pointer hover:text-white mx-auto pt-1 pb-1 pl-2 pr-2 my-auto rounded-md">
              <i class="fa-solid fa-train   cursor-pointer"></i>
            </div>
            <p className=" text-[10px] text-center">Train</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
