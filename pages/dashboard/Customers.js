import React, { useEffect, useState } from 'react'
import getRecords from '@/firebase/getRecords';
import { HiOutlineRefresh } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import CustomerPopup from '@/components/Dasboard/CustomerPopup';
import updateRecord from '@/firebase/updateRecord';
import deleteById from '@/firebase/deleteById';
import Layout from '@/components/Dasboard/Layout';
import Navbar from '@/components/Dasboard/Navbar';

const Customers = () => {
    const [data, setdata] = useState();


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await getRecords("customers");
            res &&
            console.log(res)
            setdata(res);
            setFilteredData(res)
            console.log("data is" , data)
        } catch (error) {
            console.log(error)
        }
    }


    const handleRefresh = async () =>{
       //toast here
        await fetchData()
    }


    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [popup, setpopup] = useState(false);
    const [editData, seteditData] = useState();
    const [loading, setLoading] = useState(false);
    const [type, settype] = useState();


    useEffect(() => {
      if (searchQuery) {
        const filtered = data.filter(user =>
          user.data.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.data.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.data.email.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(data);
      }
    }, [searchQuery, data]);



    const handleUpdate = (data) =>{
        settype("edit");
        seteditData({
            blocked: data.data.blocked,
            blockedMessage: data.data.blockedMessage,
            createdAt: data.data.createdAt,
            email: data.data.email,
            fcmToken: data.data.fcmToken,
            firstName: data.data.firstName,
            gender: data.data.gender,
            lastName: data.data.lastName,
            phone: data.data.phone,
            profileImage: data.data.profileImage,
            type: data.data.type,
            updatedAt: data.data.updatedAt,
            userId: data.data.userId,
            verified: data.data.verified,
            id : data.key
          })
        setpopup(true)
    }

    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
          const result = await updateRecord("customers", editData.userId, {
            blocked: editData.blocked,
            blockedMessage: editData.blockedMessage,
            createdAt: editData.createdAt,
            email: editData.email,
            fcmToken: editData.fcmToken,
            firstName: editData.firstName,
            gender: editData.gender,
            lastName: editData.lastName,
            phone: editData.phone,
            profileImage: editData.profileImage,
            type: editData.type,
            updatedAt: editData.updatedAt,
            userId: editData.userId,
            verified: editData.verified,
          });
          console.log("Record updated successfully", result);
        } catch (err) {
          console.error("Error updating record:", err);
        }
      };


        const handelDelete = async (id) =>{
            try {
                const result = await deleteById("customers", id);
                if (result) {
                    //toast
                    await fetchData()
                  console.log("Document deleted successfully");
                }
              } catch (error) {
                console.error("Error deleting document:", error);
              }
        }
      




      return (
        <Layout>
          <Navbar/>
          
        <div className='lg:-mt-10 xl:-mt-10 p-4 lg:p-0'>
            <CustomerPopup isOpen={popup}  setIsOpen={setpopup} data={editData} seteditData={seteditData} handleEdit={handleEdit} />
          {loading ? <Loader/> :

        <div className=' min-h-screen w-full '>
         
      <section className={` `}>
       
        <h1 className={`text-3xl font-bold  pb-5 text-red-600  pt-10 `}>Users</h1>
        <div className="mx-auto max-w-screen-xl ">
          <div className={`bg-[#1E1E2C]  shadow-md sm:rounded-lg overflow-hidden mx-auto`}>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="flex gap-x-6 sm:gap-x-0 sm:grid justify-between w-full md:w-1/2">
                    <form onSubmit={(e)=>e.preventDefault()} className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Search" value={searchQuery} onChange={handleSearch} required="" />
                        </div>
                    </form>
                    <HiOutlineRefresh  onClick={handleRefresh} className='w-5 h-5 text-white cursor-pointer sm:hidden mt-2' />
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <HiOutlineRefresh   onClick={handleRefresh} className='w-5 h-5 text-white cursor-pointer hidden sm:flex' />
                    <button   type="button" className="flex items-center justify-center text-white bg-blue-600 font-medium rounded-lg text-sm px-4 py-2 ">
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add User
                    </button>

                </div>
            </div>



            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left  text-gray-400">
                    <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Name</th>
                            <th scope="col" className="px-4 py-3">Email</th>
                            <th scope="col" className="px-4 py-3">Phone</th>
                            <th scope="col" className="px-4 py-3">gender</th>
                            <th scope="col" className="px-4 py-3">Type</th>
                            <th scope="col" className="px-4 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
  {filteredData && filteredData.length > 0 ? (
    filteredData.map((data) => (
        <tr className="border-b border-gray-700 " key={data.key}>
        <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">{data.data.firstName} {data.data.lastName}</th>
        <td className="px-4 py-3">{data.data.email}</td>
        <td className="px-4 py-3">{data.data.phone}</td>
        <td className="px-4 py-3">{data.data.gender}</td>
        <td className="px-4 py-3">{data.data.type}</td>
        <td className="px-4 py-3 flex items-center justify-end gap-x-2">
            <FaRegEdit className='w-5 h-5'     onClick={() => handleUpdate(data)} />
            <MdDelete className='w-5 h-5 text-red-600'     onClick={() =>handelDelete(data.key)} />
        </td>
      </tr>
    ))
  ) : (data && data.length >0 &&
    data.map((data) => (
      <tr className="border-b border-gray-700 " key={data.key}>
        <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">{data.data.firstName} {data.data.lastName}</th>
        <td className="px-4 py-3">{data.data.email}</td>
        <td className="px-4 py-3">{data.data.phone}</td>
        <td className="px-4 py-3">{data.data.gender}</td>
        <td className="px-4 py-3">{data.data.type}</td>
        <td className="px-4 py-3 flex items-center justify-end gap-x-2">
            <FaRegEdit className='w-5 h-5'     onClick={() => handleUpdate(data)} />
            <MdDelete className='w-5 h-5 text-red-600'     onClick={() =>handelDelete(data._id)} />
        </td>
      </tr>
    ))
  )}
</tbody>

                </table>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-400">
                    {filteredData && filteredData.length >0 ? "Search" : data ? "Total": '0' }
                    <span className="font-semibold text-white"> {filteredData && filteredData.length >0 ? filteredData.length : data ? data.length: '0' }</span>
                </span>
            </div>
          </div>
        </div>
      </section>
      </div>}
      </div>
      </Layout>
    )
  }

export default Customers
