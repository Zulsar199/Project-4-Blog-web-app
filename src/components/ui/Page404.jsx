import Link from "next/link";
export const Page404 = () => {
  return (
    <div className="max-w-screen-xl m-auto flex items-center justify-center relative h-[200px] max-[429px]:h-[300px]">
      <div className="absolute top-1/2 -translate-y-1/2 flex justify- max-[429px]:px-5">
        <div className="container flex justify-between">
          <div className="text-5xl w-1/5 flex items-center"> 404</div>
          <div className="w-[1px] border border-black-100"></div>

          <div className="w-[70%] flex flex-col gap-6">
            <h3 className="font-semibold text-2xl">Page Not Found</h3>
            <p className="text-gray-500">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <Link href="/">
              <button className="bg-[#4B6BFB] text-white py-[4px] px-[10px] w-[fit-content] rounded-md hover:text-[#4B6BFB] hover:bg-gray-300 active:bg-blue-100">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
