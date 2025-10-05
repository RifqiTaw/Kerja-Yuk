import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { ActivityItem, NewsItem, OnlineUser } from "@/types";
import { BellRing, Clock4, Clock8, History } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const onlineUsers: OnlineUser[] = [
    { name: "Jane", role: "Designer" },
    { name: "Alex", role: "Frontend Dev" },
    { name: "Rina", role: "PM" },
    { name: "Dika", role: "QA" },
    { name: "Nia", role: "Backend Dev" },
  ];

  const activities: ActivityItem[] = [
    { icon: Clock4, label: "Check In", value: "08:30" },
    {
      icon: History,
      label: "Working Hours",
      value: "03:00:00",
      highlight: true,
    },
    { icon: Clock8, label: "Check Out", value: "--:--", highlight: true },
  ];

  const news: NewsItem = {
    author: "Ana Riswati",
    date: "Senin 30 Mei 2022",
    content: [
      "Kalimat 1 - Lorem ipsum dolor sit amet consec",
      "Kalimat 2 - Lorem ipsum dolor sit amet consec",
      "Kalimat 3 - Lorem ipsum dolor sit amet consec",
      "Kalimat 4 - Lorem ipsum dolor sit amet consec",
    ],
  };

  return (
    <div className="pb-24">
      <div className="p-4">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#FF3B30]">KerjaYuk!</h1>
          <Link href="/notification" className="relative">
            <BellRing className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
          </Link>
        </header>

        <p className="text-gray-600 mt-2">Hi, Good Morning!</p>

        {/* Profile Card */}
        <section className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl text-white p-4 mt-4 shadow-md flex justify-between items-start">
          {/* Left side */}
          <div className="flex flex-col items-center w-[90px] justify-between">
            <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white/30">
              <Image
                src="/avatar.png"
                alt="Profile"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="text-left leading-tight mt-2">
              <p className="text-[11px] opacity-90">Location</p>
              <p className="text-[13px] font-medium text-white">Kantor Sahid</p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 flex flex-col justify-between pl-2">
            <div className="flex justify-between items-center">
              <div className="leading-tight">
                <h2 className="font-semibold text-base">Tabay</h2>
                <p className="text-sm opacity-90 -mt-[1px]">UI/UX Designer</p>
              </div>

              <div className="text-right leading-tight">
                <p className="text-[11px] opacity-90">Member since</p>
                <p className="font-semibold text-[13px]">01 Juni 2021</p>
              </div>
            </div>

            <div className="flex justify-between items-end mt-6">
              <div />
              <p className="text-[11px] opacity-80 text-right pr-1">ICO</p>
            </div>
          </div>
        </section>

        {/* Today's Activity */}
        <section>
          <h3 className="mt-6 mb-2 font-semibold text-gray-800">
            Today's Activity
          </h3>

          <Card className="rounded-2xl shadow">
            <CardContent className="flex justify-between text-center p-4">
              {activities.map(({ icon: Icon, label, value, highlight }, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Icon className="h-6 w-6 text-red-500 mb-1" />
                  <p
                    className={`font-bold text-lg ${
                      highlight ? "text-red-500" : ""
                    }`}
                  >
                    {value}
                  </p>
                  <p className="text-gray-600 text-sm">{label}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* PCS News */}
        <section>
          <h3 className="mt-6 mb-2 font-semibold text-gray-800">PCS News</h3>
          <Card className="rounded-2xl shadow p-3">
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src="/avatar.png"
                      alt={news.author}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <span className="font-semibold text-sm text-gray-800">
                    {news.author}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{news.date}</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                {news.content.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-3">
                <span className="h-2 w-2 bg-red-500 rounded-full" />
                <span className="h-2 w-2 bg-gray-300 rounded-full" />
                <span className="h-2 w-2 bg-gray-300 rounded-full" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* online */}
        <section>
          <h3 className="mt-6 mb-2 font-semibold text-gray-800">Online</h3>
          <Card className="rounded-2xl shadow p-3">
            <CardContent className="flex justify-center gap-6 flex-wrap text-center">
              {onlineUsers.map((user, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative h-12 w-12 rounded-full bg-gray-200 overflow-hidden border">
                    <Image
                      src="/avatar.png"
                      alt={user.name}
                      fill
                      sizes="48px"
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                  </div>
                  <p className="text-xs font-semibold mt-1">{user.name}</p>
                  <p className="text-[10px] text-gray-500">{user.role}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>

      <Navbar />
    </div>
  );
}
