import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

const data = [
  {
    id: 99,
    title: "Digital Detox",
    description: "Disconnect to reconnect with yourself",
    duration: 7,
    participants: 189,
    icon: "📱",
  },
  {
    id: 100,
    title: "Gratitude Journal",
    description: "Write 3 things you're grateful for daily",
    duration: 21,
    participants: 342,
    icon: "📝",
  },
  {
    id: 101,
    title: "Water Challenge",
    description: "Drink 8 glasses of water every day",
    duration: 14,
    participants: 156,
    icon: "💧",
  },
];

export const SuggestedForYou = ({ challenges }: { challenges: any[] }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <div className="">
        <div className="flex gap-2 items-center my-2 p-3 border-b">
          <Lightbulb />
          <h1 className="font-bold">Suggested for you</h1>
        </div>
        <div className="">
          {data.map((item) => (
            <div
              className="flex gap-2 border-b hover:bg-amber-200 py-5 px-2"
              key={item.id}
            >
              <div className="w-10 h-10 shrink-0 bg-gray-100 flex-center rounded-lg">
                {item.icon}
              </div>
              <div className="text-gray-700 space-y-1 flex-center flex-col">
                <h1 className="text-sm font-semibold text-black">
                  {item.title}
                </h1>
                <p className="text-[11px] text-center">{item.description}</p>
                <div className="flex gap-2 text-xs">
                  <p className="text-brand-blue font-semibold">
                    {item.duration} days
                  </p>
                  <p className="">{item.participants} joined</p>
                </div>
              </div>
              <Button className="!rounded-2xl text-xs !py-2">Join</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
