import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
const logo = (
  <span>
    <svg height="30" viewBox="0 0 500 500" version="1.1" style={{ display: "inline" }}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-84.000000, -84.000000)">
          <g transform="translate(78.000000, 84.000000)">
            <rect fill="#F7DCB4" x="6" y="0" width="500" height="500" rx="75"></rect>
            <g transform="translate(0.000000, 23.000000)">
              <ellipse fill="#3F3F3F" fillRule="nonzero" cx="154" cy="186" rx="51" ry="57"></ellipse>
              <ellipse fill="#3F3F3F" fillRule="nonzero" cx="358" cy="186" rx="51" ry="57"></ellipse>
              <ellipse fill="#FFFFFF" fillRule="nonzero" cx="138.5" cy="182" rx="17.5" ry="18"></ellipse>
              <ellipse fill="#FFFFFF" fillRule="nonzero" cx="341.5" cy="182" rx="17.5" ry="18"></ellipse>
              <ellipse fill="#3F3F3F" fillRule="nonzero" cx="256.5" cy="254" rx="20.5" ry="18"></ellipse>
              <path d="M236,300 C249.666667,330.666667 263.333333,330.666667 277,300" id="路径" stroke="#3F3F3F" strokeWidth="8"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
    <span style={{ verticalAlign: 'middle', fontWeight: 900, marginLeft: '0.5rem', fontSize: '1.5rem' }}>Mog</span>
  </span>
)
const config: DocsThemeConfig = {
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://mog.js.org/og.png'
        : `https://mog.js.org/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A flexible, modular CMS Blog System."
        />
        <meta
          name="og:description"
          content="A flexible, modular CMS Blog System."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="mog.js.org" />
        <meta name="twitter:url" content="https://mog.js.org" />
        <meta
          name="og:title"
          content={title ? title + ' – Mog' : 'Mog'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Mog" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </>
    )
  },
  project: {
    link: 'https://github.com/mogland/core',
  },
  docsRepositoryBase: 'https://github.com/mogland/mog-docs',
  footer: {
    text: <span>
      AGPLv3 {new Date().getFullYear()} © <a href="https://github.com/mogland/core" target="_blank">Mog</a>.
    </span>
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Mog'
      }
    }
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  // banner: {
  //   key: '2.0-refactoring',
  //   text: <a href="/blog/mog-v2-refactor" target="_blank">
  //     ⏰ Mog 2.0 is refactoring. Read more →
  //   </a>,
  // },
}

export default config
