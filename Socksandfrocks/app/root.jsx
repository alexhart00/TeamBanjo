import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
  } from '@remix-run/react';
  import styles from './index.css';
  import favicon from '../public/assets/favicon.svg';

  import Curated from '../public/assets/pictures/Curated.png';
  import Manual from '../public/assets/pictures/Manual.png';
  import Random from '../public/assets/pictures/Random.png';


  
  export const links = () => {
    return [
      {rel: 'stylesheet', href: styles},
      {
        rel: 'preconnect',
        href: 'https://cdn.shopify.com',
      },
      {
        rel: 'preconnect',
        href: 'https://shop.app',
      },
      {rel: 'icon', type: 'image/svg+xml', href: favicon},
    ];
  };
  
  export async function loader({context}) {
    const layout = await context.storefront.query(LAYOUT_QUERY);
    return {layout};
  }
  
  export default function App({setisHomeVisible, setIsCuratedVisible, setIsManualVisible, setIsRandomVisible}) {
    const data = useLoaderData();
  
    const {name} = data.layout.shop;
  
    return (
      <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <link rel="preconnect" href="https://cdn.shopify.com" />
        <link rel="icon" type="image/svg+xml" href="/app/public/assets/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Socksandfrocks</title>
        <link rel="stylesheet" href="./index.css" />
        </head>
        <body>
          <h1>Hello, {name}</h1>
          <p>This is a custom storefront powered by Hydrogen</p>
          

          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }
  
  const LAYOUT_QUERY = `#graphql
    query layout {
      shop {
        name
        description
      }
    }
  `;

  import {useCatch} from '@remix-run/react';

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) return;
  // render a 404 page
  else return; // render a generic 500 error page
}
/*export async function loader({context}) {
    const token = await context.session.get('customerAccessToken');
  }
  */