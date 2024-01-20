'use client'
import React from 'react' 
import { motion } from 'framer-motion'
import { TextGenerateEffect1 } from '../TextGenerateEffect'
import { FadeIn } from '../FadeIn'

function Introduction() {
  return (
    <FadeIn>
      <section id='introduction'> 
        <div className='bg-white dark:bg-slate-950 flex justify-center xxs:py-5 xs:py-10 sm:py-10 md:py-16 lg:py-20 2xl:pt-20'> 
          <div className='relative w-full'> 
              <div className='backgroundCircle backgroundCircle3'> 
              </div>  
              <div className='backgroundCircle backgroundCircle1'> 
              </div> 
              <div className='backgroundCircle backgroundCircle2'> 
              </div>            
              <div className='relative mx-auto xxs:px-5 lg:max-w-4xl xl:max-w-5xl'> 
                <h1 className='max-w-2xl xxs:font-semibold lg:font-normal tracking-tight py-5 mx-auto text-center xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] xxs:mb-3 lg:mb-5 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] bg-[length:200%_auto] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] animate-gradient'>Introduction</h1> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='xs:mt-5 sm:mt-10'
                    >
                  <TextGenerateEffect1 words="The reason for our company lies in accompanying and guiding our clients through the intricate process of searching for and obtaining external financing." />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="We provide advice and offer the technical, administrative and digital support necessary to secure contract awards by preparing and submitting grant applications and winning public tenders." />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="As strategic partners, at our core is the ability to understand and meticulously analyze your needs; identify financing opportunities to help you turn ideas into reality and focus on implementing effective and creative solutions to achieve successful outcomes." />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="Our professionalism and ethics are fundamental pillars with which, from the very beginning, we approach any situation seeking to optimize the resources with which to maximize growth. We strive to work collaboratively, foster strong collaborations and tirelessly ensure the delivery of a service with the highest quality and transparency standards throughout each stage of the process." />
                </motion.div>
            <br/> 
                </div> 
              <div className='backgroundCircle backgroundCircle4'> 
              </div>  
              <div className='absolute top-3/3 right-1/3 w-72 h-40 bg-pink-500 rounded-full dark:mix-blend-lighten filter blur-2xl opacity-10 dark:opacity-20 '> 
              </div> 
              <div className='absolute top-1/3 left-1/6 w-48 h-48 bg-blue-400 rounded-full dark:mix-blend-lighten filter blur-2xl opacity-10 dark:opacity-20'> 
              </div>  
              <div className='absolute top-3/3 left-1/3 w-48 h-48 bg-blue-500 rounded-full dark:mix-blend-lighten filter blur-2xl opacity-20 dark:opacity-30'> 
              </div>  
              </div> 
        </div>
      </section> 
    </FadeIn>
  )
}

export default Introduction