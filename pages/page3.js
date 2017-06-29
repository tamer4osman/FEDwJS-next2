import Head from "next/head"

let Page = function() {
    return (
        <div>
            <Head>
                <title>My awesome page!</title>
                <meta
                    name="description"
                    content="Let's make the web great again"
                />
                <meta name="keywords" content="sample, react, demo, awesome" />
            </Head>
            <h1>This page is awesome!</h1>
            <div>
                This is our great new page! It's great! It really is! It's
                awesome! Let's make the web great again!
            </div>
        </div>
    )
}

export default Page
