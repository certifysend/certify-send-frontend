const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 right-0">
      <div className="">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 px-3 sm:px-4 md:px-6 shadow-md">
          <div className="flex items-center gap-2 sm:gap-4"></div>

          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-50 rounded-lg">
              <img src="/img/button-icon (1).png" alt="Help" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="p-2 hover:bg-gray-50 rounded-lg relative">
              <img src="/img/Frame 1000007525.png" alt="Notifications" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-1 right-1 flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4 text-[8px] sm:text-[10px] font-medium bg-[#5570F1] text-white rounded-full">
                4
              </span>
            </button>

            <button className="p-2 hover:bg-gray-50 rounded-lg">
              <img src="/img/Avatars.png" alt="Profile" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

