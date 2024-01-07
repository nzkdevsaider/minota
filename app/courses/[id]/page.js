"use client";

import { usePathname } from "next/navigation";
import { CourseProvider } from "@minota/context/CourseContext";
import CourseLayout from "@minota/components/Layouts/CourseLayout";

const CoursesPage = () => {
	const pathname = usePathname();
	const id = pathname.split("/")[2];

	return (
		<CourseProvider>
			<CourseLayout id={id} />
		</CourseProvider>
	);
};

export default CoursesPage;
