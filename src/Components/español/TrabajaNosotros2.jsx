import React from 'react'
import GradientDividerUniversal from '../GradientDividerUniversal'
import { BackgroundBeams } from '../BackgroundBeams'
import { FadeIn } from '../FadeIn'

function Ordenador(){
    return(
        <FadeIn>
        <div className='relative mt-0 lg:mt-20 xl:mt-20 z-10 xxs:hidden lg:block'>
            <div className="mx-auto mt-10 grid max-w-2xl lg:mx-0 lg:max-w-none grid-cols-3 lg:gap-x-10 xl:gap-x-14">
                <div className="flex flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" className="mt-1 text-blue-400">
                            <path fill="currentColor" d="M12 10c3.976 0 8-1.374 8-4s-4.024-4-8-4s-8 1.374-8 4s4.024 4 8 4"/>
                            <path fill="currentColor" d="M4 10c0 2.626 4.024 4 8 4s8-1.374 8-4V8c0 2.626-4.024 4-8 4s-8-1.374-8-4z"/>
                            <path fill="currentColor" d="M4 14c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4z"/>
                            <path fill="currentColor" d="M4 18c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Salario competitivo</h3>
                    </div>  
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Reconocemos el valor y el tiempo de dedicación con el que contribuye al éxito de la empresa.</p>
                </div>

                <div className="flex flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" className="mt-1 text-blue-400">
                            <path fill="currentColor" d="M8 13.65V7q0-.425.288-.712T9 6h1q.425 0 .713.288T11 7v6.65l-.125-.125q-.575-.55-1.375-.55t-1.375.55zm5 1.5V3q0-.425.288-.712T14 2h1q.425 0 .713.288T16 3v9.15zM3 18.6V11q0-.425.288-.712T4 10h1q.425 0 .713.288T6 11v4.6zm2.4 2.45q-.65 0-.913-.612T4.7 19.35l4.1-4.1q.275-.275.663-.3t.687.25L13 17.65l5.6-5.6H18q-.425 0-.712-.288T17 11.05q0-.425.288-.712T18 10.05h3q.425 0 .713.288t.287.712v3q0 .425-.288.713T21 15.05q-.425 0-.712-.288T20 14.05v-.6l-6.25 6.25q-.275.275-.663.3t-.687-.25L9.55 17.3L6.1 20.75q-.125.125-.312.213t-.388.087"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Incentivos significativos</h3></div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Recompensamos y valoramos positivamente el esfuerzo extraordinario y el rendimiento individual destacado.</p>
                </div>

                <div className="flex  flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 512 512" className='mt-1 text-blue-400'>
                            <path fill="currentColor" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2l49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3l42.4-84.9l1.7 3.4c9.5 19 28.9 31 50.1 31h104.5c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9M503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8l-51-113.9c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1c-5.7-16-8.7-33-8.7-50.3v-5.8c0-69.9 50.5-129.5 119.4-141c45.6-7.6 92 7.3 124.6 39.9l12 12l12-12c32.6-32.6 79-47.5 124.6-39.9c68.9 11.5 119.4 71.1 119.4 141v5.8c0 16.9-2.8 33.5-8.3 49.1"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Seguro de salud</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight"> Un paquete completo para cubrir sus necesidades médicas y promover un enfoque integral de su bienestar físico y mental.</p>
                </div>
            </div>

            <GradientDividerUniversal className="from-blue-950 to-blue-950 mt-10"/>

            <div className="mx-auto mt-10 grid max-w-2xl lg:mx-0 lg:max-w-none grid-cols-3 lg:gap-x-10 xl:gap-x-14">

                <div className="flex flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" className="mt-1 text-blue-400">
                            <path fill="currentColor" d="M21 13.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V23h2.1l6.1-6.1zM12.5 7v5.2l4 2.4l-1 1L11 13V7zM11 21.9c-5.1-.5-9-4.8-9-9.9C2 6.5 6.5 2 12 2c5.3 0 9.6 4.1 10 9.3c-.3-.1-.6-.2-1-.2s-.7.1-1 .2C19.6 7.2 16.2 4 12 4c-4.4 0-8 3.6-8 8c0 4.1 3.1 7.5 7.1 7.9l-.1.2z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Flexibilidad horaria  </h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Adapte la jornada laboral a conveniencia suya, trabajando por objetivos y no por horas de dedicación.</p>
                </div>

                <div className="flex flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 432 400" className="mt-1 text-blue-400">
                            <path fill="currentColor" d="M213.5 171q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5M341 213q0 35-17 64.5T277 324l-21-37q43-25 43-74q0-35-25-60t-60.5-25t-60.5 25t-25 60q0 49 43 74l-22 37q-29-17-46.5-46.5T85 213q0-53 37.5-90.5T213 85t90.5 37.5T341 213M213.5 0q88.5 0 151 62.5T427 213q0 59-29 108t-78 77l-21-37q39-23 62-62t23-86q0-70-50-120T213.5 43T93 93T43 213q0 47 23 86t62 62l-22 37q-48-28-77-77T0 213q0-88 62.5-150.5T213.5 0"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Modalidad a distancia</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Libertad para tomar decisiones con las que equilibrar su trabajo y su vida personal.</p>
                </div>

                <div className="flex  flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48" className="mt-1 text-blue-400">
                        <defs>
                            <mask id="IconifyId18cd61b6129c839001">
                                <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4">
                                    <path strokeLinejoin="round" d="M22 14s-2.7 5.293-4 12c-1.3 6.707-1 16-1 16"/>
                                    <path fill="#555" strokeLinejoin="round" d="M33.953 23.272c.346.23.893.391 1.428.503c.932.194 1.792-.446 1.768-1.397c-.045-1.774-.737-4.675-4.258-7.014c-3.325-2.207-6.626-2.238-8.708-1.92c-1.187.18-1.66 1.478-.978 2.467c.608.883 1.316 1.774 1.795 1.945c1 .355 2.203-.582 3.08 0c.876.581.615 1.925 1.492 2.507c.876.582 2.013-.18 2.89.402c.875.582.615 1.925 1.491 2.507M20 17c.858-.286 1.389-1.226 1.686-1.979c.246-.622.026-1.308-.55-1.648c-1.295-.766-4.06-1.814-8.374-.561c-4.265 1.238-5.39 4.056-5.677 5.715a1.33 1.33 0 0 0 1.178 1.565c.56.063 1.176.035 1.544-.277c.807-.685 1.025-1.582 1.927-1.824c.901-.241 1.679.858 2.58.616c.902-.241 1.026-1.582 1.927-1.824c.902-.241 2.26.717 3.76.217M27 6c-2.5 1-5 6-5 8l13-6c-1.38-2.391-5.5-3-8-2"/>
                                    <path fill="#555" strokeLinejoin="round" d="M20 5c4 1.422 3.38 6.609 2 9L10 5.922C11 4 16 3.579 20 5"/>
                                    <path d="M26 35c8.284 0 13 1.79 13 4s-6.716 4-15 4c-8.284 0-15-1.79-15-4c0-.54.4-1.053 1.125-1.523"/>
                                </g>
                            </mask>
                        </defs>
                        <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId18cd61b6129c839001)"/>
                    </svg>
                    <h3 className="font-semibold text-blue-400 lg:tracking-tighter xl:tracking-normal lg:text-[19px] xl:text-xl">Política ilimitada de vacaciones</h3></div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Le recomendamos como mínimo un mes de vacaciones, pero confiamos en la gestión de su autonomía para descansar y disfrutar de su vida.</p>
                </div>
            </div>
            <GradientDividerUniversal className="from-blue-950 to-blue-950 mt-10"/>

            <div className="mx-auto mt-10 grid max-w-2xl lg:mx-0 lg:max-w-none grid-cols-3 lg:gap-x-10 xl:gap-x-14">

                <div className="flex  flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 16 16" className='mt-1 text-blue-400'>
                            <path fill="currentColor" d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Desarrollo profesional</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Oportunidades para adquirir nuevas habilidades, asumir nuevos desafíos, avanzar en la asunción de responsabilidades, gestionar la eficiencia y el rendimiento del equipo.</p>
                </div>

                <div className="flex  flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 512 512" className='mt-1 text-blue-400'>
                            <path fill="currentColor" d="M169 57v430h78V57zM25 105v190h46V105zm158 23h18v320h-18zm128.725 7.69l-45.276 8.124l61.825 344.497l45.276-8.124zM89 153v270h62V153zm281.502 28.68l-27.594 11.773l5.494 12.877l27.594-11.773zm12.56 29.433l-27.597 11.772l5.494 12.877l27.593-11.772l-5.492-12.877zm12.555 29.434l-27.594 11.77l99.674 233.628l27.594-11.773zM25 313v30h46v-30zm190 7h18v128h-18zM25 361v126h46V361zm64 80v46h62v-46z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Formación continua</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Le apoyamos y guiamos en cada paso que dé en el viaje sin fin que es mantenerse actualizado en las últimas tendencias y tecnologías que le permitirán alcanzar sus metas profesionales.</p>
                </div>

                <div className="flex  flex-col gap-x-4 xxs:py-6 lg:py-1 xl:p-1">
                    <div className="flex gap-x-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24" className='mt-1 text-blue-400'>
                            <path fill="currentColor" d="m15.4 17l1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2l.6 2h-1l-.75-1zM5.75 7L5 6H4l.6 2l-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z"/>
                        </svg>
                        <h3 className="font-semibold lg:tracking-tighter xl:tracking-tight 2xl:tracking-normal text-blue-400 text-[19px]">Participación en eventos externos</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Construiremos el <i>networking</i> necesario del que aprender y enriquecer nuestra red profesional de colaboradores asistiendo a jornadas, conferencias, congresos, etc.</p>
                </div>
            </div>           
            <GradientDividerUniversal className="from-blue-950 to-blue-950 mt-10"/>

            <div className="mx-auto mt-10 grid max-w-2xl lg:mx-0 lg:max-w-none grid-cols-3 lg:gap-x-10 xl:gap-x-14">
                <div className="flex  flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 16 16" className="mt-1 text-blue-400">
                            <path fill="currentColor" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v5.5A2.25 2.25 0 0 0 4.25 12h6.5A2.25 2.25 0 0 0 13 9.75v-5.5A2.25 2.25 0 0 0 10.75 2zM6 8.996V5.004a.5.5 0 0 1 .778-.416l2.997 1.996a.5.5 0 0 1 0 .833L6.777 9.413A.5.5 0 0 1 6 8.996M6 14a2.496 2.496 0 0 1-2-1h7.25A2.75 2.75 0 0 0 14 10.25V4c.607.456 1 1.182 1 2v4.25A3.75 3.75 0 0 1 11.25 14z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Entretenimiento digital</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Le proporcionamos acceso a plataformas de entretenimiento digital de primer nivel para disfrutar de momentos de relajación con los que desconectar y recargar energías.</p>
                </div>

                <div className="flex  flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" className='mt-1 text-blue-400'>
                            <path fill="currentColor" d="M4 7v12h15v2H4c-2 0-2-2-2-2V7zm17.3-4H7.7C6.76 3 6 3.7 6 4.55v10.9c0 .86.76 1.55 1.7 1.55h13.6c.94 0 1.7-.69 1.7-1.55V4.55C23 3.7 22.24 3 21.3 3M8 5h5v6H8zm13 10H8v-2h13zm0-4h-6V9h6zm0-4h-6V5h6z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Prensa a la carta</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Respetando la diversidad de intereses, le ofrecemos suscripciones para que personalice su experiencia de lectura y se mantenga informado según sus preferencias y curiosidades.</p>
                </div>
                <div className="flex  flex-col gap-x-4 xxs:py-6 lg:p-1">
                    <div className="flex gap-x-2 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" className='mt-1 text-blue-400'>
                            <path fill="currentColor" d="M3 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v.67l-2.5-1.11l-6.5 2.88V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h8c.06 2.25 1 4.4 2.46 6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M8 5h1V3H8zm0 8h1v-2H8zm0 8h1v-2H8zM4 3v2h2V3zm0 8v2h2v-2zm0 8v2h2v-2zm13.5-7l4.5 2v3c0 2.78-1.92 5.37-4.5 6c-2.58-.63-4.5-3.22-4.5-6v-3zm0 1.94L15 15.06v2.66c0 1.54 1.07 2.98 2.5 3.34z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl">Tecnología de vanguardia</h3></div>
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Impulsamos su productividad proporcionándole acceso a equipos de vanguardia y herramientas digitales avanzadas para garantizar una experiencia laboral eficiente y actualizada.</p>
                    </div>
                </div>
                <BackgroundBeams className="xxs:hidden lg:block"/>
            </div>
            </FadeIn>
    )
}

    function Mobil(){
        return(
            <FadeIn>
            <div className='relative mt-0 z-10 xxs:block xs:mt-10 sm:mt-0 lg:hidden px-5'>

                <div className="mx-auto md:mt-10 xxs:flex xxs:flex-col xxs:gap-5 max-w-7xl">
                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left"> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mt-1 text-blue-400 xxs:w-5 xxs:h-5 sm:w-6 sm:h-6">
                                    <path fill="currentColor" d="M12 10c3.976 0 8-1.374 8-4s-4.024-4-8-4s-8 1.374-8 4s4.024 4 8 4"/>
                                    <path fill="currentColor" d="M4 10c0 2.626 4.024 4 8 4s8-1.374 8-4V8c0 2.626-4.024 4-8 4s-8-1.374-8-4z"/>
                                    <path fill="currentColor" d="M4 14c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4z"/>
                                    <path fill="currentColor" d="M4 18c0 2.626 4.024 4 8 4s8-1.374 8-4v-2c0 2.626-4.024 4-8 4s-8-1.374-8-4z"/>
                                </svg>   
                            <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl">Salario competitivo</h3></div>  
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Reconocemos el valor y el tiempo de dedicación con el que contribuye al éxito de la empresa.</p>
                    </div>

                    <GradientDividerUniversal className="from-blue-950 to-blue-950 "/>

                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mt-1 text-blue-400  xxs:w-5 xxs:h-5 sm:w-6 sm:h-6 sm:mt-[6px]">
                                <path fill="currentColor" d="M8 13.65V7q0-.425.288-.712T9 6h1q.425 0 .713.288T11 7v6.65l-.125-.125q-.575-.55-1.375-.55t-1.375.55zm5 1.5V3q0-.425.288-.712T14 2h1q.425 0 .713.288T16 3v9.15zM3 18.6V11q0-.425.288-.712T4 10h1q.425 0 .713.288T6 11v4.6zm2.4 2.45q-.65 0-.913-.612T4.7 19.35l4.1-4.1q.275-.275.663-.3t.687.25L13 17.65l5.6-5.6H18q-.425 0-.712-.288T17 11.05q0-.425.288-.712T18 10.05h3q.425 0 .713.288t.287.712v3q0 .425-.288.713T21 15.05q-.425 0-.712-.288T20 14.05v-.6l-6.25 6.25q-.275.275-.663.3t-.687-.25L9.55 17.3L6.1 20.75q-.125.125-.312.213t-.388.087"/>
                            </svg>
                            <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Incentivos significativos</h3></div>
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tighter">Recompensamos y valoramos positivamente el esfuerzo extraordinario y el rendimiento individual destacado.</p>
                    </div>
                
                </div>

                <GradientDividerUniversal className="from-blue-950 to-blue-950 mt-5 sm:mt-10"/>

                <div className="mx-auto xxs:mt-5 sm:mt-0 md:mt-10 xxs:flex xxs:flex-col xxs:gap-5 max-w-7xl">
                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='mt-1 text-blue-400 xxs:w-5 xxs:h-5 sm:w-6 sm:h-6 sm:mt-1'>
                                <path fill="currentColor" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2l49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3l42.4-84.9l1.7 3.4c9.5 19 28.9 31 50.1 31h104.5c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9M503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8l-51-113.9c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1c-5.7-16-8.7-33-8.7-50.3v-5.8c0-69.9 50.5-129.5 119.4-141c45.6-7.6 92 7.3 124.6 39.9l12 12l12-12c32.6-32.6 79-47.5 124.6-39.9c68.9 11.5 119.4 71.1 119.4 141v5.8c0 16.9-2.8 33.5-8.3 49.1"/>
                            </svg>
                            <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Seguro de salud</h3>
                        </div>
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight"> Un paquete completo para cubrir sus necesidades médicas y promover un enfoque integral de su bienestar físico y mental.</p>
                    </div>

                    <GradientDividerUniversal className="from-blue-950 to-blue-950"/>

                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mt-1 text-blue-400  xxs:w-5 xxs:h-5 sm:w-6 sm:h-6">
                                <path fill="currentColor" d="M21 13.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V23h2.1l6.1-6.1zM12.5 7v5.2l4 2.4l-1 1L11 13V7zM11 21.9c-5.1-.5-9-4.8-9-9.9C2 6.5 6.5 2 12 2c5.3 0 9.6 4.1 10 9.3c-.3-.1-.6-.2-1-.2s-.7.1-1 .2C19.6 7.2 16.2 4 12 4c-4.4 0-8 3.6-8 8c0 4.1 3.1 7.5 7.1 7.9l-.1.2z"/>
                            </svg>
                            <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Flexibilidad horaria  </h3>
                        </div>
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Adapte la jornada laboral a conveniencia suya, trabajando por objetivos y no por horas de dedicación.</p>
                    </div>
                </div>

                <GradientDividerUniversal className="from-blue-950 to-blue-950 mt-5"/>

                <div className="mx-auto xxs:mt-5 sm:mt-0 md:mt-10 xxs:flex xxs:flex-col xxs:gap-5 max-w-7xl">
                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 400" className="mt-1 text-blue-400  xxs:w-5 xxs:h-5 sm:w-6 sm:h-6">
                                <path fill="currentColor" d="M213.5 171q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5M341 213q0 35-17 64.5T277 324l-21-37q43-25 43-74q0-35-25-60t-60.5-25t-60.5 25t-25 60q0 49 43 74l-22 37q-29-17-46.5-46.5T85 213q0-53 37.5-90.5T213 85t90.5 37.5T341 213M213.5 0q88.5 0 151 62.5T427 213q0 59-29 108t-78 77l-21-37q39-23 62-62t23-86q0-70-50-120T213.5 43T93 93T43 213q0 47 23 86t62 62l-22 37q-48-28-77-77T0 213q0-88 62.5-150.5T213.5 0"/>
                            </svg>
                            <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Modalidad a distancia</h3>
                        </div>
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Libertad para tomar decisiones con las que equilibrar su trabajo y su vida personal.</p>
                    </div>

                    <GradientDividerUniversal className="from-blue-950 to-blue-950"/>

                <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                    <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='mt-1 text-blue-400  xxs:w-5 xxs:h-5 sm:w-6 sm:h-6 sm:mt-[4px]'>
                            <defs>  
                                <mask id="IconifyId18d0e06f978e738e41">
                                    <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4">
                                        <path strokeLinejoin="round" d="M22 14s-2.7 5.293-4 12c-1.3 6.707-1 16-1 16"/>
                                        <path fill="#555" strokeLinejoin="round" d="M33.953 23.272c.346.23.893.391 1.428.503c.932.194 1.792-.446 1.768-1.397c-.045-1.774-.737-4.675-4.258-7.014c-3.325-2.207-6.626-2.238-8.708-1.92c-1.187.18-1.66 1.478-.978 2.467c.608.883 1.316 1.774 1.795 1.945c1 .355 2.203-.582 3.08 0c.876.581.615 1.925 1.492 2.507c.876.582 2.013-.18 2.89.402c.875.582.615 1.925 1.491 2.507M20 17c.858-.286 1.389-1.226 1.686-1.979c.246-.622.026-1.308-.55-1.648c-1.295-.766-4.06-1.814-8.374-.561c-4.265 1.238-5.39 4.056-5.677 5.715a1.33 1.33 0 0 0 1.178 1.565c.56.063 1.176.035 1.544-.277c.807-.685 1.025-1.582 1.927-1.824c.901-.241 1.679.858 2.58.616c.902-.241 1.026-1.582 1.927-1.824c.902-.241 2.26.717 3.76.217M27 6c-2.5 1-5 6-5 8l13-6c-1.38-2.391-5.5-3-8-2"/>
                                        <path fill="#555" strokeLinejoin="round" d="M20 5c4 1.422 3.38 6.609 2 9L10 5.922C11 4 16 3.579 20 5"/>
                                        <path d="M26 35c8.284 0 13 1.79 13 4s-6.716 4-15 4c-8.284 0-15-1.79-15-4c0-.54.4-1.053 1.125-1.523"/>
                                    </g>
                                </mask>
                            </defs>
                            <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId18d0e06f978e738e41)"/>
                        </svg>
                    <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl">Política ilimitada de vacaciones</h3></div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Le recomendamos como mínimo un mes de vacaciones, pero confiamos en la gestión de su autonomía para descansar y disfrutar de su vida.</p>
                </div>
                </div>

                <GradientDividerUniversal className="from-blue-950 to-blue-950 mt-5"/>

                <div className="mx-auto xxs:mt-5 sm:mt-0 md:mt-10 xxs:flex xxs:flex-col xxs:gap-5 max-w-7xl">
                <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                    <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='mt-1 text-blue-400  xxs:w-5 xxs:h-5 sm:w-6 sm:h-6'>
                            <path fill="currentColor" d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Desarrollo profesional</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Oportunidades para adquirir nuevas habilidades, asumir nuevos desafíos, avanzar en la asunción de responsabilidades, gestionar la eficiencia y el rendimiento del equipo.</p>
                </div>

                <GradientDividerUniversal className="from-blue-950 to-blue-950"/>

                <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                    <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='mt-1 text-blue-400  xxs:w-5 xxs:h-5 sm:w-6 sm:h-6'>
                            <path fill="currentColor" d="M169 57v430h78V57zM25 105v190h46V105zm158 23h18v320h-18zm128.725 7.69l-45.276 8.124l61.825 344.497l45.276-8.124zM89 153v270h62V153zm281.502 28.68l-27.594 11.773l5.494 12.877l27.594-11.773zm12.56 29.433l-27.597 11.772l5.494 12.877l27.593-11.772l-5.492-12.877zm12.555 29.434l-27.594 11.77l99.674 233.628l27.594-11.773zM25 313v30h46v-30zm190 7h18v128h-18zM25 361v126h46V361zm64 80v46h62v-46z"/>
                        </svg>
                        <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Formación continua</h3>
                    </div>
                    <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Le apoyamos y guiamos en cada paso que dé en el viaje sin fin que es mantenerse actualizado en las últimas tendencias y tecnologías que le permitirán alcanzar sus metas profesionales.</p>
                </div>
                </div>

                <GradientDividerUniversal className="from-blue-950 to-blue-950 mt-5"/>

                <div className="mx-auto xxs:mt-5 sm:mt-0 md:mt-10 xxs:flex xxs:flex-col xxs:gap-5 max-w-7xl">
                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=' text-blue-400 xxs:w-7 xxs:h-7 sm:w-8 sm:h-8 -mt-1'>
                                <path fill="currentColor" d="m15.4 17l1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2l.6 2h-1l-.75-1zM5.75 7L5 6H4l.6 2l-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z"/>
                            </svg>
                            <h3 className="font-semibold text-blue-400 xxs:text-[18px] xs:text-xl sm:text-2xl">Participación en eventos externos</h3>
                        </div>
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Construiremos el <i>networking</i> necesario del que aprender y enriquecer nuestra red profesional de colaboradores asistiendo a jornadas, conferencias, congresos, etc.</p>
                    </div>

                    <GradientDividerUniversal className="from-blue-950 to-blue-950"/>

                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='mt-1 text-blue-400 xxs:w-5 xxs:h-5 sm:w-6 sm:h-6'>
                                <path fill="currentColor" d="M3 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v.67l-2.5-1.11l-6.5 2.88V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h8c.06 2.25 1 4.4 2.46 6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M8 5h1V3H8zm0 8h1v-2H8zm0 8h1v-2H8zM4 3v2h2V3zm0 8v2h2v-2zm0 8v2h2v-2zm13.5-7l4.5 2v3c0 2.78-1.92 5.37-4.5 6c-2.58-.63-4.5-3.22-4.5-6v-3zm0 1.94L15 15.06v2.66c0 1.54 1.07 2.98 2.5 3.34z"/>
                            </svg>
                            <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Tecnología de vanguardia</h3></div>
                            <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Impulsamos su productividad proporcionándole acceso a equipos de vanguardia y herramientas digitales avanzadas para garantizar una experiencia laboral eficiente y actualizada.</p>
                        </div>
                    
                </div>

                <GradientDividerUniversal className="from-blue-950 to-blue-950 mt-5"/>
                
                <div className="mx-auto xxs:mt-5 sm:mt-0 md:mt-10 xxs:flex xxs:flex-col xxs:gap-5  max-w-7xl">
                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='mt-1 text-blue-400 xxs:w-5 xxs:h-5 sm:w-6 sm:h-6'>
                                <path fill="currentColor" d="M4 7v12h15v2H4c-2 0-2-2-2-2V7zm17.3-4H7.7C6.76 3 6 3.7 6 4.55v10.9c0 .86.76 1.55 1.7 1.55h13.6c.94 0 1.7-.69 1.7-1.55V4.55C23 3.7 22.24 3 21.3 3M8 5h5v6H8zm13 10H8v-2h13zm0-4h-6V9h6zm0-4h-6V5h6z"/>
                            </svg>
                            <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Prensa a la carta</h3>
                        </div>
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Respetando la diversidad de intereses, le ofrecemos suscripciones para que personalice su experiencia de lectura y se mantenga informado según sus preferencias y curiosidades.</p>
                    </div>

                    <GradientDividerUniversal className="from-blue-950 to-blue-950 "/>

                    <div className="flex justify-center gap-x-2 flex-col xxs:py-3 sm:py-6">
                        <div className="flex gap-x-2 justify-center xxs:text-center sm:text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="mt-1 text-blue-400 xxs:w-5 xxs:h-5 sm:w-6 sm:h-6">
                                <path fill="currentColor" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v5.5A2.25 2.25 0 0 0 4.25 12h6.5A2.25 2.25 0 0 0 13 9.75v-5.5A2.25 2.25 0 0 0 10.75 2zM6 8.996V5.004a.5.5 0 0 1 .778-.416l2.997 1.996a.5.5 0 0 1 0 .833L6.777 9.413A.5.5 0 0 1 6 8.996M6 14a2.496 2.496 0 0 1-2-1h7.25A2.75 2.75 0 0 0 14 10.25V4c.607.456 1 1.182 1 2v4.25A3.75 3.75 0 0 1 11.25 14z"/>
                            </svg>
                            <h3 className="font-semibold text-blue-400 text-xl sm:text-2xl ">Entretenimiento digital</h3>
                        </div>
                        <p className="mt-3 text-blue-950 dark:text-white texto2 tracking-tight">Le proporcionamos acceso a plataformas de entretenimiento digital de primer nivel para disfrutar de momentos de relajación con los que desconectar y recargar energías.</p>
                    </div>
                </div>

            </div></FadeIn>
        )
    }

function TrabajaNosotros2() {
  return (
    <FadeIn>
        <div className='mx-auto sm:max-w-3xl lg:max-w-[950px] xl:max-w-6xl 2xl:max-w-7xl xxs:py-10 xs:py-16 lg:px-3 xl:px-8 sm:py-16 lg:py-20 '>
            <div className='mx-auto xxs:max-w-lg sm:max-w-2xl md:max-w-6xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-5xl xxs:px-5 lg:px-8'>
                <div className="max-w-7xl mx-auto relative z-10 w-full xxs:mb-10 xs:mb-0 sm:mb-16 md:mb-16">
                    <h1 className="py-3 text-4xl xs:text-[40px] sm:text-6xl tracking-tight text-center md:text-7xl bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                        Ventajas y beneficios
                    </h1>
                </div>
            </div>
            <Ordenador />
            <Mobil/>
        </div>
    </FadeIn>
  )
}

export default TrabajaNosotros2