import { Facebook } from "../icons/Facebook";
import { Instagram } from "../icons/Instagram";
import { LinkedIn } from "../icons/LinkedIn";
import { LogoB } from "../icons/LogoB";
import { Twitter } from "../icons/Twitter";

export const Footer = () => {
  return (
    <div className="bg-gray-100 pt-16">
      <div className="max-w-screen-xl m-auto">
        <div className="container flex flex-col gap-[25px]">
          <div className="flex justify-between">
            <div className="w-[30%] flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">About</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>

              <div>
                <p>Email : info@jstemplate.net</p>
                <p>Phone : 880 123 456 789</p>
              </div>
            </div>
            <div className="w-[40%] flex flex-col gap-2 items-center *:text-left">
              <button>Home</button>
              <button>Blog</button>
              <button>Contact</button>
            </div>
            <div className="w-[30%] flex *:ml-5 items-start">
              <Facebook />
              <Twitter />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
          <div className="flex justify-between py-8 border-t-2 border-t-gray-200">
            <div className="flex">
                <LogoB />
                <div>
                    <p>Meta<span className="font-bold">Blog</span></p>
                    <p>© All Rights Reserved.</p>
                </div>
            </div>
            <div className="flex *:px-4">
                <p>Terms of Use</p>
                <p className="text-gray-200">|</p>
                <p>Privacy Policy</p>
                <p className="text-gray-200">|</p>
                <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
