<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    /**
     * Process payment for an order.
     */
    public function process(Order $order)
    {
        // Check if order belongs to authenticated user
        if ($order->user_id !== Auth::id()) {
            return redirect()->route('orders.index')->with('error', 'Pesanan tidak ditemukan');
        }
        
        // Check if order is already paid
        if ($order->payment_status === 'paid') {
            return redirect()->route('orders.show', $order)->with('error', 'Pesanan sudah dibayar');
        }
        
        // Generate payment token (implement your payment gateway integration here)
        $paymentToken = $this->generatePaymentToken($order);
        
        $order->update([
            'payment_token' => $paymentToken
        ]);
        
        return Inertia::render('Payment/Process', [
            'order' => $order,
            'paymentToken' => $paymentToken
        ]);
    }
    
    /**
     * Handle payment callback from payment gateway.
     */
    public function callback(Request $request)
    {
        // Verify payment callback (implement your payment gateway verification here)
        $order = Order::where('payment_token', $request->token)->firstOrFail();
        
        if ($request->status === 'success') {
            $order->update([
                'payment_status' => 'paid',
                'order_status' => 'processing'
            ]);
            
            return redirect()->route('orders.show', $order)->with('success', 'Pembayaran berhasil');
        }
        
        $order->update([
            'payment_status' => 'failed'
        ]);
        
        return redirect()->route('orders.show', $order)->with('error', 'Pembayaran gagal');
    }
    
    /**
     * Generate payment token for order.
     */
    private function generatePaymentToken(Order $order)
    {
        // Implement your payment gateway token generation here
        // This is just a placeholder
        return 'PAY-' . strtoupper(uniqid());
    }
} 