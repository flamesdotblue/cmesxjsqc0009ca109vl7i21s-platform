import { useEffect, useMemo, useRef, useState } from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#faf8ff] to-white text-slate-900">
      <GlobalStyles />
      <Nav />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <FlavorGallery />
        <Testimonials />
        <ShippingTimeline />
        <OrderCTA />
      </main>
      <Footer />
    </div>
  )
}

function GlobalStyles() {
  return (
    <style>{`
      @keyframes floaty {
        0%, 100% { transform: translateY(0px) }
        50% { transform: translateY(-8px) }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes truckMove {
        0% { transform: translateX(0%); }
        100% { transform: translateX(100%); }
      }
      @keyframes roadDash {
        to { stroke-dashoffset: -60; }
      }
      @keyframes sparkle {
        0% { transform: translate(0,0) scale(0); opacity: 0.9 }
        80% { opacity: 0.9 }
        100% { transform: translate(var(--dx), var(--dy)) scale(1.2); opacity: 0 }
      }
    `}</style>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-black tracking-tight">
            <span className="text-[#4d148c]">Fed</span>
            <span className="text-[#ff6600]">Ex</span>
            <span className="ml-1 text-slate-800">Ice Cream</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#flavors" className="hover:text-slate-900">Flavors</a>
          <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
          <a href="#shipping" className="hover:text-slate-900">Fast Shipping</a>
          <a href="#order" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full hover:scale-[1.02] active:scale-[0.98] transition">
            Order Now
            <BoltIcon className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pb-28">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl bg-[#4d148c]/10" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full blur-3xl bg-[#ff6600]/10" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-slate-200 bg-white/70">
            <BoltIcon className="w-3.5 h-3.5 text-[#ff6600]" />
            Delivered in under 30 minutes
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Guilt‑Free Indulgence.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d148c] to-[#ff6600]">Delivered in a flash.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            Mini-sized, sugar-free, low-calorie, high-protein ice creams. Pure joy without the sugar crash—powered by FedEx speed.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <ValuePill icon={<HeartIcon className="w-4 h-4" />} text="Guilt-Free" sub="0g added sugar" />
            <ValuePill icon={<ProteinIcon className="w-4 h-4" />} text="Protein-Packed" sub=">12g per mini" />
            <ValuePill icon={<BoltIcon className="w-4 h-4" />} text="30-Min Delivery" sub="reliable + cold" />
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <a href="#order" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 transition">
              Order now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#flavors" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white/70 hover:bg-white transition">
              Explore flavors
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}

function ValuePill({ icon, text, sub }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#4d148c]/10 to-[#ff6600]/10 text-[#4d148c]">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{text}</div>
        <div className="text-slate-500 text-xs">{sub}</div>
      </div>
    </li>
  )
}

function HeroVisual() {
  return (
    <div className="relative h-[360px] sm:h-[440px] lg:h-[520px]">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white to-[#fafafa] border border-slate-200 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] overflow-hidden" style={{perspective: '1200px'}}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(1200px 400px at 20% 20%, rgba(77,20,140,0.12), transparent), radial-gradient(800px 300px at 120% 100%, rgba(255,102,0,0.12), transparent)'}} />
        <div className="absolute inset-0 p-6 sm:p-8 grid grid-cols-2 gap-6">
          <Parallax depth={20} className="col-span-1">
            <IceCreamTub colorA="#7c4dff" colorB="#4d148c" label="Berry Burst" kCal="90" protein="12g" style={{ animation: 'floaty 6s ease-in-out infinite' }} />
          </Parallax>
          <Parallax depth={30} className="col-span-1 self-end justify-self-end">
            <IceCreamTub colorA="#ff9d66" colorB="#ff6600" label="Choco Rocket" kCal="95" protein="13g" flipped style={{ animation: 'floaty 7s ease-in-out infinite 0.2s' }} />
          </Parallax>
          <Parallax depth={40} className="col-span-2 place-self-center">
            <MiniBars />
          </Parallax>
        </div>
      </div>
    </div>
  )
}

function Parallax({ depth = 20, className = '', children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const parent = el.closest('[style*="perspective"]') || el.parentElement
    const onMove = (e) => {
      const rect = parent.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `rotateY(${px * depth}deg) rotateX(${ -py * depth}deg)`
    }
    const onLeave = () => { el.style.transform = 'rotateY(0deg) rotateX(0deg)' }
    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    return () => { parent.removeEventListener('mousemove', onMove); parent.removeEventListener('mouseleave', onLeave) }
  }, [depth])
  return (
    <div ref={ref} className={className + ' transition-transform duration-200 will-change-transform'}>
      {children}
    </div>
  )
}

function IceCreamTub({ colorA, colorB, label, kCal, protein, flipped = false, style }) {
  return (
    <div className={(flipped ? 'rotate-6' : '-rotate-6') + ' relative w-full max-w-xs mx-auto'} style={style}>
      <div className="relative">
        <svg viewBox="0 0 260 260" className="w-full h-auto drop-shadow-2xl">
          <defs>
            <linearGradient id={`g1-${label}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={colorA} />
              <stop offset="100%" stopColor={colorB} />
            </linearGradient>
            <linearGradient id={`shine-${label}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="30%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <g>
            <ellipse cx="130" cy="215" rx="90" ry="18" fill="#000" opacity="0.1" />
            <path d="M40,70 q90,-50 180,0 l-15,110 q-70,40 -150,0 z" fill={`url(#g1-${label})`} />
            <ellipse cx="130" cy="70" rx="90" ry="28" fill={`url(#g1-${label})`} />
            <ellipse cx="130" cy="70" rx="90" ry="28" fill="url(#shine)" opacity="0.4" />
            <rect x="50" y="90" width="160" height="95" rx="18" fill="#fff" opacity="0.9" />
            <rect x="55" y="95" width="150" height="85" rx="14" fill="#fff" opacity="0.95" />
            <path d="M70,110 h120 a10,10 0 0 1 10,10 v40 a10,10 0 0 1 -10,10 h-120 a10,10 0 0 1 -10,-10 v-40 a10,10 0 0 1 10,-10 z" fill={`url(#g1-${label})`} opacity="0.15" />
            <rect x="55" y="95" width="150" height="12" rx="6" fill={`url(#g1-${label})`} opacity="0.25" />
            <rect x="60" y="100" width="140" height="8" rx="4" fill="url(#shine-${label})" style={{ backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.0), rgba(255,255,255,0.7), rgba(255,255,255,0.0))' }} />
            <text x="130" y="145" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="20" fill="#1f2937">{label}</text>
            <text x="130" y="168" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fontSize="12" fill="#6b7280">{kCal} kcal • {protein} protein</text>
          </g>
        </svg>
      </div>
    </div>
  )
}

function MiniBars() {
  return (
    <div className="relative grid grid-cols-3 gap-6 w-full max-w-xl mx-auto">
      {[
        {a:'#a7f3d0', b:'#10b981', name:'Mint Chip Turbo'},
        {a:'#fecaca', b:'#ef4444', name:'Strawberry Sprint'},
        {a:'#fde68a', b:'#f59e0b', name:'Salted Caramel Sprint'},
      ].map((f,i)=> (
        <div key={i} className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-white/40 blur" />
          <div className="relative h-28 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
            <div className="absolute inset-0" style={{background: `linear-gradient(135deg, ${f.a}, ${f.b})`, opacity:0.2}} />
            <div className="flex items-center h-full p-4 gap-4">
              <div className="w-16 h-16 rounded-xl shadow-inner" style={{background: `linear-gradient(145deg, ${f.a}, ${f.b})`}} />
              <div>
                <div className="font-semibold">{f.name}</div>
                <div className="text-xs text-slate-600">90 kcal • 12g protein • sugar-free</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FlavorGallery() {
  const flavors = useMemo(() => ([
    { name: 'Vanilla Bean Boost', colors:['#fff1d6','#f59e0b'], protein: '12g', kcal: 85 },
    { name: 'Choco Rocket', colors:['#d6ccc2','#7f5539'], protein: '14g', kcal: 95 },
    { name: 'Berry Burst', colors:['#f5d0fe','#7c3aed'], protein: '13g', kcal: 90 },
    { name: 'Matcha Charge', colors:['#d1fae5','#10b981'], protein: '12g', kcal: 80 },
    { name: 'Salted Caramel Sprint', colors:['#fde68a','#f59e0b'], protein: '13g', kcal: 92 },
    { name: 'Mint Chip Turbo', colors:['#bbf7d0','#22c55e'], protein: '12g', kcal: 88 },
  ]), [])

  return (
    <section id="flavors" className="py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Our Flavors</h2>
        <span className="text-sm text-slate-500">Mini sized • sugar-free • high protein</span>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flavors.map((f, idx) => (
          <TiltCard key={idx} flavor={f} />
        ))}
      </div>
    </section>
  )
}

function TiltCard({ flavor }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--rx', `${-py * 6}deg`)
      el.style.setProperty('--ry', `${px * 10}deg`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#4d148c] to-[#ff6600] opacity-0 group-hover:opacity-30 blur transition" />
      <div
        className="relative rounded-3xl border border-slate-200 bg-white p-5 h-52 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] transition"
        style={{ transform: 'rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' }}
      >
        <div className="flex items-start justify-between">
          <div className="font-bold text-lg leading-tight">
            {flavor.name}
            <div className="text-xs font-medium text-slate-500">{flavor.kcal} kcal • {flavor.protein} protein</div>
          </div>
          <div className="grid place-items-center w-10 h-10 rounded-xl border border-slate-200" style={{background: `linear-gradient(135deg, ${flavor.colors[0]}, ${flavor.colors[1]})`}} />
        </div>
        <div className="mt-5 flex gap-2 text-xs">
          <Badge text="Sugar-Free" />
          <Badge text="High Protein" />
          <Badge text="Mini Size" />
        </div>
        <div className="absolute bottom-4 right-5 text-xs text-slate-500 inline-flex items-center gap-1">
          <BoltIcon className="w-3.5 h-3.5 text-[#ff6600]" /> Fast delivery
        </div>
        {hovered && <Shine />}
      </div>
    </div>
  )
}

function Shine() {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 -translate-x-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent" style={{ animation: 'shimmer 1.2s linear infinite', backgroundSize: '200% 100%' }} />
    </div>
  )
}

function Badge({ text }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{text}</span>
  )
}

function Testimonials() {
  const testimonials = [
    { name: 'Ava R.', quote: 'Tastes like a treat, fuels my workout. Arrived frosty in 18 minutes!', location: 'Austin, TX' },
    { name: 'Samir K.', quote: 'Finally, dessert that fits my macros. The delivery is ridiculously fast.', location: 'Seattle, WA' },
    { name: 'Lena M.', quote: 'The mini cups are perfect. Zero sugar rush, all the flavor.', location: 'Brooklyn, NY' },
    { name: 'Diego V.', quote: 'Berry Burst is my go-to. Protein-packed and creamy.', location: 'Miami, FL' },
  ]
  return (
    <section id="testimonials" className="py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">What customers say</h2>
        <span className="text-sm text-slate-500">4.9/5 average rating</span>
      </div>
      <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 py-6 animate-[marquee_20s_linear_infinite]" style={{ animation: 'marquee 24s linear infinite' }}>
          <style>{`@keyframes marquee { 0%{ transform: translateX(0) } 100%{ transform: translateX(-50%) } }`}</style>
          <div className="flex gap-6 min-w-max">
            {testimonials.concat(testimonials).map((t, i) => (
              <div key={i} className="w-80 shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[#4d148c]">
                  {Array.from({length:5}).map((_,i)=>(<Star key={i} className="w-4 h-4" />))}
                </div>
                <p className="mt-3 text-slate-700">“{t.quote}”</p>
                <div className="mt-4 text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-slate-500">{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ShippingTimeline() {
  return (
    <section id="shipping" className="py-16">
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Fast shipping, visualized</h2>
      <p className="mt-2 text-slate-600">From tap to taste in under 30 minutes.</p>

      <div className="mt-8 relative rounded-3xl border border-slate-200 bg-white p-6 overflow-hidden">
        <div className="absolute -inset-x-10 -bottom-20 h-48" style={{background: 'radial-gradient(800px 140px at 50% 0%, rgba(77,20,140,0.08), transparent)'}} />
        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            {title: 'Order placed', desc: 'You tap order', icon: <TapIcon className="w-5 h-5" />},
            {title: 'Packed cold', desc: 'Dry ice sealed', icon: <SnowIcon className="w-5 h-5" />},
            {title: 'Dispatched', desc: 'FedEx courier', icon: <TruckIcon className="w-5 h-5" />},
            {title: 'Delivered', desc: 'Still frosty', icon: <DoorIcon className="w-5 h-5" />},
          ].map((s,i)=>(
            <div key={i} className="text-center">
              <div className="mx-auto w-10 h-10 grid place-items-center rounded-xl border border-slate-200 bg-white shadow-sm">{s.icon}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <div className="text-xs text-slate-500">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 relative h-24">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="road" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#4d148c" />
                <stop offset="100%" stopColor="#ff6600" />
              </linearGradient>
            </defs>
            <path d="M20,70 C200,10 800,10 980,70" fill="none" stroke="url(#road)" strokeWidth="6" strokeLinecap="round" />
            <path d="M20,70 C200,10 800,10 980,70" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="12 12" style={{ animation: 'roadDash 2s linear infinite' }} />
          </svg>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10">
            <MovingTruck />
          </div>
        </div>
      </div>
    </section>
  )
}

function MovingTruck() {
  return (
    <div className="inline-block" style={{ animation: 'truckMove 4.5s ease-in-out infinite alternate' }}>
      <div className="flex items-center gap-2">
        <TruckIcon className="w-8 h-8 text-[#4d148c]" />
        <span className="text-xs text-slate-600">on the way</span>
      </div>
    </div>
  )
}

function OrderCTA() {
  const [zip, setZip] = useState('')
  const [flavor, setFlavor] = useState('Vanilla Bean Boost')
  const [placed, setPlaced] = useState(false)
  const [eta, setEta] = useState(null)
  const [countdown, setCountdown] = useState(null)
  const [sparks, setSparks] = useState([])

  useEffect(() => {
    let t
    if (placed && countdown != null) {
      t = setInterval(() => setCountdown((c) => (c > 0 ? c - 1 : 0)), 1000)
    }
    return () => clearInterval(t)
  }, [placed, countdown])

  useEffect(() => {
    if (countdown === 0) setPlaced(false)
  }, [countdown])

  function estimate(zipStr) {
    const clean = (zipStr || '').replace(/\D/g, '')
    if (!clean) return null
    let h = 0
    for (let i = 0; i < clean.length; i++) h = (h * 31 + clean.charCodeAt(i)) % 97
    const minutes = 12 + (h % 17) // 12–28 min
    const seconds = (h % 4) * 15
    return { minutes, seconds }
  }

  function placeOrder(e) {
    e.preventDefault()
    const e2 = estimate(zip)
    if (!e2) return
    const totalSec = e2.minutes * 60 + e2.seconds
    setEta(e2)
    setCountdown(totalSec)
    setPlaced(true)
    burst()
  }

  function burst() {
    const arr = Array.from({ length: 18 }).map((_, i) => ({ id: i, dx: (Math.random() - 0.5) * 160 + 'px', dy: (Math.random() - 0.5) * 120 + 'px' }))
    setSparks(arr)
    setTimeout(() => setSparks([]), 900)
  }

  const e = estimate(zip)
  const previewText = e ? `Get it in ~${e.minutes} min` : 'Enter ZIP to see ETA'

  return (
    <section id="order" className="py-16">
      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#ff6600]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#4d148c]/10 blur-3xl" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Simple order</h2>
          <p className="mt-2 text-slate-600">Cold-packed and delivered fast by FedEx. Your treats arrive frosty.</p>
          <form onSubmit={placeOrder} className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-600">ZIP code</label>
              <input value={zip} onChange={(e)=>setZip(e.target.value)} inputMode="numeric" pattern="[0-9]*" placeholder="e.g. 94016" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4d148c]" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-600">Flavor</label>
              <select value={flavor} onChange={(e)=>setFlavor(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4d148c]">
                {['Vanilla Bean Boost','Choco Rocket','Berry Burst','Matcha Charge','Salted Caramel Sprint','Mint Chip Turbo'].map((f)=>(<option key={f}>{f}</option>))}
              </select>
            </div>
            <div className="sm:col-span-1 flex items-end">
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 font-semibold hover:scale-[1.01] active:scale-[0.99] transition">
                <BoltIcon className="w-4 h-4" /> {previewText}
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
              <SnowIcon className="w-4 h-4" /> arrives frosty
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
              <LeafIcon className="w-4 h-4" /> carbon-neutral delivery
            </div>
          </div>

          {placed && (
            <div className="mt-6 relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
              <div className="flex items-center gap-4">
                <TruckIcon className="w-8 h-8 text-[#4d148c]" />
                <div className="flex-1">
                  <div className="font-semibold">Order placed: {flavor}</div>
                  <div className="text-sm text-slate-600">ETA: {eta?.minutes}m {eta?.seconds}s • Countdown: {fmt(countdown)}</div>
                </div>
                <a href="#shipping" className="text-sm text-[#4d148c] font-semibold">Track</a>
              </div>
              <Sparks items={sparks} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Sparks({ items }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map(s => (
        <div key={s.id} className="absolute left-1/2 top-1/2" style={{ '--dx': s.dx, '--dy': s.dy }}>
          <div className="w-2 h-2 rounded-full" style={{ background: Math.random() > 0.5 ? '#ff6600' : '#4d148c', animation: 'sparkle 0.9s ease-out forwards' }} />
        </div>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6" />
          <span className="font-black"><span className="text-[#4d148c]">Fed</span><span className="text-[#ff6600]">Ex</span> Ice Cream</span>
        </div>
        <div className="flex items-center gap-4">
          <span>0g added sugar • mini sized • high protein</span>
          <span className="text-slate-400">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}

function fmt(sec) {
  const m = Math.floor((sec || 0) / 60)
  const s = Math.max(0, (sec || 0) % 60)
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
}

// Icons and Logo
function Logo({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4d148c" />
          <stop offset="100%" stopColor="#ff6600" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#lg)" />
      <path d="M9 13 h14 a2 2 0 0 1 0 4 H9 a2 2 0 0 1 0 -4z" fill="#fff" opacity="0.9" />
      <circle cx="12" cy="22" r="2" fill="#fff" />
      <circle cx="20" cy="22" r="2" fill="#fff" />
    </svg>
  )
}

function ArrowRight({ className='' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>
  )
}
function BoltIcon({ className='' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
  )
}
function HeartIcon({ className='' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 21s-6-4.35-9-7.35C-1 12 1 4 7 5.5 9.5 6.1 12 9 12 9s2.5-2.9 5-3.5C23 4 25 12 21 13.65 18 16.65 12 21 12 21z"/></svg>
  )
}
function ProteinIcon({ className='' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2a7 7 0 0 1 7 7v4a7 7 0 1 1-14 0V9a7 7 0 0 1 7-7zm-3 8h6v3a3 3 0 1 1-6 0v-3z"/></svg>
  )
}
function Star({ className='' }) { return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.56 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2z"/></svg>) }
function TapIcon({ className='' }) { return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M6 2h12v4H6zM6 22h6v-7l-2-2-4 2zM14 11l-2 2v9h6l1-7z"/></svg>) }
function SnowIcon({ className='' }) { return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M11 2h2v20h-2z"/><path d="M4.22 5.64l1.41-1.41L18.78 17.37l-1.41 1.41z"/><path d="M4.22 18.36l14.14-14.14 1.41 1.41L5.64 19.78z"/></svg>) }
function TruckIcon({ className='' }) { return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M3 5h11v9H3z"/><path d="M14 8h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>) }
function DoorIcon({ className='' }) { return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M4 3h16v18H4z"/><path d="M14 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="#fff"/></svg>) }
function LeafIcon({ className='' }) { return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M3 12C3 6 9 3 21 3c0 12-3 18-9 18S3 18 3 12z"/></svg>) }
