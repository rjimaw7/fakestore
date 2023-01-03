/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const paginationMap = new Map<string, object>();

export interface IPagination {
  page: number;
  pageSize: number;
  total: number;
  setTotal: (total?: number) => void;
  handlePageChange: (page: number) => void;
  handlePageSizeChange: (num: number) => void;
  resetPagination: () => void;
}

export interface IPaginationCustom {
  pageTotal: number;
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageSize: (num: number) => void;
}

interface Props {
  defaults?: {
    page?: number;
    pageSize?: number;
  };
  key?: string;
}

export const usePagination = (props?: Props): IPagination => {
  const { defaults, key } = props || {};

  const location = useLocation();

  const data = paginationMap.get(key || '') as {
    page: number;
    pageSize: number;
  };

  const getPage =
    Number(location.search?.split('=')[1]) || data?.page || defaults?.page || 1;

  const [page, setPage] = useState<number>(getPage);
  const [pageSize, setPageSize] = useState<number>(
    data?.pageSize || defaults?.pageSize || 10
  );
  const [totalItems, setTotalItems] = useState<number>(0);

  const handlePageChange = (page: number) => {
    setPage(page);
    // history.push({
    // search: `?page=${page}`,
    // });
  };

  const handlePageSizeChange = (num: number) => {
    setPageSize(num);
  };

  const setTotal = (total?: number) => {
    setTotalItems(total || 0);
  };

  const resetPagination = () => {
    setPage(defaults?.page || 1);
    setPage(defaults?.pageSize || 10);
  };

  useEffect(
    () => () => {
      if (key) {
        paginationMap.set(key, {
          page,
          pageSize,
        });
      }
    },
    [key, page, pageSize]
  );

  return {
    page,
    pageSize,
    handlePageChange,
    handlePageSizeChange,
    resetPagination,
    setTotal,
    total: totalItems,
  };
};
