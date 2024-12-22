import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-4 md:p-8">
      <main className="w-full max-w-4xl mx-auto text-center">
        <div className="mb-12 relative">
          <Image
            src="/boda.jpeg"
            width={300}
            height={300}
            alt="Floral decoration"
            className="mx-auto mb-12"
          />
          <div className={`${playfair.className} flex flex-col sm:flex-row justify-center items-center text-4xl md:text-6xl font-bold text-slate-800 mb-4 relative z-10`}>
            <h1 className="sm:mr-4">Mairesol</h1>
            <h1 className="mx-2 sm:mx-4">&</h1>
            <h1 className="sm:ml-4">Geovanny</h1>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-slate-700 mb-8 animate-fade-in">
          Nos alegramos en invitarlos a nuestra boda
        </p>

        <div className="space-y-4 mb-12">
          <p className={`${playfair.className} text-3xl md:text-4xl text-slate-800`}>
            Diciembre 17, 2025
          </p>
          <p className="text-xl text-slate-700">
            a las 4:00 de la tarde
          </p>
          <p className="text-xl text-slate-700">
            The Grand Pavilion, Sunset Beach
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            RSVP
          </button>
          <button className="border border-slate-800 text-slate-800 px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-slate-100">
            View Details
          </button>
        </div>
      </main>

      <footer className="mt-16 text-slate-500 text-sm">
        <p>¡Estamos ansiosos por celebrar contigo!</p>
      </footer>
    </div>
  )
}
