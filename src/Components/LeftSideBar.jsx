import left from '../assets/slide-left.png'
import home from '../assets/Category.png'
import tower from '../assets/groupone.png'
import share from '../assets/Group.png'
import lang from '../assets/Language.png'

const LeftSideBar = () => {
    return (
        <div className="px-3 pb-6 flex flex-col justify-between h-full">
           <div>
           <div className='flex mt-2 justify-between items-center p-5'>
                <div className='flex justify-center items-center gap-x-2'>
                    <div className='w-8 h-8 p-[5px] rounded-full font-poppins font-semibold text-[15px] text-center bg-blue-600'>N</div>
                <h1 className='text-[23px] font-poppins font-bold text-white'>Name</h1>
                </div>
                <img className='w-5 h-4' src={left} alt="" />
            </div>
            <div className="flex flex-col  gap-2">
                    <button className="px-5 py-2 flex justify-start gap-x-5 w-full hover:bg-[#353945] rounded-md">
                    <img className='w-4 h-4' src={home} alt="" />
                        <p className="text-sm font-bold">Home</p>
                    </button>
                    <button className="px-5 py-2 flex justify-start gap-x-5 w-full hover:bg-[#353945] rounded-md">
                    <img className='w-4 h-4' src={tower} alt="" />
                        <p className="text-sm font-bold">Home</p>
                    </button>
                    <button className="px-5 py-2 flex justify-start gap-x-5 w-full hover:bg-[#353945] rounded-md">
                    <img className='w-4 h-4' src={share} alt="" />
                        <p className="text-sm font-bold">Section 8</p>
                    </button>
                    <button className="px-5 py-2 flex justify-start gap-x-5 w-full hover:bg-[#353945] rounded-md">
                    <img className='w-4 h-4' src={share} alt="" />
                        <p className="text-sm font-bold">Section 8</p>
                    </button>
                  
            </div>
           </div>

            {/* Bottom */}


            <div className="w-full overflow-hidden">
                <div className="flex mb-5 w-full">
                    <div className="w-[50%] p-1 rounded-md">

                    <div className='flex justify-center bg-[#353945] rounded-md py-2  items-center gap-x-2'>
                    <div className='w-4 h-4 flex justify-center items-center px-2 pt-[2px] rounded-full font-poppins  font-semibold text-[10px] bg-blue-600'>N</div>
                <span className='text-[14px] font-poppins font-semibold text-white'>$0.90</span>
                </div>

                    </div>
                    <div className="w-[50%] p-1 rounded-md">
                    <div className='flex justify-center bg-[#A3E3FF] rounded-md py-2 text-[#3772FF] items-center gap-x-2'>
                        <p className="text-sm font-semibold ">Buy $XYZ</p>
                    </div>

                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img className='w-5 h-5' src={lang} alt="" />
                    <div className="py-[2px] px-3 gap-x-4  rounded-full flex justify-between items-center bg-[#353945]">
                        <span className="text-[#808191] pt-1"><ion-icon size='small'  name="moon"></ion-icon></span>
                        <span className="w-[18px] h-[18px] rounded-full bg-[#3772FF]"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;