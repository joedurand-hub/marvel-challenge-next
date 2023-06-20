import Head from 'next/head'

const Index = ({title, description, keywords, robots, ogTitle, ogDescription, ogImage, canonical}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content={robots} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}

export default Index