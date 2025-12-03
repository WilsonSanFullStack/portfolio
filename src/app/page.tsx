import { VscGithub } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { IoCloudDownload } from "react-icons/io5";
import Link from "next/link";
import Proyect from "./components/Proyect";
import Education from "./components/Education";
import About from "./components/About";
import ThemeToggle from "./components/AutoThemeToggle";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Botón de toggle en esquina */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>

        {/* Floating Elements */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-gradient-to-r from-green-300/20 to-cyan-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-float-slower"></div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold mb-8 animate-pulse shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span>🚀 Disponible para trabajar</span>
            </div>

            {/* Name with gradient and animation */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-right">
                Wilson Sanchez
              </span>
            </h1>

            {/* Title with typing effect */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
                Desarrollador{" "}
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse rounded-lg blur-md opacity-50"></span>
                  <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                    Full Stack
                  </span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Transformando ideas en{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400 relative">
                  experiencias digitales extraordinarias
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                </span>
              </p>
            </div>

            {/* Social Icons with hover effects */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {[
                {
                  icon: <VscGithub className="text-2xl" />,
                  href: "https://github.com/WilsonSanFullStack",
                  label: "GitHub",
                  color: "from-gray-900 to-gray-800 hover:shadow-gray-900/30",
                  bg: "bg-gray-900",
                },
                {
                  icon: <BiLogoGmail className="text-2xl" />,
                  href: "mailto:harveysanch@gmail.com",
                  label: "Gmail",
                  color: "from-red-500 to-red-600 hover:shadow-red-500/30",
                  bg: "bg-red-500",
                },
                {
                  icon: <BsWhatsapp className="text-2xl" />,
                  href: "https://wa.me/+573156226982",
                  label: "WhatsApp",
                  color:
                    "from-green-500 to-emerald-600 hover:shadow-green-500/30",
                  bg: "bg-green-500",
                },
                {
                  icon: <CiLinkedin className="text-2xl" />,
                  href: "https://www.linkedin.com/in/wilsonsan/",
                  label: "LinkedIn",
                  color: "from-blue-700 to-blue-800 hover:shadow-blue-700/30",
                  bg: "bg-blue-700",
                },
                {
                  icon: <IoCloudDownload className="text-2xl" />,
                  href: "https://drive.google.com/file/d/1j-IbQyfmIinv_zCj4MP8mGkpD3LgEea4/view",
                  label: "Descargar CV",
                  color:
                    "from-purple-500 to-purple-600 hover:shadow-purple-500/30",
                  bg: "bg-purple-500",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:translate-y-0`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="text-gray-800 dark:text-gray-200 transition-colors duration-300">
                        {item.icon}
                      </span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                      {item.label}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45"></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              {[
                { value: "15+", label: "Proyectos" },
                { value: "30+", label: "Tecnologías" },
                { value: "2+", label: "Años Exp." },
                { value: "100%", label: "Dedicación" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* About Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
              <About />
            </div>

            {/* Education Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
              <Education />
            </div>
          </div>

          {/* Projects Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
              <Proyect />
            </div>
          </div>
        </div>
      </div>

      {/* Footer con efectos hover */}
      <footer className="mt-16 bg-gradient-to-b from-gray-900 to-black text-white py-12 relative">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Logo y descripción */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-gradient">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">WS</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Wilson Sanchez</h2>
                  <p className="text-blue-300">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-300 max-w-xl">
                Especializado en desarrollo web moderno con React, Next.js y
                TypeScript. Apasionado por crear experiencias digitales
                excepcionales.
              </p>
            </div>

            {/* Enlaces importantes */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white border-b border-gray-700 pb-2">
                Enlaces Importantes
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    text: "Portafolio Completo",
                    href: "https://github.com/WilsonSanFullStack",
                  },
                  {
                    text: "Proyecto GastosMotos",
                    href: "https://github.com/WilsonSanFullStack/GastosMotos",
                  },
                  {
                    text: "App Agenda Desktop",
                    href: "https://github.com/WilsonSanFullStack/app-Agenda",
                  },
                  {
                    text: "Cubo Rubik 3D",
                    href: "https://cubo-rubik-3-d.vercel.app/",
                  },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      <span className="group-hover:underline">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto directo */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white border-b border-gray-700 pb-2">
                Contacto Directo
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:harveysanch@gmail.com"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-white">
                      Email
                    </div>
                    <div className="text-sm text-gray-400">
                      harveysanch@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/+573156226982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 text-xl">💬</span>
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-white">
                      WhatsApp
                    </div>
                    <div className="text-sm text-gray-400">+57 315 6226982</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Redes sociales alineadas */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-400 text-sm">
                💻 Hecho con Next.js 14 • 🎨 Diseñado con Tailwind CSS • 🚀
                Desplegado en Vercel
              </div>

              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "WhatsApp", "Email", "CV"].map(
                  (platform, index) => (
                    <a
                      key={platform}
                      href={
                        platform === "GitHub"
                          ? "https://github.com/WilsonSanFullStack"
                          : platform === "LinkedIn"
                          ? "https://www.linkedin.com/in/wilsonsan/"
                          : platform === "WhatsApp"
                          ? "https://wa.me/+573156226982"
                          : platform === "Email"
                          ? "mailto:harveysanch@gmail.com"
                          : "https://drive.google.com/file/d/1j-IbQyfmIinv_zCj4MP8mGkpD3LgEea4/view?usp=sharing"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors hover:scale-105"
                    >
                      {platform}
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} • Wilson Sanchez • Desarrollador Full
              Stack • Colombia 🇨🇴
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
