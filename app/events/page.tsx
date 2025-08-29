"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, ArrowRight, Search, Compass, Clock, Target, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

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

export default function EventsPage() {
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 500], [0, -150])

    const events = [
        {
            id: 1,
            title: "みなとみらいLumosコラボイベント",
            location: "神奈川県横浜市",
            date: "2024年7月13日",
            participants: "12名参加",
            image: "/event-01.jpg",
            status: "開催済み",
            difficulty: "初級",
            statusColor: "gray",
            description: "みなとみらい地区の写真から場所を推理し、実際に巡る特別コラボイベント。",
            features: ["初心者歓迎", "コラボイベント", "都市探索"],
            price: "モニター価格",
            duration: "3-4時間",
        },
        {
            id: 2,
            title: "鳥取街バルイベント",
            location: "鳥取県鳥取市",
            date: "2025年11月1日〜2日",
            participants: "準備中",
            image: "/placeholder.svg?height=300&width=400",
            status: "準備中",
            difficulty: "中級",
            statusColor: "blue",
            description: "鳥取の街バルと連携した地域グルメと謎解きを楽しむ特別イベント。",
            features: ["グルメ体験", "地域連携", "街バル"],
            price: "未定",
            duration: "4-5時間",
        },
        {
            id: 3,
            title: "横浜国立大学学祭出店",
            location: "神奈川県横浜市",
            date: "2025年10月31日〜11月2日",
            participants: "準備中",
            image: "/placeholder.svg?height=300&width=400",
            status: "準備中",
            difficulty: "初級",
            statusColor: "blue",
            description: "横浜国立大学の学祭にてココドコ体験ブースを出店。大学生向け特別企画。",
            features: ["学祭出店", "大学生向け", "体験ブース"],
            price: "モニター価格",
            duration: "2-3時間",
        },
        // {
        //     id: 4,
        //     title: "京都謎解きウォーク",
        //     location: "京都府京都市",
        //     date: "2025年3月15日〜31日",
        //     participants: "128名参加中",
        //     image: "/placeholder.svg?height=300&width=400",
        //     status: "開催中",
        //     difficulty: "初級",
        //     statusColor: "green",
        //     description: "京都の歴史ある街並みを舞台に、古い写真から現在の場所を推理する謎解きイベント。",
        //     features: ["初心者歓迎", "観光名所", "歴史学習"],
        //     price: "¥2,500",
        //     duration: "3-4時間",
        // },
        // {
        //     id: 5,
        //     title: "奈良古都ミステリー",
        //     location: "奈良県奈良市",
        //     date: "2025年4月1日〜14日",
        //     participants: "募集中（定員80名）",
        //     image: "/placeholder.svg?height=300&width=400",
        //     status: "募集中",
        //     difficulty: "中級",
        //     statusColor: "blue",
        //     description: "奈良公園周辺の隠れたスポットを写真から推理し、実際に訪れる中級者向けイベント。",
        //     features: ["中級者向け", "自然散策", "文化体験"],
        //     price: "¥3,000",
        //     duration: "4-5時間",
        // },
        // {
        //     id: 6,
        //     title: "広島平和記念謎解き",
        //     location: "広島県広島市",
        //     date: "2025年4月20日〜30日",
        //     participants: "準備中",
        //     image: "/placeholder.svg?height=300&width=400",
        //     status: "準備中",
        //     difficulty: "上級",
        //     statusColor: "gray",
        //     description: "平和記念公園とその周辺地域の歴史的な場所を巡る、学習要素の高い上級イベント。",
        //     features: ["上級者向け", "歴史学習", "平和教育"],
        //     price: "¥3,500",
        //     duration: "5-6時間",
        // },
        // {
        //     id: 7,
        //     title: "大阪グルメ探索",
        //     location: "大阪府大阪市",
        //     date: "2025年5月10日〜25日",
        //     participants: "準備中",
        //     image: "/placeholder.svg?height=300&width=400",
        //     status: "準備中",
        //     difficulty: "初級",
        //     statusColor: "yellow",
        //     description: "大阪の下町グルメスポットを写真から推理し、実際に味わう食文化体験イベント。",
        //     features: ["グルメ体験", "地域文化", "初心者歓迎"],
        //     price: "¥4,000",
        //     duration: "4-5時間",
        // },
        // {
        //     id: 8,
        //     title: "神戸港街歩き",
        //     location: "兵庫県神戸市",
        //     date: "2025年6月1日〜15日",
        //     participants: "準備中",
        //     image: "/placeholder.svg?height=300&width=400",
        //     status: "準備中",
        //     difficulty: "中級",
        //     statusColor: "purple",
        //     description: "神戸の港町の歴史と現代が混在する街並みを探索する中級イベント。",
        //     features: ["港町文化", "建築探訪", "写真撮影"],
        //     price: "¥3,200",
        //     duration: "4-5時間",
        // },
        // {
        //     id: 9,
        //     title: "和歌山自然謎解き",
        //     location: "和歌山県和歌山市",
        //     date: "2025年6月20日〜7月5日",
        //     participants: "準備中",
        //     image: "/placeholder.svg?height=300&width=400",
        //     status: "準備中",
        //     difficulty: "上級",
        //     statusColor: "green",
        //     description: "和歌山の豊かな自然環境の中で行う、自然観察と謎解きを組み合わせた上級イベント。",
        //     features: ["自然観察", "エコツーリズム", "上級者向け"],
        //     price: "¥3,800",
        //     duration: "6-7時間",
        // },
    ]

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
                                // { name: "参加者の声", href: "/testimonials" }, // Temporarily hidden
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
                                        className={`text-gray-700 hover:text-blue-600 transition-colors font-medium relative group ${item.href === "/events" ? "text-blue-600" : ""
                                            }`}
                                    >
                                        {item.name}
                                        <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <Link href="/join">
                            <Button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-6">
                                イベント参加
                            </Button>
                        </Link>
                    </nav>
                </div>
            </motion.header>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <motion.div style={{ y: heroY }} className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mb-8"
                        >
                            <motion.div className="mb-6" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.8 }}>
                                <AnimatedLogo size="w-24 h-24 mx-auto" />
                            </motion.div>

                            <motion.h1
                                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                イベント情報
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl text-gray-700 mb-8 font-medium max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                現在開催中・開催予定のイベントをチェックして<br />
                                新しい地域体験に参加しよう！
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Filter Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {["すべて", "開催中", "募集中", "準備中", "初級", "中級", "上級"].map((filter, index) => (
                            <motion.div
                                key={filter}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant={filter === "すべて" ? "default" : "outline"}
                                    className={`rounded-full px-6 ${filter === "すべて"
                                        ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    {filter}
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -10,
                                    rotateY: 5,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <Card className="overflow-hidden border-0 shadow-lg bg-white h-full">
                                    <div className="relative overflow-hidden">
                                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-48 object-cover"
                                            />
                                        </motion.div>
                                        <div className="absolute top-4 left-4">
                                            <Badge className={`bg-${event.statusColor}-500 text-white`}>{event.status}</Badge>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <Badge variant="secondary" className="bg-white/90">
                                                {event.difficulty}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                                        <div className="space-y-2 mb-4">
                                            <motion.div className="flex items-center text-gray-600" whileHover={{ x: 5 }}>
                                                <MapPin className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{event.location}</span>
                                            </motion.div>
                                            <motion.div className="flex items-center text-gray-600" whileHover={{ x: 5 }}>
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{event.date}</span>
                                            </motion.div>
                                            <motion.div className="flex items-center text-gray-600" whileHover={{ x: 5 }}>
                                                <Clock className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{event.duration}</span>
                                            </motion.div>
                                            <motion.div className="flex items-center text-gray-600" whileHover={{ x: 5 }}>
                                                <Users className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{event.participants}</span>
                                            </motion.div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {event.features.map((feature, i) => (
                                                <Badge key={i} variant="outline" className="text-xs">
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-2xl font-bold text-blue-600">{event.price}</span>
                                            {event.status === "開催中" && (
                                                <Badge className="bg-red-500 text-white animate-pulse">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    開催中
                                                </Badge>
                                            )}
                                        </div>

                                        <Button
                                            className={`w-full rounded-full ${event.status === "開催中"
                                                ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                                                : event.status === "募集中"
                                                    ? "bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
                                                    : "bg-gray-400 cursor-not-allowed"
                                                } text-white`}
                                            disabled={event.status === "準備中"}
                                        >
                                            {event.status === "開催中"
                                                ? "今すぐ参加"
                                                : event.status === "募集中"
                                                    ? "参加申込"
                                                    : "準備中"}
                                            {event.status !== "準備中" && <ArrowRight className="w-4 h-4 ml-2" />}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section - Commented out until sufficient data is available */}
            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">イベント実績</h2>
                        <p className="text-gray-600 text-lg">これまでの参加実績と満足度</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: Users, number: "1,200+", label: "総参加者数", color: "blue" },
                            { icon: MapPin, number: "15", label: "開催地域", color: "pink" },
                            { icon: Star, number: "4.8", label: "平均満足度", color: "yellow" },
                            { icon: Trophy, number: "95%", label: "リピート率", color: "green" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <motion.div
                                    className={`w-20 h-20 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <stat.icon className={`w-10 h-10 text-${stat.color}-600`} />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">気になるイベントは見つかりましたか？</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            まずは気軽に参加してみて、新しい地域体験を楽しんでください！
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/join">
                                    <Button
                                        size="lg"
                                        className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
                                    >
                                        イベント参加登録
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/about">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold bg-transparent"
                                    >
                                        ココドコについて
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <AnimatedLogo size="w-8 h-8" />
                                <span className="text-xl font-bold">ココドコ</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                写真をもとに地域を巡る、新しい旅の形を提案する学生向けプラットフォーム
                            </p>
                        </div>

                        {[
                            {
                                title: "サービス",
                                links: [
                                    { name: "ココドコとは？", href: "/about" },
                                    { name: "イベント情報", href: "/events" },
                                    // { name: "参加者の声", href: "/testimonials" }, // Temporarily hidden
                                    { name: "お知らせ", href: "/news" },
                                ],
                            },
                            {
                                title: "企業・自治体",
                                links: [
                                    { name: "導入について", href: "/business" },
                                    { name: "会社情報", href: "/company" },
                                    { name: "お問い合わせ", href: "/contact" },
                                ],
                            },
                            {
                                title: "サポート",
                                links: [
                                    { name: "よくある質問", href: "/faq" },
                                    { name: "利用規約", href: "/terms" },
                                    { name: "プライバシーポリシー", href: "/privacy" },
                                ],
                            },
                        ].map((section, index) => (
                            <div key={index}>
                                <h4 className="font-semibold mb-4">{section.title}</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link href={link.href} className="hover:text-white transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2025 ココドコ. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
