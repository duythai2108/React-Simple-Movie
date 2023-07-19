import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <div className="absolute overlay inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg bg-opacity-1"></div>
          <img
            src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFydmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Advenger: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="p-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="p-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="p-2 px-4 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout">
        <h2 className="capitalize text-white">Now playing</h2>
      </section>
    </Fragment>
  );
}

export default App;
