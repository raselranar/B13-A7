import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-success-content">
      {/* container */}
      <div className="container mx-auto px-4 pt-20 pb-7.5">
        <div className="text-white text-center flex flex-col gap-4 mx-auto">
          <h2 className="text-5xl">KeenKeeper</h2>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        {/* socials links */}
        <div className="mt-6 space-y-4">
          <h3 className="text-center text-white font-medium text-xl">
            Social Links
          </h3>
          <ul className="flex gap-3 justify-center">
            <li className="p-2 rounded-full bg-white">
              <FaInstagram />
            </li>
            <li className="p-2 rounded-full bg-white">
              <FaFacebook />
            </li>
            <li className="p-2 rounded-full bg-white">
              <FaXTwitter />
            </li>
          </ul>
        </div>
        <div className="divider before:bg-gray-50/20 after:bg-gray-50/20 before:h-px after:h-px"></div>
        {/* copy right */}
        <div className="text-gray-400 flex flex-wrap justify-between gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <ul className="flex gap-3 flex-wrap">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
