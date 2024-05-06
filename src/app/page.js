import Link from "next/link";
import Triangle from "./components/triangle";
import TriangleSolid from "./components/TriangleSolid";


export default function Home() {
  return (
    <main className="flex min-h-screen font-display">
      <section className="flex flex-col w-1/2 h-screen mx-10 overflow-hidden">

        <div className="fixed bottom-[15%] left-[5%] opacity-75">
          <Triangle />
        </div>
        <div className="fixed bottom-[25%] left-[40%] opacity-50">
          <Triangle />
        </div>



        <div className="fixed w-10 h-10 rounded-[50%] opacity-50 outline outline-2 outline-primary top-[20%] left-[30%]" />
        <div className="fixed w-10 h-10 rounded-[50%] opacity-50 outline outline-2 outline-primary bottom-[10%] left-[20%]" />


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
          <button className="bg-gradient-to-tl from-primary to-secondary h-12 w-40 rounded-[40px] p-1">
            <Link className="flex justify-center w-full bg-midGray rounded-[40px] p-[4px] text-2xl"
              href="/signup">
              Sign Up
            </Link>
          </button>
        </div>

      </section>

      <section className="flex flex-col justify-center items-center w-1/2 h-screen mx-10 overflow-hidden">

        <div className="fixed top-[5%] right-[10%] origin-center -rotate-12">
          <TriangleSolid />
        </div>

        <div className="fixed w-[700px] h-[700px] rounded-[50%] opacity-50 bg-primary bottom-[-30%] right-[-10%] blur-[90px]" />
        <div className="fixed w-[200px] h-[200px] rounded-[50%] bg-primary bottom-[5%] right-[30%]" />

        <div className="flex flex-col items-center justify-center gap-3 w-[400px] h-[500px] rounded-2xl bg-glassmorph backdrop-blur-[10px] shadow-2xl origin-bottom -rotate-12">
          <input className="w-3/5 h-10 p-2 rounded-3xl bg-transparent outline outline-1 focus:outline-primary"
          type="text"
          placeholder="Name" />
          <input className="w-3/5 h-10 p-2 rounded-3xl bg-transparent outline outline-1 focus:outline-primary"
          type="email"
          placeholder="Email" />
          <button></button>
        </div>
      </section>
    </main>
  );
}
