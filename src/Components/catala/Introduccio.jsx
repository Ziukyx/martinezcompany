'use client'
import React from 'react' 
import { motion } from 'framer-motion'

import { FadeIn } from '../FadeIn'
import { TextGenerateEffect1 } from '../TextGenerateEffect'

function Introduccio() {
  return (
    <FadeIn>
      <section id='introduccio'> 
        <div className='bg-white dark:bg-slate-950 flex justify-center xxs:py-5 xs:py-10 sm:py-10 md:py-16 lg:py-20 2xl:pt-20'> 
          <div className='relative w-full'> 
              <div className='backgroundCircle backgroundCircle3'> 
              </div>  
              <div className='backgroundCircle backgroundCircle1'> 
              </div> 
              <div className='backgroundCircle backgroundCircle2'> 
              </div>            
              <div className='relative mx-auto xxs:px-5 lg:max-w-4xl xl:max-w-5xl'> 
                <h1 className='max-w-2xl xxs:font-semibold lg:font-normal tracking-tight py-5 mx-auto text-center xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] xxs:mb-3 lg:mb-5 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] bg-[length:200%_auto] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] animate-gradient'>Introducció</h1> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='xs:mt-5 sm:mt-10'
                    >
                  <TextGenerateEffect1 words="La raó de ser de la nostra empresa és la d’acompanyar i guiar els nostres clients a través de l'intricat procés de recerca i obtenció de finançament extern." />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="Assessorem i prestem el suport tècnic, administratiu i digital necessaris per aconseguir l'adjudicació de contractes mitjançant la preparació i la presentació de sol·licituds de subvenció i la consecució de licitacions públiques." />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="Com a socis estratègics, a la nostra essència està la capacitat de comprendre i analitzar meticulosament les vostres necessitats; detectar les oportunitats de finançament amb les quals ajudar a transformar les vostres idees en realitat i orientar-nos a la implementació d'unes solucions efectives i creatives amb la finalitat d’apropar-nos a aconseguir uns resultats exitosos." />
                </motion.div>
                <br /> 
                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                    >
                  <TextGenerateEffect1 words="El nostre professionalisme i la nostra ètica són pilars fonamentals amb els quals, des del primer moment, abordem qualsevol mena de situació buscant optimitzar els recursos i maximitzar el seu creixement; ens esforcem per treballar en conjunt; fomentem col·laboracions sòlides i garantim obrar incansablement per oferir un servei amb uns estàndards de qualitat i de transparència excel·lents durant cada etapa del procés." />
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

export default Introduccio