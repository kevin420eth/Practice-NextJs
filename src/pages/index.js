import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img src="" alt="sss" />
          <a href="/">Home</a>
          <a href="/event">Events</a>
          <a href="/about">About Us</a>
        </nav>
      </header>

      <main className={styles.name}>
        {props.data.map(item => 
        <a href={`/event/${item.id}`} key={item.id}>
          <Image src={item.image} width='300' height='300' alt='xxx'/>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </a>)}

        <a href="/event/london">
          <img src="" alt="" />
          <div>
            <h1>Events in London</h1>
            <p> dfgdg dfgd fgd dfgdgd dfgdgdf dfg dg dgdfg gdffgdgdg</p>
          </div>
        </a>


        <a href="">

          <div>
            <img src="" alt="" />
            <h1>Events in Sanantonio</h1>
            <p> dfgdg dfgd fgd dfgdgd dfgdgdf dfg dg dgdfg gdffgdgdg</p>
          </div>
        </a>



        <a href="">
          <img src="" alt="" />
          <div>
            <h1>Events in Austin</h1>
            <p> dfgdg dfgd fgd dfgdgd dfgdgdf dfg dg dgdfg gdffgdgdg</p>
          </div>

        </a>

      </main>
    </>
  )
}

export async function getServerSideProps() {

  const { events_categories } = await import('../data/data.json')

  return {
    props: {
      data:  events_categories,
    }
  }
}