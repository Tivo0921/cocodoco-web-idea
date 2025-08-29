"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Star, ArrowRight, Search, Compass, Target, Heart, Globe } from "lucide-react"
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

export default function AboutPage() {
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 500], [0, -150])

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
                                        className={`text-gray-700 hover:text-blue-600 transition-colors font-medium relative group ${item.href === "/about" ? "text-blue-600" : ""
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
                                ココドコとは？
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl text-gray-700 mb-8 font-medium max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                画像をもとに場所を推理し、実際に現地を訪問することで<br />
                                地方創生を推進する新しいプラットフォームです
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">私たちのミッション</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            写真から場所を推理し、実際に足を運ぶことで、地域の隠れた魅力を発見し、
                            持続可能な観光と地方創生を実現します。
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                icon: Target,
                                title: "地域の魅力発見",
                                description: "写真から場所を推理することで、普通の観光では見つからない隠れた地域の魅力を発見します。",
                                color: "blue",
                            },
                            {
                                icon: Heart,
                                title: "持続可能な観光",
                                description: "観光公害を避けながら、地域に配慮した新しい形の観光体験を提供します。",
                                color: "pink",
                            },
                            {
                                icon: Globe,
                                title: "地方創生推進",
                                description: "学生の力で地方の活性化を図り、地域と若者をつなぐ架け橋となります。",
                                color: "purple",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="p-8 border-0 shadow-lg bg-white h-full">
                                    <CardContent className="p-0 text-center">
                                        <motion.div
                                            className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Representative Message Section */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">代表挨拶</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="relative mb-6"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-pink-500 p-1">
                                        <Image
                                            src="/representative.jpg"
                                            alt="代表 池田駿"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover rounded-full bg-white"
                                        />
                                    </div>
                                    <motion.div
                                        className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                                        animate={{
                                            rotate: [0, 360],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear",
                                        }}
                                    >
                                        <Star className="w-6 h-6 text-white" />
                                    </motion.div>
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">池田 駿</h3>
                                <p className="text-lg text-blue-600 font-medium mb-2">代表</p>
                                <p className="text-gray-600">横浜国立大学</p>
                            </motion.div>

                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                    <div className="text-4xl text-blue-500 mb-4">"</div>
                                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                        こんにちは、ココドコ代表の池田駿です。私たちは「写真から始まる新しい旅」をコンセプトに、
                                        皆さんに地域の隠れた魅力を発見してもらうプラットフォームを運営しています。
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                        従来の観光とは異なり、推理という知的な楽しさと、現地での発見という体験的な喜びを
                                        組み合わせることで、より深く地域を理解し、愛着を持ってもらえると信じています。
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        デジタルと学生のチカラで地方創生を、をモットーに、持続可能な地域活性化を実現するために、
                                        これからもココドコを通じて新しい価値を創造していきます。
                                        ぜひ一緒に、まだ見ぬ日本の魅力を発見しましょう。
                                    </p>
                                    <div className="text-4xl text-blue-500 text-right mt-4">"</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">ココドコの仕組み</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            簡単3ステップで、新しい地域体験が始まります
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                step: "01",
                                title: "写真を受け取る",
                                description: "地域の写真が与えられます。その場所がどこなのかを推理しましょう。",
                                image: "/event-01.jpg",
                            },
                            {
                                step: "02",
                                title: "場所を推理する",
                                description: "チームで協力して、写真に写っている場所や建物の特徴から実際の場所を特定します。",
                                image: "/placeholder.svg?height=200&width=300",
                            },
                            {
                                step: "03",
                                title: "現地を訪問する",
                                description: "推理した場所を実際に訪問し、地域の魅力を体験します。新しい発見があなたを待っています。",
                                image: "/placeholder.svg?height=200&width=300",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <div className="relative mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={300}
                                            height={200}
                                            className="w-full h-48 object-cover rounded-xl shadow-lg"
                                        />
                                    </motion.div>
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">ココドコの特徴</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            従来の観光とは一味違う、新しい地域体験をお届けします
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <motion.div
                                className="space-y-8"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                {[
                                    {
                                        icon: MapPin,
                                        title: "隠れた名所の発見",
                                        description: "観光ガイドには載っていない、地域の隠れた魅力的なスポットを発見できます。",
                                    },
                                    {
                                        icon: Users,
                                        title: "チームでの協力",
                                        description: "仲間と一緒に推理し、協力することで絆を深めながら楽しめます。",
                                    },
                                    {
                                        icon: Star,
                                        title: "達成感のある体験",
                                        description: "推理が当たった時の達成感と、現地での新発見による感動を体験できます。",
                                    },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="flex items-start space-x-4"
                                        whileHover={{ x: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <feature.icon className="w-6 h-6 text-blue-600" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/service-overview.jpg"
                                alt="ココドコの体験"
                                width={600}
                                height={500}
                                className="rounded-2xl shadow-2xl"
                            />
                            <motion.div
                                className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">新しい旅の形を体験しよう</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            ココドコで、あなたも地域の新しい魅力を発見する旅に出かけませんか？
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
                                        イベントに参加する
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold bg-transparent"
                                    >
                                        ホームに戻る
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