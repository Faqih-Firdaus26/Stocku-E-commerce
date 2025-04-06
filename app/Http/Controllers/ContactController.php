<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // TODO: Implement email sending logic
        // For now, just return success
        return redirect()->back()->with('success', 'Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    }
} 