import Header from "@/components/Header";
import { courses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";
import { Container } from "@/components/Container";
import CourseHeader from "@/components/CourseHeader";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <main className={""}>
      <Header />
      <div className={"bg-gray-50 pb-6 w-full h-full"}>
        <Container>
          <CourseHeader />
          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5"
            }
          >
            {courses.map((item) => (
              <CourseCard key={item.id} course={item} />
            ))}
          </div>
          <div className="flex justify-center pt-8">
            <Pagination />
          </div>
        </Container>
      </div>
    </main>
  );
}
