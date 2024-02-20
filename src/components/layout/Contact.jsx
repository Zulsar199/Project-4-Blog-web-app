export const Contact = () => {
  return (
    <div className="container m-auto max-w-screen-md py-20 max-[429px]:pt-10 flex flex-col gap-10">
      <div className="flex flex-col gap-10 max-[429px]:px-5">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-4xl  max-[429px]:text-center">
            Contact Us
          </h1>
          <p className="text-gray-500 max-[429px]:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex justify-between *:w-[45%] max-[429px]:*:p-3">
          <div className="border border-gray-100 p-6 flex flex-col gap-3 rounded-xl">
            <h3 className="font-semibold text-2xl max-[429px]:text-xl">Address</h3>
            <p className="text-gray-500">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="border border-gray-100 p-6 flex flex-col gap-3 rounded-xl">
            <h3 className="font-semibold text-2xl max-[429px]:text-xl">Contact</h3>
            <div className="text-gray-500">
              <p>313-332-8662 </p>
              <p>info@email.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------input-------------------- */}
      <div className="bg-gray-100 rounded-lg p-8 h-[fit-content]">
        <h3 className="font-semibold mb-8 max-[429px]:mb-6">Leave a Message</h3>
        <div className="rounded-md bg-gray-100 flex flex-col gap-8 max-[429px]:gap-4">
          <div className=" flex w-full justify-between *:rounded-md max-[429px]:*:p-[6px]">
            <input
              className="w-[45%] bg-white p-2"
              type="text"
              placeholder="Your Name"
            ></input>
            <input
              className="w-[45%] bg-white p-2"
              type="text"
              placeholder="Your Email"
            ></input>
          </div>
          <input
            className="w-[100%] bg-white p-2 rounded-md"
            type="text"
            placeholder="Subject"
          ></input>
          <input
            className="w-[100%] h-[250px] bg-white p-2 rounded-md"
            type="text"
            placeholder="Write a Message"
          ></input>

          <button className="bg-[#4B6BFB] text-white py-[4px] px-[10px] w-[fit-content] rounded-md hover:text-[#4B6BFB] hover:bg-gray-300 active:bg-blue-100">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
