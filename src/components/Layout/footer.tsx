import React from "react";
import Divider from "../ui/divider";
const Footer = () => {
  return (
    <footer className="pt-10 pb-7 px-7">
      <div className="flex flex-wrap w-full justify-between gap-5">
        <div className="footer__section flex-grow flex-shrink min-w-[15rem]">
          <h5 className="text-white font-medium text-md mb-1">Company</h5>
          <div className="footer__main-links text-spotify-gray-100 font-medium">
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">For the Record</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__section min-w-[15rem] flex-grow flex-shrink">
          <h5 className="text-white font-medium text-md mb-1">Communities</h5>
          <div className="footer__main-links text-spotify-gray-100 font-medium">
            <ul>
              <li>
                <a href="">For Artists</a>
              </li>
              <li>
                <a href="">Developers</a>
              </li>
              <li>
                <a href="">Advertising</a>
              </li>
              <li>
                <a href="">Inverstors</a>
              </li>
              <li>
                <a href="">Vendors</a>
              </li>
              <li>
                <a href="">Spotify for Work</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__section flex-grow flex-shrink min-w-[15rem]">
          <h5 className="text-white font-medium text-md mb-1">Useful links</h5>
          <div className="footer__main-links text-spotify-gray-100 font-medium">
            <ul>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Free Mobile App</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Divider color="black" className="my-6" />
      <div className="footer__other-links flex gap-3 justify-between items-center text-spotify-gray-100 font-medium text-sm w-full flex-wrap">
        <ul className="flex gap-4 flex-wrap">
          <li>
            <a href="">Legal</a>
          </li>

          <li>
            <a href="">Privacy Center</a>
          </li>

          <li>
            <a href="">Privacy Policy</a>
          </li>

          <li>
            <a href="">Cookies</a>
          </li>

          <li>
            <a href="">About Ads</a>
          </li>

          <li>
            <a href="">Accessibility</a>
          </li>
        </ul>

        <p className="copywright w-fit">
          <span>{new Date().getFullYear()} </span>

          <span>Spotify AB</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
