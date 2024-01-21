import React from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children?: React.ReactNode; // Add this line
  }

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-700">
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
