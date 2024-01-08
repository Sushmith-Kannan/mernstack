import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        <aside
          id="default-sidebar"
          className="invisible lg:visible  md:visible fixed top-0 left-0 z-40 w-full sm:w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50"></div>
        </aside>

       <div className="relative bg-white mx-4 md:mx-[15rem] lg:mx-[19rem] mt-8 md:mt-0  md:w-[70rem] ">



          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-8">
              <img
                src="https://img.freepik.com/free-photo/man-smiling-with-arms-crossed_1187-2903.jpg?w=740&t=st=1703698130~exp=1703698730~hmac=845698cf3fba577d3f4b244b16457fac6a8ba3656bca447437ef0aee01ea0826"
                alt="profile"
                style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
              />
            </div>
            <div>
              <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl pt-3 pl-5 text-center ">
                I'm Rayan Adlrdard
              </h1>
              <h1 className=" mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl pl-5 text-center ">
                <span className="text-yellow-500">Front-End</span> Developer
              </h1>
              <p className="ml-5 text-gray-600 text-sm md:text-base lg:text-base text-center">
                I'm a 2020 presidential candidate. I've put a hundred bands on Zimmerman.
              </p>
              <div className='flex flex-col items-center'>
              <button className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4 ">
                Hire me
              </button>
              </div>
             
            </div>
          </div>
        </div>

        <nav
  id="sidenav-7"
  className="invisible md:visible fixed right-0 top-0 z-[1035] h-full w-20 overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false'] -translate-x-0 transition-transform hidden sm:block"
  data-te-sidenav-init
  data-te-sidenav-hidden="true"
  data-te-sidenav-right="true"
></nav>


<h2 className="text-2xl font-semibold text-center ml-4 mt-8 md:ml-[18rem] lg:ml-[18rem] sm:mx-auto s ">
  My Services
</h2>


        <p className="ml-9 text-gray-600 text-sm mt-2 md:text-base lg:text-base mr-7 sm:mx-auto lg:ml-[18rem] text-center md:ml-[18rem]">
          Who am I? Someone that's afraid to let go, uh You decide if you're ever gonna let me know, yeah!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:ml-[12rem] lg:ml-[18rem] lg:mr-[6rem] mt-2 md:mt-5 lg:mt-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          
        </div>

        <h1 className="text-2xl font-semibold text-center ml-4 mt-8 md:ml-[18rem] lg:ml-[18rem] sm:mx-auto sm:text-center">Price plans</h1>
      </body>
    </>
  );
}

const ServiceCard = () => (
  <div className="bg-white rounded-md flex flex-col items-center justify-center h-32 w-[20rem] md:w-[10rem] lg:w-72 mx-4 my-4">
    <div>
      <FaCode color="black" size="2rem" />
    </div>
    <div>
      <h1 className="text-lg mt-2">Web Development</h1>
      <p className="text-center mt-2 text-gray-600">Blog, e-commerce</p>
    </div>
  </div>
);

export default App;
