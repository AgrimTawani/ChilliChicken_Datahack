import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { SideBar } from '../components';


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-black flex justify-center items-center relative">
      <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 flex items-center absolute right-[5%] top-[5%] z-10">
                    To Home 
                    <FaArrowLeft className="ml-2" />
                </button>
      </Link>
        <div className='absolute left-[0]'>
            <SideBar />
        </div>
      <div className='absolute top-[-20%] left-[10%] scale-75'>
        <Spline scene="https://prod.spline.design/c166hG9Xhw4LAqD9/scene.splinecode" />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 absolute h-[40%] top-[75%] w-[55%] transform -translate-y-1/2 -translate-x-1/2 right-[-15%]">
         <h2 className="text-gray-800 text-xl font-semibold mb-4">Delay Indicator</h2>
            
            <div className='flex flex-col gap-16 pt-8 w-[25%]'>
              <input type="text" placeholder='Departure' />
              <input type="text" placeholder='Arrival' />
            </div>

      </div>

    </div>

  );
}

export default Dashboard;