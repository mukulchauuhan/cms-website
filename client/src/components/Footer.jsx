const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">CMS Wallah</h3>
            <p className="text-sm text-gray-400">
            Powering content with precision, performance, and simplicity.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Explore</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <p className="text-sm text-gray-400">Email: <a href="mailto:contact@cmswallah.com" className="hover:text-white">contact@cmswallah.com</a></p>
            <p className="text-sm text-gray-400 mt-1">Phone: <span className="hover:text-white">+91 9876543212</span></p>
          </div>
  
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <i className="bx bxl-instagram text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="bx bxl-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="bx bxl-linkedin text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="bx bxl-github text-2xl"></i>
              </a>
            </div>
          </div>
  
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CMS Wallah. All rights reserved. | Created by <span className="text-white font-medium">Mukul Chauhan</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  