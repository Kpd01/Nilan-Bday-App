import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PartyPopper, MessageSquare, Camera } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Nilanth's Birthday Celebration</h1>
          <p className="text-xl text-gray-600">Join the fun and leave your mark!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <PartyPopper className="h-6 w-6" />
                <span>Spin & Dare</span>
              </CardTitle>
              <CardDescription className="text-purple-100">Spin the wheel and get a fun challenge!</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p>Randomly select a guest and assign them a fun task to complete.</p>
            </CardContent>
            <CardFooter>
              <Link href="/spin-and-dare" className="w-full">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Let's Spin!
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                <span>Message for Nilanth</span>
              </CardTitle>
              <CardDescription className="text-blue-100">Write a message for 18-year-old Nilanth</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p>Leave a heartfelt or funny message that Nilanth will read when he turns 18.</p>
            </CardContent>
            <CardFooter>
              <Link href="/message" className="w-full">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Write Message
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-orange-500 text-white">
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-6 w-6" />
                <span>Photo Gallery</span>
              </CardTitle>
              <CardDescription className="text-pink-100">Share your party moments</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p>Upload your photos from the party to create a memorable collection.</p>
            </CardContent>
            <CardFooter>
              <Link href="/gallery" className="w-full">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600">
                  Upload Photos
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href="/admin">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Admin Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
