'use client'
import { TextGenerateEffect1 } from '../TextGenerateEffect'
import React, { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../../styles/styles.css'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import {
    BsCloudArrowUp,
    BsCodeSlash,
    BsDiagram3,
    BsBoxes,
    BsBriefcase,
    BsEye,
    BsShare,
    BsGear,
  } from 'react-icons/bs'
import { GoTelescope } from "react-icons/go"
import { AiOutlineRise } from "react-icons/ai"
import { PiPlant } from "react-icons/pi"
import Modal from "../Modal"
import { FadeIn } from '../FadeIn'
const resources = [
    {
      href: '/contacts',
      titleModal: 'Resiliencia innovadora',
      name: 'Resiliencia',
      name2: 'innovadora',
      icon: BsCloudArrowUp,
      text: 'El mundo de las subvenciones y las licitaciones públicas está en constante evolución.',
      text2: 'Cada oportunidad la concebimos como un desafío que implica abordar los obstáculos con creatividad y encontrar soluciones fuera de lo común para aplicar nuevas ideas, estrategias y enfoques con las que favorecer que nuestros clientes estén un paso por delante en sus esfuerzos por conseguir los objetivos y se cumplan las necesidades cambiantes de la sociedad en general.',
      text3:''
    },
    {
      href: '/conversations',
      titleModal: 'Versatilidad sectorial',
      name: 'Versatilidad',
      name2: 'sectorial',
      text:
        'Reflejamos nuestra capacidad de adaptabilidad desde el primer momento: nos centramos en comprender y estudiar las singularidades específicas de cada caso, valoramos proporcionarles una atención personalizada en la que exponerles nuestro conocimiento, compartir nuestra experiencia sobre las diferentes materias y poner a su disposición los recursos que tenemos a nuestro alcance con la finalidad de ofrecerles una visión completa y actualizada a cualquier realidad.',
      text2:'',
      text3:'',
        icon: BsBoxes,
      
    },
    {
      href: '/messages',
      titleModal: 'Pragmatismo estratégico',
      name: 'Pragmatismo',
      name2: 'estratégico',
      text:
        'Nuestra dinámica de trabajo se basa en unos procesos metodológicamente objetivos, medibles y cuantificables que nos permiten optimizar eficazmente el impacto positivo de cada acción llevada a cabo.',
      text2: 'Originales y disruptivos por naturaleza, nuestras decisiones se apoyan en datos e informes documentados que nos permiten analizar el éxito de nuestros resultados, revisar y repensar constantemente qué aspectos son los que podemos mejorar a nivel interno y, en consecuencia, apelar a una búsqueda continua de la mejor versión que por nuestra parte podemos ofrecer.',
      text3:'',
      icon: BsDiagram3,
    },
    {
      href: '/groups',
      titleModal: 'Perspectiva global',
      name: 'Perspectiva',
      name2: 'global',
      text:
        'Consideramos que nuestra aportación se caracteriza por el mantenimiento de un monitoreo permanente de aquellas tendencias globales que se traducen en un desarrollo de propuestas proactivas y colaborativas a todos los niveles territoriales; abogamos, trabajamos y colaboramos constantemente con la transversalidad y la diversidad como argumentos principales de nuestro día a día y exploramos continuamente nuevas oportunidades -sin temor a asumir riesgos calculados- con las que perseguir la excelencia y enriquecer nuestros servicios.',
      text2:'',
      text3:'',
        icon: GoTelescope,
    },
    {
        href: '/users',
        titleModal: 'Empoderamiento transformador',
        name: 'Empoderamiento',
        name2:'transformador',
        text: 'Nuestra política interna pasa por capacitar -desde dentro hacia afuera- que se participe activamente en el liderazgo de las iniciativas y el impulso de ideas que contribuyan al desbloqueo de todo su potencial y a la evolución de nuestro entorno.',
        text2:'Brindamos a nuestros clientes la posibilidad de involucrarles directamente en el intercambio bidireccional de impresiones y les empoderamos a formar parte de la toma de decisiones trascendentales: dándoles voz y voto en el “rumbo” que toman los proyectos -desde el principio hasta el final- e influir en sus operaciones.',
        text3:'',
        icon: AiOutlineRise,
    },
    {
        href: '/users',
        titleModal: 'Liderazgo digital',
        name: 'Liderazgo',
        name2: 'digital',
        text: 'En nuestro compromiso está conocer, implementar y cerciorarnos de estar equipados con las últimas herramientas y novedades tecnológicas en todos los aspectos -de nuestra actividad laboral- para mantenernos a la vanguardia de la industria; colaboramos estrechamente con nuestros clientes para ayudarles en su propia transformación digital y desarrollar entornos personalizados con los que automatizar los procesos, adaptarnos recíprocamente y prosperar conjuntamente.',
        text2:'',
        text3:'',
        icon: BsCodeSlash,
    },
    {
        href: '/users',
        titleModal: 'Transparencia ética',
        name: 'Transparencia',
        name2: 'ética',
        text: 'Gestionamos los datos de manera responsable y cumplimos rigurosamente con las regulaciones en materia de protección de datos, asegurando que la documentación y la información estén seguras y bien protegidas.',
        text2: 'Asumimos la responsabilidad de nuestras decisiones y actuamos consecuentemente con nuestras acciones: garantizamos nuestra lealtad, la confidencialidad y el uso adecuado de la información.',
        text3:'Construimos nuestro futuro alineando nuestros valores con quienes compartimos objetivos; de la misma manera, esperamos un intercambio sincero de “feedback” para originar una mayor concienciación y comprensión sobre cómo emprender una relación de confianza que beneficie a todas las partes.',
        icon: BsEye,
    },
    {
        href: '/users',
        titleModal: 'Sustentabilidad integral',
        name: 'Sustentabilidad',
        name2: 'integral',
        text: 'Nos adherimos a unas prácticas empresariales respetuosas y sostenibles:',
        text2: 'Intensificamos nuestra línea de actuación hacia proyectos que contengan un alto grado de componente social, contribuimos al bienestar de nuestro territorio, fomentamos una concienciación responsable y didáctica sobre el ciclo de la vida de los productos, procuramos minimizar nuestro impacto ambiental en todas nuestras operaciones y acometemos nuestro cometido priorizando la eficiencia energética de nuestros dispositivos.',
        text3: '',
        icon: PiPlant,
    },
    {
        href: '/users',
        titleModal: 'Conexión significativa',
        name: 'Conexión',
        name2: 'significativa',
        text: 'Formamos parte y nos integramos activamente en las causas que consideramos compartidas y cuyos valores están alineados.',
        text2: 'La red de colaboradores y alianzas que establecemos nos permiten reforzar nuestra habilidad de ofrecer un servicio que va más allá de aprovechar una simple oportunidad: reconocemos la unicidad de cada actor, empatizamos con sus inquietudes y preocupaciones y creamos un ambiente de cooperación en donde todas las voces son escuchadas y respetadas.',
        text3:'',
        icon:BsShare,
    },
    {
        href: '/users',
        titleModal: 'Enfoque previsor',
        name: 'Enfoque',
        name2: 'previsor',
        text: 'Realizamos evaluaciones de escenarios futuros para anticipar las crecientes expectativas; elaboramos planes estratégicos a largo plazo para identificar los posibles obstáculos que puedan surgir y mitigarlos conforme a su desarrollo.',
        text2: 'Estamos atentos a los cambios en las leyes y regulaciones que afectan a nuestro sector; velamos por el cumplimiento de las normativas de manera proactiva y seguimos de cerca cualquier desviación temprana de nuestra misión para tomar medidas correctivas de manera oportuna.',
        text3:'',
        icon:BsGear,
    },
    {
        href: '/users',
        titleModal: 'Dinámica rigurosa',
        name: 'Dinámica',
        name2: 'rigurosa',
        text: 'Mantenemos procesos altamente eficaces y aplicamos un seguimiento continuo del funcionamiento interno con el que analizamos exhaustivamente los criterios objetivos y, en base a nuestra dedicación y evaluación, preservamos la consistencia en los estándares de calidad de lo que ofrecemos desde la eficiencia operativa hasta la satisfacción del cliente y del resultado que en sí materializamos.',
        text2:'',
        text3:'',
        icon: BsBriefcase,
    }

  ]

