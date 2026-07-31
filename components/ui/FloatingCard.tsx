import { Clock3, Star, Users } from "lucide-react";

export default function FloatingCard() {
  return (
    <div className="hidden lg:block">

      <div className="w-80 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

        <div className="flex items-center gap-3">
          <Star className="fill-yellow-400 text-yellow-400" />
          <h2 className="text-2xl font-bold">
            4.9 Rating
          </h2>
        </div>

        <p className="mt-2 text-gray-300">
          Trusted by thousands of fitness enthusiasts.
        </p>

        <div className="mt-8 space-y-6">

          <div className="flex items-center gap-4">
            <Users className="text-red-500" />

            <div>
              <h3 className="font-bold text-xl">
                5000+
              </h3>

              <p className="text-sm text-gray-400">
                Active Members
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock3 className="text-red-500" />

            <div>
              <h3 className="font-bold text-xl">
                Open 24/7
              </h3>

              <p className="text-sm text-gray-400">
                Train Anytime
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}