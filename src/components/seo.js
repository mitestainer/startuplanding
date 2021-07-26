import React from 'react';
import Head from 'next/head';
import socialImg from 'assets/social.png'

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
      content: socialImg,
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
      content: socialImg,
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
