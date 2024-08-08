import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import NextImage from 'next/image';
import { ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import search from '../../assets/img/search.svg';
import call from '../../assets/img/call.png';

export type MainNavigationProps = ComponentProps & {
  fields: {
    data: {
      item: {
        headerLogo: {
          jsonValue: ImageField;
          alt: string;
        };
      };
      links: {
        children: {
          results: [
            {
              displayName: string;
              field: {
                jsonValue: {
                  value: {
                    anchor: string;
                    href: string;
                    linktype: string;
                    target: string;
                    text: string;
                    url: string;
                  };
                };
              };
            }
          ];
        };
      };
    };
  };
};

const MainNavigation = (props: MainNavigationProps): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const sxaStyles = `${props.params?.styles || ''}`;
  const [InputText, setInputText] = useState('');
  const [SearchOpen, setSearchOpen] = useState(false);
  const HandleInputText = (event: ChangeEvent<HTMLInputElement>) => {
    const NewValue = event.target.value;
    setInputText(NewValue);
  };

  const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = '/Search?q=' + InputText;
  };

  return (
    <nav className={`main-navigation ${sxaStyles}`}>
      <div className="navigation-content flex items-center  container">
        <div className="controls-container">
          <Link href="/" className="logo-link">
            <Image
              field={props.fields.data.item.headerLogo.jsonValue}
              alt={props.fields.data.item.headerLogo.alt}
            />
          </Link>
          <div className="flex justify-evenly items-center">
            <div className={'text-menu-item px-3 block lg:hidden '}>
              {/* <Link
                href={
                  '#'
                  // props.fields?.data?.links?.children?.results?.field?.jsonValue?.value?.href ?? '#'
                }
                prefetch={false}
              >
                <NextImage src={search} width={18} height={18} alt="search icon" />
              </Link> */}
            </div>
            <div className={'text-menu-item px-3 block lg:hidden'}>
              <Link
                href={
                  '#'
                  // props.fields?.data?.links?.children?.results?.field?.jsonValue?.value?.href ?? '#'
                }
                prefetch={false}
              >
                <NextImage src={call} width={22} height={22} alt="call icon" />
              </Link>
            </div>
            <button
              className="items-toggle"
              aria-label="open menu"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={'items-container' + (navbarOpen ? ' opened' : ' closed')}>
          <ul className="container !mx-auto lg:!mr-0">
            {props.fields?.data?.links?.children?.results?.map((item, index) => (
              <li className="text-menu-item" key={index}>
                <Link href={item.field?.jsonValue?.value?.href ?? '#'} prefetch={false}>
                  {item.displayName}
                </Link>
              </li>
            ))}
            {navbarOpen && (
              <li className="text-menu-item block lg:hidden">
                <form onSubmit={HandleSubmit} className="pr-4">
                  <input
                    type="text"
                    name="search"
                    value={InputText}
                    placeholder="Search..."
                    className="border-0  border-b-2 border-b-white focus:outline-0 w-full bg-transparent text-white placeholder:text-white-lighter"
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
                        className="rotate-45"
                      />
                    </button>
                  </span>
                </form>
              </li>
            )}
            {/* it is required to add below static links for search and call us in above mapping (and edit href from " fields?. " )*/}
            <li className={'text-menu-item md:px-3 hidden lg:block'}>
              <Link
                onClick={() => setSearchOpen(!SearchOpen)}
                href={
                  '#'
                  // props.fields?.data?.links?.children?.results?.field?.jsonValue?.value?.href ?? '#'
                }
                prefetch={false}
              >
                <NextImage src={search} width={18} height={18} alt="search icon" />
              </Link>
            </li>
            <li className={'text-menu-item md:px-3 hidden lg:block'}>
              <Link
                href={
                  '#'
                  // props.fields?.data?.links?.children?.results?.field?.jsonValue?.value?.href ?? '#'
                }
                prefetch={false}
              >
                <NextImage src={call} width={22} height={22} alt="call icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* {SearchOpen && ( */}
      <div
        className={`absolute py-4 -z-10 w-full transition-all duration-300 ease-in-out bg-[#1E1450] ${
          SearchOpen ? 'top-0 lg:top-full' : 'top-0'
        }`}
      >
        <form onSubmit={HandleSubmit} className="container mx-auto px-24">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={InputText}
            className="border-0  border-b-2 border-b-white focus:outline-0 w-full bg-[#1E1450] text-white placeholder:text-white-lighter"
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
                className="rotate-45"
              />
            </button>
          </span>
        </form>
      </div>
      {/* )} */}
    </nav>
  );
};

export const Default = MainNavigation;
