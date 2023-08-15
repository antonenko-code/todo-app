import React from 'react';

type Props = {
  name: string,
  className?: string,
}

export const Icons: React.FC<Props> = ({ name, className }) => {
  switch(name){
    case 'checked':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="18" viewBox="0 0 16 18" fill="none">
          <g clipPath="url(#clip0_23_86)">
            <path d="M15.4195 3.70547C15.8589 4.14493 15.8589 4.8586 15.4195 5.29805L6.41948 14.2981C5.98003 14.7375 5.26636 14.7375 4.8269 14.2981L0.326904 9.79805C-0.112549 9.3586 -0.112549 8.64493 0.326904 8.20547C0.766357 7.76602 1.48003 7.76602 1.91948 8.20547L5.62495 11.9074L13.8304 3.70547C14.2699 3.26602 14.9835 3.26602 15.423 3.70547H15.4195Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_23_86">
              <rect width="15.75" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    case 'eyeOpen':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.1294 7.31078 5 12 5C16.6892 5 20.1779 9.1294 21.544 11.045Z" stroke="#717586" strokeWidth="1.5"/>
          <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="#717586" strokeWidth="1.5"/>
        </svg>
      )
    case 'eyeClose':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8" stroke="#717586" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 13.5L16.5 16" stroke="#717586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 11L22 13" stroke="#717586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 13L4 11" stroke="#717586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 13.5L7.5 16" stroke="#717586" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M8.25 9.75H12M6 9.75H6.00673M9.75 12.75H6M12 12.75H11.9933" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 1.5V3M4.5 1.5V3" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.875 9.1824C1.875 5.91446 1.875 4.28046 2.81409 3.26523C3.75318 2.25 5.26462 2.25 8.2875 2.25H9.7125C12.7354 2.25 14.2469 2.25 15.1859 3.26523C16.125 4.28046 16.125 5.91446 16.125 9.1824V9.5676C16.125 12.8356 16.125 14.4695 15.1859 15.4848C14.2469 16.5 12.7354 16.5 9.7125 16.5H8.2875C5.26462 16.5 3.75318 16.5 2.81409 15.4848C1.875 14.4695 1.875 12.8356 1.875 9.5676V9.1824Z" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.25 6H15.75" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'google':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M24.7647 9.65113H23.7981V9.60133H12.9983V14.4012H19.78C18.7906 17.1954 16.1321 19.2012 12.9983 19.2012C9.0222 19.2012 5.79845 15.9774 5.79845 12.0013C5.79845 8.02516 9.0222 4.80141 12.9983 4.80141C14.8337 4.80141 16.5035 5.4938 17.7748 6.62478L21.169 3.23064C19.0258 1.23327 16.1591 0.00149536 12.9983 0.00149536C6.37144 0.00149536 0.998535 5.3744 0.998535 12.0013C0.998535 18.6282 6.37144 24.0011 12.9983 24.0011C19.6252 24.0011 24.9981 18.6282 24.9981 12.0013C24.9981 11.1967 24.9153 10.4113 24.7647 9.65113Z" fill="white"/>
          <path d="M2.38135 6.41598L6.32388 9.30733C7.39066 6.66618 9.97422 4.80141 12.9976 4.80141C14.8329 4.80141 16.5027 5.4938 17.7741 6.62478L21.1682 3.23064C19.0251 1.23327 16.1583 0.00149536 12.9976 0.00149536C8.38844 0.00149536 4.39131 2.60365 2.38135 6.41598Z" fill="white"/>
          <path d="M12.9987 24.0015C16.0983 24.0015 18.9146 22.8153 21.044 20.8863L17.3301 17.7436C16.0848 18.6906 14.5632 19.2028 12.9987 19.2016C9.87759 19.2016 7.22743 17.2114 6.22905 14.4341L2.31592 17.449C4.30188 21.3351 8.33501 24.0015 12.9987 24.0015Z" fill="white"/>
          <path d="M24.7649 9.65112H23.7984V9.60132H12.9985V14.4012H19.7802C19.307 15.7311 18.4545 16.8931 17.3281 17.7438L17.3299 17.7426L21.0438 20.8853C20.781 21.1241 24.9983 18.0012 24.9983 12.0013C24.9983 11.1967 24.9155 10.4113 24.7649 9.65112Z" fill="white"/>
        </svg>
      )
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.998 0.297546C6.36805 0.297546 0.998047 5.66755 0.998047 12.2975C0.998047 17.6075 4.43305 22.0925 9.20305 23.6825C9.80305 23.7875 10.028 23.4275 10.028 23.1125C10.028 22.8275 10.013 21.8825 10.013 20.8775C6.99805 21.4325 6.21805 20.1425 5.97805 19.4675C5.84305 19.1225 5.25805 18.0575 4.74805 17.7725C4.32805 17.5475 3.72805 16.9925 4.73305 16.9775C5.67805 16.9625 6.35305 17.8475 6.57805 18.2075C7.65805 20.0225 9.38305 19.5125 10.073 19.1975C10.178 18.4175 10.493 17.8925 10.838 17.5925C8.16805 17.2925 5.37805 16.2575 5.37805 11.6675C5.37805 10.3625 5.84305 9.28255 6.60805 8.44255C6.48805 8.14255 6.06805 6.91255 6.72805 5.26255C6.72805 5.26255 7.73305 4.94755 10.028 6.49255C10.988 6.22255 12.008 6.08755 13.028 6.08755C14.048 6.08755 15.068 6.22255 16.028 6.49255C18.323 4.93255 19.328 5.26255 19.328 5.26255C19.988 6.91255 19.568 8.14255 19.448 8.44255C20.213 9.28255 20.678 10.3475 20.678 11.6675C20.678 16.2725 17.873 17.2925 15.203 17.5925C15.638 17.9675 16.013 18.6875 16.013 19.8125C16.013 21.4175 15.998 22.7075 15.998 23.1125C15.998 23.4275 16.223 23.8025 16.823 23.6825C19.2052 22.8783 21.2752 21.3472 22.7417 19.3049C24.2082 17.2626 24.9973 14.8118 24.998 12.2975C24.998 5.66755 19.628 0.297546 12.998 0.297546Z" fill="white"/>
        </svg>
      )
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M25.001 12.075C25.001 5.406 19.628 0 13.001 0C6.37105 0.0015 0.998047 5.406 0.998047 12.0765C0.998047 18.102 5.38705 23.097 11.123 24.003V15.5655H8.07805V12.0765H11.126V9.414C11.126 6.3885 12.9185 4.7175 15.659 4.7175C16.973 4.7175 18.3455 4.953 18.3455 4.953V7.923H16.832C15.3425 7.923 14.8775 8.8545 14.8775 9.81V12.075H18.2045L17.6735 15.564H14.876V24.0015C20.612 23.0955 25.001 18.1005 25.001 12.075Z" fill="white"/>
        </svg>
      )
    case 'arrowLeft':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M17.5001 7L11.325 13.175C10.9361 13.5639 10.7417 13.7584 10.7417 14C10.7417 14.2416 10.9361 14.4361 11.325 14.8249L17.5001 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'arrowDown':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="#8C8C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'home':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
          <path d="M26.9906 11.9766C26.9906 12.8203 26.2875 13.4813 25.4906 13.4813H23.9906L24.0234 20.9906C24.0234 21.1172 24.0141 21.2437 24 21.3703V22.125C24 23.1609 23.1609 24 22.125 24H21.375C21.3234 24 21.2719 24 21.2203 23.9953C21.1547 24 21.0891 24 21.0234 24H19.5H18.375C17.3391 24 16.5 23.1609 16.5 22.125V21V18C16.5 17.1703 15.8297 16.5 15 16.5H12C11.1703 16.5 10.5 17.1703 10.5 18V21V22.125C10.5 23.1609 9.66094 24 8.625 24H7.5H6.00469C5.93438 24 5.86406 23.9953 5.79375 23.9906C5.7375 23.9953 5.68125 24 5.625 24H4.875C3.83906 24 3 23.1609 3 22.125V16.875C3 16.8328 3 16.7859 3.00469 16.7438V13.4813H1.5C0.65625 13.4813 0 12.825 0 11.9766C0 11.5547 0.140625 11.1797 0.46875 10.8516L12.4875 0.375C12.8156 0.046875 13.1906 0 13.5187 0C13.8469 0 14.2219 0.09375 14.5031 0.328125L26.475 10.8516C26.85 11.1797 27.0375 11.5547 26.9906 11.9766Z" fill="white"/>
        </svg>
      )
    case 'people':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
          <g clipPath="url(#clip0_12_183)">
            <path d="M10.5 12C12.0913 12 13.6174 11.3679 14.7426 10.2426C15.8679 9.11742 16.5 7.5913 16.5 6C16.5 4.4087 15.8679 2.88258 14.7426 1.75736C13.6174 0.632141 12.0913 0 10.5 0C8.9087 0 7.38258 0.632141 6.25736 1.75736C5.13214 2.88258 4.5 4.4087 4.5 6C4.5 7.5913 5.13214 9.11742 6.25736 10.2426C7.38258 11.3679 8.9087 12 10.5 12ZM8.35781 14.25C3.74063 14.25 0 17.9906 0 22.6078C0 23.3766 0.623438 24 1.39219 24H19.6078C20.3766 24 21 23.3766 21 22.6078C21 17.9906 17.2594 14.25 12.6422 14.25H8.35781Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_12_183">
              <rect width="21" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    case 'work':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
          <path d="M2.4 3.6C2.4 2.27625 3.47625 1.2 4.8 1.2H19.2C20.5238 1.2 21.6 2.27625 21.6 3.6V13.2H19.2V3.6H4.8V13.2H2.4V3.6ZM0 15.12C0 14.7225 0.3225 14.4 0.72 14.4H23.28C23.6775 14.4 24 14.7225 24 15.12C24 16.71 22.71 18 21.12 18H2.88C1.29 18 0 16.71 0 15.12ZM10.5375 7.8375L9.375 9L10.5375 10.1625C10.89 10.515 10.89 11.085 10.5375 11.4338C10.185 11.7825 9.615 11.7863 9.26625 11.4338L7.46625 9.63375C7.11375 9.28125 7.11375 8.71125 7.46625 8.3625L9.26625 6.5625C9.61875 6.21 10.1888 6.21 10.5375 6.5625C10.8863 6.915 10.89 7.485 10.5375 7.83375V7.8375ZM14.7375 6.5625L16.5375 8.3625C16.89 8.715 16.89 9.285 16.5375 9.63375L14.7375 11.4338C14.385 11.7863 13.815 11.7863 13.4663 11.4338C13.1175 11.0813 13.1138 10.5113 13.4663 10.1625L14.6288 9L13.4663 7.8375C13.1138 7.485 13.1138 6.915 13.4663 6.56625C13.8188 6.2175 14.3888 6.21375 14.7375 6.56625V6.5625Z" fill="white"/>
        </svg>
      )
    case 'groceries':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
          <g clipPath="url(#clip0_12_210)">
            <path d="M7.5 5.25C7.5 3.59531 8.84531 2.25 10.5 2.25C12.1547 2.25 13.5 3.59531 13.5 5.25V7.5H7.5V5.25ZM5.25 7.5H2.25C1.00781 7.5 0 8.50781 0 9.75V19.5C0 21.9844 2.01562 24 4.5 24H16.5C18.9844 24 21 21.9844 21 19.5V9.75C21 8.50781 19.9922 7.5 18.75 7.5H15.75V5.25C15.75 2.34844 13.4016 0 10.5 0C7.59844 0 5.25 2.34844 5.25 5.25V7.5ZM6.375 9.75C6.67337 9.75 6.95952 9.86853 7.1705 10.0795C7.38147 10.2905 7.5 10.5766 7.5 10.875C7.5 11.1734 7.38147 11.4595 7.1705 11.6705C6.95952 11.8815 6.67337 12 6.375 12C6.07663 12 5.79048 11.8815 5.5795 11.6705C5.36853 11.4595 5.25 11.1734 5.25 10.875C5.25 10.5766 5.36853 10.2905 5.5795 10.0795C5.79048 9.86853 6.07663 9.75 6.375 9.75ZM13.5 10.875C13.5 10.5766 13.6185 10.2905 13.8295 10.0795C14.0405 9.86853 14.3266 9.75 14.625 9.75C14.9234 9.75 15.2095 9.86853 15.4205 10.0795C15.6315 10.2905 15.75 10.5766 15.75 10.875C15.75 11.1734 15.6315 11.4595 15.4205 11.6705C15.2095 11.8815 14.9234 12 14.625 12C14.3266 12 14.0405 11.8815 13.8295 11.6705C13.6185 11.4595 13.5 11.1734 13.5 10.875Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_12_210">
              <rect width="21" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    case 'car':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
          <path d="M7.30063 4.78306L6.0772 8.27994H19.8491L18.6256 4.78306C18.4147 4.18306 17.8475 3.77994 17.21 3.77994H8.71626C8.07876 3.77994 7.51157 4.18306 7.30063 4.78306ZM2.81938 8.50494L4.46938 3.794C5.1022 1.98931 6.80376 0.779938 8.71626 0.779938H17.21C19.1225 0.779938 20.8241 1.98931 21.4569 3.794L23.1069 8.50494C24.1944 8.95494 24.9631 10.0284 24.9631 11.2799V18.0299V20.2799C24.9631 21.1096 24.2928 21.7799 23.4631 21.7799H21.9631C21.1334 21.7799 20.4631 21.1096 20.4631 20.2799V18.0299H5.46313V20.2799C5.46313 21.1096 4.79282 21.7799 3.96313 21.7799H2.46313C1.63345 21.7799 0.963135 21.1096 0.963135 20.2799V18.0299V11.2799C0.963135 10.0284 1.73188 8.95494 2.81938 8.50494ZM6.96313 12.7799C6.96313 12.3821 6.8051 12.0006 6.5238 11.7193C6.24249 11.438 5.86096 11.2799 5.46313 11.2799C5.06531 11.2799 4.68378 11.438 4.40247 11.7193C4.12117 12.0006 3.96313 12.3821 3.96313 12.7799C3.96313 13.1778 4.12117 13.5593 4.40247 13.8406C4.68378 14.1219 5.06531 14.2799 5.46313 14.2799C5.86096 14.2799 6.24249 14.1219 6.5238 13.8406C6.8051 13.5593 6.96313 13.1778 6.96313 12.7799ZM20.4631 14.2799C20.861 14.2799 21.2425 14.1219 21.5238 13.8406C21.8051 13.5593 21.9631 13.1778 21.9631 12.7799C21.9631 12.3821 21.8051 12.0006 21.5238 11.7193C21.2425 11.438 20.861 11.2799 20.4631 11.2799C20.0653 11.2799 19.6838 11.438 19.4025 11.7193C19.1212 12.0006 18.9631 12.3821 18.9631 12.7799C18.9631 13.1778 19.1212 13.5593 19.4025 13.8406C19.6838 14.1219 20.0653 14.2799 20.4631 14.2799Z" fill="white"/>
        </svg>
      );
    case 'star':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
          <g clipPath="url(#clip0_414_27)">
            <path d="M14.1673 1.36325C13.9465 0.904917 13.4798 0.613251 12.9673 0.613251C12.4548 0.613251 11.9923 0.904917 11.7673 1.36325L9.08813 6.87575L3.1048 7.75908C2.6048 7.83408 2.18813 8.18408 2.03397 8.66325C1.8798 9.14242 2.0048 9.67158 2.36313 10.0258L6.7048 14.3216L5.6798 20.3924C5.59647 20.8924 5.8048 21.4008 6.2173 21.6966C6.6298 21.9924 7.17563 22.0299 7.62563 21.7924L12.9715 18.9383L18.3173 21.7924C18.7673 22.0299 19.3131 21.9966 19.7256 21.6966C20.1381 21.3966 20.3465 20.8924 20.2631 20.3924L19.234 14.3216L23.5756 10.0258C23.934 9.67158 24.0631 9.14242 23.9048 8.66325C23.7465 8.18408 23.334 7.83408 22.834 7.75908L16.8465 6.87575L14.1673 1.36325Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_414_27">
              <rect width="24" height="21.3333" fill="white" transform="translate(0.963135 0.613251)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case 'vacation':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
          <g clip-path="url(#clip0_414_29)">
            <path d="M8.9056 0.679932C9.1981 0.679932 9.44185 0.893682 9.53185 1.17493C9.9931 2.62618 11.3544 3.67993 12.9631 3.67993C14.5719 3.67993 15.9331 2.62618 16.3944 1.17493C16.4844 0.893682 16.7281 0.679932 17.0206 0.679932H17.4931C18.3369 0.679932 19.1506 0.976182 19.7994 1.51618L24.5319 5.45743C24.7794 5.66368 24.9331 5.96368 24.9594 6.28618C24.9856 6.60868 24.8806 6.92743 24.6669 7.17118L22.5669 9.57118C22.1394 10.0624 21.3969 10.1187 20.8944 9.70243L18.9631 8.09368V17.4799C18.9631 18.8037 17.8869 19.8799 16.5631 19.8799H9.3631C8.03935 19.8799 6.9631 18.8037 6.9631 17.4799V8.09368L5.03185 9.70243C4.5331 10.1187 3.7906 10.0624 3.35935 9.57118L1.25935 7.17118C1.0456 6.92743 0.940601 6.60868 0.966851 6.28618C0.993101 5.96368 1.14685 5.66368 1.39435 5.45743L6.12685 1.51618C6.7756 0.976182 7.58935 0.679932 8.4331 0.679932H8.9056Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_414_29">
              <rect width="24" height="19.2" fill="white" transform="translate(0.963135 0.679932)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case 'graduate':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
          <g clipPath="url(#clip0_414_35)">
            <path d="M12.9631 1.87994C12.6594 1.87994 12.3594 1.93244 12.0744 2.03369L1.5556 5.83244C1.19935 5.96369 0.963102 6.30119 0.963102 6.67994C0.963102 7.05869 1.19935 7.39619 1.5556 7.52744L3.72685 8.31119C3.11185 9.27869 2.7631 10.4224 2.7631 11.6262V12.6799C2.7631 13.7449 2.3581 14.8437 1.92685 15.7099C1.6831 16.1974 1.4056 16.6774 1.0831 17.1199C0.963102 17.2812 0.929352 17.4912 0.996852 17.6824C1.06435 17.8737 1.22185 18.0162 1.41685 18.0649L3.81685 18.6649C3.97435 18.7062 4.1431 18.6762 4.28185 18.5899C4.4206 18.5037 4.5181 18.3612 4.5481 18.1999C4.8706 16.5949 4.70935 15.1549 4.46935 14.1237C4.34935 13.5912 4.1881 13.0474 3.9631 12.5487V11.6262C3.9631 10.4937 4.3456 9.42494 5.00935 8.56994C5.4931 7.98869 6.11935 7.51994 6.85435 7.23119L12.7419 4.91744C13.0494 4.79744 13.3981 4.94744 13.5181 5.25494C13.6381 5.56244 13.4881 5.91119 13.1806 6.03119L7.2931 8.34494C6.8281 8.52869 6.41935 8.80994 6.0856 9.15494L12.0706 11.3149C12.3556 11.4162 12.6556 11.4687 12.9594 11.4687C13.2631 11.4687 13.5631 11.4162 13.8481 11.3149L24.3706 7.52744C24.7269 7.39994 24.9631 7.05869 24.9631 6.67994C24.9631 6.30119 24.7269 5.96369 24.3706 5.83244L13.8519 2.03369C13.5669 1.93244 13.2669 1.87994 12.9631 1.87994ZM5.7631 15.9799C5.7631 17.3037 8.9881 18.6799 12.9631 18.6799C16.9381 18.6799 20.1631 17.3037 20.1631 15.9799L19.5893 10.5274L14.2569 12.4549C13.8406 12.6049 13.4019 12.6799 12.9631 12.6799C12.5244 12.6799 12.0819 12.6049 11.6694 12.4549L6.33685 10.5274L5.7631 15.9799Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_414_35">
              <rect width="24" height="19.2" fill="white" transform="translate(0.963135 0.679932)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case 'medal':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M1.15532 2.07056C1.02876 1.88306 0.963135 1.65806 0.963135 1.43306C0.963135 0.795563 1.47876 0.279938 2.11626 0.279938H7.2397C7.7647 0.279938 8.25689 0.5565 8.52407 1.0065L11.735 6.35494C9.47563 6.64088 7.45532 7.69556 5.95063 9.2565L1.15532 2.07056ZM24.7663 2.07056L19.9756 9.2565C18.4709 7.69556 16.4506 6.64088 14.1913 6.35494L17.4022 1.0065C17.6741 0.5565 18.1616 0.279938 18.6866 0.279938H23.81C24.4475 0.279938 24.9631 0.795563 24.9631 1.43306C24.9631 1.65806 24.8975 1.88306 24.7709 2.07056H24.7663ZM4.71313 16.0299C4.71313 13.8419 5.58233 11.7435 7.1295 10.1963C8.67668 8.64913 10.7751 7.77994 12.9631 7.77994C15.1512 7.77994 17.2496 8.64913 18.7968 10.1963C20.3439 11.7435 21.2131 13.8419 21.2131 16.0299C21.2131 18.218 20.3439 20.3164 18.7968 21.8636C17.2496 23.4107 15.1512 24.2799 12.9631 24.2799C10.7751 24.2799 8.67668 23.4107 7.1295 21.8636C5.58233 20.3164 4.71313 18.218 4.71313 16.0299ZM13.3569 11.5815C13.1975 11.2534 12.7334 11.2534 12.5694 11.5815L11.5194 13.7096C11.4538 13.8409 11.3319 13.9299 11.1913 13.9487L8.83813 14.2909C8.4772 14.3424 8.33657 14.7831 8.59439 15.0409L10.2959 16.7002C10.3991 16.8034 10.4459 16.944 10.4225 17.0893L10.0194 19.4284C9.95845 19.7846 10.3334 20.0612 10.6569 19.8924L12.7569 18.7862C12.8834 18.7206 13.0381 18.7206 13.1647 18.7862L15.2647 19.8924C15.5881 20.0612 15.9631 19.7893 15.9022 19.4284L15.4991 17.0893C15.4756 16.9487 15.5225 16.8034 15.6256 16.7002L17.3272 15.0409C17.5897 14.7878 17.4444 14.3471 17.0834 14.2909L14.735 13.9487C14.5944 13.9299 14.4678 13.8362 14.4069 13.7096L13.3569 11.5815Z" fill="white"/>
        </svg>
      );
    case 'workout':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
          <path d="M4.56313 2.07994C4.56313 1.41619 5.09938 0.879944 5.76313 0.879944H6.96313C7.62688 0.879944 8.16314 1.41619 8.16314 2.07994V8.07994V10.4799V16.4799C8.16314 17.1437 7.62688 17.6799 6.96313 17.6799H5.76313C5.09938 17.6799 4.56313 17.1437 4.56313 16.4799V14.0799H3.36313C2.69938 14.0799 2.16313 13.5437 2.16313 12.8799V10.4799C1.49938 10.4799 0.963135 9.94369 0.963135 9.27994C0.963135 8.61619 1.49938 8.07994 2.16313 8.07994V5.67994C2.16313 5.01619 2.69938 4.47994 3.36313 4.47994H4.56313V2.07994ZM21.3631 2.07994V4.47994H22.5631C23.2269 4.47994 23.7631 5.01619 23.7631 5.67994V8.07994C24.4269 8.07994 24.9631 8.61619 24.9631 9.27994C24.9631 9.94369 24.4269 10.4799 23.7631 10.4799V12.8799C23.7631 13.5437 23.2269 14.0799 22.5631 14.0799H21.3631V16.4799C21.3631 17.1437 20.8269 17.6799 20.1631 17.6799H18.9631C18.2994 17.6799 17.7631 17.1437 17.7631 16.4799V10.4799V8.07994V2.07994C17.7631 1.41619 18.2994 0.879944 18.9631 0.879944H20.1631C20.8269 0.879944 21.3631 1.41619 21.3631 2.07994ZM16.5631 8.07994V10.4799H9.36314V8.07994H16.5631Z" fill="white"/>
        </svg>
      );
    case 'love':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
          <path d="M3.19438 12.3612L11.6647 20.269C12.0163 20.5971 12.4803 20.7799 12.9631 20.7799C13.4459 20.7799 13.91 20.5971 14.2616 20.269L22.7319 12.3612C24.1569 11.0346 24.9631 9.17369 24.9631 7.22838V6.95651C24.9631 3.67994 22.5959 0.886195 19.3663 0.347132C17.2288 -0.0091179 15.0538 0.68932 13.5256 2.21744L12.9631 2.77994L12.4006 2.21744C10.8725 0.68932 8.69751 -0.0091179 6.56001 0.347132C3.33032 0.886195 0.963135 3.67994 0.963135 6.95651V7.22838C0.963135 9.17369 1.76938 11.0346 3.19438 12.3612Z" fill="white"/>
        </svg>
      );
    case 'gift':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M9.89282 3.50494L11.5241 6.27994H11.4631H8.08813C7.0522 6.27994 6.21313 5.44088 6.21313 4.40494C6.21313 3.369 7.0522 2.52994 8.08813 2.52994H8.19126C8.8897 2.52994 9.54126 2.90025 9.89282 3.50494ZM3.96313 4.40494C3.96313 5.07994 4.1272 5.71744 4.41313 6.27994H2.46313C1.63345 6.27994 0.963135 6.95025 0.963135 7.77994V10.7799C0.963135 11.6096 1.63345 12.2799 2.46313 12.2799H23.4631C24.2928 12.2799 24.9631 11.6096 24.9631 10.7799V7.77994C24.9631 6.95025 24.2928 6.27994 23.4631 6.27994H21.5131C21.7991 5.71744 21.9631 5.07994 21.9631 4.40494C21.9631 2.12681 20.1163 0.279938 17.8381 0.279938H17.735C16.2397 0.279938 14.8522 1.07213 14.0928 2.36119L12.9631 4.28775L11.8334 2.36588C11.0741 1.07213 9.68657 0.279938 8.19126 0.279938H8.08813C5.81001 0.279938 3.96313 2.12681 3.96313 4.40494ZM19.7131 4.40494C19.7131 5.44088 18.8741 6.27994 17.8381 6.27994H14.4631H14.4022L16.0334 3.50494C16.3897 2.90025 17.0366 2.52994 17.735 2.52994H17.8381C18.8741 2.52994 19.7131 3.369 19.7131 4.40494ZM2.46313 13.7799V22.0299C2.46313 23.2721 3.47095 24.2799 4.71313 24.2799H11.4631V13.7799H2.46313ZM14.4631 24.2799H21.2131C22.4553 24.2799 23.4631 23.2721 23.4631 22.0299V13.7799H14.4631V24.2799Z" fill="white"/>
        </svg>
      );
    default:
      return null;
  }
};
