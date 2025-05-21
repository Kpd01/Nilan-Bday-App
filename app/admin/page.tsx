import { AdminDashboard } from "@/components/admin-dashboard"
import Link from "next/link"
import { ChevronLeft, Lock } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-slate-100 py-8">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center mb-6 text-gray-600 hover:text-gray-800">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Lock className="h-5 w-5 mr-2 text-gray-700" />
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>

          <AdminDashboard />
        </div>
      </div>
    </div>
  )
}
