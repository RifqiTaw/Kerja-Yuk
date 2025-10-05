"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import NotificationItem from "@/components/notification-item";

export default function NotificationPage() {
  return (
    <div className="pb-20 p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-4">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </Link>
        <h1 className="text-xl font-bold text-red-500 ml-2">Notification</h1>
      </div>

      {/* Notification Items */}
      <div className="space-y-3">
        <NotificationItem
          type="Reimbursement"
          description="Your submission 'Lorem ipsum dolor sit amet...' with total cost of 50,000 has been paid. Please check your BRIMO application."
          status="approved"
          date="Today"
        />
        <NotificationItem
          type="Reimbursement"
          description='Your submission "description" has been rejected, please click for details.'
          status="rejected"
          date="Yesterday"
        />
        <NotificationItem
          type="Sickness"
          description="Your submission is being reviewed by your Superior."
          status="info"
          date="2022-10-05"
        />
        <NotificationItem
          type="Overtime"
          description="Your submission has been approved by the Superior."
          status="approved"
          date="2022-10-05"
        />
      </div>

      <Navbar />
    </div>
  );
}
