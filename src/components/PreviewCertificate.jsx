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
    <div className="">
      <h2 className="text-center">Certificate of Achievement</h2>
   
    <div className="flex justify-between items-center mb-4">
    <div className="flex items-center space-x-2 bg-white border rounded-lg p-2 mb-4">
      <select 
        value={fontFamily}
        onChange={(e) => setFontFamily(e.target.value)}
        className="border rounded px-2 py-1 text-sm"
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

      <div className="h-6 w-px bg-gray-300 mx-2" />

      {editorTools[2].options.map(({ icon, style }) => (
        <button key={style} className="p-1 hover:bg-gray-100 rounded">
          <span className="font-semibold text-sm">{icon}</span>
        </button>
      ))}

      <div className="h-6 w-px bg-gray-300 mx-2" />

      {editorTools[3].options.map(({ icon, align }) => (
        <button key={align} className="p-1 hover:bg-gray-100 rounded">
          <span className="text-sm">{icon}</span>
        </button>
      ))}

      <div className="h-6 w-px bg-gray-300 mx-2" />

      {editorTools[4].options.map(({ icon, type }) => (
        <button key={type} className="p-1 hover:bg-gray-100 rounded">
          <span className="text-sm">{icon}</span>
        </button>
      ))}
      </div>
       
        <div className="flex justify-end items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Upload className="w-4 h-4" />
            <span>Re-upload</span>
          </button>
        </div>
    </div>
    </div>
  );

  return (
    <div className="p-6">

      {renderToolbar()}

      <div className="bg-gray-100 p-8 rounded-lg min-h-[600px] flex justify-center">
        <img src="/img/Cert Template 24.png" alt="" className="" />
      </div>
    </div>
  );
};

export default PreviewCertificate;