"use server"

// In a real app, this would connect to a database
export async function submitMessage(data: {
  name: string
  message: string
  photo: File | null
}) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Message submitted:", data)

  return {
    success: true,
    message: `Message from ${data.name} saved successfully!`,
  }
}
