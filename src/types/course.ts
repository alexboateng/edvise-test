export interface Course {
  id: string;
  title: string;
  image: string;
  date: string;
  duration: string;
  teacher: Teacher;
}

export interface Teacher {
  id: string;
  name: string;
  image: string;
}
