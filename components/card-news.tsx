import { Card, CardContent } from "@/components/ui/card";

export default function CardNews() {
  return (
    <Card className="rounded-2xl shadow p-3">
      <CardContent>
        <h3 className="font-semibold">Ana Riswati</h3>
        <p className="text-sm text-gray-600">
          Kalimat 1 - Lorem ipsum dolor sit amet consec
        </p>
        <p className="text-sm text-gray-600">
          Kalimat 2 - Lorem ipsum dolor sit amet consec
        </p>
      </CardContent>
    </Card>
  );
}
