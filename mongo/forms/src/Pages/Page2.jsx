import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function Page2() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [sizePerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, [page, sizePerPage]);

  const fetchData = () => {
    axios.get(`http://127.0.0.1:3001?page=${page}&size=${sizePerPage}`)
      .then(result => setUsers(prevUsers => [...prevUsers, ...result.data]))
      .catch(err => console.error(err));
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (

    
<>

<button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="cta-button-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      
     
   </div>
</aside>



    <div className="container mx-auto my-8 ml-80 w-[60rem]">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.email}
              </td>
              <td className="px-6 py-4">
                {user.password}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
          onClick={handleNextPage}
        >
          Load More
        </button>
      </div>
    </div>
    </>
  );
}

export default Page2;
