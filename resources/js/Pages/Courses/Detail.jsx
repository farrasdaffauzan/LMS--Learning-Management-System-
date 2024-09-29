import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useCallback, useState } from "react";

export default function CourseDetail({ course, auth }) {
    const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
    const [quizFeedback, setQuizFeedback] = useState("");

    const handleAnswerChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value,
        }));
    };

    const handleQuizSubmission = useCallback(
        async (e) => {
            e.preventDefault();
            let correctAnswers = 0;

            // Check answers and count points
            if (answers.q1 === "Citilink") correctAnswers++;
            if (answers.q2 === "Layanan low-cost") correctAnswers++;
            if (answers.q3 === "Citilink Loyalty Program") correctAnswers++;

            setQuizFeedback(
                correctAnswers > 0
                    ? `Jawaban benar: ${correctAnswers} dari 3 pertanyaan.`
                    : "Semua jawaban salah, coba lagi!"
            );

            alert("Jawaban telah dikirim!");
        },
        [answers]
    );

    function getYoutubeVideoId(url) {
        const regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[7].length == 11 ? match[7] : null;
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                        {course.title}
                    </h2>

                    <h3>Total Points {auth.user.name} : 0</h3>
                </>
            }
        >
            <Head title={course.title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="container mx-auto p-4">
                        <h1 className="text-2xl font-bold">
                            Deskripsi Kelas :{" "}
                        </h1>
                        <p className="text-justify">{course.description}</p>

                        {/* Bagian Video */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold">
                                Course Video
                            </h3>
                            <div className="mt-4">
                                <iframe
                                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(
                                        course.video_url
                                    )}`}
                                    title={course.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Bagian PDF */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">
                                Download Course PDF
                            </h3>
                            <a
                                href={course.pdf_url}
                                download
                                className=" px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Download PDF
                            </a>
                        </div>

                        {/* Bagian Soal Pilihan Ganda */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold">Quiz</h3>
                            <form
                                onSubmit={handleQuizSubmission}
                                className="mt-4"
                            >
                                <div className="mb-4">
                                    <label className="block font-semibold">
                                        1. Apa nama maskapai penerbangan yang
                                        terkenal dengan tarif terjangkau di
                                        Indonesia?
                                    </label>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q1"
                                                value="Citilink"
                                                checked={
                                                    answers.q1 === "Citilink"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            Citilink
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q1"
                                                value="Garuda Indonesia"
                                                checked={
                                                    answers.q1 ===
                                                    "Garuda Indonesia"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            Garuda Indonesia
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q1"
                                                value="Lion Air"
                                                checked={
                                                    answers.q1 === "Lion Air"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            Lion Air
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block font-semibold">
                                        2. Apa jenis layanan yang ditawarkan
                                        oleh Citilink?
                                    </label>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q2"
                                                value="Layanan full-service"
                                                checked={
                                                    answers.q2 ===
                                                    "Layanan full-service"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            Layanan full-service
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q2"
                                                value="Layanan low-cost"
                                                checked={
                                                    answers.q2 ===
                                                    "Layanan low-cost"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            Layanan low-cost
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q2"
                                                value="Charter"
                                                checked={
                                                    answers.q2 === "Charter"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            Charter
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block font-semibold">
                                        3. Apa program loyalitas yang ditawarkan
                                        oleh Citilink untuk pelanggannya?
                                    </label>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q3"
                                                value="Citilink Loyalty Program"
                                                checked={
                                                    answers.q3 ===
                                                    "Citilink Loyalty Program"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            Citilink Loyalty Program
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q3"
                                                value="GarudaMiles"
                                                checked={
                                                    answers.q3 === "GarudaMiles"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            GarudaMiles
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                name="q3"
                                                value="Lion Club"
                                                checked={
                                                    answers.q3 === "Lion Club"
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            Lion Club
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Submit Answers
                                </button>
                            </form>
                            {quizFeedback && (
                                <div className="mt-4">
                                    <p>{quizFeedback}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
