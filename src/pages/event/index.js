import Image from 'next/image'

const Events = ({ data }) => {
    return (

        <div>
            {data.map((item) => (
                <a href={`event/${item.id}`} key={item.id}>
                    <Image src={item.image} width='300' height='300' alt='xxx' />
                    <h2>{item.title}</h2>
                </a>
            ))}

            <h1>Events Page</h1>
            <a href=""></a>
            <img src="" alt="" />
            <div>
                <h1>Events in London</h1>
            </div>

            <a href=""></a>
            <img src="" alt="" />
            <div>
                <h1>Events in Sanantonio</h1>

            </div>

            <a href=""></a>
            <img src="" alt="" />
            <div>
                <h1>Events in Austin</h1>

            </div>
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