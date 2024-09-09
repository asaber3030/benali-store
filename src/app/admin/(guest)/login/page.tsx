import { getAdmin } from "@/actions/admin"
import { LoginAdminForm } from "../../_components/auth/login-form"
import { redirect } from "next/navigation"
import db from "@/services/prisma"

const AdminLoginPage = async () => {
  const admin = await getAdmin()
  if (admin) return redirect("/admin")

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 border mx-auto my-32 p-4 shadow-md rounded-md">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold">تسجيل الدخول</h1>
        </header>
        <LoginAdminForm />
      </div>
    </div>
  )
}

export default AdminLoginPage
