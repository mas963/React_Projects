import { Card, CardTitle } from "@/components/ui/card";

export default function Monitors() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-14 pt-0">
      <h4>monitors</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Kart 1 */}
      <Card className="flex items-center p-4 bg-gray-800">
        {/* Sol Kısım */}
        <div className="flex items-center space-x-4 w-full">
          <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0" />
          <div className="flex flex-col">
            <CardTitle className="text-lg font-semibold">wolfsprint.com</CardTitle>
            <p className="text-sm text-gray-400">HTTP • Up 1mo, 18 day</p>
          </div>
        </div>
        {/* Sağ Kısım */}
        <div className="flex items-center space-x-6 w-full">
          <div className="w-[150px]">
            <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: "50%" }} />
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm">5 min</p>
            <p className="text-sm font-medium">100%</p>
          </div>
        </div>
      </Card>

      {/* Kart 2 */}
      <Card className="flex items-center p-4 bg-gray-800">
        <div className="flex items-center space-x-4 w-full">
          <div className="w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0" />
          <div className="flex flex-col">
            <CardTitle className="text-lg font-semibold">example.com</CardTitle>
            <p className="text-sm text-gray-400">HTTP • Up 20d</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 w-full">
          <div className="w-full">
            <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500" style={{ width: "80%" }} />
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm">10 min</p>
            <p className="text-sm font-medium">80%</p>
          </div>
        </div>
      </Card>

      {/* Daha Fazla Kart Eklenebilir */}
    </div>
    </div>
  )
}
