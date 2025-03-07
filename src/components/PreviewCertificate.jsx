import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const PreviewCertificate = () => {
  const [fontSize, setFontSize] = useState('12');
  const [fontFamily, setFontFamily] = useState('Arial');

  const editorTools = [
    { type: 'font', options: ['Arial', 'Times New Roman', 'Helvetica', 'Calibri'] },
    { type: 'size', options: ['8', '10', '12', '14', '16', '18', '20', '24'] },
    { 
      type: 'style',
      options: [
        { icon: 'B', style: 'bold' },
        { icon: 'I', style: 'italic' },
        { icon: 'U', style: 'underline' }
      ]
    },
    {
      type: 'align',
      options: [
        { icon: '≡', align: 'left' },
        { icon: '≣', align: 'center' },
        { icon: '≡', align: 'right' }
      ]
    },
    {
      type: 'list',
      options: [
        { icon: '•', type: 'bullet' },
        { icon: '1.', type: 'number' }
      ]
    }
  ];

  const renderToolbar = () => (
    <div className="p-2 md:p-4">
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium mb-2 md:mb-4 overflow-hidden">Certificate of Achievement</h2>
      
      <div className="flex flex-col space-y-3 md:space-y-4">
        <div className="flex flex-wrap gap-2 bg-white border rounded-lg p-2 w-full overflow-x-auto">
          <select 
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="border rounded px-2 py-1 text-sm flex-grow min-w-[100px] max-w-[150px]"
          >
            {editorTools[0].options.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>

          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="border rounded px-2 py-1 text-sm w-16"
          >
            {editorTools[1].options.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>

          <div className="hidden sm:block h-6 w-px bg-gray-300 mx-1" />

          <div className="flex items-center space-x-1">
            {editorTools[2].options.map(({ icon, style }) => (
              <button key={style} className="p-1 hover:bg-gray-100 rounded">
                <span className="font-semibold text-sm">{icon}</span>
              </button>
            ))}
          </div>

          <div className="hidden sm:block h-6 w-px bg-gray-300 mx-1" />

          <div className="flex items-center space-x-1">
            {editorTools[3].options.map(({ icon, align }) => (
              <button key={align} className="p-1 hover:bg-gray-100 rounded">
                <span className="text-sm">{icon}</span>
              </button>
            ))}
          </div>

          <div className="hidden sm:block h-6 w-px bg-gray-300 mx-1" />

          <div className="flex items-center space-x-1">
            {editorTools[4].options.map(({ icon, type }) => (
              <button key={type} className="p-1 hover:bg-gray-100 rounded">
                <span className="text-sm">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center space-x-2 px-3 py-2 sm:px-4 border rounded-lg hover:bg-gray-50 text-sm sm:text-base">
            <Upload className="w-4 h-4" />
            <span>Re-upload</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full p-2 sm:p-4 md:p-6">
      {renderToolbar()}
      <div className="mt-3 md:mt-4 bg-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg flex justify-center items-center overflow-hidden">
        <div className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
          <img 
            src="/img/Cert Template 24.png" 
            alt="Certificate Template" 
            className="w-full h-auto max-w-[800px] object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewCertificate;