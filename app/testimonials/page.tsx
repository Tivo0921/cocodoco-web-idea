"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, ArrowRight, Search, Compass, Quote, Heart, ThumbsUp, MessageCircle } from "lucide-react"
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

export default function TestimonialsPage() {
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 500], [0, -150])

    const testimonials = [
        {
            id: 1,
            name: "田中 美咲",
            university: "京都大学 経済学部",
            age: 20,
            gender: "女性",
            event: "京都謎解きウォーク",
            date: "2024年11月15日",
            rating: 5,
            comment: "普通の観光では絶対に行かない場所を発見できて、本当に楽しかった！写真から場所を推理するのが思った以上に難しくて、友達と協力して解けた時の達成感は最高でした。地元の人との交流もあって、京都の新しい一面を知ることができました。",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["新発見", "達成感", "地元交流"],
            helpfulCount: 24,
        },
        {
            id: 2,
            name: "佐藤 健太",
            university: "大阪大学 工学部",
            age: 22,
            gender: "男性",
            event: "奈良古都ミステリー",
            date: "2024年10月28日",
            rating: 5,
            comment: "写真から場所を特定するという斬新なアプローチに最初は戸惑いましたが、実際にやってみると推理ゲームのようで非常に面白かったです。奈良公園の有名な場所だけでなく、隠れた名所も知ることができて、地域の歴史や文化を深く学べました。",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["推理ゲーム", "隠れた名所", "歴史学習"],
            helpfulCount: 18,
        },
        {
            id: 3,
            name: "山田 花音",
            university: "同志社大学 文学部",
            age: 19,
            gender: "女性",
            event: "京都謎解きウォーク",
            date: "2024年12月03日",
            rating: 5,
            comment: "初めての参加でしたが、運営の方々がとても親切で安心して楽しめました。一人で参加したのですが、他の参加者の方々とも自然に交流でき、新しい友達もできました。京都の街を歩きながら謎を解くという体験は、とても思い出深いものになりました。",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["初参加", "新しい友達", "思い出深い"],
            helpfulCount: 31,
        },
        {
            id: 4,
            name: "鈴木 大輔",
            university: "関西大学 商学部",
            age: 21,
            gender: "男性",
            event: "大阪グルメ探索",
            date: "2024年11月22日",
            rating: 4,
            comment: "グルメをテーマにしたイベントということで参加しましたが、単なる食べ歩きではなく、写真から店舗や地域を推理するという要素があって新鮮でした。大阪の下町の美味しいお店を発見できて、地元の食文化についても学べました。料金も手頃で学生にはありがたいです。",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["グルメ発見", "食文化", "手頃な料金"],
            helpfulCount: 22,
        },
        {
            id: 5,
            name: "伊藤 さくら",
            university: "立命館大学 国際関係学部",
            age: 20,
            gender: "女性",
            event: "神戸港街歩き",
            date: "2024年12月10日",
            rating: 5,
            comment: "神戸の港町の歴史と現代が混在する街並みを探索できて、とても勉強になりました。写真を手がかりに建物や場所を特定していく過程で、その地域の変遷や歴史背景も知ることができ、単なる観光とは違う深い学びがありました。友達にも絶対おすすめしたいです！",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["歴史学習", "深い学び", "おすすめ"],
            helpfulCount: 27,
        },
        {
            id: 6,
            name: "高橋 翔太",
            university: "近畿大学 理工学部",
            age: 23,
            gender: "男性",
            event: "和歌山自然謎解き",
            date: "2024年11月05日",
            rating: 5,
            comment: "自然の中での謎解きは初体験でしたが、写真から自然のランドマークを見つけ出すのがとても面白かったです。和歌山の豊かな自然環境を肌で感じながら、環境保護の大切さについても考えさせられました。体力的にはハードでしたが、その分達成感も大きかったです。",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["自然体験", "環境保護", "大きな達成感"],
            helpfulCount: 15,
        },
        {
            id: 7,
            name: "松本 愛美",
            university: "関西学院大学 社会学部",
            age: 21,
            gender: "女性",
            event: "京都謎解きウォーク",
            date: "2024年12月01日",
            rating: 4,
            comment: "友達と参加しましたが、二人で協力して謎を解いていく過程がとても楽しかったです。京都は何度も来たことがありましたが、今回は全く知らない場所に行けて新鮮でした。SNSに投稿したら多くの人から反応をもらえて、ココドコの認知度も上がっているんだなと感じました。",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["友達との協力", "新鮮な場所", "SNS反響"],
            helpfulCount: 19,
        },
        {
            id: 8,
            name: "中村 啓介",
            university: "甲南大学 経営学部",
            age: 22,
            gender: "男性",
            event: "奈良古都ミステリー",
            date: "2024年11月18日",
            rating: 5,
            comment: "地域創生に興味があって参加しました。実際に参加してみて、こういう形で地域の魅力を発信していく取り組みはとても意義深いと感じました。参加者同士の交流も活発で、同じような関心を持つ仲間に出会えたのも良かったです。今後もぜひ参加したいと思います。",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["地域創生", "意義深い", "仲間との出会い"],
            helpfulCount: 33,
        },
        {
            id: 9,
            name: "小林 美穂",
            university: "龍谷大学 文学部",
            age: 19,
            gender: "女性",
            event: "大阪グルメ探索",
            date: "2024年12月08日",
            rating: 4,
            comment: "写真から場所を推理するのは最初は難しかったですが、ヒントをもらいながら徐々にコツを掴めました。大阪の美味しいお店を巡りながら、その地域の歴史や文化についても学べて一石二鳥でした。次回は別の地域のイベントにも参加してみたいです。",
            image: "/placeholder.svg?height=100&width=100",
            highlights: ["コツを習得", "一石二鳥", "別地域参加希望"],
            helpfulCount: 21,
        },
    ]

    const stats = [
        { number: "4.8", label: "平均満足度", icon: Star, color: "yellow" },
        { number: "1,200+", label: "総参加者数", icon: Users, color: "blue" },
        { number: "95%", label: "リピート希望率", icon: Heart, color: "pink" },
        { number: "98%", label: "友人推奨率", icon: ThumbsUp, color: "green" },
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
                                { name: "参加者の声", href: "/testimonials" },
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
                                        className={`text-gray-700 hover:text-blue-600 transition-colors font-medium relative group ${item.href === "/testimonials" ? "text-blue-600" : ""
                                            }`}
                                    >
                                        {item.name}
                                        <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <Button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-6">
                            イベント参加
                        </Button>
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
                                参加者の声
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl text-gray-700 mb-8 font-medium max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                実際にココドコに参加した学生たちの<br />
                                リアルな体験談をお聞きください
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
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
            </section>

            {/* Filter Section */}
            <section className="py-10 bg-gradient-to-r from-blue-50 to-pink-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {["すべて", "京都謎解きウォーク", "奈良古都ミステリー", "大阪グルメ探索", "神戸港街歩き", "和歌山自然謎解き"].map((filter, index) => (
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
                                    className={`rounded-full px-4 py-2 text-sm ${filter === "すべて"
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

            {/* Testimonials Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <Card className="border-0 shadow-lg bg-white h-full relative overflow-hidden">
                                    <div className="absolute top-4 right-4">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Quote className="w-8 h-8 text-blue-200" />
                                        </motion.div>
                                    </div>

                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={100}
                                                    height={100}
                                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                                />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-600">{testimonial.university}</p>
                                                <div className="flex items-center mt-1">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                                        >
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* 参加情報 */}
                                        <div className="bg-gray-50 rounded-lg p-3 mb-4 text-xs">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex items-center">
                                                    <MapPin className="w-3 h-3 mr-1 text-gray-500" />
                                                    <span className="text-gray-600">{testimonial.event}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-3 h-3 mr-1 text-gray-500" />
                                                    <span className="text-gray-600">{testimonial.date}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="w-3 h-3 mr-1 text-gray-500" />
                                                    <span className="text-gray-600">{testimonial.age}歳・{testimonial.gender}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed mb-4 text-sm">{testimonial.comment}</p>

                                        {/* ハイライト */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {testimonial.highlights.map((highlight, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1 + i * 0.1 }}
                                                >
                                                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 border-blue-200">
                                                        #{highlight}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* 役に立った数 */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <motion.button
                                                className="flex items-center text-gray-500 hover:text-blue-600 transition-colors text-sm"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ThumbsUp className="w-4 h-4 mr-1" />
                                                役に立った ({testimonial.helpfulCount})
                                            </motion.button>
                                            <motion.button
                                                className="flex items-center text-gray-500 hover:text-blue-600 transition-colors text-sm"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <MessageCircle className="w-4 h-4 mr-1" />
                                                コメント
                                            </motion.button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Load More Button */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-8 bg-transparent"
                            >
                                もっと見る
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Your Voice Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">あなたの体験談もお聞かせください</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            ココドコに参加した感想や体験談を共有して、<br />
                            これから参加する方の参考にしてください！
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
                                >
                                    体験談を投稿する
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/events">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold bg-transparent"
                                    >
                                        イベントに参加する
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
                                    { name: "参加者の声", href: "/testimonials" },
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
