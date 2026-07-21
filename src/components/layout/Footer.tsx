"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";

const socialIcons = [
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  Mail,
];

const productLinks = [
  "Features",
  "AI Insights",
  "Pricing",
  "Security",
];

const companyLinks = [
  "About",
  "Blog",
  "Careers",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold tracking-tight">
              BucksWise
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              AI-powered personal finance that helps you budget,
              save, invest, and make smarter financial decisions with
              confidence.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socialIcons.map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                >
                  <Icon size={20} />
                </motion.button>
              ))}
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              <ShieldCheck size={18} />
              Bank-level security & encrypted data
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="mt-6 space-y-4">
              {productLinks.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-slate-400 transition-colors hover:text-indigo-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-slate-400 transition-colors hover:text-indigo-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Newsletter
            </h3>

            <p className="mt-6 leading-7 text-slate-400">
              Monthly AI finance insights delivered straight to your inbox.
            </p>

            <div className="mt-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 backdrop-blur-xl outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-4 font-semibold shadow-lg transition-all hover:shadow-indigo-500/25"
              >
                Subscribe
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 BucksWise. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="cursor-pointer transition hover:text-white">
              Privacy Policy
            </span>

            <span className="cursor-pointer transition hover:text-white">
              Terms of Service
            </span>

            <span className="cursor-pointer transition hover:text-white">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}