import React from "react";

const Card = () => {

  return (
    <div className="border-2 border-[#7B61FF] rounded-md w-[306px] h-min p-2 bg-[#FFF9FB] mr-4">
      <h3 className="text-sm text-[#7B61FF] border-2 border-[#7B61FF] inline-block py-1 px-2 rounded-md bg-transparent">
        Group Task 2
      </h3>
      <h3 className="my-1 text-sm text-black font-medium">January - March</h3>
      <div className="bg-white text-neutral-300 border-2 border-gray-200  p-3 rounded-lg">
        <h3 className="">No Task Available</h3>
        <div className="flex mt-5 justify-between">
          <div className="flex items-center">
          </div>
        </div>
      </div>
      <div className="flex mt-2 items-center">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M13.9531 9.82428H10.6875V6.55865C10.6875 6.46412 10.6102 6.38678 10.5156 6.38678H9.48438C9.38984 6.38678 9.3125 6.46412 9.3125 6.55865V9.82428H6.04688C5.95234 9.82428 5.875 9.90162 5.875 9.99615V11.0274C5.875 11.1219 5.95234 11.1993 6.04688 11.1993H9.3125V14.4649C9.3125 14.5594 9.38984 14.6368 9.48438 14.6368H10.5156C10.6102 14.6368 10.6875 14.5594 10.6875 14.4649V11.1993H13.9531C14.0477 11.1993 14.125 11.1219 14.125 11.0274V9.99615C14.125 9.90162 14.0477 9.82428 13.9531 9.82428Z"
            fill="#262626"
          />
          <path
            d="M10 0.88678C4.68477 0.88678 0.375 5.19655 0.375 10.5118C0.375 15.827 4.68477 20.1368 10 20.1368C15.3152 20.1368 19.625 15.827 19.625 10.5118C19.625 5.19655 15.3152 0.88678 10 0.88678ZM10 18.504C5.58711 18.504 2.00781 14.9247 2.00781 10.5118C2.00781 6.09889 5.58711 2.51959 10 2.51959C14.4129 2.51959 17.9922 6.09889 17.9922 10.5118C17.9922 14.9247 14.4129 18.504 10 18.504Z"
            fill="#262626"
          />
        </svg>
        <p className="">New Task</p>
      </div>
    </div>
  );
};

export default Card;
