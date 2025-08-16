import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { GrReturn } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 md:py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Online Shopping Section */}
          <div>
            <h6 className="font-bold text-xs uppercase mb-2 text-gray-500">
              Online Shopping
            </h6>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/kids">Kids</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/beauty">Beauty</Link>
              </li>
              <li>
                <Link to="/genz">Genz</Link>
              </li>
              <li>
                <Link to="/gift-cards">Gift Cards</Link>
              </li>
              <li>
                <Link to="/insider">Myntra Insider</Link>
              </li>
            </ul>
            <h6 className="font-bold text-xs uppercase mt-4 mb-2 text-gray-500">
              Useful Links
            </h6>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/sitemap">Site Map</Link>
              </li>
              <li>
                <Link to="/info">Corporate Information</Link>
              </li>
            </ul>
          </div>

          {/* Customer Policies Section */}
          <div>
            <h6 className="font-bold text-xs uppercase mb-2 text-gray-500">
              Customer Policies
            </h6>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/tnc">T&C</Link>
              </li>
              <li>
                <Link to="/terms">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/track-orders">Track Orders</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping</Link>
              </li>
              <li>
                <Link to="/cancellation">Cancellation</Link>
              </li>
              <li>
                <Link to="/returns">Returns</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/grievance">Grievance Redressal</Link>
              </li>
            </ul>
          </div>

          {/* App & Social Icons Section */}
          <div>
            <h6 className="font-bold text-xs uppercase mb-2 text-gray-500">
              Experience Myntra App on Mobile
            </h6>
            <div className="flex gap-2 mb-4">
              <a href="#">
                <img
                  src="/images/Icons/playstore.png"
                  alt="Play Store"
                  className="h-10"
                />
              </a>
              <a href="#">
                <img
                  src="/images/Icons/appstore.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
            <h6 className="font-bold text-xs uppercase mb-2 text-gray-500">
              Keep In Touch
            </h6>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-xl text-gray-600 hover:text-blue-600" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-xl text-gray-600 hover:text-blue-400" />
              </a>
              <a href="#" aria-label="Youtube">
                <FaYoutube className="text-xl text-gray-600 hover:text-red-600" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-xl text-gray-600 hover:text-pink-600" />
              </a>
            </div>
          </div>

          {/* Guarantee & Return Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-start gap-3 mb-4">
              <BsCheckCircle className="text-3xl text-gray-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-700">
                <strong className="font-semibold">100% ORIGINAL</strong> guarantee for all
                products at myntra.com
              </p>
            </div>
            <div className="flex items-start gap-3">
              <GrReturn className="text-3xl text-gray-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-700">
                <strong className="font-semibold">Return within 14 days</strong> of
                receiving your order
              </p>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-1">
            © {new Date().getFullYear()} www.myntra.com. All rights reserved. A Flipkart
            company
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;