import Palette from "../components/Palette/Palette";

function HomePage() {
    return (
        <section id="home" className="container mx-auto py-20 text-center">
            <h2 className="text-5xl font-bold font-heading text-primary mb-6">
                Random Website
            </h2>

            <h3 className="text-3xl font-bold font-heading underline text-primary mb-6">
                Sub title
            </h3>
            <p className="text-2xl text-secondary mb-8">
                Your one-stop solution for all your web development needs.
            </p>
            <div className="flex gap-8 mb-8 justify-center">
                <p className="text-xl text-text mb-8 w-1/2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                </p>
                <div className="flex flex-col gap-8 w-1/2">
                    <p className="text-xl text-text w-full text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                    </p>
                    <p className="text-xl text-text w-full text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                    </p>
                </div>
            </div>
            <button className="bg-accent text-text font-bold py-3 px-8 rounded">
                Get Started
            </button>

            <h3 className="text-3xl font-bold mt-8 underline font-heading text-primary mb-6">
                Palette
            </h3>

            <Palette></Palette>
        </section>
    );
}

export default HomePage;