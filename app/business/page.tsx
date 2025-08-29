"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Star, ArrowRight, Search, Compass, Target, Heart, Globe, Building, TrendingUp, Award, CheckCircle, Phone, Mail, Calendar } from "lucide-react"
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

export default function BusinessPage() {
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 500], [0, -150])

    const caseStudies = [
        {
            title: "京都市観光協会",
            category: "自治体",
            challenge: "オーバーツーリズムの解決",
            solution: "隠れた名所への誘導",
            result: "観光客分散率 40% 向上",
            image: "/placeholder.svg?height=200&width=300",
            metrics: ["参加者数: 500+", "満足度: 4.9/5", "リピート率: 85%"],
        },
        {
            title: "奈良県地域振興部",
            category: "自治体",
            challenge: "若年層の観光客増加",
            solution: "学生向け謎解きイベント",
            result: "20代観光客 60% 増加",
            image: "/placeholder.svg?height=200&width=300",
            metrics: ["参加者数: 300+", "SNS投稿: 1,200件", "地域消費: +25%"],
        },
        {
            title: "関西観光開発株式会社",
            category: "企業",
            challenge: "新規顧客開拓",
            solution: "企業連携イベント",
            result: "新規顧客獲得 80名",
            image: "/placeholder.svg?height=200&width=300",
            metrics: ["売上向上: +30%", "ブランド認知: +45%", "顧客満足: 4.8/5"],
        },
    ]

    const plans = [
        {
            name: "ベーシックプラン",
            price: "¥50,000",
            period: "/月",
            description: "小規模自治体・企業向け",
            features: [
                "月1回のイベント開催",
                "最大30名まで参加可能",
                "基本的な謎解きコンテンツ",
                "参加者アンケート",
                "基本レポート提供",
            ],
            recommended: false,
        },
        {
            name: "スタンダードプラン",
            price: "¥120,000",
            period: "/月",
            description: "中規模自治体・企業向け",
            features: [
                "月2回のイベント開催",
                "最大80名まで参加可能",
                "カスタム謎解きコンテンツ",
                "詳細な分析レポート",
                "SNSプロモーション支援",
                "専任サポート",
            ],
            recommended: true,
        },
        {
            name: "プレミアムプラン",
            price: "¥250,000",
            period: "/月",
            description: "大規模自治体・企業向け",
            features: [
                "月4回のイベント開催",
                "参加人数無制限",
                "完全オーダーメイドコンテンツ",
                "リアルタイム分析ダッシュボード",
                "メディア露出支援",
                "24時間サポート",
                "成果保証制度",
            ],
            recommended: false,
        },
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
                                        className={`text-gray-700 hover:text-blue-600 transition-colors font-medium relative group ${item.href === "/business" ? "text-blue-600" : ""
                                            }`}
                                    >
                                        {item.name}
                                        <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <a href="mailto:cocodoco.information@gmail.com">
                            <Button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-6">
                                お問い合わせ
                            </Button>
                        </a>
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
                                自治体・企業の皆様へ
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl text-gray-700 mb-8 font-medium max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                地域活性化と持続可能な観光を実現する<br />
                                新しいパートナーシップを築きませんか？
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                        >
                            {[
                                { icon: MapPin, title: "地域活性化", desc: "隠れた観光資源の発掘と活用", color: "blue" },
                                { icon: Users, title: "若者誘致", desc: "学生層の新規観光客獲得", color: "pink" },
                                { icon: Heart, title: "持続可能性", desc: "観光公害対策と環境配慮", color: "purple" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="text-center"
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <motion.div
                                        className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                                    </motion.div>
                                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">ココドコ導入のメリット</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            従来の観光施策とは一味違う、新しいアプローチで地域活性化を実現
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
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
                                        icon: TrendingUp,
                                        title: "観光客数の増加",
                                        description: "学生層を中心とした新規観光客の獲得により、地域経済の活性化を実現します。",
                                    },
                                    {
                                        icon: Target,
                                        title: "オーバーツーリズム対策",
                                        description: "有名観光地以外の隠れたスポットへの誘導により、観光客の分散を図ります。",
                                    },
                                    {
                                        icon: Award,
                                        title: "地域ブランド向上",
                                        description: "SNS投稿や口コミによる自然な情報発信で、地域の認知度とブランド価値を向上させます。",
                                    },
                                ].map((benefit, index) => (
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
                                            <benefit.icon className="w-6 h-6 text-blue-600" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
                                src="/placeholder.svg?height=500&width=600"
                                alt="地域活性化の様子"
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

            {/* Case Studies Section - Temporarily hidden until sufficient case studies are available */}
            {/* <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">導入事例</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            実際にココドコを導入いただいた自治体・企業様の成功事例をご紹介
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
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
                                                src={study.image}
                                                alt={study.title}
                                                width={300}
                                                height={200}
                                                className="w-full h-48 object-cover"
                                            />
                                        </motion.div>
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-blue-500 text-white">{study.category}</Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{study.title}</h3>

                                        <div className="space-y-3 mb-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-700 text-sm mb-1">課題</h4>
                                                <p className="text-gray-600 text-sm">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-700 text-sm mb-1">施策</h4>
                                                <p className="text-gray-600 text-sm">{study.solution}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-blue-600 text-sm mb-1">成果</h4>
                                                <p className="text-blue-600 text-sm font-semibold">{study.result}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            {study.metrics.map((metric, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-center text-gray-600"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                                    <span className="text-xs">{metric}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section> */}

            {/* Pricing Section - Temporarily hidden until pricing structure is finalized */}
            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">料金プラン</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            組織の規模や目的に合わせて選べる3つのプランをご用意
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -10,
                                    scale: plan.recommended ? 1.05 : 1.02,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <Card className={`relative overflow-hidden border-0 shadow-lg bg-white h-full ${plan.recommended ? "ring-2 ring-blue-500" : ""
                                    }`}>
                                    {plan.recommended && (
                                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                                            おすすめ
                                        </div>
                                    )}
                                    <CardContent className={`p-8 ${plan.recommended ? "pt-16" : ""}`}>
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                                            <div className="flex items-baseline justify-center">
                                                <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                                                <span className="text-gray-600 ml-1">{plan.period}</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start"
                                                    whileHover={{ x: 5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <Button
                                            className={`w-full rounded-full ${plan.recommended
                                                    ? "bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white"
                                                    : "border-2 border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                                                }`}
                                            variant={plan.recommended ? "default" : "outline"}
                                        >
                                            {plan.recommended ? "今すぐ始める" : "詳細を見る"}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section> */}

            {/* Contact Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-pink-600 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">お問い合わせ・ご相談</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            地域活性化についてお困りのことがございましたら、お気軽にご相談ください
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                icon: Mail,
                                title: "メールでのお問い合わせ",
                                content: "cocodoco.information@gmail.com",
                                description: "24時間受付",
                            },
                            {
                                icon: Calendar,
                                title: "オンライン相談",
                                content: "無料相談予約",
                                description: "30分間の個別相談",
                            },
                        ].map((contact, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="text-center"
                                whileHover={{ y: -10, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <contact.icon className="w-8 h-8" />
                                </motion.div>
                                <h3 className="font-semibold mb-2">{contact.title}</h3>
                                <p className="text-xl font-bold mb-1">{contact.content}</p>
                                <p className="text-sm opacity-80">{contact.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg opacity-90">
                            お気軽に上記メールアドレスまでご連絡ください
                        </p>
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
