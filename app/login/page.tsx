// import { LoginForm } from "@/components/login-form"

import { LoginForm } from "@/components/forms/login-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm" suppressHydrationWarning>
        <LoginForm suppressHydrationWarning/>
      </div>
    </div>
  )
}
  