export function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
    let maskImage = useMotionTemplate`radial-gradient(150px at ${mouseX}px ${mouseY}px, white, transparent)`
    let style = { maskImage, WebkitMaskImage: maskImage }
  
    return (
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-[28px] transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-10">
        </div>
        <motion.div
          className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-[#B6C6EA] to-[#7da7d9] opacity-0 transition duration-300 group-hover:opacity-90"
          style={style}
        />
        <motion.div
          className="absolute inset-0 rounded-[28px] opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          style={style}
        >
        </motion.div>
      </div>
    )
  }
  export function ResourceIcon({ icon: Icon }) {
    return (
      <div className="mb-3 flex flex-col items-center">
        <Icon className="xxs:w-8 xxs:h-8 text-center content-center text-blue-950 dark:text-white lg:w-10 xl:h-14" />
      </div>
    )
  }
  
  function Resource({ resource, handleModal }) {
    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)
  
    function onMouseMove({ currentTarget, clientX, clientY }) {
      let { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    return (
      <div
        key={resource.href}
        onMouseMove={onMouseMove}
        className=" group relative h-full w-full from-slate-300 to-slate-100 dark:from-slate-950 dark:to-blue-950 bg-gradient-to-t rounded-[28px] p-6 transition-shadow hover:shadow-zinc-900/5"
      >
            <div className='xxs:mt-4 sm:mt-4 lg:mt-2'>
                <ResourceIcon icon={resource.icon} />
            </div>
            <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div className="absolute inset-0  ring-inset group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
            <div className="relative grid grid-cols-1 place-items-center">
                <h3 className="text-blue-950 dark:text-white textoCard">{resource.name}</h3>
                <h3 className="text-blue-950 dark:text-white textoCard">{resource.name2}</h3>
                <button aria-label="Saber más" onClick={() => handleModal(resource.titleModal, resource.text, resource.text2, resource.text3, resource.icon)} className="mt-5 modal-open content-center inline-flex relative items-center justify-center w-8 h-8 text-blue-950 dark:text-white bg-white dark:bg-slate-900 rounded-full focus:shadow-outline hover:bg-slate-200 dark:hover:bg-slate-950">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </button>
        </div>
      </div>
    )
  }

export default function NuestrosValores() {

  const [currentScreenSize, setCurrentScreenSize] = useState(""); // Estado para almacenar el tamaño de la pantalla actual

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let screenSize = "";
      if (screenWidth < 400) {
        screenSize = "xxs";
      } else if (screenWidth < 700) {
        screenSize = "xs";
      } else {
        screenSize = "2xl";
      }
      setCurrentScreenSize(screenSize); // Actualiza el estado con el tamaño de la pantalla actual
    };

    handleResize(); // Llama a la función al inicio para establecer el tamaño de pantalla inicial

    window.addEventListener("resize", handleResize);}, []);

  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalContent2, setModalContent2] = useState("");
  const [modalContent3, setModalContent3] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState("")

  const handleModal = (title, content, content2, content3, icon) => {
    setShowModal(true);
    setModalContent(content);
    setModalContent2(content2);
    setModalContent3(content3);
    setModalTitle(title)
    setModalIcon(icon);
  };

  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
        "(min-width: 300px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 760px)": {
            slides: { perView: 3, spacing: 10 },
          },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 20 },
        },
        "(min-width: 1200px)": {
            slides: { perView: 3, spacing: 20 },
          },
      },
  })

  return (
    <FadeIn>
    <section id="nuestrosvalores">
      <div className='bg-white dark:bg-slate-950 xxs:mt-5 xxs:mb-14 xs:mt-12 xs:mb-16 sm:mt-16 sm:mb-20'>
          <h2 className='xxs:font-semibold lg:font-normal sm:max-w-5xl md:max-w-5xl tracking-tight xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient py-5 mx-auto text-center xs:max-w-md lg:max-w-5xl xl:max-w-6xl xxs:mb-5 md:mb-8 lg:mb-8 xl:mb-10 2xl:mb-12'>Nuestros valores</h2>
          <div className="relative xxs:mb-12 xxs:px-5 lg:px-8 md:mb-14 lg:mb-20 mx-auto xxs:max-w-lg sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-5xl ">
          <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '0px 0px -200px' }}
                    className='xxs:-mb-5'
                  >
                <TextGenerateEffect1 words="Bienvenidos al corazón de nuestra empresa." />
              </motion.div>
          <br/>
          <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '0px 0px -200px' }}
                  >
                <TextGenerateEffect1 words="Nos enorgullece presentarles los principios por los que nos regimos, los pilares con los que queremos construir una relación de confianza mutua, los compromisos que asumimos con los que marcaremos la diferencia  y la identidad propia con la que aspiramos a forjar conjuntamente un futuro que mejore su día a día:" />
              </motion.div>
          </div>
          <FadeIn>
        <div className="navigation-wrapper relative snap-center scroll-smooth xxs:max-w-[250px] xs:max-w-[355px] sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <div ref={sliderRef} className="keen-slider pb-5 scroll-smooth">
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group xxs:h-[200px] xs:h-[230px] lg:h-auto  sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[0].href} resource={resources[0]} handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group xxs:h-[200px] xs:h-[230px] lg:h-auto  sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[1].href} resource={resources[1]} handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group xxs:h-[200px] xs:h-[230px] lg:h-auto  sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[2].href} resource={resources[2]} handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group  xxs:h-[200px] xs:h-[230px] lg:h-auto sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[3].href} resource={resources[3]}  handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group  xxs:h-[200px] xs:h-[230px] lg:h-auto sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[4].href} resource={resources[4]}  handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group  xxs:h-[200px] xs:h-[230px] lg:h-auto sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[5].href} resource={resources[5]}  handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group  xxs:h-[200px] xs:h-[230px] lg:h-auto sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[6].href} resource={resources[6]}  handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group  xxs:h-[200px] xs:h-[230px] lg:h-auto sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[7].href} resource={resources[7]}  handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group  xxs:h-[200px] xs:h-[230px] lg:h-auto sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[8].href} resource={resources[8]}  handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group  xxs:h-[200px] xs:h-[230px] lg:h-auto sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[9].href} resource={resources[9]}  handleModal={handleModal}/>
                          </div>
                          <div className='keen-slider__slide rounded-[30px] bg-gradient-to-tr from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 p-0.5 shadow-md shadow-slate-200 dark:shadow-black flex-none snap-always group  xxs:h-[200px] xs:h-[230px] lg:h-auto sm:w-[200px] lg:w-[250px]'>
                              <Resource key={resources[10].href} resource={resources[10]} handleModal={handleModal} />
                          </div>
                          <Modal showModal={showModal} setShowModal={setShowModal} modalContent={modalContent} modalContent2={modalContent2} modalContent3={modalContent3} modalTitle={modalTitle} modalIcon={modalIcon}/>
          </div>
          
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 3
                }
              />
            </>
          )}
        </div>
        </FadeIn>
        {loaded && instanceRef.current && (
          <div className="dots flex justify-center">
          {[
        ...Array(
          currentScreenSize === 'xxs' || currentScreenSize === 'xs'
            ? instanceRef.current.track.details.slides.length - 1
            : instanceRef.current.track.details.slides.length - 2
        ).keys(),
      ].map((idx) => {
        return (
          <button
            key={idx}
            aria-label="Ir a..."
            onClick={() => {
              instanceRef.current?.moveToIdx(idx);
            }}
            className={
              'rounded-full mx-1 bg-slate-300 shadow-md shadow-slate-200 dark:shadow-black w-1.5 h-1.5 dot' +
              (currentSlide === idx ? ' active' : '')
            }
          ></button>
              )
            })}
          </div>
        )}
      </div>
      </section>
      </FadeIn>
  )
}


function Arrow(props) {
  const disabled = props.disabled ? "hidden" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow fill-blue-950 hover:fill-blue-400 dark:fill-white dark:hover:fill-slate-400 ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
