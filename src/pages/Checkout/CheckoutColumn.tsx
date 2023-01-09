import { IProducts } from '@shared/interfaces/IProducts';
import { ColumnsType } from 'antd/es/table';

export const CHECKOUT_COLUMN = (): ColumnsType<IProducts> => [
  {
    key: 'image',
    title: 'Product',
    width: '10',
    render: (_, record: IProducts) => {
      return (
        <div className="grid grid-cols-2 border border-black">
          <img alt="checko" src={record.image} className="w-32 h-28" />
          <div>
            <p className="text-blue-900 font bold">{record.title}</p>
            <p>{record.category}</p>
          </div>
        </div>
      );
    },
  },
  {
    key: 'price',
    title: 'Price',
    width: '200',
    render: (_, record: IProducts) => {
      return <p>{record.price}</p>;
    },
  },
  {
    key: 'id',
    title: 'Quantity',
    width: '200',
    render: (_, record: IProducts) => {
      return <p>{record.price}</p>;
    },
  },
  {
    key: 'count',
    title: 'Subtotal',
    width: '200',
    render: (_, record: IProducts) => {
      return <p>{record.price}</p>;
    },
  },
];
