import React from 'react';
import Head from 'next/head';
import socialImg from 'assets/social.png'

const getAbsoluteURL = (path) => {
  const baseURL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
  return baseURL + path
}

export default function SEO({
  description = 'Top Quality Digital Products to Explore - Check out our website to find great software products and deals! If you need a website or a web application this is the place to be!',
  author = 'Matheus Mitestainer',
  meta,
  title,
}) {
  const metaData = [
    {
      property: `description`,
      content: description,
    },
    {
      property: `og:image`,
      content: getAbsoluteURL(socialImg),
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      property: `twitter:creator`,
      content: author,
    },
    {
      property: `twitter:image`,
      content: getAbsoluteURL(socialImg),
    },
    {
      property: `twitter:title`,
      content: title,
    },
    {
      property: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ property, content }, i) => (
        <meta key={i} property={property} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
