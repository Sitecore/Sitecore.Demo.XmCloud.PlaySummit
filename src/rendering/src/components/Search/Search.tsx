import React, { PropsWithChildren } from 'react';

export const SearchLayout = (props: PropsWithChildren): JSX.Element => {
  return (
    <>
      <div className="search-main-container">{props.children}</div>
    </>
  );
};
