import React from 'react';

const ProjectsList = ({ certificates = [], onSelect, viewMode = 'grid', isRecentlyViewed = false }) => {
  const formatTime = (timestamp) => {
    const now = new Date();
    const modifiedDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - modifiedDate) / 1000);

    if (diffInSeconds < 60) {
      return `Edited ${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `Edited ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `Edited ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `Edited ${days} day${days !== 1 ? 's' : ''} ago`;
    } else {
      return `Edited on ${modifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}`;
    }
  };

  const formatModified = (modified, isRecentlyViewed) => {
    if (isRecentlyViewed) {
      return formatTime(modified);
    } else {
      const [date, attendees] = modified.split(' - ');
      return `Held on ${date} - ${attendees}`;
    }
  };

  return (
    <div>
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certificates.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => onSelect(project)}
            >
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">
                  {formatModified(project.modified, isRecentlyViewed)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Modified</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Star</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-[#101928]">
              {certificates.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => onSelect(project)}
                >
                  <td className="px-6 py-4 flex items-center">
                    <img
                      src={project.preview}
                      alt={project.title}
                      className="w-10 h-10 object-cover rounded-lg mr-4"
                    />
                    {project.title}
                  </td>
                  <td className="px-6 py-4">{formatModified(project.modified, isRecentlyViewed)}</td>
                  <td className="px-6 py-4">{project.createdAt}</td>
                  <td className="px-6 py-4">
                    {project.star ? (
                      <span className="text-yellow-500">★</span>
                    ) : (
                      <span className="text-gray-300">★</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;