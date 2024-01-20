'use client'
import { TextGenerateEffect1 } from '../TextGenerateEffect'
import React, { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../../styles/styles.css'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import {BsCloudArrowUp, BsCodeSlash, BsDiagram3, BsBoxes, BsBriefcase, BsEye, BsShare, BsGear,} from 'react-icons/bs'
import { GoTelescope } from "react-icons/go"
import { AiOutlineRise } from "react-icons/ai"
import { PiPlant } from "react-icons/pi"
import Modal from "../Modal"
import { FadeIn } from '../FadeIn'

const resources = [
    {
      href: '/contacts',
      titleModal: 'Resiliència innovadora',
      name: 'Resiliència',
      name2: 'innovadora',
      icon: BsCloudArrowUp,
      text: 'El món de les subvencions i les licitacions públiques està evolucionant constantment.',
      text2: 'Cada oportunitat la concebem com un desafiament que implica abordar els obstacles amb creativitat i trobar solucions fora del comú per aplicar noves idees, estratègies i enfocaments amb què afavorir que els nostres clients estiguin un pas per davant en els seus esforços per aconseguir els objectius i es compleixin les necessitats canviants de la societat en general.',
      text3:''
    },
    {
      href: '/conversations',
      titleModal: 'Versatilitat sectorial',
      name: 'Versatilitat',
      name2: 'sectorial',
      text: 'Reflectim la nostra capacitat d\\\'adaptabilitat des del primer moment: ens centrem a comprendre i estudiar les singularitats específiques de cada cas, valorem proporcionar-vos una atenció personalitzada en què exposar-vos el nostre coneixement, compartir la nostra experiència sobre les diferents matèries i posar a la vostra disposició els recursos que tenim al nostre abast amb la finalitat d\\\'oferir-vos una visió completa i actualitzada a qualsevol realitat.',
      text2:'',
      text3:'',
        icon: BsBoxes,
      
    },
    {
      href: '/messages',
      titleModal: 'Pragmatisme estratègic',
      name: 'Pragmatisme',
      name2: 'estratègic',
      text:'La nostra dinàmica de treball es basa en uns processos metodològicament objectius, mesurables i quantificables que ens permeten optimitzar eficaçment l\\\'impacte positiu de cada acció duta a terme.',
      text2: 'Originals i disruptius per naturalesa, les nostres decisions es recolzen en dades i informes documentats que ens permeten analitzar l\\\'èxit dels nostres resultats, revisar i repensar constantment quins aspectes són els que podem millorar internament i, en conseqüència, apel·lar a una cerca contínua de la millor versió que per part nostra podem oferir.',
      text3:'',
      icon: BsDiagram3,
    },
    {
      href: '/groups',
      titleModal: 'Perspectiva global',
      name: 'Perspectiva',
      name2: 'global',
      text:'Considerem que la nostra aportació es caracteritza pel manteniment d\\\'un monitoratge permanent de les tendències globals que es tradueixen en un desenvolupament de propostes proactives i col·laboratives a tots els nivells territorials; advoquem, treballem i col·laborem constantment amb la transversalitat i la diversitat com a arguments principals del nostre dia a dia i explorem contínuament noves oportunitats -sense temor a assumir riscos calculats- amb les quals perseguir l\\\'excel·lència i enriquir els nostres serveis.',
      text2:'',
      text3:'',
        icon: GoTelescope,
    },
    {
        href: '/users',
        titleModal: 'Empoderament transformador',
        name: 'Empoderament',
        name2:'transformador',
        text: 'La nostra política interna passa per capacitar -des de dins cap a fora- que es participi activament en el lideratge de les iniciatives i l\\\'impuls d\\\'idees que contribueixin al desbloqueig de tot el potencial i a l\\\'evolució del nostre entorn.',
        text2:'Brindem la possibilitat d\\\'involucrar els nostres clients directament en l\\\'intercanvi bidireccional d\\\'impressions i els apoderem a formar part de la presa de decisions transcendentals: donant-los veu i vot al “rumb” que prenen els projectes -des del principi fins al final- i influir en les seves operacions.',
        text3:'',
        icon: AiOutlineRise,
    },
    {
        href: '/users',
        titleModal: 'Lideratge digital',
        name: 'Lideratge',
        name2: 'digital',
        text: 'En el nostre compromís està conèixer, implementar i assegurar-nos d\\\'estar equipats amb les últimes eines i novetats tecnològiques en tots els aspectes -de la nostra activitat laboral- per tal de mantenir-nos a l\\\'avantguarda de la indústria; col·laborem estretament amb els nostres clients per ajudar-los en la seva pròpia transformació digital i desenvolupar entorns personalitzats amb els quals automatitzar els processos, adaptar-nos recíprocament i prosperar conjuntament.',
        text2:'',
        text3:'',
        icon: BsCodeSlash,
    },
    {
        href: '/users',
        titleModal: 'Transparència ètica',
        name: 'Transparència',
        name2: 'ètica',
        text: 'Gestionem les dades de manera responsable i complim rigorosament les regulacions en matèria de protecció de dades, assegurant que la documentació i la informació estiguin segures i ben protegides.',
        text2: 'Assumim la responsabilitat de les nostres decisions i actuem conseqüentment amb les nostres accions: garantim la nostra lleialtat, confidencialitat i ús adequat de la informació.',
        text3:'Construïm el nostre futur alineant els nostres valors amb qui compartim objectius; de la mateixa manera, esperem un intercanvi sincer de “feedback” per tal d\\\'originar una major conscienciació i comprensió sobre com emprendre una relació de confiança que beneficiï totes les parts.',
        icon: BsEye,
    },
    {
        href: '/users',
        titleModal: 'Sostenibilitat integral',
        name: 'Sostenibilitat',
        name2: 'integral',
        text: 'Ens adherim a unes pràctiques empresarials respectuoses i sostenibles:',
        text2: 'Intensifiquem la nostra línia d\\\'actuació cap a projectes que continguin un alt grau de component social, contribuïm al benestar del nostre territori, fomentem una conscienciació responsable i didàctica sobre el cicle de la vida dels productes, procurem minimitzar el nostre impacte ambiental en totes les nostres operacions i emprenem la nostra comesa prioritzant l\\\'eficiència energètica dels nostres dispositius.',
        text3: '',
        icon: PiPlant,
    },
    {
        href: '/users',
        titleModal: 'Connexió significativa',
        name: 'Connexió',
        name2: 'significativa',
        text: 'Formem part i ens integrem activament en les causes que considerem compartides i uns valors amb els quals estem alineats.',
        text2: 'La xarxa de col·laboradors i aliances que establim ens permeten reforçar la nostra habilitat d\\\'oferir un servei que va més enllà d\\\'aprofitar una simple oportunitat: reconeixem la unicitat de cada actor, empatitzem amb les seves inquietuds i preocupacions i creem un ambient de cooperació on totes les veus són escoltades i respectades.',
        text3:'',
        icon:BsShare,
    },
    {
        href: '/users',
        titleModal: 'Enfocament previsor',
        name: 'Enfocament',
        name2: 'previsor',
        text: 'Realitzem avaluacions d\\\'escenaris futurs per anticipar les expectatives creixents; elaborem plans estratègics a llarg termini per identificar els possibles obstacles que puguin sorgir i mitigar-los d\\\'acord amb el seu desenvolupament.',
        text2: 'Estem atents als canvis en les lleis i regulacions que afecten el nostre sector; vetllem pel compliment de les normatives de manera proactiva i seguim de prop qualsevol desviació primerenca de la nostra missió per prendre mesures correctives de manera oportuna.',
        text3:'',
        icon:BsGear,
    },
    {
        href: '/users',
        titleModal: 'Dinàmica rigorosa',
        name: 'Dinàmica',
        name2: 'rigorosa',
        text: 'Mantenim processos altament eficaços i apliquem un seguiment continu del funcionament intern amb què analitzem exhaustivament els criteris objectius i, a partir de la nostra dedicació i avaluació, preservem la consistència en els estàndards de qualitat d\\\'allò que oferim des de l\\\'eficiència operativa fins a la satisfacció del client i del resultat que "per se" materialitzem.',
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
                <button onClick={() => handleModal(resource.titleModal, resource.text, resource.text2, resource.text3, resource.icon)} className="mt-5 modal-open content-center inline-flex relative items-center justify-center w-8 h-8 text-blue-950 dark:text-white bg-white dark:bg-slate-900 rounded-full focus:shadow-outline hover:bg-slate-200 dark:hover:bg-slate-950">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </button>
        </div>
      </div>
    )
  }

  export default function NostresValors (){

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
      <section id="nostresvalors">
        <div className='bg-white dark:bg-slate-950 xxs:mt-5 xxs:mb-14 xs:mt-12 xs:mb-16 sm:mt-16 sm:mb-20'>
            <h2 className='xxs:font-semibold lg:font-normal sm:max-w-5xl md:max-w-5xl tracking-tight xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient py-5 mx-auto text-center xs:max-w-md lg:max-w-5xl xl:max-w-6xl xxs:mb-5 md:mb-8 lg:mb-8 xl:mb-10 2xl:mb-12'>Els nostres valors</h2>
            <div className="relative xxs:mb-12 xxs:px-5 lg:px-8 md:mb-14 lg:mb-20 mx-auto xxs:max-w-lg sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-5xl ">
            <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='xxs:-mb-5'
                    >
                  <TextGenerateEffect1 words="Benvinguts al cor de la nostra empresa." />
                </motion.div>
            <br/>
            <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="Ens enorgulleix presentar-vos els principis pels quals ens regim, els pilars amb els quals volem construir una relació de confiança mútua, els compromisos que assumim amb els quals marcar la diferència i la identitat pròpia amb la qual aspirem a forjar conjuntament un futur que millori el vostre dia a dia:" />
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
  