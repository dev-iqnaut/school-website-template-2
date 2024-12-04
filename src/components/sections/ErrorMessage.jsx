import React from 'react';
import { AlertCircle } from 'lucide-react';

function ErrorMessage({ message }) {
  return (
    <div className="flex items-center justify-center p-4 bg-red-50 rounded-lg">
      <div className="text-center">
        <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
        <p className="text-red-600">{message}</p>
      </div>
    </div>
  );
}

export { ErrorMessage };