"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, ArrowRight, Play, Heart, Share2, Search, Compass } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
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

const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  whileTap: { scale: 0.95 },
}

const glowButton = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.3 },
  },
  whileTap: { scale: 0.95 },
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

// Parallax Background Component
const ParallaxBackground = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20" />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25"
      />
    </div>
  )
}

// Animated Section Component
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <AnimatedLogo />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                ココドコ
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              {["ココドコとは？", "イベント情報", "参加者の声", "自治体・企業の方へ"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={`/${item.replace(/[？・]/g, "").toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                  >
                    {item}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-6"
                {...glowButton}
              >
                イベント参加
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 overflow-hidden">
        <ParallaxBackground />
        <motion.div style={{ y: heroY }} className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
                ココドコ
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                地域を巡る、謎を解く、新しい旅の形
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                学生向け謎解きイベントで地方創生を推進。観光公害を解決しながら、新しい地域体験を提供します。
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div {...glowButton}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                  </motion.div>
                  今すぐイベント参加
                </Button>
              </motion.div>

              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  ココドコとは？
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                { icon: MapPin, title: "地域発見", desc: "隠れた地域の魅力を発見", color: "blue" },
                { icon: Users, title: "仲間づくり", desc: "同世代の仲間と楽しく参加", color: "pink" },
                { icon: Star, title: "特別体験", desc: "謎解きで特別な思い出作り", color: "purple" },
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

      {/* Latest Events Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">最新イベント</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              現在開催中・開催予定のイベントをチェックして、今すぐ参加しよう！
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "京都謎解きウォーク",
                location: "京都府京都市",
                date: "2024年3月15日〜31日",
                participants: "128名参加中",
                image: "/placeholder.svg?height=200&width=300",
                status: "開催中",
                difficulty: "初級",
                statusColor: "green",
              },
              {
                title: "奈良古都ミステリー",
                location: "奈良県奈良市",
                date: "2024年4月1日〜14日",
                participants: "募集中",
                image: "/placeholder.svg?height=200&width=300",
                status: "募集中",
                difficulty: "中級",
                statusColor: "blue",
              },
              {
                title: "広島平和記念謎解き",
                location: "広島県広島市",
                date: "2024年4月20日〜30日",
                participants: "準備中",
                image: "/placeholder.svg?height=200&width=300",
                status: "準備中",
                difficulty: "上級",
                statusColor: "gray",
              },
            ].map((event, index) => (
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
                <Card className="overflow-hidden border-0 shadow-lg bg-white">
                  <div className="relative overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                    <div className="absolute top-4 left-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <Badge className={`bg-${event.statusColor}-500 text-white`}>{event.status}</Badge>
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        <Badge variant="secondary" className="bg-white/90">
                          {event.difficulty}
                        </Badge>
                      </motion.div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
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
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.participants}</span>
                      </motion.div>
                    </div>
                    <motion.div {...glowButton}>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full">
                        詳細を見る
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
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
            <motion.div {...scaleOnHover}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-8 bg-transparent"
              >
                すべてのイベントを見る
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Section Teaser */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-50 to-pink-50 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">ココドコとは？</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  学生向け謎解きイベントを通じて地方創生を推進する新しいプラットフォーム。観光公害の解決と地域活性化を両立させながら、参加者に特別な体験を提供します。
                </p>
                <motion.div
                  className="space-y-4 mb-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    { color: "blue", text: "地域の隠れた魅力を発見" },
                    { color: "pink", text: "持続可能な観光の推進" },
                    { color: "purple", text: "学生同士のコミュニティ形成" },
                  ].map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-center" whileHover={{ x: 10 }}>
                      <motion.div
                        className={`w-3 h-3 bg-${item.color}-500 rounded-full mr-3`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.3,
                        }}
                      />
                      <span className="text-gray-700">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div {...glowButton}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full px-8"
                  >
                    詳しく見る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ duration: 0.4 }}>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="ココドコの様子"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
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
                <motion.div
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-80"
                  animate={{
                    rotate: [360, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">参加者の声</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">実際に参加した学生たちの生の声をお聞きください</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "田中 美咲",
                university: "京都大学 2年",
                comment:
                  "普通の観光では絶対に行かない場所を発見できて、本当に楽しかった！謎解きも程よい難易度で、友達と協力して解けた時の達成感は最高でした。",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "佐藤 健太",
                university: "大阪大学 3年",
                comment:
                  "地元の人との交流もあって、その地域の文化や歴史を深く知ることができました。SNSでシェアしたら友達からも「参加したい！」って言われました。",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "山田 花音",
                university: "同志社大学 1年",
                comment:
                  "初めての参加でしたが、運営の方々がとても親切で安心して楽しめました。次回も絶対参加します！新しい友達もできて一石二鳥でした。",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="p-6 border-0 shadow-md bg-white h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.university}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + i * 0.1 }}
                            >
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div {...scaleOnHover}>
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
      </AnimatedSection>

      {/* B2B Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 to-pink-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              自治体・企業の皆様へ
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              地域活性化と持続可能な観光を実現するパートナーシップを築きませんか？
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: MapPin, title: "地域活性化", desc: "隠れた観光資源の発掘と活用" },
                { icon: Users, title: "若者誘致", desc: "学生層の新規観光客獲得" },
                { icon: Heart, title: "持続可能性", desc: "観光公害対策と環境配慮" },
              ].map((item, index) => (
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
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div {...glowButton}>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
                >
                  導入事例を見る
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold bg-transparent"
                >
                  お問い合わせ
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Media Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">SNSで最新情報をチェック</h2>
            <p className="text-gray-600 text-lg">イベント情報や参加者の様子をリアルタイムでお届け</p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: "LINE公式アカウント", icon: "📱", color: "green-500", hoverColor: "green-600" },
              {
                name: "Instagram",
                icon: "📸",
                color: "gradient-to-r from-pink-500 to-purple-500",
                hoverColor: "from-pink-600 to-purple-600",
              },
              { name: "Twitter", icon: "🐦", color: "blue-500", hoverColor: "blue-600" },
            ].map((social, index) => (
              <motion.div key={index} variants={fadeInUp} {...glowButton}>
                <Button
                  className={`bg-${social.color} hover:bg-${social.hoverColor} text-white rounded-full px-8 py-4`}
                >
                  <span className="mr-2">{social.icon}</span>
                  {social.name}
                </Button>
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
            <motion.div {...scaleOnHover}>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-600 hover:bg-gray-100 rounded-full px-6 bg-transparent"
              >
                <Share2 className="w-4 h-4 mr-2" />
                このページをシェア
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-2 mb-4">
                <AnimatedLogo size="w-8 h-8" />
                <span className="text-xl font-bold">ココドコ</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                地域を巡る、謎を解く、新しい旅の形を提案する学生向けプラットフォーム
              </p>
            </motion.div>

            {[
              {
                title: "サービス",
                links: ["ココドコとは？", "イベント情報", "参加者の声", "お知らせ"],
              },
              {
                title: "企業・自治体",
                links: ["導入について", "会社情報", "お問い合わせ"],
              },
              {
                title: "フォローする",
                links: [],
              },
            ].map((section, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                {section.title === "フォローする" ? (
                  <div className="flex space-x-3">
                    {["L", "I", "T"].map((letter, i) => (
                      <motion.div
                        key={i}
                        className={`w-8 h-8 ${
                          letter === "L"
                            ? "bg-green-500 hover:bg-green-600"
                            : letter === "I"
                              ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80"
                              : "bg-blue-500 hover:bg-blue-600"
                        } rounded-full flex items-center justify-center cursor-pointer transition-all`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-xs">{letter}</span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2 text-sm text-gray-400">
                    {section.links.map((link, linkIndex) => (
                      <motion.li key={linkIndex} whileHover={{ x: 5, color: "#ffffff" }} transition={{ duration: 0.2 }}>
                        <Link href="#" className="hover:text-white transition-colors">
                          {link}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 ココドコ. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
