import { PhotoUpload } from "@/components/photo-upload"
import { PhotoGallery } from "@/components/photo-gallery"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center mb-6 text-pink-600 hover:text-pink-800">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-pink-800 mb-2">Photo Gallery</h1>
            <p className="text-gray-600">Share your favorite moments from Nilan's birthday celebration!</p>
          </div>

          <PhotoUpload />
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Party Memories</h2>
            <PhotoGallery />
          </div>
        </div>
      </div>
    </div>
  )
}
