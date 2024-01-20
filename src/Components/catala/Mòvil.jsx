'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import { AppScreen } from '../AppScreen'
import { CircleBackground } from '../CircleBackground'
import { PhoneFrame } from '../PhoneFrame'
import Image from 'next/image'
import Logo from '../../Images/LogoVecColor.svg'
import LogoTelegram from '../../Images/LogoTelegram.svg'
import LogoInstagram from '../../Images/whatsappIcon.svg'
import QRW from '../../Images/QRWhatsapp.jpg'
import QRT from '../../Images/QRTelegram.jpg'
import Link from 'next/link'
import { FadeIn } from '../FadeIn'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'WhatsAppp',
    icon: WhatsAppIcon,
    screen: ContactoWhatsApp,
  },
  {
    name: 'Telegram',
    icon: TelegramIcon,
    screen: ContactoTelegram,
  },
]

function WhatsAppIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}>
      <path fill="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"/>
    </svg>
  )
}

function TelegramIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48" className='-pl-2' {...props}>
      <path fill="#2AA1DA" d="M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15"/>
    </svg>
  )
}


const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

function ContactoWhatsApp(props) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Contacteu per <span className='text-[#25D366]'>WhatsApp</span></AppScreen.Title>
        <AppScreen.Subtitle>
           <span className="text-white"></span> 
        
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-6">
          <div className='absolute right-[39%] p-2 xxs:-top-6 md:-top-7 rounded-full bg-white'>
            <Image src={LogoInstagram} className='w-10'/>
          </div>

          <div className='flex flex-col max-w-xl mx-auto'>
            <Image 
            src={Logo}
              className='w-75 pt-3'
            />
          </div>

          <div className="space-y-6 text-center text-gray-700 font-extrabold text-lg pt-4 pb-2">
            <p>Inicieu una conversa i us respondrem el més ràpid possible.</p>
          </div>

          <div className='flex flex-col items-center max-w-xl mx-auto pt-1'>
            <Image
            className='w-20'
            src={QRW}/>
          </div> 
          <Link href='https://wa.me/34623954897' className='text-xl text-white font-lorin'>
            <div className="mt-5 rounded-[40px] hover:-translate-y-0.5 transform transition ease-out hover:shadow-md shadow-md hover:shadow-gray-500 shadow-gray-400  bg-[#25D366] py-2 text-center "> 
            Obrir chat
           </div>
          </Link>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function ContactoTelegram(props) {
  return (
    <AppScreen className="w-full">
    <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
      <AppScreen.Title>Contacteu per <span className='text-[#2AA1DA]'>Telegram</span></AppScreen.Title>
      <AppScreen.Subtitle>
         <span className="text-white"></span>       
      </AppScreen.Subtitle>
    </MotionAppScreenHeader>
    <MotionAppScreenBody
      {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
    >
      <div className="px-4 py-6">
        <div className='absolute right-[39%] p-2 rounded-full bg-white xxs:-top-6 md:-top-7'>
          <Image src={LogoTelegram} className='w-10'/>
        </div>

        <div className='flex flex-col max-w-xl mx-auto mr-1'>
          <Image 
          src={Logo}
            className='w-75 pt-3'
          />
        </div>

        <div className="space-y-6 text-center text-gray-700 font-extrabold text-lg pt-4 pb-2">
          <p>Inicieu una conversa i us respondrem el més ràpid possible.</p>
        </div>

        <div className='flex flex-col items-center max-w-xl mx-auto pt-1'>
          <Image
          className='w-20'
          src={QRT}/>
        </div> 
        <Link href='https://t.me/mart_comp' className='text-xl text-white font-lorin'>
          <div className="mt-5 rounded-[40px] hover:-translate-y-0.5 transform transition ease-out hover:shadow-lg hover:shadow-gray-500 shadow-md shadow-gray-400  bg-gradient-to-tr from-[#6493A7] to-[#7182B1] py-2 text-center ">
          Obrir chat
          </div>
        </Link>
      </div>
    </MotionAppScreenBody>
  </AppScreen>
  )
}


function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <FadeIn>
    <Tab.Group
      as="div"
      className="grid grid-col-1 max-w-full mx-auto items-center gap-5 xl:py-10"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative flex flex-row z-10 justify-center xxs:order-last md:order-first ">
        <div className='flex flex-row shadow-md shadow-slate-200 dark:shadow-black bg-slate-300 dark:bg-gray-700/40  rounded-full'>
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-full transition-colors hover:bg-gray-200/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-slate-950 dark:bg-white "
                initial={{ borderRadius: 200 }}
              />
            )}
            <Tab className="ui-not-focus-visible:outline-none items-center justify-center">
              <div className="relative z-10 px-2 py-1 items-center justify-center">
                <feature.icon className="h-8 w-8 mt-1 text-white" />
              </div>
            </Tab>
          </div>
          
        ))}
        </div>
      </Tab.List>
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip ">
          <CircleBackground color="#80caff" className="animate-spin-slower z-0" />
        </div>
        <PhoneFrame className="z-10 mx-auto max-w-[366px]  w-72">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null,
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group></FadeIn>
  )
}
