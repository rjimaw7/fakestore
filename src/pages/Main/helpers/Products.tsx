import Stars from '@assets/Stars';
import { IProducts } from '@shared/interfaces/IProducts';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

interface Props {
  item: IProducts;
}

const Products = ({ item }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${item.id}`, {
      state: { item },
    });
  };

  return (
    <Card
      className="h-full border border-gray-400 relative cursor-pointer"
      onClick={handleClick}
    >
      <img className="w-44 h-44 mx-auto" src={item.image} alt="itemImg" />
      <p className="mt-2 font-bold text-blue-900 text-lg">{item.title}</p>
      <p className="mt-3 font-bold text-2xl">${item.price}</p>
      <div className="mt-3">
        <Stars rating={item.rating.rate} />
      </div>
    </Card>
  );
};

export default Products;
