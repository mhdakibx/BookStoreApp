import Home from "./components/home/home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

import Contacts from "./contacts/Contacts";
import Abouts from "./abouts/Abouts";



const App = () => {
  return (
    <>
      

    <div className="dark:bg-slate-700 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />

      </Routes>
    </div>

    </>
  );
};

export default App;
