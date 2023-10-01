import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white my-4">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg my-4">
                    {/* <strong>About Our Cafe</strong><br /> */}

                    Welcome to <i><u><b>MyCafe</b></u></i>, your ultimate destination for an extraordinary culinary experience. Located in the heart of Dehradun, our cafe is a place where you can indulge in everything your taste buds desire.
                    </p>
                    <br />
                    <h2 className="text-2xl font-medium">A World of Flavors</h2>
                    <p className="text-lg my-4">

                    At <i><u><b>MyCafe</b></u></i>, we believe that variety is the spice of life. Our extensive menu boasts a diverse range of culinary delights to cater to every craving. From artisanal coffees and specialty teas to gourmet sandwiches, hearty soups, savory pastas, and decadent desserts, we have it all. Whether you're in the mood for a quick bite or a leisurely meal, we've got something to satisfy every palate.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}