import React from 'react'
import { FadeIn } from '../FadeIn';
import { motion } from 'framer-motion'
import Image from "next/image";
import First from '../../Images/MapaConceptual1.webp'
import Second from '../../Images/MapaConceptual2.webp'
import Fourth from '../../Images/MapaConceptual3.webp'
import Third from '../../Images/MapaConceptual4.webp'
import GradientDividerUniversal from '../GradientDividerUniversal';
import { TextGenerateEffect1 } from '../TextGenerateEffect';


function Ordenador(){

    const PATH = "M0.5 0.980671L0.5 1566.02";
  
    return(
  
      <div className="xxs:hidden lg:block ">
  
        <div className=" lg:max-w-[870px] xl:max-w-5xl 2xl:max-w-6xl mx-auto flex flex-row items-start w-full mt-16 lg:mb-5 xl:-mb-8 2xl:mb-0">
  
          <div className="lg:w-[433px] xl:w-[510px] 2xl:w-[574px] lg:space-y-6 xl:space-y-10 text-center">
            <div className="before:content-['01'] before:text-blue-400 before:text-3xl before:font-semibold ">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Contextualització inicial i <br /> anàlisi prèvia.</h3>
            </div>
  
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 mt-10 lg:max-w-[300px] xl:max-w-sm 2xl:max-w-md mx-auto"/>
            <div className="before:content-['02'] before:text-blue-400 before:text-3xl before:font-semibold ">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Avaluació de la situació i <br /> detecció de l'oportunitat</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 mt-10 lg:max-w-[300px] xl:max-w-sm 2xl:max-w-md mx-auto "/>
            <div className="before:content-['03'] before:text-blue-400 before:text-3xl before:font-semibold col-start-1 ">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Assessorament <br />personalitzat</h3>
            </div>
            <div className="lg:w-[380px] lg:py-20 xl:w-[430px] 2xl:w-[480px] 2xl:py-20 max-w-2xl mx-auto">
              <Image src={Second} alt="imatge" className=''/>
            </div>
            <div className="before:content-['07'] before:text-blue-400 before:text-3xl before:font-semibold 2xl:pt-8">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Preparació de <br />documentació</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 lg:max-w-[300px] xl:max-w-sm 2xl:max-w-md mx-auto mt-10"/>
            <div className="before:content-['08'] before:text-blue-400 before:text-3xl before:font-semibold">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Presentació de <br/>candidatura</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 lg:max-w-[300px] xl:max-w-sm 2xl:max-w-md mx-auto mt-10"/>
            <div className="before:content-['09'] before:text-blue-400 before:text-3xl before:font-semibold">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl ">Consecució de subvenció i/o <br className=" 2xl:block"/>adjudicació del contracte</h3>
            </div>
            <div className="lg:w-[400px] lg:py-24 xl:w-[480px] 2xl:w-[500px] 2xl:py-28 max-w-2xl mx-auto">
              <Image alt="imatge" src={Third} className=''/>
            </div>
          </div>
          
  
          <div className="w-2 flex flex-col justify-center justify-items-center content-center items-center">
            <svg
                viewBox="0 0 1 1567"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[2px] dark:w-px flex-shrink-0 bg-gradient-to-b justify-self-center from-blue-950 to-blue-950 dark:from-blue-400 dark:to-violet-400 rounded-md lg:h-[1850px] xl:h-[2000px] 2xl:h-[2100px]"
            >
              <path d={PATH} stroke="url(#paint0_linear_207_38)" />
            </svg>
          </div>
  
          <div className="lg:w-[433px] xl:w-[510px] 2xl:w-[574px] text-center lg:space-y-6 xl:space-y-10">
            <div className="lg:w-[390px] xl:w-[450px] 2xl:w-[475px] lg:py-20 2xl:py-16 max-w-3xl mx-auto ">
              <Image alt="imatge" src={First} className=''/>
            </div>
            <div className="before:content-['04'] before:text-blue-400 before:text-3xl before:font-semibold 2xl:pt-12">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Estructuració de <br/> la planificació</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 lg:max-w-[300px] xl:max-w-sm 2xl:max-w-md mx-auto mt-10"/>
            <div className="before:content-['05'] before:text-blue-400 before:text-3xl before:font-semibold">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Distribució de<br className='2xl:block'/>funcions</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 lg:max-w-[300px] xl:max-w-sm 2xl:max-w-md mx-auto mt-10"/>
            <div className="before:content-['06'] before:text-blue-400 before:text-3xl before:font-semibold">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Comunicació<br className='2xl:block'/>constant</h3>
            </div>
            <div className="lg:w-[400px] lg:py-24 xl:w-[450px] xl:py-20 2xl:w-[475px] 2xl:py-24 max-w-2xl mx-auto">
              <Image alt="imatge" src={Fourth} className=''/>
            </div>
            <div className="before:content-['10'] before:text-blue-400 before:text-3xl before:font-semibold 2xl:pt-0">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl ">Execució del programa i/o<br className='xl:block '/> gestió del projecte</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 lg:max-w-[300px] xl:max-w-sm 2xl:max-w-md mx-auto mt-10"/>
            <div className="before:content-['11'] before:text-blue-400 before:text-3xl before:font-semibold ">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Difusió dels<br className='2xl:block'/>resultats obtinguts</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 lg:max-w-[300px] xl:max-w-sm 2xl:max-w-md mx-auto mt-10"/>
            <div className="before:content-['12'] before:text-blue-400 before:text-3xl before:font-semibold">
              <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Avaluació de<br className='2xl:block'/>l’impacte</h3>
            </div>  
          </div>
        </div>
  
        <div className="text-center before:content-['13'] before:text-blue-400 before:text-3xl before:font-semibold max-w-2xl mx-auto ">
          <h3 className="text-blue-950 dark:text-white lg:text-2xl xl:text-2xl">Assoliment d’objectius</h3>
        </div>
  
      </div>
  
    )
  }
  
  function Mobil(){
  
    const PATH = "M0.5 0.980671L0.5 1566.02";
    
    return(
      <div className="xxs:block lg:hidden">
        <div className="xxs:max-w-lg xs:max-w-xl xxs:space-y-5 sm:space-y-8 sm:max-w-2xl md:space-y-10 md:max-w-5xl xxs:px-5 mx-auto flex flex-row items-start w-full">
          
          <div className="w-2 flex flex-col items-center xxs:mt-7 xs:mt-14 sm:mt-16 md:mt-10">
            <svg
              viewBox="0 0 1 1567"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[2px] dark:w-px flex-shrink-0 bg-gradient-to-b justify-self-center from-blue-950 to-blue-950 dark:from-blue-400 dark:to-violet-400 rounded-md xxs:h-[2130px] xs:h-[2350px] sm:h-[3050px] md:h-[3200px]"
            >
              <path d={PATH} stroke="url(#paint0_linear_207_38)" />
            </svg>
          </div>
  
          <div className="text-center items-center justify-center content-center place-items-center max-w-max mx-auto ">
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">01</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px]">Contextualització inicial <br /> i anàlisi prèvia.</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">02</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px]">Avaluació de la situació i<br className='xxs:block'/> detecció de l'oportunitat</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">03</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Assessorament <br />personalitzat</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="xxs:w-[270px] xxs:py-7 xs:w-[280px] xs:py-10 sm:w-[330px] sm:py-10 md:w-[380px] md:py-5 max-w-xl mx-auto">
              <Image alt="imatge" src={First} className=''/>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl md:max-w-xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">04</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Estructuració de <br/> la planificació</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">05</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Distribució de<br/>funcions</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">06</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Comunicació<br/>constant</h3>
            </div>
            <GradientDividerUniversal className="from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="pl-2 xxs:w-[270px] xxs:pt-6 xxs:py-7 xs:w-[300px] xs:py-10 xs:pt-8 sm:w-[350px] sm:py-10 sm:pt-7 md:w-[380px] md:py-5 md:pt-3 max-w-xl mx-auto">
              <Image src={Second} alt="image" className=''/>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl md:max-w-xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">07</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Preparació de <br/>documentació</h3>
            </div>
            <GradientDividerUniversal className="from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">08</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Presentació de <br/>candidatura</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">09</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px]  ">Consecució de subvenció <br/>i/o adjudicació del contracte</h3>
            </div>
            <GradientDividerUniversal className="from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="xxs:w-[260px] xxs:py-7 xs:w-[280px] xs:py-10 sm:w-[330px] sm:py-10 md:w-[380px] md:py-5 max-w-xl mx-auto">
              <Image alt="imatge" src={Fourth} className=''/>
            </div>
            <GradientDividerUniversal className="from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800  xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl md:max-w-xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">10</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px]  ">Execució del programa <br />i/o gestió del projecte</h3>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">11</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Difusió dels<br />resultats obtinguts</h3>
            </div>
            <GradientDividerUniversal className="from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-3 sm:space-x-7 xxs:mt-5 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">12</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Avaluació <br/>de l’impacte</h3>
            </div>  
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800 xxs:mt-5 xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl sm:mt-10 md:max-w-2xl mx-auto"/>
            <div className="xxs:w-[280px] xxs:py-5  xs:w-[300px] xs:py-8 sm:w-[330px] sm:py-10 md:w-[380px] md:py-5 max-w-xl mx-auto">
              <Image alt="imatge" src={Third} className=''/>
            </div>
            <GradientDividerUniversal className="h-px lg:h-[2px] dark:h-px from-blue-400 to-blue-400 dark:from-slate-800 dark:to-slate-800  xxs:max-w-[300px] xs:max-w-[350px] sm:max-w-xl md:max-w-xl mx-auto"/>
            <div className="flex flex-row items-center justify-center xs:space-x-5 sm:space-x-7 xxs:mt-5 xs:mt-7 sm:mt-10">
              <h3 className="text-blue-500 xxs:text-3xl xxs:ml-5 xs:ml-5 xs:text-[40px] sm:text-5xl sm:ml-0 font-semibold mb-2 w-[5px]">13</h3>
              <h3 className="text-blue-950 dark:text-white xxs:text-base xs:text-xl sm:text-2xl md:text-3xl font-bold xxs:w-[280px] xs:w-[330px] sm:w-[400px] md:w-[466px] ">Assoliment d’objectius</h3>
            </div> 
          </div>
  
        </div>
      </div>
    )
  }
  
  
  export const FullRuta = () => {
    
  return (
    <FadeIn>
    <section id="mapaconceptual" className="bg-white dark:bg-slate-950 xxs:py-7 xs:py-10 sm:py-16">
      <div>
        <div className="xxs:pb-5 xs:pb-0 md:pb-5 lg:pb-10 mx-auto xxs:px-5 lg:px-8 xxs:max-w-lg sm:max-w-2xl md:max-w-5xl lg:max-w-4xl xl:max-w-5xl ">
          <h1 className="xxs:font-semibold lg:font-normal max-w-5xl tracking-tight py-5 mx-auto text-center xxs:text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] xxs:mb-3 lg:mb-5 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] bg-[length:200%_auto] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] animate-gradient">Mapa conceptual</h1>
          <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '0px 0px -200px' }}
                      className='xxs:mt-5 md:mt-8 lg:mt-12 texto text-justify text-blue-950 dark:text-white'
                    >
                  <TextGenerateEffect1 words="Aquest full de ruta detalla, punt per punt, l'itinerari que us convidem a recórrer no només perquè sigueu testimonis de com passem de les paraules als fets, sinó per oferir-vos l'oportunitat de comprovar com, amb cada pas que fem, al nostre relat conflueixen la nostra missió i els nostres valors." />
                </motion.div>
        </div>
        <Ordenador />
        <Mobil />
      </div>
    </section>
    </FadeIn>
  ); };
  