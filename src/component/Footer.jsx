import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-gray-700 pb-10">
          <div>
            <h3 className="text-white font-semibold mb-4">Brands</h3>
            <ul className="space-y-2 text-sm">
              <li>Zara</li>
              <li>Guess</li>
              <li>Mango</li>
              <li>LCWaikiki</li>
              <li>Monda</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Watches</li>
              <li>Watch Accessories</li>
              <li>Clocks</li>
              <li>Jewellery</li>
              <li>Women’s Collection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Accessories</h3>
            <ul className="space-y-2 text-sm">
              <li>Order Tracking</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Tutorials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Sale</li>
              <li>Quick Ship</li>
              <li>New Designs</li>
              <li>Protection Plan</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>Policy</li>
              <li>Dressy Inside</li>
              <li>About Us</li>
              <li>Company</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Reviews</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>

        {/* Middle Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 py-6">
          {/* Download Apps */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-white font-medium">Download Our Apps</span>
            <FaGooglePlay className="text-2xl cursor-pointer hover:text-white" />
            <FaApple className="text-2xl cursor-pointer hover:text-white" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <span className="text-white font-medium">Follow us</span>
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>

          {/* Contact */}
          <div className="text-center md:text-right text-white font-medium">
            Need help? Call now!  
            <p>(500) 8001 8588, (500) 544 6550</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
          <p>Copyright 2024 © Temptics</p>
          <div className="flex items-center gap-3 my-4 md:my-0">
            <img 
    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
    alt="PayPal" 
    className="h-6" 
  />
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Apple_Pay_logo.svg" 
    alt="Apple Pay" 
    className="h-6" 
  />
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_%28GPay%29_Logo_%282020%29.svg" 
    alt="Google Pay" 
    className="h-6" 
  />
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Stripe_Logo%2C_revised_2016.svg" 
    alt="Stripe" 
    className="h-6" 
  />
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Square%2C_Inc._logo.svg" 
    alt="Square" 
    className="h-6" 
  />
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
    alt="Amazon" 
    className="h-6" 
  />
          </div>
          <div className="flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/889/889097.png" alt="logo" className="h-6" />
            <span className="text-white font-semibold">Glamics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
