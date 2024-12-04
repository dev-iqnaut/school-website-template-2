import React from 'react';
import { BookOpen } from 'lucide-react';

function SideText() {
  return (
    <div className="h-screen overflow-y-auto p-8">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Document Reader</h1>
      </div>
      
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        
        <p className="text-lg text-gray-700">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>Independent scrolling for PDF and text</li>
            <li>Responsive layout</li>
            <li>Multiple page support</li>
            <li>Smooth performance</li>
          </ul>
        </div>
        
        <p className="text-lg text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
        </p>
      </div>
    </div>
  );
}

export { SideText };