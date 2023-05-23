import plus from "../assets/plus.png";
import money from "../assets/money-bag.png";
const MainContent = () => {
  return (
    <div>
      <div className="grid grid-cols-3 mt-5 gap-3 px-5">
        <div className="">
          <div className="bg-[#242731] rounded-lg">
            <h1 className="text-[16px] p-3 font-semibold">
              List : Things to Buy
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="bg-[#191B20] h-[116px] mt-2 p-4 rounded-lg">
              <div className="flex justify-between items-center ">
                <div className="flex justify-center items-center gap-2">
                  <div className="bg-gradient-to-r from-[#BBB5E2] to-[#9C92DF] w-6 h-6 rounded-full">
                    <img
                      src={money}
                      className="w-3 h-3 mt-[6px] ml-[7px] rounded-xl"
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Todo"
                    className="bg-[#191B20] text-[#6E6E6E] w-48 text-lg font-bold p-[6px] font-poppins border-none rounded-lg"
                  />
                </div>
                <button className="bg-[#191B20] text-xl w-[27px] h-[27px] rounded-full pl-[8px]">
                  <img className="w-3" src={plus} alt="" />
                </button>
              </div>
              <input
                className="w-full mt-1 bg-[#191B20] text-[#808191] border-none rounded-lg p-2 text-sm"
                placeholder="Add Todo Description"
                type="text"
                id="name"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#242731] rounded-lg">
            <h1 className="text-[16px] p-3 font-semibold">List : Empty List</h1>
          </div>
          {/* Add Todo */}
          <div className="flex flex-col">
            <div className="bg-[#191B20] h-[116px] mt-2 p-4 rounded-lg">
              <div className="flex justify-between items-center ">
                <div className="flex justify-center items-center gap-2">
                  <div className="bg-gradient-to-r from-[#BBB5E2] to-[#9C92DF] w-6 h-6 rounded-full">
                    <img
                      src={money}
                      className="w-3 h-3 mt-[6px] ml-[7px] rounded-xl"
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Add Todo"
                    className="bg-[#191B20] text-[#6E6E6E] w-48 text-lg font-bold p-[6px] font-poppins border-none rounded-lg"
                  />
                </div>
                <button className="bg-[#191B20] text-xl w-[27px] h-[27px] rounded-full pl-[8px]">
                  <img className="w-3" src={plus} alt="" />
                </button>
              </div>
              <input
                className="w-full mt-1 bg-[#191B20] text-[#808191] border-none rounded-lg p-2 text-sm"
                placeholder="Add Todo Description"
                type="text"
                id="name"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#242731] py-1 flex justify-between items-center rounded-lg">
            <input
              type="text"
              placeholder="Add Todo-list"
              className="text-[16px]  px-3 bg-[#242731] border-none outline-none rounded-lg font-semibold"
            />
            <button className="bg-[#353945] text-xl rounded-full p-[6px] text-center  mr-3">
              <img className="w-3" src={plus} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
