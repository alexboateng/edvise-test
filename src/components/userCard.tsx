import React from "react";
import clsx from "clsx";

type Props = {
  name: string;
  description: string;
  profileUrl: string;
  reverseLayout?: boolean;
};
function UserCard({
  name,
  description,
  profileUrl,
  reverseLayout = false,
}: Props) {
  return (
    <div
      className={clsx(
        "flex items-center gap-x-4",
        reverseLayout && "flex-row-reverse"
      )}
    >
      <div className="hidden sm:block">
        <h2 className="text-md font-medium text-gray-800 ">{name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <img
        className="w-10 h-10 rounded-full object-cover shadow "
        src={profileUrl}
        alt="avatar"
      />
    </div>
  );
}

export default UserCard;
