import Spline from '@splinetool/react-spline';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-black">
        <div className=' absolute top-[-30%] h-[30%]'>
            <Spline scene="https://prod.spline.design/c166hG9Xhw4LAqD9/scene.splinecode" />
        </div>
    </div>
  );
}

export default Dashboard;