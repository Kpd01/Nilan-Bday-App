import { SpinWheel } from "@/components/spin-wheel"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function SpinAndDarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center mb-6 text-purple-600 hover:text-purple-800">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-purple-800 mb-2">Spin & Dare</h1>
            <p className="text-gray-600">Spin the wheel to randomly select a guest and assign them a fun task!</p>
          </div>

          <SpinWheel />
        </div>
      </div>
    </div>
  )
}
