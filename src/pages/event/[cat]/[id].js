import Image from 'next/image'

const SingleEventPage = ({ data }) => {
  console.log(data.title)
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <Image src={data.image} width='300' height='300' alt='xxx' />
    </div>
  )
}

export default SingleEventPage

export async function getStaticPaths() {
  const { allEvents } = await import('../../../data/data.json')
  const allPaths = allEvents.map((item) => {
    return {
      params: {
        cat: item.city,
        id: item.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const id = context.params.id
  const { allEvents } = await import('../../../data/data.json')
  const eventData = allEvents.filter(item => (
    item.id === id
  ))[0]

  return { props: { data: eventData } }
}