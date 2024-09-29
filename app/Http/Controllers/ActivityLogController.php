<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // Import Log facade for logging

class ActivityLogController extends Controller
{
    public function log(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'user_id' => 'required|integer',
            'action' => 'required|string',
            'points' => 'required|integer',
        ]);

        try {
            // Create a new activity log entry
            $activity = ActivityLog::create([
                'user_id' => $request->user_id,
                'action' => $request->action,
                'points' => $request->points,
            ]);

            // Return the created activity log along with a success message
            return response()->json([
                'message' => 'Activity logged successfully',
                'activity' => $activity,
            ], 201);
        } catch (\Exception $e) {
            // Log the error for debugging purposes
            Log::error('Failed to log activity: ' . $e->getMessage());

            // Return a generic error response
            return response()->json(['error' => 'Failed to log activity'], 500);
        }
    }
}
