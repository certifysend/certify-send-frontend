const EmptyState = () => {
    return (
      <div className="mt-10 flex flex-col items-center justify-center text-center text-gray-500">
        <img src="/img/iconContainer6.png" alt="No Projects" className="w-20 mb-4" />
        <p>No Projects Created Yet</p>
        <p className="text-sm">IIt looks like you haven’t created any projects yet. Start by creating a new project to manage your certificates and forms</p>
        <div className="mt-4 flex space-x-4">
          <div className="flex">
          <button className="bg-[#5570F1] text-white px-4 py-2 rounded flex items-center">
            <img src="/img/button-icon-gen.png" alt="" className="w-4 h-4" />Generate Certificate</button>
            </div>
            <div className=""></div>
          <button className="bg-gray-300 px-4 py-2 rounded flex items-center">
          <img src="/img/button-icon-form.png" alt="" className="" />Create a New Form</button>
        </div>
      </div>
    );
  };
  
  export default EmptyState;
  