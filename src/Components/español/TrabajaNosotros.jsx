'use client'
import React from 'react'
import { LampContainer } from '../Lamp'
import { motion } from 'framer-motion'
import { FadeIn } from '../FadeIn'

function TrabajaNosotros() {
  return (
    <FadeIn>
    <section id="trabajanosotros">
        <div className="bg-white dark:bg-slate-950 z-50 xs:pt-10 xs:-mb-56 sm:mt-0 sm:-mb-20 md:-mb-20 lg:mb-0 2xl:mt-0 ">
            <div className="mx-auto max-w-7xl lg:px-8 xs:mt-10">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="sm:-mt-10 md:mt-0 text-2xl text-center tracking-tighter dark:tracking-tight text-blue-950 dark:text-white py-5 mx-auto xxs:text-2xl xxs:mb-3 xs2:text:[28px] sm:text-[43px] sm:leading-10 md:text-[51px] md:max-w-3xl md:leading-[4rem] lg:mb-5 lg:text-6xl lg:max-w-4xl xl:max-w-6xl xl:text-7xl "
                    >
                    Flexibilidad táctica y mentalidad <br/>ejecutiva: obtenemos resultados <br/>que no necesitan presentación.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-6 text-blue-950 dark:text-white texto xxs:-mb-32 xs:-mb-44 2xl:-mb-20 md:max-w-5xl lg:max-w-4xl xl:max-w-5xl xxs:px-1 md:px-6 lg:px-8"
                    >
                    En nuestra búsqueda de talento, nos caracterizamos por integrar a perfiles en un ecosistema laboral acostumbrado a buscar soluciones a los problemas y cuya aspiración es la de seguir creciendo continuamente; nos apasionan los retos y nos esforzamos diariamente por superarnos, desarrollando habilidades en base a competencias y no a etiquetas (o responsabilidades).                        
                    </motion.p> 
                 </LampContainer>


        </div>
            

        </div>
</section>
</FadeIn>
  )
}

export default TrabajaNosotros