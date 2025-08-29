"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Compass, ArrowLeft, Wrench, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Animated Logo Component
const AnimatedLogo = ({ size = "w-10 h-10" }: { size?: string }) => {
    return (
        <motion.div
            className={`${size} bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center relative overflow-hidden`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
                <Compass className="text-white w-6 h-6" />
            </motion.div>
            <motion.div
                className="absolute"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
                <Search className="text-white w-4 h-4" />
            </motion.div>
        </motion.div>
    )
}

export default function JoinPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
            {/* Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100"
            >
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
                            <AnimatedLogo />
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                                ココドコ
                            </span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            {[
                                { name: "ホーム", href: "/" },
                                { name: "ココドコとは？", href: "/about" },
                                { name: "イベント情報", href: "/events" },
                                { name: "企業・自治体", href: "/business" },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                                    >
                                        {item.name}
                                        <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-6 bg-transparent"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                ホームに戻る
                            </Button>
                        </Link>
                    </nav>
                </div>
            </motion.header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <motion.div
                            className="mb-6"
                            animate={{
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <AnimatedLogo size="w-24 h-24 mx-auto" />
                        </motion.div>

                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                >
                                    <Wrench className="w-10 h-10 text-yellow-600" />
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            メンテナンス中
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-700 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            現在、イベント参加システムの準備を進めております。<br />
                            もうしばらくお待ちください。
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <Card className="p-8 border-0 shadow-lg bg-white mb-8">
                            <CardContent className="p-0">
                                <div className="flex items-center justify-center mb-4">
                                    <Clock className="w-6 h-6 text-blue-600 mr-2" />
                                    <h3 className="text-lg font-semibold text-gray-800">準備中の内容</h3>
                                </div>
                                <ul className="text-left space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        イベント詳細の企画・調整
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        参加申込システムの構築
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        開催地域との連携調整
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <div className="space-y-4">
                            <p className="text-gray-600 mb-6">
                                最新情報はSNSでお知らせします。フォローしてお待ちください！
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link href="/">
                                        <Button
                                            size="lg"
                                            className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-8 py-3"
                                        >
                                            <ArrowLeft className="w-5 h-5 mr-2" />
                                            ホームに戻る
                                        </Button>
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <a href="mailto:cocodoco.information@gmail.com">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-3 bg-transparent"
                                        >
                                            お問い合わせ
                                        </Button>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-16 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <AnimatedLogo size="w-8 h-8" />
                        <span className="text-xl font-bold">ココドコ</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        &copy; 2025 ココドコ. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
