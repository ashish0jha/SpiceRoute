import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#15201A] border-t border-[#1B5230]">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-[#27D673]">
                            AKO FOOD APP
                        </h2>

                        <p className="mt-4 text-[#8FBE9F] text-sm leading-6">
                            Delicious meals delivered fresh to your doorstep.
                            Fast delivery, secure payments, and unforgettable
                            taste.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[#EAF7EE] font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-[#8FBE9F]">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-[#27D673] transition-colors"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-[#27D673] transition-colors"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-[#27D673] transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/cart"
                                    className="hover:text-[#27D673] transition-colors"
                                >
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#EAF7EE] font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3 text-[#8FBE9F] text-sm">
                            <p>📍 Sultanpur, Uttar Pradesh</p>
                            <p>✉️ ashish.23418@knit.ac.in</p>
                        </div>

                        <div className="flex gap-4 mt-6 text-2xl">
                            <a href="https://github.com/ashish0jha" target="_blank" className="hover:scale-110 transition-transform">
                                <img alt="Github icon" className="h-8" src="https://img.icons8.com/?size=160&id=lkh3AbJLmFpp&format=png"/>
                            </a>

                            <a href="https://www.linkedin.com/in/ashish-kumar-ojha-b63428291/" target="_blank" className="hover:scale-110 transition-transform">
                                <img alt="Linkden icon" className="h-8" src="https://img.icons8.com/?size=96&id=13930&format=png"/>
                            </a>
                            <a href="https://leetcode.com/u/ashish0jha/" target="_blank" className="hover:scale-110 transition-transform">
                                <img alt="LeetCode icon" className="h-7" src="https://img.icons8.com/?size=160&id=9L16NypUzu38&format=png"/>
                            </a>

                            <a href="https://www.instagram.com/ashish0jha/" target="_blank" className="hover:scale-110 transition-transform">
                                <img alt="Instagram icon" className="h-8" src="https://img.icons8.com/?size=160&id=aimNrfnvOM9T&format=png"/>
                            </a>

                        </div>
                    </div>

                </div>

                <div className="border-t border-[#1B5230] mt-10 pt-6 flex flex-col md:flex-row justify-around items-center">

                    <p className="text-[#8FBE9F] text-sm">
                        © {new Date().getFullYear()} Foodie. All rights reserved.
                    </p>

                    <p className="text-[#8FBE9F] text-sm mt-3 md:mt-0">
                        Made with ❤️ by Ashish Kumar Ojha
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;