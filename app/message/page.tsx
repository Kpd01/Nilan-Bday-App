import { MessageForm } from "@/components/message-form"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">Dear 18-Year-Old Nilanth</h1>
            <p className="text-gray-600">
              Write a message that Nilanth will read when he turns 18. Share your wishes, advice, or a funny memory!
            </p>
          </div>

          <MessageForm />
        </div>
      </div>
    </div>
  )
}
