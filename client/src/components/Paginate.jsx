import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../actions/posts';



const Paginate = ({ page }) => {
  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((state) => state.posts);

  useEffect(() => {
    if(page) {
      dispatch(getPosts(page));
    }
  }, [dispatch, page]);


  return (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      shape="rounded"
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/apartments?page=${item.page}`} />
  )}
    />
  );
};

export default Paginate;