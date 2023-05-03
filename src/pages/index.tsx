
import Head from 'next/head'
import { Pasos } from "../componente/Pasos"




export default function Home() {
  return (
    <>
      <Head>

        <title>Welcome</title>


      </Head>
      <Pasos
        npasos={6}
      />




    </>
  )
}
