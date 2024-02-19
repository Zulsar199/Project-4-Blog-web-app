export const Menu = ({ stroke }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="dark:*:stroke-[#D1D5DB] stroke-black" id="Icon">
        <path
          id="Vector"
          d="M4 12H20"
          stroke={stroke}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M4 6H20"
          stroke={stroke}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M4 18H20"
          stroke={stroke}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
