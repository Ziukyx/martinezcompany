'use client'
import React from 'react' 
import { motion } from 'framer-motion'

import { FadeIn } from '../FadeIn'
import { TextGenerateEffect1 } from '../TextGenerateEffect'

function Introduccion() { 
  return ( 
    <FadeIn>
      <section id='introduccion'> 
        <div className='bg-white dark:bg-slate-950 flex justify-center xxs:py-5 xs:py-10 sm:py-10 md:py-16 lg:py-20 2xl:pt-20'> 
          <div className='relative w-full'> 
              <div className='backgroundCircle backgroundCircle3'> 
              </div>  
              <div className='backgroundCircle backgroundCircle1'> 
              </div> 
              <div className='backgroundCircle backgroundCircle2'> 
              </div>            
              <div className='relative mx-auto xxs:px-5 lg:max-w-4xl xl:max-w-5xl'> 
                <h1 className='max-w-2xl xxs:font-semibold lg:font-normal tracking-tight py-5 mx-auto text-center xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] xxs:mb-3 lg:mb-5 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] bg-[length:200%_auto] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] animate-gradient'>Introducción</h1> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='xs:mt-5 sm:mt-10'
                    >
                  <TextGenerateEffect1 words="La razón de ser de nuestra empresa radica en acompañar y guiar a nuestros clientes a través del intrincado proceso de búsqueda y obtención de financiación externa." />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="Asesoramos y prestamos el apoyo técnico, administrativo y digital necesarios para conseguir la adjudicación de contratos mediante la preparación y presentación de solicitudes de subvención y la consecución de licitaciones públicas." />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="Como socios estratégicos, en nuestra esencia está la capacidad de comprender y analizar meticulosamente sus  
                necesidades; detectar esas oportunidades de financiación con las que ayudarles a transformar las ideas  
                en realidad y orientarnos a la implementación de unas soluciones efectivas y creativas con las que acercarnos al logro de unos resultados exitosos. " />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="Nuestro profesionalismo y nuestra ética son pilares fundamentales con los que, desde el primer momento, abordamos 
                cualquier tipo de situación buscando optimizar los recursos con los que maximizar su crecimiento; nos esforzamos  
                por trabajar en conjunto; fomentamos colaboraciones sólidas y garantizamos obrar incansablemente para ofrecer  
                un servicio con unos estándares de calidad y de transparencia excelentes durante cada etapa del proceso." />
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
 
export default Introduccion