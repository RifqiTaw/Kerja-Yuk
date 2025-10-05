import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Info } from "lucide-react";

interface NotificationItemProps {
  type: "Reimbursement" | "Sickness" | "Overtime";
  description: string;
  status?: "approved" | "rejected" | "info";
  date?: string;
}

export default function NotificationItem({
  type,
  description,
  status = "info",
  date,
}: NotificationItemProps) {
  const typeIcon =
    type === "Reimbursement"
      ? "/reimbursement.png"
      : type === "Sickness"
      ? "/pill.png"
      : "/overtime.png";

  const bgColor =
    type === "Reimbursement"
      ? "bg-[#E8F0FE]"
      : type === "Sickness"
      ? "bg-[#FEE8F1]"
      : "bg-[#F3E8FF]";

  const iconGradient = "bg-gradient-to-br from-red-500 to-pink-600";

  const StatusIcon =
    status === "approved"
      ? CheckCircle2
      : status === "rejected"
      ? XCircle
      : Info;

  const statusColor =
    status === "approved"
      ? "text-green-500"
      : status === "rejected"
      ? "text-red-500"
      : "text-blue-500";

  return (
    <Card
      className={`flex items-start gap-3 p-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 ${bgColor}`}
    >
      {/* Left Icon */}
      <div
        className={`relative h-12 w-12 rounded-xl flex items-center justify-center ${iconGradient} shadow-sm flex-shrink-0`}
      >
        <Image
          src={typeIcon}
          alt={type}
          width={28}
          height={28}
          className="object-contain"
        />
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[1px]">
          <StatusIcon className={`h-3.5 w-3.5 ${statusColor}`} />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-semibold text-sm text-gray-800">{type}</h4>
          {date && (
            <span className="text-[11px] text-gray-400 whitespace-nowrap ml-2">
              {date}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-700 leading-snug mt-0.5">
          {description}
        </p>
      </div>
    </Card>
  );
}
