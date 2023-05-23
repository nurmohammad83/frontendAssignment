import LeftSideBar from "./LeftSideBar";
import MainContent from './MainContent'
import RightSideBar from "./RightSideBar";
import victor from '../assets/Wallet.png'
const Home = () => {
  return (
    <section className="bg-black h-[calc(100vh - 98px)]">
      <div className="flex">
        {/* Right Side */}
        <div className="w-[251px] text-white lsideH border-[#dbe1f5] border-r-2">
          <LeftSideBar />
        </div>

        {/* Left Side */}
        <div className="w-full text-white">
          <div className="h-[62px] mt-3 px-[10px] border-b border-gray-400 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-lg pl-9 font-semibold stroke">
                Section <hr className="h-[2px] bg-[#3772FF]" />
              </h1>

              <div className="bg-[#191B20] gap-x-3 rounded-lg  px-[10px] py-2 flex justify-center items-center ">
              <img className="w-5 h-4" src={victor} alt="" />
                <span className="text-[16px] text-medium font-poppins">
                  0.2 $XYZ
                </span>
                <button className="font-semibold text-[12px] text-center py-1 px-[6px] rounded-md bg-[#A3E3FF]">
                  Tire 1
                </button>
              </div>
            </div>
          </div>
          {/* right flex */}
          <div className="flex">
            <div className="w-full "><MainContent /></div>
            <div className="w-[298px] rightH border-gray-400 border-l">
             <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
