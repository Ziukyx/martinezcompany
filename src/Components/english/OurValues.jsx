'use client'
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
import { TextGenerateEffect1 } from "../TextGenerateEffect"

const resources = [
    {
      href: '/contacts',
      titleModal: 'Innovative resilience',
      name: 'Innovative',
      name2: 'resilience',
      icon: BsCloudArrowUp,
      text: 'The world of subsidies and public tenders is constantly evolving.',
      text2: 'We conceive each opportunity as a challenge that involves addressing obstacles with creativity and finding unusual solutions to apply new ideas, strategies and approaches with which to help our clients be one step ahead in their efforts to achieve their objectives and goals. We meet the changing needs of society at large.',
      text3:''
    },
    {
      href: '/conversations',
      titleModal: 'Sector versatility',
      name: 'Sector',
      name2: 'versatility',
      text: 'We reflect our capacity for adaptability from the first moment: we focus on understanding and studying the specific singularities of each case, we value providing personalized attention in which to present our knowledge, share our experience on different subjects, and make available the resources we have at our disposal in order to offer you a complete and updated vision of any reality.',
      text2:'',
      text3:'',
        icon: BsBoxes,
      
    },
    {
      href: '/messages',
      titleModal: 'Strategic pragmatism',
      name: 'Strategic',
      name2: 'pragmatism',
      text:'Our work dynamics are based on methodologically objective, measurable and quantifiable processes that allow us to effectively optimize the positive impact of each action carried out.',
      text2:'Original and disruptive by nature, our decisions are supported by data and documented reports that allow us to analyze the success of our results, constantly review and rethink which aspects we can improve internally and, consequently, appeal to a continuous search for our best version.',
      text3:'',
      icon: BsDiagram3,
    },
    {
      href: '/groups',
      titleModal: 'Global perspective',
      name: 'Global',
      name2: 'perspective',
      text:'We consider that our contribution is characterized by maintaining permanent monitoring of those global trends that translate into the development of proactive and collaborative proposals at all territorial levels; we advocate, work and collaborate constantly with transversality and diversity as the main arguments of our daily life and we continually explore new opportunities -without fear of taking calculated risks- with which to pursue excellence and enrich our services.',
      text2:'',
      text3:'',
        icon: GoTelescope,
    },
    {
        href: '/users',
        titleModal: 'Transformative empowerment',
        name: 'Transformative',
        name2:'empowerment',
        text: 'Our internal policy involves training -from the inside out- to actively participate in the leadership of initiatives and the promotion of ideas that contribute to unlocking their full potential and the evolution of our environment.',
        text2:'We offer our clients the possibility of directly getting involved in the two-way exchange of impressions and we empower them to be part of the making of transcendental decisions: giving them a say in the course that the projects take -from beginning to end- and influence their operations.',
        text3:'',
        icon: AiOutlineRise,
    },
    {
        href: '/users',
        titleModal: 'Digital leadership',
        name: 'Digital',
        name2: 'leadership',
        text: 'Our commitment is to know, implement and make sure we are equipped with the latest tools and technological innovations in all aspects -of our work activity- to stay at the forefront of the industry; we work closely with our clients to help them in their own digital transformation and to develop personalized environments with which to automate processes, adapt to each other and prosper together.',
        text2:'',
        text3:'',
        icon: BsCodeSlash,
    },
    {
        href: '/users',
        titleModal: 'Ethical transparency',
        name: 'Ethical',
        name2: 'transparency',
        text: 'We manage data responsibly and rigorously comply with data protection regulations, ensuring that documentation and information are secure and well protected.',
        text2: 'We assume responsibility for our decisions and act consistently with our actions: we guarantee our loyalty, confidentiality and unappropriate use of information.',
        text3:'We build our future by aligning our values with those who share objectives with us; likewise, we expect a sincere exchange of feedback to generate a greater awareness and understanding of how to pursue a relationship of trust that benefits all parties.',
        icon: BsEye,
    },
    {
        href: '/users',
        titleModal: 'Comprehensive sustainability',
        name: 'Comprehensive',
        name2: 'sustainability',
        text: 'We adhere to respectful and sustainable business practices:',
        text2: 'We intensify our line of action towards projects that contain a high degree of social component, we contribute to the well-being of our territory, we promote responsible and educational awareness about the life cycle of products, we try to minimize our environmental impact in all our operations and we undertake our mission prioritizing the energy efficiency of our devices.',
        text3: '',
        icon: PiPlant,
    },
    {
        href: '/users',
        titleModal: 'Meaningful connection',
        name: 'Meaningful',
        name2: 'connection',
        text: 'We are part of and actively integrate into the causes that we consider shared and whose values are aligned.',
        text2: 'The network of collaborators and alliances that we establish allow us to reinforce our ability to offer a service that goes beyond taking advantage of a simple opportunity: we recognize the uniqueness of each actor, we empathize with any concerns that might arise and we create an environment of cooperation where all voices are heard and respected.',
        text3:'',
        icon:BsShare,
    },
    {
        href: '/users',
        titleModal: 'Foresighted approach',
        name: 'Foresighted',
        name2: 'approach',
        text: 'We carry out assessments of future scenarios to anticipate growing expectations; we develop long-term strategic plans to identify possible obstacles that may arise and mitigate them as they develop.',
        text2: 'We are attentive to changes in laws and regulations that affect our sector; we proactively enforce regulatory compliance and closely monitor any early deviations from our mission to take corrective action in a timely manner.',
        text3:'',
        icon:BsGear,
    },
    {
        href: '/users',
        titleModal: 'Rigorous dynamics',
        name: 'Rigorous',
        name2: 'dynamics',
        text: 'We maintain highly effective processes and apply continuous monitoring of internal functioning with which we exhaustively analyze objective criteria and, based on our dedication and evaluation, we preserve consistency in the quality standards of what we offer from operational efficiency to customer satisfaction and the result that we materialize.',
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

  export default function OurValues (){

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
      <section id="ourvalues">
        <div className='bg-white dark:bg-slate-950 xxs:mt-5 xxs:mb-14 xs:mt-12 xs:mb-16 sm:mt-16 sm:mb-20'>
            <h2 className='xxs:font-semibold lg:font-normal sm:max-w-5xl md:max-w-5xl tracking-tight xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient py-5 mx-auto text-center xs:max-w-md lg:max-w-5xl xl:max-w-6xl xxs:mb-5 md:mb-8 lg:mb-8 xl:mb-10 2xl:mb-12'>Our values</h2>
            <div className="relative xxs:mb-12 xxs:px-5 lg:px-8 md:mb-14 lg:mb-20 mx-auto xxs:max-w-lg sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-5xl ">
            <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='xxs:-mb-5'
                    >
                  <TextGenerateEffect1 words="Welcome to the heart of our company." />
                </motion.div>
            <br/>
            <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="We are proud to present to you the principles by which we are governed, the pillars with which we want to build a relationship of mutual trust, the commitments we assume with which we will make a difference and the own identity with which we aspire to jointly forge a future that improves your day to day:" />
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
  