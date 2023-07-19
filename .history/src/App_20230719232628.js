import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <img
            src="https://images.unsplash.com/photo-1571781565036-d3f759be73e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFydmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="wfull"
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
