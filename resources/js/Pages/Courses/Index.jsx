import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Courses({ courses, auth, registeredCourses }) {
    const [userRegisteredCourses, setUserRegisteredCourses] = useState(
        registeredCourses || []
    );

    const registerCourse = (courseId) => {
        axios
            .post(`/courses/${courseId}/register`)
            .then((response) => {
                alert(response.data.message);
                setUserRegisteredCourses((prev) => [...prev, courseId]);
            })
            .catch((error) => {
                console.error("Error registering course:", error);
                alert("Failed to register for the course.");
            });
    };
    return (
        <AuthenticatedLayout
            user={auth?.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Courses
                </h2>
            }
        >
            <Head title="Courses" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="container mx-auto p-4">
                        <h1 className="text-2xl font-bold">
                            Available Courses
                        </h1>
                        <p>Welcome, {auth?.user?.name}</p>
                        <ul>
                            {courses.map((course) => (
                                <li
                                    key={course.id}
                                    className="my-4 p-4 border rounded"
                                >
                                    <h2 className="text-xl font-semibold">
                                        {course.title}
                                    </h2>
                                    <p>
                                        {course.description.length > 100
                                            ? `${course.description.substring(
                                                  0,
                                                  100
                                              )}...`
                                            : course.description}
                                    </p>
                                    {userRegisteredCourses.includes(
                                        course.id
                                    ) ? (
                                        <button
                                            onClick={() =>
                                                (window.location.href = `/courses/${course.id}`)
                                            }
                                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                                        >
                                            Detail Kelas
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                registerCourse(course.id)
                                            }
                                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                                        >
                                            Register
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
