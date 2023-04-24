import Link from 'next/link'
import Image from 'next/image'

const Homes = ({ data }) => {
    return (
        <section>
            {data.map((item) => {
                return (
                    <Link href={`/event/${item.id}`} key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <Image src={item.image} width='300' height='300' alt='xxx' />
                    </Link>
                )
            })}
        </section>
    )
}

export default Homes