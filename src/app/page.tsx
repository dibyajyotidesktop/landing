"use client"
import { motion } from "framer-motion"
import {
  Rocket,
  Lightbulb,
  BookOpen,
  TrendingUp,
  Calendar,
  ExternalLink,
  DollarSign,
  BarChart3,
  PiggyBank,
  Sparkles,
  Star,
  FileText,
} from "lucide-react"
import Image from "next/image"

export default function Page() {
  // Optimized animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const simpleFloat = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-100/30 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <motion.header
        className="z-10 backdrop-blur-xl bg-white/70 border-b border-white/20 sticky top-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-center space-x-3">
            <motion.div animate={simpleFloat} className="relative">
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-sm"></div>
              <Rocket className="w-8 h-8 text-green-600 relative z-10" />
            </motion.div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent">
              <span className="text-green-600">Mint</span>Fix
            </h1>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 pb-12">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16 sm:mb-20 pt-8 sm:pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <motion.div className="mb-8 sm:mb-12" {...fadeInUp} transition={{ delay: 0.2, duration: 0.5 }}>
            <div className="relative inline-block mb-6">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-green-700 to-emerald-600 bg-clip-text text-transparent leading-tight">
                👋 Welcome to <span className="text-green-600">MintFix</span>
              </h2>
              <motion.div
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" />
              </motion.div>
            </div>
            <div className="relative">
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Sneak Peek Edition!
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Status Banner */}
          <motion.div
            className="relative backdrop-blur-xl bg-gradient-to-r from-amber-50/80 to-yellow-50/80 border border-amber-200/50 p-6 sm:p-8 mb-8 sm:mb-12 rounded-2xl max-w-5xl mx-auto shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-2xl"></div>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 relative z-10"
              animate={{
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <span className="text-2xl sm:text-3xl">🚧</span>
              <p className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
                <strong>We&apos;re not officially live yet</strong> – but you&apos;re getting early access!
              </p>
            </motion.div>
            <p className="text-gray-700 mt-3 text-base sm:text-lg relative z-10 text-center">
              Our full launch is coming on{" "}
              <strong className="text-green-700 bg-green-100 px-2 py-1 rounded-lg">
                27th June 2025 from 12:21 PM to 12:45 PM IST
              </strong>
              , but feel free to take a look around.
            </p>
          </motion.div>
        </motion.section>

        {/* What is MintFix Section */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto border border-white/30 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                <motion.div
                  className="relative p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl"
                  animate={{
                    opacity: [1, 0.7, 1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent text-center sm:text-left">
                  💡 What is MintFix?
                </h3>
              </div>
              <p className="text-lg sm:text-xl text-gray-700 text-center leading-relaxed font-medium">
                MintFix is your{" "}
                <span className="font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  smart money hub
                </span>{" "}
                – designed to simplify personal finance, passive income, and investing for students, beginners, and
                future money-makers.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Launch Day Features */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto text-white overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-emerald-600/5"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-10">
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm"
                >
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>
                <h3 className="text-2xl sm:text-4xl font-black text-center sm:text-left">📘 On launch day, you&apos;ll get:</h3>
              </div>

              <motion.div
                className="grid sm:grid-cols-2 gap-4 sm:gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { icon: TrendingUp, text: "Easy money tips & guides", color: "from-blue-400 to-blue-500" },
                  { icon: BarChart3, text: "Stock market insights", color: "from-purple-400 to-purple-500" },
                  { icon: DollarSign, text: "Budgeting tools", color: "from-yellow-400 to-yellow-500" },
                  { icon: PiggyBank, text: "Passive income ideas", color: "from-pink-400 to-pink-500" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div
                        className={`p-2 sm:p-3 bg-gradient-to-br ${item.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-base sm:text-lg font-semibold">{item.text}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-center text-xl sm:text-2xl mt-6 sm:mt-8 font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                And much more! ✨
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Banner Image Section */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-4 sm:p-6 max-w-5xl mx-auto overflow-hidden border border-white/30"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30"></div>
            <div className="relative z-10">
              <Image
                src="/the-png.jpg"
                alt="MintFix Launch Banner with QR Code"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Until Then Section */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto border-t-8 border-green-500 overflow-hidden"
            whileHover={{ borderTopWidth: "12px" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30"></div>
            <div className="text-center relative z-10">
              <h3 className="text-2xl sm:text-4xl font-black text-gray-800 mb-4 sm:mb-6 flex items-center justify-center space-x-3">
                <span>🧠</span>
                <span>Until Then…</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                Feel free to explore, bookmark the site, and follow us on socials for updates.
                <br className="hidden sm:block" />
                Let&apos;s fix the money game –{" "}
                <span className="font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  one smart step at a time.
                </span>
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer Info */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-transparent to-gray-900/50"></div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-center sm:text-left relative z-10">
              <motion.div
                className="group flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-green-400 text-base sm:text-lg">🔗 Website</p>
                  <a
                    href="https://mintfix.blog"
                    className="text-white hover:text-green-400 transition-colors text-sm sm:text-lg break-all"
                  >
                    https://mintfix.blog
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="group flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-blue-400 text-base sm:text-lg">📅 Official Launch</p>
                  <p className="text-white text-sm sm:text-lg">27 June 2025, 12:21 PM – 12:45 PM IST</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Terms and Conditions Section */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto border border-white/30 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-gray-50/50"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                <motion.div
                  className="relative p-3 bg-gradient-to-br from-slate-400 to-gray-500 rounded-2xl"
                  animate={{
                    opacity: [1, 0.8, 1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent text-center sm:text-left">
                  📜 Terms and Conditions
                </h3>
              </div>
              <div className="text-gray-700 space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold">Effective Date: June 27, 2025</p>
                <p>
                  Welcome to MintFix. By accessing or using our website located at https://mintfix.blog, you agree to be legally bound by the following Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the Website.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">1. Use of the Website</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>You agree to use the Website only for lawful, legitimate, and ethical purposes.</li>
                      <li>You must not use the Website in any manner that could damage, disable, overburden, or impair its availability or accessibility.</li>
                      <li>Unauthorized access to any part of the Website, server, or connected systems is strictly prohibited.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">2. Content Disclaimer</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>All content published on MintFix is intended for informational and educational purposes only.</li>
                      <li>We do not provide financial, investment, legal, or tax advice.</li>
                      <li>Always consult a qualified professional before making financial or investment decisions based on any information found on this Website.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">3. Intellectual Property</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Unless otherwise stated, all content on this Website—including but not limited to text, graphics, images, logos, and design—is the intellectual property of MintFix and protected under applicable copyright laws.</li>
                      <li>You may not reproduce, distribute, modify, or republish any part of the Website without express written consent from MintFix.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">4. Third-Party Links</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>This Website may contain links to third-party websites or services that are not owned or controlled by MintFix.</li>
                      <li>We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">5. Limitation of Liability</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>MintFix shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or use of the Website.</li>
                      <li>Your use of the Website is at your sole risk.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">6. Modifications to Terms</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>MintFix reserves the right to update, revise, or modify these Terms and Conditions at any time without prior notice.</li>
                      <li>The latest version will always be posted on this page with a revised Effective Date.</li>
                      <li>Continued use of the Website following any changes constitutes your acceptance of the updated Terms.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Author Section */}
        <motion.section
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative backdrop-blur-xl bg-gradient-to-br from-green-50/80 to-emerald-50/80 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto border-2 border-green-200/50 shadow-xl overflow-hidden"
            whileHover={{ borderColor: "#059669", backgroundColor: "rgba(236, 253, 245, 0.9)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-100/20"></div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
              <motion.div
                className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-50"></div>
                <span className="relative z-10">👋</span>
              </motion.div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent mb-2">
                  The smart money hub
                </h4>
                <p className="text-base sm:text-lg text-gray-700 font-medium mb-3">
                  Practical tips, investment hacks, and beginner-friendly finance guides
                </p>
                <p className="text-gray-600 text-base sm:text-lg">
                  Hi, I&apos;m{" "}
                  <span className="font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                    Dibyajoti Pandit
                  </span>
                  , a 19-year-old B.Com student who loves simplifying finance for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}