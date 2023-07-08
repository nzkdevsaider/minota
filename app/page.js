"use client";

import CoursesList from "@minota/components/CoursesList";
import Layout from "@minota/components/Layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="space-y-5">
        <h1 className="text-4xl font-bold">Cursos</h1>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-start gap-10">
          <CoursesList newButton={true} />
        </div>
      </section>
    </Layout>
  );
}
