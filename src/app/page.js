import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen font-display">
      <section className="flex flex-col w-1/2 h-screen mx-10">
        <img className="w-20 mt-10"
          src="/sslogo.webp"
          alt="logo" />

        <article className="mt-20">
          <p className="font-bold text-3xl">Billetera electronica</p>
          <p className="font-thin text-2xl my-5">Una manera simple de manejar tus gastos</p>
          <p className="font-light text-xl">Transforma la gestión de tus finanzas en una experiencia sin complicaciones con nuestra plataforma web. Administra tus ingresos y gastos en un solo lugar, programa pagos de facturas y controla tu presupuesto con facilidad. Únete ahora para simplificar tu vida financiera y reducir el estrés.</p>
        </article>

        <div className="flex gap-10 mt-10">
          <button className="bg-gradient-to-tl from-primary to-secondary h-12 w-40 rounded-[40px] text-2xl">
          <Link href="/login">Log In</Link>
          </button>
          <button className="bg-gradient-to-tl from-primary to-secondary h-12 w-40 rounded-[40px] text-2xl p-1">
          <Link className="flex justify-center w-full bg-midGray rounded-[40px] p-1" 
          href="/signup">
            Sign Up
          </Link>
          </button>
        </div>

      </section>
      <section className="w-1/2">card</section>
    </main>
  );
}
