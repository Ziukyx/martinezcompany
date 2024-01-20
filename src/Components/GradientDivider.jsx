import React from 'react';
import clsx from 'clsx';

export function GradientDivider({className, ...props}){
  return (
    <div className="lg:max-w-5xl md:max-w-2xl xs:max-w-sm mx-auto h-[1.5px] dark:h-px" >
      <div 
        className={clsx('h-full bg-gradient-to-r from-white via-blue-500 to-white dark:from-slate-950 dark:via-slate-600 dark:to-slate-950 z-10', className)} 
      {...props}/>
    </div>
  );
};

export default GradientDivider;
