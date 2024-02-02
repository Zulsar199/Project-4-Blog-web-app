import Link from "next/link";
export const Page404 = () => {
  return (
    <div className="m-auto max-w-screen-xl flex items-center justify-center py-[250px]">
      <div className="container flex w-[50%] justify-between">
        <div className="text-5xl w-1/5 flex items-center"> 404</div>
        <div className="w-[1px] border border-black-100"></div>

       
        <div className="w-[70%] flex flex-col gap-6">
          <h3 className="font-semibold text-2xl">Page Not Found</h3>
          <p className="text-gray-500">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <Link href="/">
          <button className="bg-[#4B6BFB] text-white py-[4px] px-[10px] w-[fit-content] rounded-md">
            Back To Home
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};