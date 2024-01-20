import Image from 'next/image';
import Logo from '../Images/logoredondovectorizado.svg'
import { FadeIn } from './FadeIn';
   
const Loader = () => {
  return (
    <FadeIn>
    <div className="flex items-center justify-center h-screen">
      <Image src={Logo} alt="Logo de la empresa" width={200} height={200} />
    </div>
    </FadeIn>
  );
};

export default Loader;
