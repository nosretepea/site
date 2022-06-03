import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

type SeoProps = {
  title?: string,
  description?: string,
  author?: string,
  image?: string,
  url?: string,
  meta?: Meta
}

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

type PropertyMetaObj = {
  property: string,
  content: string
}

type NameMetaObj = {
  name: string,
  content: string
}

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string,
      description: string,
      author: string,
      image: string,
      url: string
    }
  }
}

const Seo: React.FC<SeoProps> = ({ meta = [] }: SeoProps): ReactElement => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery<QueryTypes>(query);

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={site.siteMetadata?.title}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata?.description,
        },
        {
          property: `og:title`,
          content: site.siteMetadata?.title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata?.description,
        },
        {
          property: `og:image`,
          content: site.siteMetadata?.image
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata?.url + '' + pathname
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata?.title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata?.description,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        image
        url
      }
    }
  }
`