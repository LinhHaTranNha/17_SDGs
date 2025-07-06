import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export function meta() {
  return [
    { title: "About Us" },
    { name: "description", content: "Learn more about us." },
  ]
}

export default function About() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>

      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
    </div>
  )
}
