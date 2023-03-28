import Link from "next/link";

export default function Fotky() {
    return (
        <>
            <nav className="flex items-center flex-wrap p-5">
                <Link className="font-bold mr-5 text-2xl inline-flex items-center uppercase" href="/">EP1B</Link>
            </nav>
            <div className="flex flex-col flex-grow">
                <div className="p-5">
                    <div className="max-w-3xl mx-auto text-center items-center mt-10 py-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-snug">Fotky</h1>
                        <div className="md:text-lg py-10">
                            <p className="text-gray-500">Fotky naší třídy a všeho co děláme</p>
                        </div>
                    </div>
                </div>
                <div className="m-5 flex-grow max-w-screen-lg lg:mx-auto lg:flex lg:flex-wrap">
                    <div className="lg:pr-20 lg:w-2/3">
                        <div className="my-20">
                            <div className="group focus:outline-none">
                                <h2 className="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline">
                                    Prázdnota
                                </h2>
                                <p className="my-5 text-lg text-gray-500">
                                    Aktuálně tu nic není :( zkus to někdy jindy
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:p-5">
                        <div className="my-16">
                            <h3 className="uppercase text-sm font-bold py-2 text-gray-500">
                                <Link href="/kategorie">Kategorie</Link>
                            </h3>
                            <ul className="text-xl font-medium leading-loose">
                                <li>
                                    <Link href="/kategorie/novinky">Novinky</Link>
                                </li>
                                <li>
                                    <Link href="/kategorie/fotky">Fotky</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="px-5 py-10 mt-auto">
                <div className="text-center text-sm">
                    <Link className="font-bold" href="/">EP1B vytvořeno Kirem PS: Stránky jsou aktuálně v beta testování :)</Link>
                </div>
            </footer>
        </>
    )
}