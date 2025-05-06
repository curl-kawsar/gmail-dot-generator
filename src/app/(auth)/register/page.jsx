import RegisterForm from "@/components/auth/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
} 