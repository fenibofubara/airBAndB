import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src="https://plus.unsplash.com/premium_photo-1686090450592-aca413579d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg text-white">
                    Looking for an awesome home?.
                </p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                    Explore
                </button>
            </div>
        </div>
    )
}

export default Banner
