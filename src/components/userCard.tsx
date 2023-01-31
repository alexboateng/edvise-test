import React from "react";

type Props = {
  name: string;
  role: string;
  profileUrl: string;
};
function UserCard({ name, role, profileUrl }: Props) {
  return (
    <div className="flex items-center">
      <div className="hidden sm:block">
        <h2 className="text-md font-medium text-gray-800 ">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <img
        className="w-10 h-10 rounded-full object-cover ml-4 shadow "
        src={profileUrl}
        alt="avatar"
      />
    </div>
  );
}

export default UserCard;
