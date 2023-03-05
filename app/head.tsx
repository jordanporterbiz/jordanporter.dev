

interface Metadata { 
    title: string
    description: string
}

export default function Head(metadata: Metadata) {
  return (
    <Head {...metadata}>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
  )
}