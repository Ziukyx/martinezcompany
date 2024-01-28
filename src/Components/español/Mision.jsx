'use client'
import Image from 'next/image'
import TeamWork from '../../Images/Mision1.webp'
import second from '../../Images/Mision2.webp'
import Success from '../../Images/Mision3.webp'
import { motion } from 'framer-motion'
import { TextGenerateEffect1 } from '../TextGenerateEffect'
import { FadeIn } from '../FadeIn'
import { GradientDividerColors } from '../GradientDividerColors'

  
export default function MisionCopy() {
    return (
      <FadeIn >
        <section id='mision'>
          <div className="xxs:mt-8 xs:mt-10 sm:mt-10 md:py-0 md:mb-16 lg:mb-0 lg:py-10 ">
            <div className="mx-auto max-w-7xl xxs:px-5 lg:px-8">
                <h1 className='text-center xxs:font-semibold lg:font-normal bg-clip-text text-transparent py-5 mx-auto tracking-tight xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] xxs:mb-3 lg:mb-5 bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient'>Misión</h1>            
                
                {/* Primer párrafo */}
                <div className="mx-auto flex max-w-5xl flex-col xxs:py-0 xs:py-8 sm:py-8 md:py-16 lg:flex-row lg:items-center lg:py-0 lg:px-5 lg:-mt-8 lg:gap-x-10 xl:gap-x-20 xl:px-20 xl:-mt-8 xl:max-w-none 2xl:-mt-10 2xl:px-0">
                    <div className="w-full flex-auto">
                      <h2 className="font-semibold dark:font-normal  xxs:leading-7 xs:leading-10 sm:leading-[50px] text-center text-blue-950 dark:text-white xxs:text-[16px] xs:text-[18px] sm:text-[29px] md:text-3xl lg:text-[23px] xl:text-[25px] 2xl:text-3xl">Compartiendo sinergias, 
                        <span className=" font-perfetto font-normal ml-2 xxs:text-[39px] xs:text-[45px] sm:text-[70px] md:text-7xl lg:text-[48px] xl:text-6xl 2xl:text-[70px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.cyan.400),theme(colors.blue.600),theme(colors.cyan.400))] bg-[length:200%_auto] animate-gradient">
                          avanzamos
                        </span>
                      </h2>

                      <GradientDividerColors className="from-[#00DFD8] to-[#007CF0]"/>
                        <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, margin: '0px 0px -200px' }}
                              className='mt-6 '
                        >
                          <TextGenerateEffect1 words="Ponemos nuestros recursos a su disposición con la finalidad de mediar y promover una colaboración público-privada con la que catalizar un impacto orientado al crecimiento y al progreso del tejido social y productivo de nuestra sociedad en general." />
                        </motion.div>
                    </div>  
                    <Image
                        className="xxs:h-72 sm:h-80 w-full flex-none rounded-2xl object-contain xxs:mt-5 xs:mt-14 sm:mt-16 sm:-mb-5 lg:aspect-square lg:h-auto lg:max-w-md"
                        src={TeamWork}
                        alt=""
                    />
                  </div>

              {/* Segundo párrafo */}
              <div className="mx-auto flex flex-col xxs:py-5 xs:py-10 lg:flex-row lg:items-center lg:py-0 lg:px-5 lg:gap-x-10 xl:gap-x-20 xl:px-20 xl:max-w-none 2xl:px-0">
                <Image
                  className="xxs:h-72 xxs:mt-5 xs:mt-16 sm:mt-16 lg:mt-0 sm:h-80 w-full flex-none rounded-2xl object-contain lg:aspect-square lg:h-auto lg:max-w-md"
                  src={second}
                  alt=""/>
                  <div className="w-full flex-auto xxs:order-first  lg:order-last ">
                    <h2 className="font-semibold dark:font-normal  xxs:leading-7 xs:leading-10 sm:leading-[50px] text-center text-blue-950 dark:text-white xxs:text-[16px] xs:text-xl sm:text-3xl md:text-3xl lg:text-[23px] xl:text-[25px] 2xl:text-3xl">Avanzando juntos,  
                      <span className="font-perfetto font-normal ml-2 xxs:text-[39px] xs:text-[50px] sm:text-[70px] md:text-7xl lg:text-[48px] xl:text-6xl 2xl:text-[70px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.pink.500),theme(colors.violet.600),theme(colors.pink.500))] bg-[length:200%_auto] animate-gradient">
                        nos atrevemos
                      </span>
                    </h2>
                    <GradientDividerColors className="from-[#FF0080] to-[#7928CA]"/>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='mt-6 '
                    >
                      <TextGenerateEffect1 words="En diversos sectores, priorizamos posibilitar la obtención de recursos dinerarios (o no) y facilitar las relaciones conjuntas entre el sector público y el sector privado con el objetivo de contribuir al desarrollo de organizaciones, instituciones (educativas, deportivas o culturales), entidades sin ánimo de lucro..." />
                    </motion.div>
                </div>
              </div>

              {/* Tercer párrafo */}
              <div className="mx-auto flex flex-col xs:pt-6 xxs:pb-0 xs:pb-5 sm:pt-5 md:pt-10 lg:flex-row lg:items-center lg:py-14 lg:px-5 lg:gap-x-10 xl:py- xl:gap-x-20 xl:px-20 xl:max-w-none 2xl:px-0 2xl:-mb-10 sm:-mt-5">
                <div className="w-full flex-auto ">
                  <h2 className="relative font-semibold dark:font-normal text-center xxs:leading-7 xs:leading-10 sm:leading-[50px] text-blue-950 dark:text-white xxs:text-[16px] xs:text-xl sm:text-3xl md:text-3xl lg:text-[23px] xl:text-[25px] 2xl:text-3xl">Atreviéndonos, 
                    <span className="z-40 font-normal font-perfetto py-4 px-2 xxs:text-[39px] xs:text-[50px] sm:text-[70px] md:text-7xl lg:text-[48px] xl:text-6xl 2xl:text-[70px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.300),theme(colors.orange.600),theme(colors.yellow.300))] bg-[length:200%_auto] animate-gradient">
                        progresamos
                    </span>
                  </h2>
                      <GradientDividerColors className="from-[#F9CB28] to-[#FF4D4D]" />
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='mt-6 '
                    >
                      <TextGenerateEffect1 words="Nuestra mentalidad de mejora continua y dinámica de trabajo ambicionan impulsar proyectos que busquen y persigan potenciar la innovación, la digitalización, la sostenibilidad (económica, ambiental y social), el emprendimiento y/o una formación multidisciplinar que plantee la adquisición de nuevas competencias profesionales con las que adaptarse a un mercado laboral cada vez más competitivo y exigente." />
                    </motion.div>
                  </div>
                  <Image
                      className="xxs:h-72 xxs:mt-5 xxs:mb-10 xs:mt-16 xs:mb-16 sm:mt-16 sm:mb-16 md:mb-0 lg:mt-0 sm:h-80 w-full flex-none rounded-2xl object-contain lg:aspect-square lg:h-auto lg:max-w-md"
                      src={Success}
                      alt=""/>
                  </div>
            </div>
          </div>
        </section>
      </FadeIn>
    )
  }