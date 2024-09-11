import { ChevronRight } from "lucide-react";

const ProductDescription = ({ currentProduct, productList }) => {

    const highestRatedProduct = productList && productList.length > 0
        ? productList.reduce((prev, current) => (prev.rating > current.rating) ? prev : current)
        : null;

    const highestRatedProductImage = highestRatedProduct && highestRatedProduct.images && highestRatedProduct.images.length > 0
        ? highestRatedProduct.images[0].url
        : currentProduct.images[0].url;

    return (
        <div className="px-20 py-10 flex flex-col gap-8">
            <nav className="flex justify-between gap-2 text-sm items-center text-nowrap text-[#737373] font-medium md:justify-center md:gap-16">
                <a className="hover:font-light hover:underline" href="">Description</a>
                <a className="hover:font-light hover:underline" href="">Additional Information</a>
                <a className="hover:font-light hover:underline" href="">Reviews (0)</a>
            </nav>
            <div className="flex flex-col md:flex-row md:gap-10">
                <div className="py-6 md:w-1/3 h-80 md:h-96">
                    <img className="rounded-xl object-cover w-full h-full" src={highestRatedProductImage} alt="" />
                </div>

                <div className="flex flex-col gap-6 py-4 md:w-1/3 md:justify-around">
                    <h5 className="font-bold text-2xl text-[#252B42]">the quick fox jumps over</h5>
                    <p className="text-[#737373] text-sm">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p className="text-[#737373] text-sm">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p className="text-[#737373] text-sm">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                </div>


                <div className="flex flex-col gap-4 py-4 md:justify-around">
                    <div className="flex flex-col gap-4">
                        <h5 className="font-bold text-2xl text-[#252B42]">
                            the quick fox jumps over
                        </h5>
                        <ul className="font-medium text-sm flex flex-col gap-2 text-[#737373]">
                            <li className="flex">
                                <ChevronRight size={20} />
                                the quick fox jumps over the lazy dog</li>
                            <li className="flex">
                                <ChevronRight size={20} />
                                the quick fox jumps over the lazy dog</li>
                            <li className="flex">
                                <ChevronRight size={20} />
                                the quick fox jumps over the lazy dog</li>
                            <li className="flex">
                                <ChevronRight size={20} />
                                the quick fox jumps over the lazy dog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className="font-bold text-2xl text-[#252B42]">
                            the quick fox jumps over
                        </h5>
                        <ul className="font-medium text-sm flex flex-col gap-2 text-[#737373]">
                            <li className="flex">
                                <ChevronRight size={20} />
                                the quick fox jumps over the lazy dog</li>
                            <li className="flex">
                                <ChevronRight size={20} />
                                the quick fox jumps over the lazy dog</li>
                            <li className="flex">
                                <ChevronRight size={20} />
                                the quick fox jumps over the lazy dog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;