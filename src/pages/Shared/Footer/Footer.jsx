import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-green-400">
        <div className="bg-[#1F2937] space-y-4 text-[#FFF] font-medium text-center h-[400px] w-full flex flex-col justify-center md:pl-28">
          <h2 className="w-full text-3xl">CONTACT US</h2>
          <p className="leading-8 text-lg">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-[#111827] space-y-4 text-[#FFF] h-[400px] font-medium text-center w-full flex flex-col justify-center md:pr-28">
          <h2 className="w-full text-3xl">Follow US</h2>
          <p className="leading-9 text-lg">Join us on social media</p>
          <div className="flex justify-center gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M20.2103 35V19.036H25.5666L26.3702 12.8127H20.2103V8.84007C20.2103 7.03885 20.7085 5.81134 23.2943 5.81134L26.587 5.80998V0.243652C26.0176 0.169654 24.063 0 21.788 0C17.0374 0 13.7851 2.89969 13.7851 8.22372V12.8127H8.4126V19.036H13.7851V35H20.2103Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M25.342 0H9.63105C4.27748 0 0 4.27748 0 9.63105V25.3689C0 30.6956 4.27748 35 9.63105 35H25.3689C30.6956 35 35 30.7225 35 25.3689V9.63105C34.9731 4.27748 30.6956 0 25.342 0ZM31.9062 23.97C31.9062 28.3282 28.3551 31.9331 23.9431 31.9331H11.03C6.67179 31.9331 3.06687 28.382 3.06687 23.97V11.03C3.06687 6.67179 6.61799 3.06687 11.03 3.06687H24.0238C28.382 3.06687 31.9869 6.61799 31.9869 11.03V23.97H31.9062Z"
                fill="white"
              />
              <path
                d="M23.8623 11.1917L23.7816 11.111L23.7009 11.0303C22.0329 9.36231 19.8 8.44763 17.4864 8.44763C12.5364 8.47453 8.52792 12.5368 8.55482 17.4868C8.55482 19.8811 9.52331 22.1678 11.1913 23.8627C12.8592 25.5575 15.119 26.4991 17.4864 26.4991C22.4634 26.4184 26.4449 22.2486 26.3642 17.2178C26.3104 14.9849 25.4495 12.8058 23.8623 11.1917ZM17.4864 23.4323C14.2043 23.4861 11.541 20.8496 11.4872 17.5675C11.4334 14.2854 14.0698 11.6221 17.3519 11.5683C20.634 11.5145 23.2973 14.1509 23.3511 17.433V17.5137C23.3511 20.7151 20.7147 23.3785 17.4864 23.4323Z"
                fill="white"
              />
              <path
                d="M29.0275 8.04404C29.0275 9.22774 28.1128 10.1962 26.9291 10.1962C26.3642 10.1962 25.8261 9.98101 25.4495 9.57747C24.6155 8.7435 24.6155 7.34457 25.5033 6.5106C25.9068 6.10706 26.418 5.89185 26.9829 5.89185C27.4672 5.89185 27.9514 6.08016 28.328 6.37609L28.3818 6.42989C28.4625 6.4837 28.5163 6.5644 28.5702 6.61821L28.624 6.67201C28.8392 7.04865 29.0275 7.53289 29.0275 8.04404Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <g clipPath="url(#clip0_17_2792)">
                <path
                  d="M35 6.64781C33.6984 7.21875 32.3116 7.59719 30.8656 7.78094C32.3531 6.89281 33.4884 5.49719 34.0222 3.815C32.6353 4.64187 31.1041 5.22594 29.4722 5.55188C28.1553 4.14969 26.2784 3.28125 24.2309 3.28125C20.2584 3.28125 17.0603 6.50563 17.0603 10.4584C17.0603 11.0272 17.1084 11.5741 17.2266 12.0947C11.2612 11.8038 5.98281 8.94469 2.43687 4.58938C1.81781 5.66344 1.45469 6.89281 1.45469 8.21625C1.45469 10.7013 2.73438 12.9041 4.64187 14.1794C3.48906 14.1575 2.35812 13.8228 1.4 13.2956C1.4 13.3175 1.4 13.3459 1.4 13.3744C1.4 16.8612 3.88719 19.7575 7.14875 20.4247C6.56469 20.5844 5.92812 20.6609 5.2675 20.6609C4.80813 20.6609 4.34437 20.6347 3.90906 20.5384C4.83875 23.38 7.47688 25.4691 10.6138 25.5369C8.1725 27.4466 5.07281 28.5972 1.71719 28.5972C1.12875 28.5972 0.564375 28.5709 0 28.4987C3.17844 30.5484 6.94531 31.7188 11.0075 31.7188C24.2113 31.7188 31.43 20.7812 31.43 11.3006C31.43 10.9834 31.4191 10.6772 31.4037 10.3731C32.8278 9.3625 34.0244 8.10031 35 6.64781Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_2792">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="bg-[#151515] leading-8   text-[#FFF] text-center">
        Copyright © CulinaryCloud. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
