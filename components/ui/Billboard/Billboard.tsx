import { Billboard as BillboardType } from '@/types';

import './style.scss';
import Image from 'next/image';

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="billboard">
      <Image fill src={data?.imageUrl} alt="Image" />
      <div className="overlay"/>
      <h1>{data?.label}</h1>
    </div>
  );
};

export default Billboard;
