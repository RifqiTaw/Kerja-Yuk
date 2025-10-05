"use client";

import Link from "next/link";
import { Home, CalendarCheck, LogOut, FileText, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 shadow-inner">
      {/* Home */}
      <Link
        href="/"
        className="flex flex-col items-center text-sm text-gray-600 hover:text-red-500 transition-colors"
      >
        <Home className="h-6 w-6 mb-0.5" />
        Home
      </Link>

      {/* Attendance */}
      <Link
        href="/#"
        className="flex flex-col items-center text-sm text-gray-600 hover:text-red-500 transition-colors"
      >
        <CalendarCheck className="h-6 w-6 mb-0.5" />
        Attendance
      </Link>

      {/* Check Out */}
      <Link
        href="/#"
        className="flex flex-col items-center text-sm text-red-500 hover:text-red-600 transition-transform"
      >
        <div className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg -mt-6 transition-all duration-200">
          <LogOut className="h-6 w-6" />
        </div>
        Check Out
      </Link>

      {/* Form */}
      <Link
        href="/#"
        className="flex flex-col items-center text-sm text-gray-600 hover:text-red-500 transition-colors"
      >
        <FileText className="h-6 w-6 mb-0.5" />
        Form
      </Link>

      {/* Settings */}
      <Link
        href="/#"
        className="flex flex-col items-center text-sm text-gray-600 hover:text-red-500 transition-colors"
      >
        <Settings className="h-6 w-6 mb-0.5" />
        Settings
      </Link>
    </nav>
  );
}
