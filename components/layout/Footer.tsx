"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black transition-all duration-300 hover:scale-105">
              <span className="text-red-600">REPS</span>{" "}
              <span className="text-white">CLUB</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
             Reps Club is where discipline meets transformation. Train with elite equipment, expert coaches, and a community built to push you beyond your limits.
              strength, discipline, and transformation.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-red-500 hover:bg-red-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-red-500 hover:bg-red-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-red-500 hover:bg-red-600"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link
                 href="/"
                className="transition-all duration-300 hover:text-red-500 hover:translate-x-1 inline-block"
>
                Home
                </Link>
              </li>

              <li>
                <Link href="/programs">Programs</Link>
              </li>

              <li>
                <Link href="/membership">Membership</Link>
              </li>

              <li>
                <Link href="/#trainers">Trainers</Link>
              </li>

              <li>
                <Link href="/#gallery">Gallery</Link>
              </li>

            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Programs
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Strength Training</li>

              <li>HIIT Training</li>

              <li>Personal Coaching</li>

              <li>CrossFit</li>

            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Opening Hours
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Monday - Friday</p>

              <p className="text-white">
                5:00 AM – 11:00 PM
              </p>

              <p>Saturday - Sunday</p>

              <p className="text-white">
                Open 24 Hours
              </p>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-400">
  © 2026 Reps Club. All rights reserved.

  <span className="ml-2">
    Crafted with ❤️ by{" "}
    <span className="font-semibold text-red-500">
      Abhishek G V
    </span>{" "}
    &{" "}
    <span className="font-semibold text-white">
      H R Abhiram
    </span>
  </span>
</p>

          <div className="flex gap-8 text-sm text-gray-500">

            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}