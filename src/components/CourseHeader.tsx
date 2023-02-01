import React from "react";
import { Button } from "@/components/Button";

function CourseHeader() {
  return (
    <div className={"flex items-center py-5 justify-between"}>
      <div className={"flex gap-x-2"}>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <Button variant={"outline"}>Filter</Button>
      </div>
      <Button className={"h-10"}>Upload Lesson</Button>
    </div>
  );
}

export default CourseHeader;
