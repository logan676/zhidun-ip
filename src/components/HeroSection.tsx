import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center bg-gradient-to-r from-navy-dark to-navy md:min-h-[600px]">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          守护创新，捍卫智权
        </h1>
        <p className="mt-6 text-lg text-white/80">
          专业知识产权代理服务，为您的创新保驾护航
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-block rounded-lg bg-gold px-8 py-3 text-white transition-all duration-300 hover:bg-gold-light"
        >
          免费咨询
        </Link>
      </div>
    </section>
  )
}
