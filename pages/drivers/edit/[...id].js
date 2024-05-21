import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import getDataById from '@/firebase/getDataById';
import updateRecord from '@/firebase/updateRecord';
import Layout from "@/components/Dasboard/Layout";
import Loader from "@/components/Dasboard/Loader";
import Navbar from "@/components/Dasboard/Navbar";
import ImagePreviewPopup from "@/components/Dasboard/ImagePreviewPopup";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const EditDrivers = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [data, setData] = useState(null);
  const [img , setImg] = useState();
  const [popup, setpopup] = useState(false);

  // Convert id to a string if it's an array
  const driverId = Array.isArray(id) ? id[0] : id;

  useEffect(() => {
    if (!driverId) {
      return;
    }
    fetchData();
  }, [driverId]);

  const fetchData = async () => {
    try {
      const res = await getDataById('drivers', driverId);
      if (res) {
        console.log('Response:', res);
        setData(res);
        console.log('Data:', res); // Log the response directly
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = (event) => {
    const updatedVerified = event.target.checked;
    setData((prevData) => ({
      ...prevData,
      verified: updatedVerified,
    }));
    console.log("Check",data)
  };

  const handleSubmit = async () => {
    try {
        const result = await updateRecord('drivers', driverId, { verified: data.verified });
        if (result) {
            toast.info("Edit Successfully", {
                position: "top-right",
                type: "success",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });

            // Redirect to /drivers after 3 seconds
            setTimeout(() => {
                router.push('/dashboard/Drivers');
            }, 3500);
        } else {
            toast.info("User Not Found", {
                position: "top-right",
                type: "error",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    } catch (error) {
        toast.info("Error Occurred", {
            position: "top-right",
            type: "error",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
        console.log('Error updating data:', error);
    }
};


  

  return (
    <Layout>
        <Navbar/>
        <ToastContainer />
    {/* <div>
      {data ? (
        <div>
          <h1>{data.alternatePhone}</h1>
          <p>{data.details}</p>
          <img src={data.backDocumentUrl} alt="" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div> */}
    {data ?
     (<div>
        <ImagePreviewPopup isOpen={popup}  setIsOpen={setpopup} image={img}/>
        <h1 className={`text-3xl font-bold  pb-5 text-red-600   `}>Edit Drivers</h1>
        <div className="bg-[#283045] p-3 rounded-lg">
         <h1 className={`text-2xl font-bold  pb-5 text-purple    `}>Personal Info</h1>
        <div className="grid grid-cols-2 gap-x-5 my-3 gap-y-3">
            <div className="flex flex-col">
            <label className="pb-1 text-white">Name</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.fullName}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">Email</label>
            <input className="bg-[#283045] border border-gray-500 p-1 px-2 rounded-md text-gray-300" type="email" value={data.email} />
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">Phone No</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.mobileNumber}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">Secondary Phone No</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.alternatePhone}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">ID Card No</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.idCardNumber}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">License No</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.licenseNumber}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">Language</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.language}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">Gender</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.selectedGender}/>
            </div>
            {/* <div>
              <label className={`text-white ${data.verified ? "text-green" : "text-red-600"} `}>Verified</label>
              <div className="mt-2">
                <select
                  value={data.verified}
                  className={`w-full bg-[#283045] border border-gray-500 p-1 rounded-md px-2 text-gray-300 `}
                >
                  <option className="text-gray-300" value="true">true</option>
                  <option className="text-gray-300" value="false">false</option>
                </select>
               </div>
            </div> */}
            <div className="flex gap-x-8">
            <div className="flex flex-col">
                <label className="pb-1 text-white ">Verified</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={data.verified} 
                    onChange={handleToggle} 
                    className="sr-only peer" 
                  />
                  <div className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-16 h-7 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-9 peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500"></div>
                </label>
              </div>
              <div className="flex flex-col">
                <label className="pb-1 text-white ">Blocked</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={data.blocked}
                    className="sr-only peer" 
                  />
                  <div className="group peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-16 h-7 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-9 peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500"></div>
                </label>
              </div>
            </div>
           
            
            
            
        </div>
     </div>
     <div className="mt-10 bg-[#283045] p-3 rounded-lg">
        <div className="grid grid-cols-2 gap-x-5">
            <div className=" p-3 ">
                <h1 className="pb-4 text-white text-xl font-bold">ID Card Front</h1>
                <img src={data.idCardFrontUrl} alt="" className="h-[250px] w-full object-center pb-2 rounded-md" onClick={()=>{
                    setImg(data.idCardFrontUrl)
                    setpopup(true)
                }} />
            </div>
            <div className=" p-3 ">
                <h1 className="pb-4 text-white text-xl font-bold">ID Card Back</h1>
                <img src={data.idCardBackUrl} alt="" className="h-[250px] w-full object-center pb-2 rounded-md" onClick={()=>{
                    setImg(data.idCardBackUrl)
                    setpopup(true)
                }}/>
            </div>
            <div className=" p-3 ">
                <h1 className="pb-4 text-white text-xl font-bold">License Front</h1>
                <img src={data.licenseFrontUrl} alt="" className="h-[250px] w-full object-center pb-2 rounded-md" onClick={()=>{
                    setImg(data.licenseFrontUrl)
                    setpopup(true)
                }}/>
            </div>
            {data.profileImageUrl &&
            <div className=" p-3 ">
                <h1 className="pb-4 text-white text-xl font-bold">Profile Image</h1>
                <img src={data.profileImageUrl} alt="" className="h-[250px] w-full object-center pb-2 rounded-md" onClick={()=>{
                    setImg(data.profileImageUrl)
                    setpopup(true)
                }}/>
            </div>}

        </div>
     </div>
     <div className="bg-[#283045] p-3 rounded-lg mt-10">
         <h1 className={`text-2xl font-bold  pb-5 text-purple    `}>Vehicle Info</h1>
        <div className="grid grid-cols-2 gap-x-5 my-3 gap-y-3">
            <div className="flex flex-col">
            <label className="pb-1 text-white">Vehicle Name</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.vehicleName}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">Vehicle Type</label>
            <input className="bg-[#283045] border border-gray-500 p-1 px-2 rounded-md text-gray-300" type="text" value={data.vehicleType} />
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">Vehicle Model</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.vehicleModel}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">Plate No</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.plateNumber}/>
            </div>
            <div className="flex flex-col">
            <label className="pb-1 text-white">No of Seats</label>
            <input className="bg-[#283045] border border-gray-500 p-1 rounded-md px-2   text-gray-300 " type="text" value={data.numOfSeats}/>
            </div>
            <div className="col-span-2 mt-5">
                <div className="grid grid-cols-2 gap-x-5">
                <div>
                <h1 className="pb-4 text-white text-xl font-bold">Vehicle Documnet Front</h1>
                <div className="flex justify-center ">
                <img src={data.frontDocumentUrl} alt="" className="h-[400px] w-full  object-center pb-2 rounded-2xl" onClick={()=>{
                    setImg(data.frontDocumentUrl)
                    setpopup(true)
                }}/>
                </div>
                </div>
                <div>
                <h1 className="pb-4 text-white text-xl font-bold">Vehicle Document Back</h1>
                <div className="flex justify-center ">
                <img src={data.backDocumentUrl} alt="" className="h-[400px] w-full  object-center pb-2 rounded-2xl" onClick={()=>{
                    setImg(data.backDocumentUrl)
                    setpopup(true)
                }}/>
                </div>
                </div>
                </div>
               
                
            </div>
            <div className=" col-span-2 mt-5">
                <h1 className="pb-4 text-white text-xl font-bold">Vehicle Image</h1>
                <div className="flex justify-center ">
                <img src={data.vehicleImageUrl} alt="" className="h-[400px] w-[600px]  object-center pb-2 rounded-2xl" onClick={()=>{
                    setImg(data.vehicleImageUrl)
                    setpopup(true)
                }}/>
                </div>
                
            </div>
           
        </div>
     </div>
     <div className="flex justify-center pb-10">
     <button onClick={handleSubmit} className="mt-5 bg-blue-500 text-white p-2 px-6 rounded ">Submit</button>
     </div>
     
     </div>) : 
     <Loader/>

    }
   
    </Layout>
  );
};

export default EditDrivers;
