export const Left = ({onclick}) => {
  return (
    <button onClick={onclick} className="rounded-md border w-10 h-10 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="17"
        viewBox="0 0 9 17"
        fill="none"
      >
        <path
          d="M8.5 16L1 8.5L8.5 1"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};
