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
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-sm hover:shadow-md transition-all decoration-2 border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <div className={"relative"}>
              <div
                className={
                  "bg-white rounded-full px-3 py-1 top-3 right-3 absolute z-10"
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
                <h3>{course.title}</h3>
                <p className={"text-sm text-gray-500"}>{course.date}</p>
              </div>
              <CourseMenu />
            </div>
            <div
              className={"flex justify-between pt-3 border-t  border-gray-100"}
            >
              <UserCard
                reverseLayout={true}
                name={course.teacher.name}
                description={course.teacher.id}
                profileUrl={course.teacher.image}
              />
              <Button variant={"outline"}>Generate Content</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
