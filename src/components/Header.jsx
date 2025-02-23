const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center p-4 shadow-md fixed w-full top-0 left-0 z-10">
      <div className="flex items-center space-x-4">
      </div>

      <div className="flex items-center space-x-4 sm:space-x-6">
        <img src="/img/button-icon (1).png" alt="Help" className="w-5 sm:w-6" />

        <div className="relative">
          <img src="/img/Frame 1000007525.png" alt="Notifications" className="w-5 sm:w-6" />
          <span className="absolute -top-1 -right-1 bg-[#5570F1] text-white text-xs px-1 rounded-full">4</span>
        </div>
        
        <img src="/img/Avatars.png" alt="Profile" className="w-6 sm:w-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
