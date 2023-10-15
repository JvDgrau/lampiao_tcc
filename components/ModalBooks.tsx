import React, { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalBook: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg overflow-hidden w-3/4 h-3/4 flex shadow-lg">
        <button
          className="absolute top-4 right-4 z-10 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalBook;
