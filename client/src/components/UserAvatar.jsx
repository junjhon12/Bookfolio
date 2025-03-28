import { useState } from "react";

export default function UserAvatar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <img
        src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
        alt="User Avatar"
        className="w-10 h-10 object-cover rounded-full cursor-pointer"
        onClick={toggleModal}
      />
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4">User Information</h2>
            <img
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              alt="User Avatar"
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-center">Welcome, User!</p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
