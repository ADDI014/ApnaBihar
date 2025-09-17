import React from 'react';

// A simple decorative line SVG inspired by Madhubani border art
const MadhubaniDivider = () => (
  <svg height="10" width="100%" className="my-4">
    <line x1="0" y1="5" x2="100%" y2="5" style={{ stroke: '#EA580C', strokeWidth: 2 }} />
    <circle cx="50%" cy="5" r="4" fill="#EA580C" />
  </svg>
);


function Footer() {
  const quickLinks = [
    { name: 'Temples', url: '#' },
    { name: 'History', url: '#' },
    { name: 'Art & Craft', url: '#' },
    { name: 'About Us', url: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
  ];

  return (
    <footer className="bg-stone-100 border-t-4 border-orange-600">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Brand and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-3xl font-bold text-orange-600" style={{ fontFamily: "'Laila', sans-serif" }}>
              ApnaBihar
            </a>
            <p className="mt-2 text-sm text-gray-600">
              A land of enlightenment and vibrant traditions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-gray-600 hover:text-orange-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 uppercase tracking-wider">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-5">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} className="text-gray-600 hover:text-orange-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Divider and Copyright */}
        <div className="mt-8">
          <MadhubaniDivider />
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ApnaBihar Explorer. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;