import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Products from '../components/Products'


export default function Home() {
  return (
    <div className="min-h-screen ">
     <Header/>
     <Banner/>
     <Products/>
     <Footer/>
    </div>
  )
}
