"use client";

import CoursesList from "@minota/components/CoursesView/CoursesList";

export default function Home() {
  return (
    <section className="space-y-5">
      <h1 className="text-4xl font-bold">Cursos</h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 justify-center items-center md:flex-row md:justify-start gap-10">
        <CoursesList/>
      </div>
    </section>
  );
}
