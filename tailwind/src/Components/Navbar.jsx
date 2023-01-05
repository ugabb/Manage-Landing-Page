
const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        {/* Flex-Container */}
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="pt-2">
                <img src="./img/logo.svg" alt="" />
            </div>
            {/* menu-items */}
            {/* medium screens or less will hide the menu-items */}
            <div className="hidden md:flex space-x-6">
                <a href="" className="transition delay-150 hover:text-darkGrayishBlue">Pricing</a>
                <a href="" className="transition delay-150 hover:text-darkGrayishBlue">Product</a>
                <a href="" className="transition delay-150 hover:text-darkGrayishBlue">About Us</a>
                <a href="" className="transition delay-150 hover:text-darkGrayishBlue">Carrers</a>
                <a href="" className="transition delay-150 hover:text-darkGrayishBlue">Community</a>
            </div>
            
            <a href="" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight transition delay-150">Get Started</a>
        </div>
    </nav>
  )
}

export default Navbar