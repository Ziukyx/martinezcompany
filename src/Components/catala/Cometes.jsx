import Image from 'next/image'
import Foto from '../../Images/foto.svg'
import { FadeIn } from '../FadeIn';
import { TypeWriterEffect } from '../TypeWriterEffect';



export default function Cometes() {

  const words = [
    {
      text: "El",
      className:"",
    },
    {
      text: "nostre",
      className:"",
    },
    {
      text: "secret",
      className:"",
    },
    {
      text: "és",
      className:"",
    },
    {
      text: "passar",
      className:"",
    },
    {
      text: "de",
      className:"",
    },
    {
      text: "la",
      className:"whitespace-break-spaces",
    },
    {
      text: "intuïció",
      className:"",
    },
    {
      text: "al",
      className:"",
    },
    {
      text: "rigor",
      className:"",
    },
    {
      text: "i",
      className:"",
    },
    {
      text: "del",
      className:"",
    },
  {
    text: "rigor",
    className:"",
  },
  {
    text: "a",
    className:"",
  },
  {
    text: "la",
    className:"",
  },
  {
    text: "intuïció",
    className:"",
  }
  ];

    return (
      <FadeIn>
      <div className="bg-white dark:bg-slate-950 xxs:-mb-5 xs:mb-0">
        <div className="bg-white dark:bg-slate-950 xs:py-5 pb-20 sm:pb-24 xl:pb-0 py-10 h-96">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="w-full xxs:max-w-xs xs:max-w-md sm:max-w-[600px] md:max-w-4xl lg:max-w-4xl xl:max-w-none xl:flex-auto xl:px-10 xl:py-24">
              <figure className="relative isolate xs:pt-6 sm:pt-12 sm:mt-16 md:mt-14 lg:mt-14 xl:mt-0">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute xxs:-left-5 xxs:top-0 xs:-left-5 xs:top-4 sm:left-1 sm:top-9 md:-left-3 md:top-7 lg:left-1 lg:top-3 xl:-left-7 xl:-top-5 2xl:-left-44 2xl:-top-5 -z-10 xxs:h-8 xs:h-9 sm:h-12 md:h-14 lg:h-20 xl:h-28 2xl:h-32 stroke-blue-950/50 dark:stroke-white/50 -scale-y-100"
                >
                  <path
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
                <blockquote className=" text-white text-center font-aeonik ">
                  <div className='xxs:max-w-[250px] xs:max-w-[340px] sm:max-w-[440px] md:max-w-[630px] lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto '>
                    <TypeWriterEffect words={words} />
                  </div>
                  
                </blockquote>
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute xxs:-right-3 xxs:bottom-3 xs:-right-5 xs:bottom-1 sm:bottom-0 sm:right-2 md:-right-3 md:-bottom-0 lg:-right-2 lg:bottom-3 xl:-right-7 xl:-bottom-1 2xl:-right-44 -bottom-0 -z-10 md:h-14 xxs:h-8 xs:h-9 sm:h-12 lg:h-20 xl:h-28 2xl:h-32 stroke-blue-950/50 dark:stroke-white/50 -scale-x-100 -scale-y-100"
                >
                  <path
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
              </figure>
            </div>
          </div>
          
        </div>
        <div className='max-w-xl mx-auto pr-5 pb-10 mb-5 xxs:-mt-56 xs:-mt-56 sm:-mt-24 md:-mt-32 lg:-mt-24 xl:-mt-10 2xl:mt-0 flex flex-row justify-center content-center items-center'>
              <Image
                className="xxs:h-20 xxs:w-20 xs:h-24 xs:w-24 rounded-full mt-5"
                src={Foto}
                alt=""
              />
               <figcaption className=" lg:col-start-1 lg:row-start-3">
            <div className="font-semibold dark:font-normal dark:text-white text-blue-950 tracking-wider xxs:text-base xs:text-lg md:text-xl">Pedro Martínez Dopico</div>
            <div className="mt-1 font-semibold dark:font-normal text-blue-950/80 dark:text-slate-400 xxs:text-xs xs:text-sm md:text-base tracking-wider">CEO de Martínez & Company <br/> Management & Intermediation</div>
          </figcaption>
              </div>
      </div>
      </FadeIn>
    )
  }