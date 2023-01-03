/* eslint-disable import/no-cycle */
/* eslint-disable import/order */
import React, { useMemo } from 'react';
import { useProductsService } from '@shared/services/productsService';
import { usePagination } from '@shared/hooks/usePagination';
import { useFilter } from '@shared/hooks/useFilter';
import MainView from './MainView';
import { IProducts } from '@shared/interfaces/IProducts';

export interface ProductsFilter {
  id: any;
  category: string;
}

const filterDefaultValues = {
  id: '',
  category: '',
};

const MainContainer = () => {
  // Pagination
  const { page, pageSize, handlePageChange, handlePageSizeChange } =
    usePagination({
      defaults: {
        pageSize: 8,
      },
    });

  // FILTER
  const { filter, setFilter } = useFilter<ProductsFilter>(filterDefaultValues);
  const handleOnFilter = (key: keyof ProductsFilter, value: any) => {
    setFilter(key, value);
    handlePageChange(1);
  };

  const { getAllProducts } = useProductsService();

  const { data: allProductsData, isLoading: allProductsLoading } =
    getAllProducts({
      id: filter.id || undefined,
      // id: 7,
      category: filter.category || undefined,
    });

  const productsAllData = useMemo(() => {
    const results =
      allProductsData?.map((data, i) => {
        return {
          ...data,
          count: i,
        };
      }) || [];
    const startIndex = page * pageSize - pageSize;
    const endIndex = startIndex + pageSize;
    return results.slice(startIndex, endIndex);
  }, [allProductsData, page, pageSize]) as Array<IProducts & { count: number }>;

  const productsAllCount = useMemo(() => {
    return allProductsData?.length || 0;
  }, [allProductsData]);

  return (
    <MainView
      data={productsAllData}
      loading={allProductsLoading}
      page={page}
      pageSize={pageSize}
      handlePageChange={handlePageChange}
      productsAllCount={productsAllCount}
      handlePageSizeChange={handlePageSizeChange}
      onFilter={handleOnFilter}
    />
  );
};

export default MainContainer;
