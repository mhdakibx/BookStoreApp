import Home from "./components/home/home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

import Contacts from "./contacts/Contacts";
import Abouts from "./abouts/Abouts";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/Authprovider";
import { Navigate } from "react-router-dom";




const App = () => {

  const [authUser, setAuthUser] = useAuth();
  console.log("Navbar Auth User:", authUser);


  return (
    <>
      

    <div className="dark:bg-slate-700 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />

      </Routes>
       <Toaster />
    </div>

    </>
  );
};

export default App;
