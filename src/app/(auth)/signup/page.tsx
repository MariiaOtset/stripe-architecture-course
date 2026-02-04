import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md"
              type="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md"
              type="password"
              required
            />
          </div>
          <button
            className="w-full py-2 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center">
          Already have an account?{
            <Link className="text-blue-500 hover:underline" href="/login">
              Log In
            </Link>
          }
        </p>
      </div>
    </div>
  )
}
