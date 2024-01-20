import { navigation } from ".././español/Footer"

function FooterCat() {
    return (
      <footer className="bg-white dark:bg-slate-950">
          <div className="mx-auto xxs:max-w-[280px] xs:max-w-[420px] sm:max-w-lg md:max-w-none md:px-5 xxs:py-10 xs:-py-20">
              <div className="mt-0 mb-6 flex justify-center xxs:space-x-7 xs:space-x-5 sm:space-x-10">
                  {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-700 dark:text-gray-300 font-display">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-7 w-7 fifth" aria-hidden="true" />
                  </a>
                  ))}
              </div>
  
              <div className="pb-6 md:whitespace-nowrap columns-2 xxs:flex xxs:flex-wrap xxs:justify-center xxs:space-x-1 xs:space-x-3 md:space-x-2" aria-label="Footer">
                  <div>
                      <a href='#' className="xxs:text-sm xs:text-md leading-6 after:content-['__·'] text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                        Avís Legal
                      </a>
                      
                  </div>
                  <div>
                      <a href='#' className="xxs:text-sm xs:text-md leading-6 after:content-['__·'] text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                      Política de privacitat
                      </a>
                      
                  </div>
                  <div>
                      <a href='#' className="xxs:text-sm xs:text-md leading-6 after:content-['__·'] text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                      Política de <span className="italic">cookies</span>
                      </a>
                      
                  </div>
                  <div>
                      <a href='/contacte' className="xxs:text-sm xs:text-md leading-6 after:content-['__·'] text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                      Contacte
                      </a>
                      
                  </div>
                  <div>
                      <a href='/contacte#treballinosaltres' className="xxs:text-sm xs:text-md leading-6 text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                      Treballi amb nosaltres
                      </a>                   
                  </div>
              </div>
              <p className="xxs:tracking-tighter sm:tracking-normal light:tracking-normal text-center xxs:text-[11px] xs:text-sm leading-5 text-gray-600/90 dark:text-gray-400">
                  Martínez & Company Management & Intermediation &copy; 2024 <span className='xxs:opacity-0 lg:opacity-100'>-</span><br className='lg:hidden'/> Tots els drets reservats
              </p>
          </div>
      </footer>
    )
  }

  export default FooterCat