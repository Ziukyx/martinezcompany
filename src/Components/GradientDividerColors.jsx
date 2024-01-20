import clsx from "clsx"; 
 
export function GradientDividerColors({className, ...props}) { 
  return ( 
    <div className="w-full h-[2px] dark:h-px"> 
      <div  
      className={clsx('h-full bg-gradient-to-r opacity-100 dark:opacity-40', className)} 
      {...props}/> 
    </div> 
  ); 
}; 
 
export default GradientDividerColors;