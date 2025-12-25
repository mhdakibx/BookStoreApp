import React from 'react'
import { useAuth } from '../context/Authprovider.jsx';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handlelogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successful");
            // document.getElementById("my_modal_3").close();
            
            setTimeout(() => {window.location.reload();}, 2000);
        }catch (error) {
            toast.error("Error in Logout"+ error.message);
            setTimeout(() => {}, 3000);
        }
    }
  return (
    <div>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout