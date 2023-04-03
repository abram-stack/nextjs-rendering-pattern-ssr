import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { co2 } from '@tgwf/co2'
import Header from '../components/Header'
import Card from '../components/Card'


export async function getServerSideProps() {
  //create request
  const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")  

  return {
    props: {
      pokemon: await res.json()
    }
  }
}

//passing the pokemon as prop 
export default function Home({ pokemon }) {
  // const swd = new co2({ model: 'swd' })
  
  // const emissions = swd.perByte(1600000, true)
  // console.log(emissions)
  return (
    <div className={styles.container}>
      <Head>
        <title>Entwurfsmuster</title>
      </Head>

      <Header />
      
      <div className={styles.content}>
        <div className={styles.grid}>
          {pokemon.map(pokemon => (
            <Card pokemon={pokemon} key={pokemon.id} />
            
          ))}
          </div>
      </div>
      
    </div>
  )
}

{/* <div className={styles.grid}>
        
</div> */}
// {pokemon.map(pokemon => (
//           <div className={styles.card} key={pokemon.id}>
//             <Link href={`/pokemon/${pokemon.id}`}>
//               <Image
//                 src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
//                 alt={pokemon.name}
//                 width={200}
//                 height={200}
//               />
//                 {/* <img
//                   src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
//                   alt={pokemon.name}
//                 /> */}
//                 <h3>{pokemon.name}</h3>
//             </Link>
//           </div>
//         ))}