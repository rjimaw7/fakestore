/* eslint-disable no-nested-ternary */
import { useAxios } from '@shared/hooks/useAxios';
import { IProductRequest, IProducts } from '@shared/interfaces/IProducts';

const { GET } = useAxios();

export const useProductsDao = () => {
  const getAllProducts = async (payload?: IProductRequest) => {
    const response = await GET<IProducts[]>({
      url: payload?.category
        ? `/products/category/${payload.category}`
        : payload?.id
        ? `/products/${payload.id}`
        : '/products',
    });

    return response.data;
  };

  return {
    getAllProducts,
  };
};
