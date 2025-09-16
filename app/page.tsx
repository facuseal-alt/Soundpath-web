import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  const beats = [
    { id: 1, title: "Chroma", img: "/mockups/beat-1.png", link: "https://bsta.rs/Kr78h0" },
    { id: 2, title: "Ritmo", img: "/mockups/beat-2.png", link: "https://bsta.rs/Kr78h0" },
    { id: 3, title: "Nebula", img: "/mockups/beat-3.png", link: "https://bsta.rs/Kr78h0" },
    { id: 4, title: "Dimension", img: "/mockups/beat-4.png", link: "https://bsta.rs/Kr78h0" },
    { id: 5, title: "Galaxia", img: "/mockups/beat-5.png", link: "https://bsta.rs/Kr78h0" },
    { id: 6, title: "Luna", img: "/mockups/beat-6.png", link: "https://bsta.rs/Kr78h0" },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center flex flex-col items-center gap-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Beats profesionales en&nbsp;24h para artistas que quieren sonar ya, sonar bien y sonar lejos.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Elegí tu beat o pedí una producción personalizada con acompañamiento estratégico.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              href="https://bsta.rs/Kr78h0"
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl"
            >
              Conseguí tu beat ahora
            </Button>
            <Button
              asChild
              href="https://bsta.rs/Kr78h0"
              className="bg-transparent border border-violet-600 text-violet-200 hover:bg-violet-600 hover:text-white px-6 py-3 rounded-2xl"
            >
              Probá un beat gratis
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-4xl aspect-[16/9]">
          <Image
            src="/mockups/hero-nightfall.png"
            alt="Hero"
            fill
            className="object-cover rounded-3xl"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </section>

      {/* Problema Section */}
      <section className="px-6 py-16 border-t border-white/10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 max-w-lg">
          <h2 className="text-3xl font-semibold mb-4">
            Sabemos lo frustrante que es sentir que tu música no suena profesional, que nadie te acompaña y que estás perdiendo tiempo.
          </h2>
          <Button
            asChild
            href="https://bsta.rs/Kr78h0"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl mt-6"
          >
            Dejá de sonar amateur
          </Button>
        </div>
        <div className="flex-1 relative w-full max-w-md aspect-[16/10]">
          <Image
            src="/mockups/before.png"
            alt="Antes"
            fill
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Plan Section */}
      <section className="px-6 py-16 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold mb-10">Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="text-3xl font-bold bg-violet-600 rounded-full h-12 w-12 flex items-center justify-center">
                1
              </div>
              <p className="text-lg font-medium">
                Elegí tu beat en la web o contanos cómo lo querés (producción personalizada).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="text-3xl font-bold bg-violet-600 rounded-full h-12 w-12 flex items-center justify-center">
                2
              </div>
              <p className="text-lg font-medium">Recibí tu demo en 24h.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="text-3xl font-bold bg-violet-600 rounded-full h-12 w-12 flex items-center justify-center">
                3
              </div>
              <p className="text-lg font-medium">Creá y crecé con Soundpath.</p>
            </CardContent>
          </Card>
        </div>
        <Button
          asChild
          href="https://bsta.rs/Kr78h0"
          className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl mt-10"
        >
          Elegí tu beat ahora
        </Button>
      </section>

      {/* Catálogo Section */}
      <section className="px-6 py-16 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold mb-10">Catálogo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {beats.map((b) => (
            <Card key={b.id} className="overflow-hidden flex flex-col">
              <div className="relative w-full aspect-square">
                <Image
                  src={b.img}
                  alt={b.title + " cover"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{b.title.toUpperCase()}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    asChild
                    href={b.link}
                    className="bg-violet-600 hover:bg-violet-700 text-white w-full"
                  >
                    Escuchar
                  </Button>
                  <Button
                    asChild
                    href={b.link}
                    className="bg-transparent border border-violet-600 text-violet-200 hover:bg-violet-600 hover:text-white w-full"
                  >
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 w-full max-w-5xl mx-auto">
          <iframe
            src="https://player.beatstars.com/?storeId=YOUR_STORE_ID&direct=1&autoplay=false&size=large"
            width="100%"
            height="430"
            style={{ border: 'none' }}
            allow="autoplay *; clipboard-write *; encrypted-media *; fullscreen *; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}