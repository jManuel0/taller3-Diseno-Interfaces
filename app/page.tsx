import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT IMAGE */}
        <div className="relative h-[500px] md:h-auto">
          <Image
            src="/astro.jpg"
            alt="Astronaut"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute top-8 left-8 text-white font-semibold text-lg">
            Astro
          </div>

          <div className="absolute left-8 top-1/3 text-white max-w-xs">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Exploring new frontiers,
              <br />
              one step at a time.
            </h2>
          </div>

          <div className="absolute bottom-8 left-8 text-white text-sm opacity-80">
            Beyond Earth's grasp
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="px-8 py-10 md:px-16 md:py-14 flex flex-col justify-center">
          
          <div className="flex justify-end text-sm mb-6">
            <span className="text-gray-500">
              Already a member?
              <a href="/" className="ml-1 font-semibold hover:underline">
                Sign in
              </a>
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Create Account
          </h1>

          {/* Social Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 transition">
              Sign up with Google
            </button>

            <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-300 transition">
              With Facebook
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Or sign up using your email address
          </p>

          <form className="space-y-5">
            
            <div>
              <label className="block text-sm mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                Email or Phone no.
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                Username
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-gray-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <input type="checkbox" />
              <span>
                I agree to all terms and Privacy Policy
              </span>
            </div>

            <button className="w-full bg-purple-900 text-white py-3 rounded-full font-semibold hover:bg-purple-800 transition">
              Sign up
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?
              <a href="/" className="ml-1 font-semibold hover:underline">
                Log in
              </a>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}