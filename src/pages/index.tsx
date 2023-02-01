import Header from "@/components/Header";
import { courses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <main>
      <Header />
      <div className={"bg-[@E4E5E9] w-full h-full"}>
        <Container
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5"
          }
        >
          {courses.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </Container>
      </div>
    </main>
  );
}
