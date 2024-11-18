import * as React from "react";

const Tenis = (props) => {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_667)">
        <path
          d="M42.1999 0.199944C40.9374 0.599941 39.9499 1.52494 39.5124 2.68744C39.2999 3.26244 39.2749 3.64994 39.2749 5.88745C39.2874 8.12495 39.2624 8.56245 39.0249 9.39995C38.5624 11.1124 37.9249 12.075 36.7624 12.8624C35.4749 13.7374 34.1249 14.325 32.6249 14.6875C31.2999 14.9875 31.1624 14.9625 30.9874 14.3375C30.5874 12.8125 29.2624 10.5999 28.1624 9.62495C26.5249 8.16245 23.1249 7.34995 21.1499 7.93745C20.0999 8.24995 19.2999 9.12495 19.0749 10.1875C19.0374 10.3874 18.7749 13.45 18.4999 16.9875L17.9874 23.4125L13.5499 34.1125C11.1124 40 9.03739 44.9125 8.96239 45.025C8.87489 45.1375 7.34989 46.475 5.56239 48C3.77489 49.5125 2.03739 51.075 1.71239 51.475C0.124892 53.375 -0.387608 56.025 0.374892 58.375C0.699892 59.35 1.09989 60.0375 2.31239 61.625C3.69989 63.45 4.43739 63.85 6.63739 63.9625C9.94989 64.1375 13.7749 63.325 17.0749 61.75C19.4499 60.625 16.5624 62.7125 49.2624 38.5375C58.4124 31.7625 58.6999 31.55 60.2499 29.925C61.5499 28.5625 62.4499 27.3375 63.1249 26C63.9874 24.2875 64.1874 23.175 63.8124 22.1125C63.5374 21.35 63.1249 20.8625 61.9999 20C61.4624 19.575 60.7374 18.8875 60.3999 18.475C59.7999 17.75 59.5999 17.425 58.0874 14.6625C56.2374 11.2874 53.6249 7.87495 50.6374 4.89994C48.8124 3.08744 46.2124 0.937443 45.2999 0.487442C44.3624 0.0249443 43.1249 -0.10006 42.1999 0.199944ZM43.9999 2.24994C44.9874 2.52494 49.2999 6.37495 51.4874 8.93745C53.2749 11.0249 56.0499 14.9875 55.9749 15.325C55.9499 15.4 55.0374 16.1375 53.9374 16.9625C52.7749 17.825 51.7999 18.6625 51.5999 18.95C51.1249 19.6375 50.7374 20.55 50.6374 21.225L50.5624 21.8L49.3124 22.5C44.0499 25.4375 40.0249 29.5375 37.1124 34.925L36.4374 36.1625L35.0624 36.9875C29.8749 40.1375 27.4124 42.25 23.1874 47.1875C17.1499 54.2625 10.8124 58.125 5.27489 58.125C4.21239 58.125 2.81239 57.9375 2.52489 57.7625C2.43739 57.7125 2.29989 57.325 2.22489 56.9C1.98739 55.5875 2.44989 53.8875 3.33739 52.8125C3.64989 52.45 9.94989 47 10.4374 46.675C10.5749 46.5875 12.9124 45.55 15.6249 44.3625C18.4874 43.125 20.9124 41.9875 21.3999 41.6625C22.4499 40.975 23.4749 39.85 24.0374 38.775C24.2749 38.3125 26.1124 33.2375 28.1124 27.5125C30.1249 21.775 31.7749 17.0625 31.7874 17.05C31.7999 17.025 32.2499 16.925 32.7624 16.8125C34.1124 16.5375 35.3124 16.1125 36.5874 15.45C38.6749 14.375 39.8499 13.1749 40.5999 11.3499C41.2624 9.74995 41.4249 8.72495 41.4249 5.91245C41.4374 3.03745 41.4749 2.93744 42.4999 2.39994C43.1124 2.09995 43.3499 2.07494 43.9999 2.24994ZM24.6999 10.1749C26.1499 10.5625 27.0999 11.325 27.9749 12.7874C28.4124 13.5125 29.0249 14.9 28.9374 14.975C28.9124 15 28.4249 14.9625 27.8624 14.8875C24.9249 14.4874 23.1499 14.975 21.4749 16.625C20.9999 17.075 20.6249 17.375 20.6249 17.2875C20.6249 16.475 21.1624 10.625 21.2499 10.3999C21.3124 10.25 21.4999 10.0625 21.6499 9.99995C22.0124 9.83745 23.8624 9.94995 24.6999 10.1749ZM28.0749 17.0375L29.4624 17.1875L25.9374 27.2625C23.9999 32.8 22.2624 37.6125 22.0624 37.95C21.5499 38.825 20.5374 39.7875 19.6499 40.2375C18.9999 40.5625 12.0374 43.625 11.9374 43.625C11.9249 43.625 12.3624 42.5125 12.9249 41.1625L13.9499 38.7125L16.9499 37.8625C20.1874 36.9375 20.4999 36.775 20.4999 35.9875C20.4999 35.5 20.0124 35 19.5374 35C19.3374 35 18.2999 35.25 17.2249 35.5625C16.1499 35.875 15.2124 36.125 15.1374 36.125C15.0749 36.125 15.2624 35.55 15.5499 34.85L16.0874 33.5625L17.9499 33.0375C21.9374 31.9 21.9999 31.8625 21.9999 31.0625C21.9999 30.5125 21.5374 30 21.0624 30C20.8749 30 19.9499 30.225 18.9999 30.5C18.0499 30.775 17.2374 31 17.2124 31C17.1499 31 18.1124 28.6 18.2374 28.475C18.2749 28.425 19.3624 28.0875 20.6249 27.725C23.1749 27.0125 23.4999 26.825 23.4999 26.075C23.4999 25.75 23.4124 25.575 23.1124 25.325C22.8999 25.15 22.6499 25 22.5374 25C22.3874 25 21.4999 25.2375 19.4749 25.825C19.3124 25.875 19.3874 25.6125 19.7999 24.6125C20.0999 23.9125 20.4249 23.3 20.5124 23.25C20.6124 23.2 21.5374 22.9125 22.5624 22.625C23.9874 22.2375 24.4999 22.0375 24.7249 21.8C25.0749 21.4125 25.0749 20.8875 24.7374 20.45C24.4124 20.025 23.8999 20.025 22.5249 20.425C21.9624 20.5875 21.4999 20.675 21.4999 20.6125C21.4999 20.2875 22.2749 18.85 22.6999 18.375C23.9749 16.975 24.9999 16.7125 28.0749 17.0375ZM59.0249 20.175C59.4124 20.6125 60.1624 21.2875 60.6874 21.6875C61.2124 22.075 61.6999 22.55 61.7624 22.7375C62.2749 24.0375 59.9124 27.65 56.9624 30.1C56.3749 30.5875 55.9999 30.8125 55.9624 30.7125C55.9249 30.6375 55.2249 28.925 54.3999 26.925C52.7124 22.8375 52.5749 22.4125 52.6749 21.7C52.8374 20.6375 53.3249 20.0625 55.2499 18.625L57.0499 17.2875L57.6749 18.3375C58.0249 18.9125 58.6374 19.7375 59.0249 20.175ZM52.5499 28.025C53.4374 30.175 54.1624 32 54.1749 32.0875C54.1874 32.1625 50.1124 35.25 45.1249 38.925C34.7374 46.6125 35.7374 46.1125 36.3124 43.325C37.8624 35.6375 42.5374 29.0375 49.3124 24.9625C50.0749 24.5 50.7499 24.125 50.8124 24.125C50.8874 24.125 51.6624 25.8875 52.5499 28.025ZM35.0749 39.775C34.3374 42.3375 33.7499 45.375 33.7499 46.65C33.7499 46.95 33.6749 47.2875 33.5999 47.4C33.4124 47.625 19.2499 58.0875 18.3124 58.6875C16.7124 59.7125 14.4999 60.6625 12.5624 61.1625C10.5999 61.6625 9.57489 61.8 7.56239 61.8C5.39989 61.8125 5.01239 61.7 4.37489 60.825L3.98739 60.3125L5.83739 60.225C8.01239 60.1375 9.74989 59.7375 11.8749 58.8375C16.2499 57 20.9499 53.225 25.1374 48.1875C27.0249 45.9125 28.9124 44.025 30.8499 42.4625C32.2874 41.3125 34.8374 39.5125 35.0499 39.5C35.0999 39.5 35.1124 39.625 35.0749 39.775Z"
          fill="#8F8F8F"
        />
        <path
          d="M47.7498 29.3375C47.4498 29.725 47.4498 30.0625 47.7623 31.8125C48.0123 33.2625 48.8498 33.8 49.6373 33.0125C50.0623 32.5875 50.0623 32.55 49.8123 31.0625C49.4998 29.2625 49.3373 29 48.4498 29C48.1248 29 47.9498 29.0875 47.7498 29.3375Z"
          fill="#8F8F8F"
        />
        <path
          d="M43.8998 32.125C43.3373 32.3625 43.2498 32.9 43.5248 34.4375C43.7998 36 44.0373 36.375 44.6998 36.375C45.2749 36.375 45.4874 36.2625 45.6999 35.85C45.8624 35.525 45.8624 35.3625 45.6374 34.125C45.3499 32.5625 45.2374 32.2875 44.7999 32.125C44.4248 31.975 44.2748 31.975 43.8998 32.125Z"
          fill="#8F8F8F"
        />
      </g>
      <defs>
        <clipPath>
          <rect width={64} height={64} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Tenis;