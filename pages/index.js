import Head from 'next/head'
import Image from 'next/image'
import {Facebook, Instagram, Twitter} from '@material-ui/icons/'
import Card from '../components/parts/Card'
export default function Home() {
    return (
        <>
            <Head>
                <title>MOENN Careter</title>
                <meta name="description" content="MOEN Restaurant"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <section className="hero-section"
                style={
                    {backgroundImage: "url('/images/food.jpg')"}
            }>
                <div className="container grid md:grid-cols-2">
                    <div className="md:pr-10">
                        <p className="little-text">__Restaurant</p>
                        <h1 className="headline-1">Moenn Careter</h1>
                        <h2 className="headline-1">Good Food</h2>
                        <p className="sub-headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rem.</p>
                        <button className="btn-secondary">Explore food menu</button>

                        <div className="w-1/4 md:w-1/3 xl:w-1/4 flex justify-between mt-7 pr-4">
                            <a href=""><Facebook className="rounded-full"/></a>
                            <a href=""><Instagram className="rounded-full"/></a>
                            <a href=""><Twitter className="rounded-full"/></a>

                        </div>
                    </div>
                    <div></div>
                </div>

            </section>
            <section className="section w-full bg-gradient-to-t from-secondary-100 via-blue-100 to-white">
                <div className="container md:gap-5 grid md:grid-cols-2 items-center">
                    <div className="flex justify-center md:justify-start ">
                        <Image src="/images/pizza-min.png" width="500" height="500"/>
                    </div>
                    <div className="lg:pr-10 md:mt-0 mt-12 ">
                        <p className="little-text">About Us</p>
                        <h2 className="headline-2">Simple way of eating delicious</h2>
                        <p className="sub-headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium aut qui, et laborum nesciunt. Omnis magni in sint quis totam eos earum enim, eligendi similique saepe, aut ipsa architecto.</p>
                        <button className="btn-secondary">Explore food menu</button>
                    </div>
                </div>
            </section>

            <section className="section bg-secondary-100">
                <div className="container text-center lg:px-32">
                    <p className="little-text">Recipes</p>
                    <span className="headline-2 w-auto relative">Most Popular Items
                        <div className="absolute top-0 -right-20">
                            <Image src="/images/pizza-min.png" width="64" height="64"/>
                        </div>
                    </span>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-16">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>


            </section>
        </>
    )
}
