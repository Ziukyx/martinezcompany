import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";

export const TextGenerateEffect1 = (props) => {
 const { words, className } = props;
 const [scope, animate] = useAnimate();
 const [isVisible, setIsVisible] = useState(false); // Nuevo estado
 const ref = useRef(); // Referencia para el div contenedor
 let wordsArray = words.split(" ");

 useEffect(() => {
   // Función para verificar si el componente está en la vista
   const checkVisibility = () => {
     const rect = ref.current.getBoundingClientRect();
     if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
       setIsVisible(true); // Si está en la vista, cambiamos el estado a true
     } else {
       setIsVisible(false); // Si no está en la vista, cambiamos el estado a false
     }
   };

   // Escuchamos el evento de scroll
   window.addEventListener("scroll", checkVisibility);

   // Llamamos a la función al montar el componente
   checkVisibility();

   // Limpiamos el evento al desmontar el componente
   return () => {
     window.removeEventListener("scroll", checkVisibility);
   };
 }, []);

 useEffect(() => {
   if (isVisible) { // Solo ejecutamos la animación si el componente está en vista
     animate(
       "span",
       {
         opacity: 1,
       },
       {
         duration: 0.1,
         delay: stagger(0.1),
       }
     );
   }
 }, [scope.current, isVisible]); // Agregamos isVisible a las dependencias del useEffect

 const renderWords = () => {
   return (
     <motion.div ref={scope}>
       {wordsArray.map((word, idx) => {
         return (
           <motion.span
             key={word + idx}
             className="dark:text-white text-blue-950 opacity-0"
           >
             {word}{" "}
           </motion.span>
         );
       })}
     </motion.div>
   );
 };

 return (
   <div ref={ref} className={cn("", className)}> {/* Agregamos la referencia al div contenedor */}
     <div className="mt-4">
       <div className=" text-blue-950 dark:text-white texto">
         {renderWords()}
       </div>
     </div>
   </div>
 );
};