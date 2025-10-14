import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground border border-border rounded-md p-4">
            Login
          </h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
