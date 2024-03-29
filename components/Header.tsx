import Image from "next/image";
import Link from "next/link";
import mediumLogo from "../images/medium.png";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <img
            src="https://links.papareact.com/yvf"
            alt="Medium Logo"
            className="w-44 object-contain cursor-pointer"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="bg-green-600 text-white px-4 py-1 rounded-full">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
          <h3>Sign In</h3>
          <h3 className="border border-green-600 px-4 rounded-full">Get Started</h3>
      </div>
      
    </header>
  );
}

export default Header;
