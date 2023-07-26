import React from 'react';
import { Category } from '../../models/Category';

type CategoryBreadcrumbProps = {
  category: Category;
};

const CategoryBreadcrumb = ({ category }: CategoryBreadcrumbProps): JSX.Element => {
  if (!category) {
    return null;
  }

  return <></>;
};

export default CategoryBreadcrumb;
