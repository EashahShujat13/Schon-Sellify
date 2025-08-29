import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">schön.</h2>
          <p className="mb-4">
            Exercitation ullamco laboris nisi ut aliquip ex commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="flex space-x-4 text-gray-500 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG />
            <FaYoutube />
            <FaLinkedinIn />
            <FaWhatsapp />
          </div>
        </div>

        {/* Twitter Feed */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">Twitter</h3>
          <ul className="space-y-4">
            <li>
              <FaTwitter className="inline mr-2 text-blue-500" />
              Laboris nisi ut <span className="font-bold">#schön</span> aliquip
              econsequat.{" "}
              <a href="#" className="text-gray-800 font-semibold">
                https://t.co/vreNJ9nEDt
              </a>
            </li>
            <li>
              <FaTwitter className="inline mr-2 text-blue-500" />
              Ficia deserunt mollit anim id est laborum.{" "}
              <a href="#" className="text-gray-800 font-semibold">
                https://t.co/vreNJ9nEDt
              </a>
            </li>
          </ul>
        </div>

        {/* Product Tags */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">Product Tags</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Sofas", "Armchairs", "Living", "Bedroom", "Lighting", "Tables",
              "Pouf", "Wood", "Office", "Outdoor", "Kitchen", "Stools",
              "Footstools", "Desks",
            ].map((tag, index) => (
              <span
                key={index}
                className="border border-gray-400 rounded-full px-3 py-1 text-xs hover:bg-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Information / Contact */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">Information</h3>
          <ul className="space-y-4">
            <li>
              Connaught Road Central Suite 18B, 148 <br />
              New Yankee
            </li>
            <li>+1 (555) 333 22 11</li>
            <li>
              <a href="mailto:info@schon.chair" className="hover:underline">
                info@schon.chair
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 px-4 text-center flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto text-xs text-gray-500">
        <div>
          © <strong>schön.</strong> – All rights Reserved
        </div>
        <div className="flex space-x-4 mt-3 lg:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-5 filter grayscale brightness-0"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-5 filter grayscale brightness-0"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="MasterCard"
            className="h-5 filter grayscale brightness-0"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Discover_Card_logo.svg"
            alt="Discover"
            className="h-5 filter grayscale brightness-0"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="h-5 filter grayscale brightness-0"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
