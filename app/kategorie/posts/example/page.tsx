import Link from "next/link";

export default function Example() {
    return (
        <>
            <nav className="flex items-center flex-wrap p-5">
                <Link className="font-bold mr-5 text-2xl inline-flex items-center uppercase" href="/">C++ Blog</Link>
            </nav>
            <div className="p-5 break-words">
                <div className="max-w-3xl mx-auto my-10">
                    <p className="py-5 flex items-center font-bold text-lg md:text-xl">
                        <Link href="/blog">Blog</Link>
                        <p>&nbsp;&gt;&nbsp;</p>
                        <Link href="/blog/code">Category</Link>
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-snug lg:leading-snug">
                        Example
                    </h1>
                </div>
                <div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg lg:text-xl font-semibold">
                            Topic
                        </p>
                        <article className="max-w-none my-10 text-gray-500">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Proin in tellus sit amet nibh dignissim sagittis. Duis condimentum augue id magna semper rutrum. Mauris dictum facilisis augue. Aenean placerat. Phasellus et lorem id felis nonummy placerat. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Praesent vitae arcu tempor neque lacinia pretium. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Fusce suscipit libero eget elit. Pellentesque arcu. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla est.</p>

                            <p>Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Aliquam erat volutpat. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Integer in sapien. Nulla non arcu lacinia neque faucibus fringilla. Quisque tincidunt scelerisque libero. Nulla non arcu lacinia neque faucibus fringilla. Etiam neque. Nunc auctor. Nulla pulvinar eleifend sem. Nam sed tellus id magna elementum tincidunt. Integer malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sagittis ultrices augue. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Quisque tincidunt scelerisque libero.</p>

                            <p>Nulla pulvinar eleifend sem. Suspendisse nisl. Nullam dapibus fermentum ipsum. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam ante. Nulla non lectus sed nisl molestie malesuada. Praesent dapibus. Fusce aliquam vestibulum ipsum. Fusce suscipit libero eget elit. Suspendisse nisl. Et harum quidem rerum facilis est et expedita distinctio. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Mauris tincidunt sem sed arcu. Etiam bibendum elit eget erat. Etiam quis quam. Aliquam id dolor.</p>

                            <p>Integer pellentesque quam vel velit. Nulla non arcu lacinia neque faucibus fringilla. Integer tempor. Nullam sit amet magna in magna gravida vehicula. Quisque porta. Fusce tellus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nullam dapibus fermentum ipsum. Nulla non arcu lacinia neque faucibus fringilla. Maecenas sollicitudin.</p>

                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nullam faucibus mi quis velit. Fusce aliquam vestibulum ipsum. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Integer tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Duis pulvinar.</p>

                            <p>Pellentesque ipsum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur bibendum justo non orci. In dapibus augue non sapien. Maecenas aliquet accumsan leo. Nulla pulvinar eleifend sem. Vivamus ac leo pretium faucibus. Morbi scelerisque luctus velit. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Integer imperdiet lectus quis justo. Etiam commodo dui eget wisi. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Morbi scelerisque luctus velit. Praesent in mauris eu tortor porttitor accumsan. Aliquam erat volutpat. Integer lacinia. Phasellus rhoncus. Donec iaculis gravida nulla. Etiam commodo dui eget wisi. In enim a arcu imperdiet malesuada.</p>

                            <p>Phasellus et lorem id felis nonummy placerat. Mauris elementum mauris vitae tortor. Etiam neque. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Vestibulum fermentum tortor id mi. Aliquam erat volutpat. Quisque tincidunt scelerisque libero. Nunc tincidunt ante vitae massa. Vestibulum fermentum tortor id mi. Morbi scelerisque luctus velit. Nulla non arcu lacinia neque faucibus fringilla. Etiam posuere lacus quis dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Duis condimentum augue id magna semper rutrum. Pellentesque ipsum. Donec iaculis gravida nulla.</p>

                            <p>Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Suspendisse nisl. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Vivamus luctus egestas leo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eget nisl. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Nulla quis diam. Aliquam ornare wisi eu metus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Mauris elementum mauris vitae tortor. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

                            <p>Duis risus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Mauris metus. Proin mattis lacinia justo. Maecenas sollicitudin. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Nullam sit amet magna in magna gravida vehicula. Fusce wisi. Vivamus luctus egestas leo. Nullam at arcu a est sollicitudin euismod. Sed convallis magna eu sem. Etiam bibendum elit eget erat. Praesent dapibus.</p>

                            <p>Et harum quidem rerum facilis est et expedita distinctio. Maecenas sollicitudin. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Vestibulum fermentum tortor id mi. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque ipsum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Integer malesuada. Suspendisse nisl.</p>
                        </article>
                    </div>
                </div>
            </div>
            <footer className="px-5 py-10 mt-auto">
                <div className="text-center text-sm">
                    <Link className="font-bold" href="/">C++ Blog</Link>
                </div>
            </footer>
        </>
    )
}