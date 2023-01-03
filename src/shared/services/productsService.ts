import { useProductsDao } from '@shared/dao/productsDao';
import { IProductRequest, IProducts } from '@shared/interfaces/IProducts';
import { useQuery } from '@tanstack/react-query';

const { getAllProducts: getAllProductsDao } = useProductsDao();

export const useProductsService = () => {
  const getAllProducts = (payload?: IProductRequest) => {
    return useQuery<IProducts[], Error>(['products-all', payload], () =>
      getAllProductsDao(payload)
    );
  };

  return {
    getAllProducts,
  };
};
