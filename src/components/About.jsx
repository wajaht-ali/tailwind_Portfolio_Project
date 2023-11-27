
const About = () => {
    return (
        <div name='About' className="h-screen w-full bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl inline font-bold border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl inline font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="px-4 text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fuga laudantium veniam expedita porro assumenda vero vel, accusamus non repudiandae molestias eaque, fugiat nobis. Enim, sed magnam error voluptate nesciunt atque doloribus? Libero quae doloremque nobis iure ad nam vero dolore! Fugiat recusandae repellendus odit nostrum dicta quis ad perferendis?</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About