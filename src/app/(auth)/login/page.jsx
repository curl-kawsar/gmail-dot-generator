import LoginForm from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <LoginForm />
      </div>
    </div>
  )
} 