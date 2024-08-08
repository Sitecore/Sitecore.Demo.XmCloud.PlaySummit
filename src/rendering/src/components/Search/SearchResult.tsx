import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import search from '../../assets/img/search.svg';
import NextImage from 'next/image';

import { SearchResultData } from './SearchResult.mock-data';
const SearchResult = (): JSX.Element => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const [InputText, setInputText] = useState(searchQuery);
  const BlogData = SearchResultData?.SearchResultList;

  useEffect(() => {
    setInputText(searchQuery);
  }, [searchQuery]);

  const HandleInputText = (event: ChangeEvent<HTMLInputElement>) => {
    const NewValue = event.target.value;
    setInputText(NewValue);
  };

  const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = '/Search?q=' + InputText;
  };

  const filteredBlogData = BlogData?.filter((blog) =>
    blog?.ResultTitle?.value?.toLowerCase().includes(InputText.toLocaleLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="search"
          value={InputText}
          placeholder="Search..."
          className="border-0 border-b-2 border-b-black-light focus:outline-0 w-full bg-transparent"
          id="search"
          onChange={HandleInputText}
        />
        <span className="absolute -rotate-45">
          <button type="submit">
            <NextImage
              src={search}
              width={18}
              height={18}
              alt="search icon"
              className="invert rotate-45"
            />
          </button>
        </span>
      </form>
      <div className="grid  gap-x-6 gap-y-6 py-6">
        {filteredBlogData.length != 0 &&
          filteredBlogData?.slice(0, 5)?.map((blog, index: number) => {
            return (
              <div key={index} className="w-full p-2">
                <h2 className="font-bold text-2xl">{blog.ResultTitle.value}</h2>
                <p>{blog?.ResultDescription?.value}</p>
              </div>
            );
          })}
        {filteredBlogData.length == 0 && <div className="text-3xl font-bold">No result found.</div>}
      </div>
    </div>
  );
};

export default SearchResult;
