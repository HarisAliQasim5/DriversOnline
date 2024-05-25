import React, { useEffect, useState } from 'react'
import getRecords from '@/firebase/getRecords';
import updateRecord from '@/firebase/updateRecord';
import deleteById from '@/firebase/deleteById';
import { HiOutlineRefresh } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Loader from '@/components/Dasboard/Loader';
import Layout from '@/components/Dasboard/Layout';
import Navbar from '@/components/Dasboard/Navbar';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import VehiclePopup from '@/components/Dasboard/VehiclePopup';
import { createVehicle } from './../../firebase/newTableFormation';  // Import the createVehicle function

const Fares = () => {
    const [data, setdata] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [popup, setpopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [vehicleData, setVehicleData] = useState({ seats: "", type: "", pricePerKm: "", imageUrl: "" });
    const [type, settype] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await getRecords("vehicles");
            setdata(res);
            setFilteredData(res);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (searchQuery) {
            const filtered = data.filter(vehicle =>
                vehicle.data.type.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleUpdate = (vehicle) => {
        settype("update");
        setVehicleData({
            type : vehicle.data.type ,
            seats : vehicle.data.seats ,
            imageUrl : vehicle.data.imageUrl ,
            pricePerKm : vehicle.data.pricePerKm ,
            key : vehicle.key
        });
        setpopup(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { type, imageUrl, pricePerKm, seats } = vehicleData;
            const vehicleDataToSubmit = { type, imageUrl: imageUrl || null, pricePerKm: parseFloat(pricePerKm), seats: parseInt(seats) };
            await createVehicle(vehicleDataToSubmit);
            toast.info("Vehicle Added Successfully", {
                position: "top-right",
                type: "success",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            setpopup(false); 
            fetchData(); 
        } catch (error) {
            toast.info("Error Occurred", {
                position: "top-right",
                type: "success",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        setpopup(false);
        try {
            setLoading(true);
            const result = await updateRecord("vehicles", vehicleData.key, {
                type: vehicleData.type,
                seats: vehicleData.seats,
                imageUrl: vehicleData.imageUrl,
                pricePerKm: vehicleData.pricePerKm,
            });
            setLoading(false);
            if(result) {
                toast.info("Updated", {
                    position: "top-right",
                    type: "success",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            }
            
            fetchData();
        } catch (err) {
            setLoading(false);
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
        }
    };

    const handleAdd = () => {
        settype("add");
        setVehicleData("")
        setpopup(true);
    }

    const handleRefresh = async () =>{
      
      
        setLoading(true);
        await fetchData()
        toast.info("Refreshed", {
          position: "top-right",
          type: "success",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
      });
    }
    const handelDelete = async (id) =>{
        try {
          setLoading(true)
            const result = await deleteById("vehicles", id);
            if (result) {
              toast.info("Deleted Successfully", {
                position: "top-right",
                type: "success",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
                await fetchData()
              console.log("Document deleted successfully");
            }
            else{
              setLoading(false);
              toast.info("Customer Not Found", {
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
          }
          catch (error) {
            setLoading(false)
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
            console.error("Error deleting document:", error);
          }
    }


    return (
        <Layout>
            <Navbar />
            <ToastContainer />
            <div className='lg:-mt-10 xl:-mt-10 p-4 lg:p-0'>
                <VehiclePopup isOpen={popup} setIsOpen={setpopup} vehicleData={vehicleData} type={type} setVehicleData={setVehicleData} handleSubmit={handleSubmit} handleEdit={handleEdit} />
                {loading ? <Loader /> :
                    <div className='min-h-screen w-full'>
                        <section>
                            <h1 className='text-3xl font-bold pb-5 text-red-600 pt-10'>Vehicles</h1>
                            <div className="mx-auto max-w-screen-xl">
                                <div className='bg-[#283045] shadow-md sm:rounded-lg overflow-hidden mx-auto'>
                                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                        <div className="flex gap-x-6 sm:gap-x-0 sm:grid justify-between w-full md:w-1/2">
                                            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                                <div className="relative w-full">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" id="simple-search" className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 bg-[#353C56] border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Search" required="" value={searchQuery} onChange={handleSearch} />
                                                </div>
                                            </form>
                                            <HiOutlineRefresh onClick={handleRefresh} className='w-5 h-5 text-white cursor-pointer sm:hidden mt-2' />
                                        </div>
                                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 p-2 rounded-xl md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                            <div className='bg-[#171C30] p-2 rounded-md'>
                                            <HiOutlineRefresh onClick={handleRefresh} className='w-5 h-5 text-white cursor-pointer hidden sm:flex' />
                                            </div>
                                            
                                            <button type="button" className="flex items-center justify-center text-white bg-blue-600 font-medium rounded-lg text-sm px-4 py-2 " onClick={handleAdd}>
                                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                                </svg>
                                                Add Vehicle
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative overflow-x-auto">
                                        <table className="w-full text-sm text-left text-gray-400">
                                            <thead className="text-xs uppercase bg-[#353C56] text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-4 py-3">Type</th>
                                                    <th scope="col" className="px-4 py-3">Price/Km</th>
                                                    <th scope="col" className="px-4 py-3">Seats</th>
                                                    <th scope="col" className="px-4 py-3">Image</th>
                                                    <th scope="col" className="px-4 py-3">
                                                        <span className="sr-only">Actions</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredData && filteredData.length > 0 ? (
                                                    filteredData.map((vehicle) => (
                                                        <tr className="border-b border-gray-700" key={vehicle.key}>
                                                            <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">{vehicle.data.type}</th>
                                                            <td className="px-4 py-3">{vehicle.data.pricePerKm}</td>
                                                            <td className="px-4 py-3">{vehicle.data.seats}</td>
                                                            <td className="px-4 py-3">{vehicle.data.imageUrl}</td>
                                                            <td className="px-4 py-3 flex items-center justify-end gap-x-2">
                                                                <FaRegEdit className='w-5 h-5 cursor-pointer' onClick={() => handleUpdate(vehicle)} />
                                                                <MdDelete className='w-5 h-5 text-red-600' onClick={() => handelDelete(vehicle.key)} />
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    data && data.length > 0 &&
                                                    data.map((vehicle) => (
                                                        <tr className="border-b border-gray-700" key={vehicle.key}>
                                                            <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">{vehicle.data.type}</th>
                                                            <td className="px-4 py-3">{vehicle.data.pricePerKm}</td>
                                                            <td className="px-4 py-3">{vehicle.data.seats}</td>
                                                            <td className="px-4 py-3">{vehicle.data.imageUrl}</td>
                                                            <td className="px-4 py-3 flex items-center justify-end gap-x-2">
                                                                <FaRegEdit className='w-5 h-5 cursor-pointer' onClick={() => handleUpdate(vehicle)} />
                                                                <MdDelete className='w-5 h-5 text-red-600' onClick={() => handelDelete(vehicle.key)} />
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default Fares;
