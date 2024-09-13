import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faComment } from '@fortawesome/free-solid-svg-icons'
import { ChevronRight } from 'lucide-react';

const FeaturedPosts = () => {

    const products = [
        {
            url: "/images/colorful-img.jpg",
        },
        {
            url: "/images/colorful-img.jpg",
        },
        {
            url: "/images/colorful-img.jpg",
        },
    ];
    return (
        <div className="my-20">
            <div className="flex flex-col text-center gap-8">
                <h6 className="text-[#23A6F0]">Practice Advice</h6>
                <h3 className="text-[#252B42] text-4xl font-bold mx-24">Featured Posts
                </h3>
                <p className="text-[#737373] text-lg mx-16">
                    Problems trying to resolve the conflict between the two major
                </p>
            </div>
            <div className='flex flex-col md:flex-row md:px-20'>
                {
                    products.map((product, index) => (
                        <div className="mx-10 my-16 flex flex-col justify-center border border-slate-200" key={index}>
                            <img className="object-cover w-full h-[300px]" src={product.url} />
                            <div className="mx-7 my-6 flex flex-col gap-4">
                                <div className="flex gap-6 justify-start font-medium">
                                    <span className="text-[#8EC2F2] ">Google</span>
                                    <span className="text-[#737373] ">Trending</span>
                                    <span className="text-[#737373] ">New</span>
                                </div>
                                <h4 className="text-[#252B42] text-2xl font-medium">
                                    Loudest à la Madison #1
                                    (L'integral)
                                </h4>
                                <p className="text-[#737373]">
                                    We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.
                                </p>
                                <div className='flex justify-between  md:text-sm'>
                                    <section className='flex items-center gap-2'>
                                        <FontAwesomeIcon icon={faCalendarDays} />
                                        <p className="text-[#737373] cursor-pointer">22 April 2021</p>
                                    </section>
                                    <section className='flex items-center gap-2'>
                                        <FontAwesomeIcon icon={faComment} />
                                        <p className="text-[#737373] cursor-pointer">10 comments</p>
                                    </section>
                                </div>
                                <div className='flex items-center'>
                                    <h5 className="text-[#737373] text-lg font-medium text-center cursor-pointer">Learn More</h5>
                                    <button
                                        className="p-1 rounded-full text-[#23A6F0] "
                                    >
                                        <ChevronRight size={32} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default FeaturedPosts;