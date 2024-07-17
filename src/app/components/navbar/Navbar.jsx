import React from "react";
import Link from 'next/link';

const option = [
  { name: "HOME", href: "#"},
  { name: "BUY", href: "#"},
  { name: "RENT", href: "#"},
  { name: "SELL", href: "#"},
  { name: "ABOUT US", href: "#"},
  { name: "RESOURCE", href: "#" },
  { name: "CONTACT", href: "#" },
];

function Navbar() {
  return (
    <div className="flex w-full justify-evenly items-center py-7">
      <div className="flex items-center space-x-2">
  <div className="border-white border-4 bg-orange-400 h-5 w-5 inline-flex items-baseline justify-start"></div>
  <h1 className="text-lg font-bold text-white">INTECO</h1>
</div>

      <div className="flex justify-center space-x-1">
        {option.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={`px-7 py-2 text-base font-medium flex items-center space-x-5 relative`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <Link href="/login">
      <button className="px-6 py-4 text-white border-2 border-white rounded-full">
        LOGIN/REGISTER
      </button>
      </Link>
    </div>
  );
}

export default Navbar;
