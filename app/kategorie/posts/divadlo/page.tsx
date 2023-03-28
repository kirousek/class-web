import Link from "next/link";

export default function Example() {
    return (
        <>
            <nav className="flex items-center flex-wrap p-5">
                <Link className="font-bold mr-5 text-2xl inline-flex items-center uppercase" href="/">EP1B</Link>
            </nav>
            <div className="p-5 break-words">
                <div className="max-w-3xl mx-auto my-10">
                    <p className="py-5 flex items-center font-bold text-lg md:text-xl">
                        <Link href="/kategorie">Kategorie</Link>
                        <p>&nbsp;&gt;&nbsp;</p>
                        <Link href="/kategorie/novinky">Novinky</Link>
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-snug lg:leading-snug">
                        Divadlo
                    </h1>
                </div>
                <div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg lg:text-xl font-semibold">
                            Kdy: 13.4.
                        </p>
                        <article className="max-w-none my-10 text-gray-500">
                            <p>Dne 13.4. jde naše třída do divadla a na co se můžeme těšit? Tak to fakt netuším, ale co vím je, že to vybírala paní učitelka Kutová! A to znamená hrozně moc zábavy!</p>
                            <p>Tak neváhej a přijď! Stojí to jenom 140Kč.</p>
                            <p>PS: Kdo ještě nedal peníze tak je dejte Jirkovi</p>
                        </article>
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