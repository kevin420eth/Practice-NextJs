import Image from 'next/image'
import Link from 'next/link'

const Events = ({ data }) => {
    return (
        <div>
            {data.map((item) => {
                return (
                    <Link href={`event/${item.id}`} key={item.id}>
                        <h2>{item.title}</h2>
                        <Image src={item.image} width='300' height='300' alt='xxx' />
                    </Link>
                )
            })}
        </div>
    )
}

export default Events


export async function getServerSideProps() {
    const { events_categories } = await import('../../data/data.json')

    return {
        props: {
            data: events_categories
        }
    }
}