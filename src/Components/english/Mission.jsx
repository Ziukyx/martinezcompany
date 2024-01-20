'use client'
import Image from 'next/image'
import TeamWork from '../../Images/1.png'
import second from '../../Images/2.png'
import Success from '../../Images/cta.svg'


import { motion } from 'framer-motion'
import { TextGenerateEffect1 } from '../TextGenerateEffect'
import { FadeIn } from '../FadeIn'
import GradientDividerColors from '../GradientDividerColors'

function Mission() {
  return (
    <FadeIn >
        <section id='mission'>
          <div className="xxs:mt-8 xs:mt-10 sm:mt-10 md:py-0 md:mb-16 lg:mb-0 lg:py-10 ">
            <div className="mx-auto max-w-7xl xxs:px-5 lg:px-8">
                <h1 className='text-center xxs:font-semibold lg:font-normal bg-clip-text text-transparent py-5 mx-auto tracking-tight xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] xxs:mb-3 lg:mb-5 bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient'>Mission</h1>            
                
                {/* Primer párrafo */}
                <div className="mx-auto flex max-w-5xl flex-col xxs:py-0 xs:py-8 sm:py-8 md:py-16 lg:flex-row lg:items-center lg:py-0 lg:px-5 lg:-mt-8 lg:gap-x-10 xl:gap-x-20 xl:px-20 xl:-mt-8 xl:max-w-none 2xl:-mt-10 2xl:px-0">
                    <div className="w-full flex-auto">
                      <h2 className="font-semibold dark:font-normal  xxs:leading-7 xs:leading-10 sm:leading-[50px] text-center text-blue-950 dark:text-white xxs:text-[16px] xs:text-[19px] sm:text-[29px] md:text-3xl lg:text-[23px] xl:text-[25px] 2xl:text-3xl">By sharing synergies,
                        <span className=" font-perfetto font-normal ml-2 xxs:text-[40px] xs:text-[47px] sm:text-[70px] md:text-7xl lg:text-[48px] xl:text-6xl 2xl:text-[70px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.cyan.400),theme(colors.blue.600),theme(colors.cyan.400))] bg-[length:200%_auto] animate-gradient">
                        we move forward
                        </span>
                      </h2>

                      <GradientDividerColors className="from-[#00DFD8] to-[#007CF0]"/>
                        <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, margin: '0px 0px -200px' }}
                              className='mt-6 '
                        >
                          <TextGenerateEffect1 words="We put our resources at your disposal in order to mediate and promote public-private collaboration with which to catalyze an impact aimed at the growth and progress of the social and productive fabric of our society." />
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
                    <h2 className="font-semibold dark:font-normal  xxs:leading-7 xs:leading-10 sm:leading-[50px] text-center text-blue-950 dark:text-white xxs:text-[16px] xs:text-[19px] sm:text-3xl md:text-3xl lg:text-[23px] xl:text-[25px] 2xl:text-3xl">By moving forward together,
                      <span className="font-perfetto font-normal ml-2 xxs:text-[40px] xs:text-[47px] sm:text-[70px] md:text-7xl lg:text-[48px] xl:text-6xl 2xl:text-[70px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.pink.500),theme(colors.violet.600),theme(colors.pink.500))] bg-[length:200%_auto] animate-gradient">
                      we dare
                      </span>
                    </h2>
                    <GradientDividerColors className="from-[#FF0080] to-[#7928CA]"/>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='mt-6 '
                    >
                      <TextGenerateEffect1 words="In various sectors, we prioritize making it possible to obtain monetary resources and facilitating joint relationships between the public sector and the private sector with the aim of contributing to the development of different kind of organizations, such as educational, sports or cultural institutions or non-profit entities." />
                    </motion.div>
                </div>
              </div>

              {/* Tercer párrafo */}
              <div className="mx-auto flex flex-col xs:pt-6 xxs:pb-0 xs:pb-5 sm:pt-5 md:pt-10 lg:flex-row lg:items-center lg:py-14 lg:px-5 lg:gap-x-10 xl:py- xl:gap-x-20 xl:px-20 xl:max-w-none 2xl:px-0 2xl:-mb-10 sm:-mt-5">
                <div className="w-full flex-auto ">
                  <h2 className="relative font-semibold dark:font-normal text-center xxs:leading-7 xs:leading-10 sm:leading-[50px] text-blue-950 dark:text-white xxs:text-[16px] xs:text-[19px] sm:text-3xl md:text-3xl lg:text-[23px] xl:text-[25px] 2xl:text-3xl">By daring, 
                    <span className="z-40 font-normal font-perfetto py-4 px-2 xxs:text-[40px] xs:text-[47px] sm:text-[70px] md:text-7xl lg:text-[48px] xl:text-6xl 2xl:text-[70px] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow.300),theme(colors.orange.600),theme(colors.yellow.300))] bg-[length:200%_auto] animate-gradient">
                    we progress
                    </span>
                  </h2>
                      <GradientDividerColors className="from-[#F9CB28] to-[#FF4D4D]" />
                      <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='mt-6 '
                    >
                      <TextGenerateEffect1 words="Our mentality of continuous improvement and work dynamics aim to promote projects that pursue to enhance innovation, digitalization, sustainability (economic, environmental and social), entrepreneurship and/or multidisciplinary training that promotes the acquisition of new professional skills with which to adapt to an increasingly competitive and demanding labour market." />
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

export default Mission