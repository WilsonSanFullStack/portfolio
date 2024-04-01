import About from "./components/About";
import { VscGithub } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { IoCloudDownload } from "react-icons/io5";
import Link from "next/link";
import Proyect from "./components/Proyect";
import Education from "./components/Education";

const page = () => {
  return (
    <div className=" general md:grid grid-cols-2 md:min-h-screen md:max-h-screen">
      <div className="mx-4">
        <div className="text-center py-4">
          <h1 className=" uppercase text-4xl font-bold">wilson sanchez</h1>
          <h3 className="text-lg font-bold">Programador Web Full Stack</h3>
          <p>Creando proyectos a tu medida, convirtiendo ideas en realidad</p>
          <div className="flex justify-center mt-10">
            <Link href="https://github.com/WilsonSanFullStack" target="_blank">
              <VscGithub className="text-3xl m-2 cursor-pointer" />
            </Link>
            <Link
              href="mailto:harveysanch@gmail.com?subject=Deaseo%20Contratar%20Sus%20Servicios&body=Saludos%0A%0AEscribo%20con%20el%20fin%20de%20programar%20un%20contacto%20para%20contratacion%20de%20sus%20servicios%20como%20programador%0A%0AAtentamente:%20%0A%0AWhatsApp:%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail className="text-3xl m-2 cursor-pointer" />
            </Link>

            <Link href="https://wa.me/+573156226982"
            target="_blank"
            rel="noopener noreferrer"
            >
              <BsWhatsapp className="text-3xl m-2 cursor-pointer" />
            </Link>

            <Link href="https://www.linkedin.com/in/wilsonsan/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <CiLinkedin className="text-3xl m-2 cursor-pointer" />
            </Link>

            <Link
              href="https://drive.google.com/file/d/1knRc46jY3lJ49WL6guvQ7YxBfT-cQFjz/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoCloudDownload className="text-3xl m-2 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:min-h-screen md:max-h-screen md:overflow-y-scroll md:bg-scroll">
        <About />
        <Proyect />
        <Education />
      </div>
    </div>
  );
};

export default page;
