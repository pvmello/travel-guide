import React from "react";
import Game from "../assets/game.jpeg";
import MemoryGame from "../assets/memorygame.jpg";
import Bankassist from "../assets/bankassist.jpeg";
import EatnSplit from "../assets/eatnsplitapp.jpeg";
import TravelList from "../assets/travelapp.jpeg";
import Guide from "../assets/guide.jpeg"


const Work = () => {
  return (
    <div name="work" id="work" className="w-full md:h-screen text-gray-300  bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div style={{ backgroundImage: `url(${Game})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Dice Game
              <p>HTML, CSS, Js</p></span>
              <div className="pt-8 text-center">
                <a href="https://pvmello.github.io/dicegame-/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/pvmello">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Guide})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">Travel APP Website
              <p>React App, Typescript</p></span>
              <div className="pt-8 text-center">
                <a href="https://paullomellotravelguide.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/pvmello">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Bankassist})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Bankassist Website <p>HTML, CSS, Js</p></span>
              <div className="pt-8 text-center">
                <a href="https://pvmello.github.io/bankistweb/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/pvmello">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${MemoryGame})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Memory Game <p>React App</p></span>
              <div className="pt-8 text-center">
                <a href="https://paulo-memorygame-app.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/pvmello">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${EatnSplit})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Eat and Split bill <p>React App</p></span>
              <div className="pt-8 text-center">
                <a href="https://paulosplitbill.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/pvmello">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${TravelList})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">Travel App <p>React App</p></span>
              <div className="pt-8 text-center">
                <a href="https://paulotravellist.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/pvmello">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
