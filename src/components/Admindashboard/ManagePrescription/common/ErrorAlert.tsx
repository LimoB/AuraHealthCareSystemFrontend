// src/components/common/ErrorAlert.tsx
import React from 'react';

interface ErrorAlertProps {
  message: string;
  onClose?: () => void;
  onRetry?: () => void;
  isRetry?: boolean;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onClose, onRetry, isRetry = false }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
      <strong className="font-bold">{isRetry ? 'Error!' : 'Operation Error!'}</strong>
      <span className="block sm:inline ml-2">{message}</span>
      {(onClose || onRetry) && (
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          {isRetry ? (
            <svg
              onClick={onRetry}
              className="fill-current h-6 w-6 text-red-500 cursor-pointer"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Retry</title>
              <path d="M10 3a7 7 0 00-7 7h-1.5a.5.5 0 00-.354.854l2.5 2.5a.5.5 0 00.708 0l2.5-2.5a.5.5 0 00-.354-.854H10a5 5 0 110 10 5 5 0 010-10zM10 14a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          ) : (
            <svg
              onClick={onClose}
              className="fill-current h-6 w-6 text-red-500 cursor-pointer"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          )}
        </span>
      )}
    </div>
  );
};

export default ErrorAlert;