import { Dialog, Transition } from '@headlessui/react' 
import { Fragment } from 'react' 
import GradientDividerColors from './GradientDividerColors';

const Modal = ({showModal, setShowModal, modalTitle, modalContent, modalContent2, modalContent3, modalIcon })  => { 
 
  const closeModal = () => { 
    setShowModal(false); 
  }; 
 
  return ( 
    <> 
      {showModal ? ( 
        <Transition appear show={showModal} as={Fragment}> 
        <Dialog as="div" className="relative z-50" onClose={closeModal}> 
          <Transition.Child 
            as={Fragment} 
            enter="ease-out duration-300" 
            enterFrom="transform scale-95 opacity-0" 
            enterTo="transform scale-100 opacity-100" 
            leave="transition duration-75 ease-out" 
            leaveFrom="transform scale-100 opacity-100" 
            leaveTo="transform scale-95 opacity-0" 
          > 
            <div className="fixed inset-0 bg-white/90 dark:bg-slate-950/90" /> 
          </Transition.Child> 
 
          <div className="fixed inset-0 overflow-y-auto "> 
            <div className="flex min-h-full items-center  justify-center p-4 text-center"> 
               
              <Transition.Child 
                as={Fragment} 
                enter="ease-out duration-300" 
                enterFrom="opacity-0 scale-95" 
                enterTo="opacity-100 scale-100" 
                leave="ease-in duration-300" 
                leaveFrom="opacity-100 scale-100" 
                leaveTo="opacity-0 scale-95" 
              > 
                 
                <Dialog.Panel className="w-full py-12 xxs:px-5 xs:px-10 md:px-14 lg:px-20 max-w-6xl transform overflow-hidden rounded-2xl from-slate-300 to-slate-100 dark:from-slate-950 dark:to-blue-950 bg-gradient-to-t p-6 text-left align-middle shadow-xl transition-all"> 
                <div className="absolute top-5 right-5"> 
                    <button 
                      type="button" 
                      className="inline-flex justify-center rounded-full font-medium text-blue-950 hover:text-blue-200 dark:text-white dark:hover:text-gray-600 focus:outline-none " 
                      onClick={() => closeModal()} 
                    > 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"> 
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> 
                        </svg> 
 
                    </button> 
                  </div> 
                  <Dialog.Title 
                    as="h3" 
                    className="mt-5 text-center xxs:text-2xl sm:text-3xl md:text-4xl text-blue-950 dark:text-white" 
                  > 
                    {modalTitle} 
                  </Dialog.Title> 
                  <GradientDividerColors className="h-px lg:h-[1.5px] dark:h-px xxs:mt-4 lg:mt-7 from-[#047477] to-[#2B6592] dark:from-pink-700 dark:via-violet-700 dark:to-orange-500 opacity-50"/>
                  <div className="mt-2"> 
                    <p className="texto tracking-tight text-blue-950  dark:text-gray-300 xxs:mt-4 lg:mt-7"> 
                      {modalContent} 
                    </p> 
                    <p className="texto tracking-tight text-blue-950  dark:text-gray-300   mt-5"> 
                      {modalContent2} 
                    </p> 
                    <p className="texto tracking-tight text-blue-950  dark:text-gray-300   mt-5"> 
                      {modalContent3} 
                    </p> 
                    <div className= "xxs:mt-6 lg:mt-14 flex flex-col items-center xxs:text-5xl lg:text-6xl">
                      <div className='text-blue-950 dark:text-white'>
                        {modalIcon}
                      </div>
                    </div>
                  </div> 
                </Dialog.Panel> 
              </Transition.Child> 
            </div> 
          </div> 
        </Dialog> 
      </Transition> 
      ) : null} 
    </> 
  ); 
} 
 
 
export default Modal;