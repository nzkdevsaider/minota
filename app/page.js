"use client";

import CoursesList from "@minota/components/Course/CoursesList";

export default function Home() {
  return (
    <section className="space-y-5 md:mx-20 max-w-full">
      <h1 className="text-4xl font-bold">Cursos</h1>
      <div className="grid auto-cols-fr grid-cols-1 gap-4">
        <CoursesList />
      </div>
    </section>
  );
}
