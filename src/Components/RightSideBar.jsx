import React from "react";

const RightSideBar = () => {
  return (
    <div>
      <div className="flex gap-4 items-center px-6 py-5">
        <span className="flex justify-center items-center">
          <ion-icon size="small" name="arrow-back-outline"></ion-icon>
        </span>
        <h2 className="text-lg font-poppins font-medium">Edit Todo</h2>
      </div>

      <div className="px-4">
        <input
          type="text"
          defaultValue="Carrot"
          className="text-[20px] w-full px-3 text-[#808191] bg-[#242731] border-none outline-none rounded-lg font-semibold"
        />
        <textarea
          class="w-full rounded-lg px-3 border-none mt-2 bg-[#242731] text-sm text-[#808191]"
          defaultValue="Carrot improves eyesight."
          rows="8"
          id="message"
        ></textarea>
      </div>
    </div>
  );
};

export default RightSideBar;
