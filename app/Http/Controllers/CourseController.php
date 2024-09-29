<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\UserCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        $courses = Course::all();
        $registeredCourses = UserCourse::where('user_id', $user->id)->pluck('course_id');

        return inertia('Courses/Index', [
            'courses' => $courses,
            'registeredCourses' => $registeredCourses,
        ]);
    }

    public function register(Request $request, $courseId)
    {
        $user = Auth::user();

        // Cek jika user sudah terdaftar di kursus
        if (UserCourse::where('user_id', $user->id)->where('course_id', $courseId)->exists()) {
            return response()->json(['message' => 'You are already registered for this course.'], 400);
        }

        UserCourse::create([
            'user_id' => $user->id,
            'course_id' => $courseId,
        ]);

        return response()->json(['message' => 'Course registered successfully']);
    }

    public function show($courseId)
    {
        $course = Course::findOrFail($courseId);
        return inertia('Courses/Detail', [
            'course' => $course,
        ]);
    }
    
}
