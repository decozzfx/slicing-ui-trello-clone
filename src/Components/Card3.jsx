import React from "react";

const Card = () => {
  return (
    <div className="border-2 border-[#2F54EB] rounded-md w-[306px] h-min p-2 bg-[#FFF9FB] mr-4">
      <h3 className="text-sm text-[#2F54EB] border-2 border-[#2F54EB] inline-block py-1 px-2 rounded-md bg-transparent">
        Group Task 3
      </h3>
      <h3 className="my-1 text-sm text-black font-medium">July - September</h3>
      <div className="bg-white border-2 border-gray-200 font-medium p-3 rounded-lg">
        <h3>Bundle interplanetary analytics for improved transmission</h3>
        <div className="flex mt-5 justify-between">
          <div className="flex items-center">
            <svg
              width="114"
              height="22"
              viewBox="0 0 114 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3446_80)">
                <rect y="7" width="82" height="8" rx="4" fill="#F5F5F5" />
                <rect y="7" width="49.2" height="8" rx="4" fill="#1890FF" />
              </g>
              <path
                d="M93.7194 15.12C93.0794 15.12 92.5234 14.992 92.0514 14.736C91.5794 14.472 91.2194 14.12 90.9714 13.68C90.7234 13.24 90.5994 12.76 90.5994 12.24C90.5994 11.816 90.6834 11.416 90.8514 11.04C91.0274 10.656 91.2234 10.316 91.4394 10.02L93.7194 6.84C93.7274 6.832 93.7514 6.804 93.7914 6.756C93.8234 6.708 93.8674 6.672 93.9234 6.648C93.9794 6.616 94.0434 6.6 94.1154 6.6H94.7514C94.8234 6.6 94.8794 6.628 94.9194 6.684C94.9674 6.732 94.9914 6.792 94.9914 6.864C94.9914 6.92 94.9754 6.972 94.9434 7.02L93.1914 9.468C93.3674 9.412 93.5954 9.384 93.8754 9.384C94.4514 9.392 94.9594 9.524 95.3994 9.78C95.8474 10.036 96.1914 10.38 96.4314 10.812C96.6794 11.244 96.8034 11.716 96.8034 12.228C96.8034 12.74 96.6794 13.22 96.4314 13.668C96.1914 14.108 95.8354 14.46 95.3634 14.724C94.8994 14.988 94.3514 15.12 93.7194 15.12ZM93.7074 14.1C94.0514 14.1 94.3674 14.028 94.6554 13.884C94.9514 13.74 95.1834 13.528 95.3514 13.248C95.5274 12.96 95.6154 12.62 95.6154 12.228C95.6154 11.844 95.5274 11.512 95.3514 11.232C95.1834 10.952 94.9514 10.74 94.6554 10.596C94.3674 10.452 94.0514 10.38 93.7074 10.38C93.3714 10.38 93.0554 10.452 92.7594 10.596C92.4714 10.74 92.2394 10.952 92.0634 11.232C91.8874 11.512 91.7994 11.844 91.7994 12.228C91.7994 12.62 91.8874 12.96 92.0634 13.248C92.2394 13.528 92.4714 13.74 92.7594 13.884C93.0474 14.028 93.3634 14.1 93.7074 14.1ZM101.058 15.12C100.026 15.12 99.2699 14.82 98.7899 14.22C98.3099 13.62 98.0539 12.832 98.0219 11.856C98.0139 11.64 98.0099 11.292 98.0099 10.812C98.0099 10.316 98.0139 9.956 98.0219 9.732C98.0459 8.772 98.3019 7.992 98.7899 7.392C99.2779 6.784 100.034 6.48 101.058 6.48C102.09 6.48 102.85 6.784 103.338 7.392C103.826 7.992 104.082 8.772 104.106 9.732C104.122 10.18 104.13 10.54 104.13 10.812C104.13 11.076 104.122 11.424 104.106 11.856C104.074 12.832 103.818 13.62 103.338 14.22C102.858 14.82 102.098 15.12 101.058 15.12ZM101.058 14.088C101.658 14.088 102.11 13.888 102.414 13.488C102.726 13.088 102.89 12.524 102.906 11.796C102.922 11.332 102.93 10.996 102.93 10.788C102.93 10.564 102.922 10.236 102.906 9.804C102.89 9.084 102.73 8.52 102.426 8.112C102.122 7.704 101.666 7.5 101.058 7.5C100.458 7.5 100.002 7.704 99.6899 8.112C99.3859 8.52 99.2259 9.084 99.2099 9.804L99.1979 10.788L99.2099 11.796C99.2259 12.524 99.3859 13.088 99.6899 13.488C100.002 13.888 100.458 14.088 101.058 14.088ZM107.187 10.812C106.667 10.812 106.255 10.676 105.951 10.404C105.655 10.124 105.491 9.74 105.459 9.252C105.451 9.116 105.447 8.94 105.447 8.724C105.447 8.492 105.451 8.304 105.459 8.16C105.483 7.664 105.639 7.272 105.927 6.984C106.223 6.688 106.643 6.54 107.187 6.54C107.731 6.54 108.147 6.688 108.435 6.984C108.731 7.272 108.891 7.664 108.915 8.16C108.931 8.48 108.939 8.684 108.939 8.772C108.939 8.852 108.931 9.012 108.915 9.252C108.891 9.74 108.727 10.124 108.423 10.404C108.119 10.676 107.707 10.812 107.187 10.812ZM106.179 15C106.107 15 106.047 14.98 105.999 14.94C105.951 14.892 105.927 14.832 105.927 14.76C105.927 14.712 105.943 14.668 105.975 14.628L111.903 6.828C111.967 6.74 112.023 6.68 112.071 6.648C112.127 6.616 112.203 6.6 112.299 6.6H112.695C112.775 6.6 112.835 6.624 112.875 6.672C112.923 6.712 112.947 6.768 112.947 6.84C112.947 6.888 112.931 6.932 112.899 6.972L106.983 14.772C106.919 14.86 106.859 14.92 106.803 14.952C106.755 14.984 106.679 15 106.575 15H106.179ZM107.187 10.068C107.475 10.068 107.683 9.984 107.811 9.816C107.947 9.648 108.027 9.444 108.051 9.204C108.067 8.916 108.075 8.748 108.075 8.7C108.075 8.628 108.067 8.464 108.051 8.208C108.035 7.96 107.955 7.752 107.811 7.584C107.675 7.416 107.467 7.332 107.187 7.332C106.907 7.332 106.699 7.416 106.563 7.584C106.427 7.752 106.351 7.96 106.335 8.208C106.327 8.336 106.323 8.5 106.323 8.7C106.323 8.892 106.327 9.06 106.335 9.204C106.359 9.452 106.435 9.66 106.563 9.828C106.699 9.988 106.907 10.068 107.187 10.068ZM111.675 15.072C111.155 15.072 110.743 14.928 110.439 14.64C110.143 14.344 109.979 13.952 109.947 13.464C109.939 13.328 109.935 13.152 109.935 12.936C109.935 12.704 109.939 12.516 109.947 12.372C109.979 11.876 110.139 11.484 110.427 11.196C110.723 10.9 111.139 10.752 111.675 10.752C112.219 10.752 112.635 10.9 112.923 11.196C113.219 11.484 113.383 11.876 113.415 12.372C113.431 12.66 113.439 12.848 113.439 12.936C113.439 13.016 113.431 13.192 113.415 13.464C113.383 13.952 113.215 14.344 112.911 14.64C112.607 14.928 112.195 15.072 111.675 15.072ZM111.675 14.28C111.963 14.28 112.171 14.196 112.299 14.028C112.435 13.86 112.515 13.656 112.539 13.416C112.555 13.128 112.563 12.96 112.563 12.912C112.563 12.84 112.555 12.676 112.539 12.42C112.523 12.172 112.447 11.964 112.311 11.796C112.175 11.628 111.963 11.544 111.675 11.544C111.395 11.544 111.187 11.628 111.051 11.796C110.915 11.964 110.839 12.172 110.823 12.42C110.815 12.548 110.811 12.712 110.811 12.912C110.811 13.104 110.815 13.272 110.823 13.416C110.847 13.656 110.923 13.86 111.051 14.028C111.187 14.196 111.395 14.28 111.675 14.28Z"
                fill="#8C8C8C"
              />
              <defs>
                <clipPath id="clip0_3446_80">
                  <rect
                    width="82"
                    height="8"
                    fill="white"
                    transform="translate(0 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex items-center">
            <svg
              width="16"
              height="4"
              viewBox="0 0 16 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.125 1.97656C0.125 2.14892 0.158949 2.3196 0.224908 2.47884C0.290867 2.63807 0.387546 2.78276 0.509422 2.90464C0.631299 3.02652 0.775988 3.12319 0.935228 3.18915C1.09447 3.25511 1.26514 3.28906 1.4375 3.28906C1.60986 3.28906 1.78053 3.25511 1.93977 3.18915C2.09901 3.12319 2.2437 3.02652 2.36558 2.90464C2.48745 2.78276 2.58413 2.63807 2.65009 2.47884C2.71605 2.3196 2.75 2.14892 2.75 1.97656C2.75 1.8042 2.71605 1.63353 2.65009 1.47429C2.58413 1.31505 2.48745 1.17036 2.36558 1.04848C2.2437 0.926608 2.09901 0.82993 1.93977 0.763971C1.78053 0.698012 1.60986 0.664063 1.4375 0.664063C1.26514 0.664063 1.09447 0.698012 0.935228 0.763971C0.775988 0.82993 0.631299 0.926608 0.509422 1.04848C0.387546 1.17036 0.290867 1.31505 0.224908 1.47429C0.158949 1.63353 0.125 1.8042 0.125 1.97656ZM6.6875 1.97656C6.6875 2.32466 6.82578 2.6585 7.07192 2.90464C7.31806 3.15078 7.6519 3.28906 8 3.28906C8.3481 3.28906 8.68194 3.15078 8.92808 2.90464C9.17422 2.6585 9.3125 2.32466 9.3125 1.97656C9.3125 1.62847 9.17422 1.29463 8.92808 1.04848C8.68194 0.802343 8.3481 0.664062 8 0.664063C7.6519 0.664062 7.31806 0.802343 7.07192 1.04848C6.82578 1.29463 6.6875 1.62847 6.6875 1.97656ZM13.25 1.97656C13.25 2.32466 13.3883 2.6585 13.6344 2.90464C13.8806 3.15078 14.2144 3.28906 14.5625 3.28906C14.9106 3.28906 15.2444 3.15078 15.4906 2.90464C15.7367 2.6585 15.875 2.32466 15.875 1.97656C15.875 1.62847 15.7367 1.29463 15.4906 1.04848C15.2444 0.802343 14.9106 0.664062 14.5625 0.664063C14.2144 0.664062 13.8806 0.802343 13.6344 1.04848C13.3883 1.29463 13.25 1.62847 13.25 1.97656Z"
                fill="#828282"
              />
            </svg>
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
