import Image from 'next/image'
import Link from 'next/link'

const EventsEachCity = ({ data, pageName }) => {
    return (
        <div>
            <h1>Event in {pageName}</h1>
            {data.map((item) => {
                return (
                    <Link href={`/event/${item.city}/${item.id}`} key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <Image width={300} height={300} alt='sdfsf' src={item.image} />
                    </Link>
                )
            })}
        </div>
    )
}

export default EventsEachCity

export async function getStaticPaths() {
    const { events_categories } = await import('../../../data/data.json')

    const allPaths = events_categories.map((item) => {
        return {
            params: {
                cat: item.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {

    const id = context?.params.cat

    const { allEvents } = await import('../../../data/data.json')

    const data = allEvents.filter(item => item.city === id)

    return { props: { data: data, pageName: id } }
}