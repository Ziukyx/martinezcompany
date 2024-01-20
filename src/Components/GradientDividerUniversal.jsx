import clsx from "clsx";

export function GradientDividerUniversal({className, ...props}) {
  return (
    <div className="w-full h-px">
      <div 
      className={clsx('h-full bg-gradient-to-r ', className)}
      {...props}/>
    </div>
  );
};

export default GradientDividerUniversal;