import ResetPasswordForm from "@/components/auth/ResetPasswordForm"

export default function ResetPasswordPage({ params }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center">
        <ResetPasswordForm token={params.token} />
      </div>
    </div>
  )
} 