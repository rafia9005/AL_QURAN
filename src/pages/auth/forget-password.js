import { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import initializedAuth from "../lib/firebase/init";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(initializedAuth, email);
      setSuccess(true);
      setError(null);
    } catch (err) {
      setSuccess(false);
      setError("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    if (success) {
      const redirectTimeout = setTimeout(() => {
        router.push("/auth/reset-password/success");
      }, 1000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [success, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          onClick={handleResetPassword}
          className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Reset Password
        </button>
        {success && (
          <p className="text-green-500 mt-2">
            Password reset email sent! Redirecting...
          </p>
        )}
        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      </div>
    </div>
  );
}
