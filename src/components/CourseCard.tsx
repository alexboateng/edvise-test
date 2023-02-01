import React from "react";
import { Course } from "@/types/course";
import UserCard from "@/components/userCard";
import { Button } from "@/components/Button";
import CourseMenu from "./CourseMenu";

type Props = {
  course: Course;
};

function CourseCard({ course }: Props) {
  return (
    <div>
      <div className="max-w-2xl ">
        <div className="bg-white mx-auto  hover:shadow-md transition-all rounded-lg max-w-sm dark:bg-gray-800">
          <a href="#">
            <div className={"relative"}>
              <div
                className={
                  "bg-white rounded-lg px-3 py-1 top-3 right-3 absolute z-10"
                }
              >
                {course.duration}
              </div>
              <img className="rounded-t-lg" src={course.image} alt="" />
            </div>
          </a>
          <div className="flex flex-col gap-y-3 p-5">
            <div className={"flex justify-between items-center"}>
              <div>
                <h3 className={"font-bold text-sm"}>{course.title}</h3>
                <div className="flex text-xs gap-x-1">
                  <span className={"text-gray-500"}>Date :</span>
                  <span>{course.date}</span>
                </div>
              </div>
              <CourseMenu />
            </div>
            <div
              className={
                "flex justify-between items-center pt-3 border-t  border-gray-100"
              }
            >
              <UserCard
                reverseLayout={true}
                name={course.teacher.name}
                description={course.teacher.id}
                profileUrl={course.teacher.image}
              />
              <Button className={"h-8"} variant={"outline"}>
                Generate Content
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
