const About = () => {
    return (
        <div className="bg-[#15201A] min-h-screen">
            <div className="max-w-3xl mx-auto px-6 py-12">

                <div className="text-center mb-14">
                    <div className="w-16 h-16 rounded-full bg-[#27D673] flex items-center justify-center mx-auto mb-5 text-[#06250F] font-extrabold text-2xl">
                        AKO
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#EAF7EE] mb-3">
                        Ashish Kumar Ojha
                    </h1>
                    <p className="text-[#8FBE9F] text-base md:text-lg max-w-xl mx-auto">
                        Final year Electronics student at Kamla Nehru Institute of Technology, Sultanpur.
                        I build full-stack web applications that solve real problems — focused on clean architecture,
                        meaningful UX, and shipping things that actually work end to end.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
                        <a
                            href="https://github.com/ashish0jha"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#0E2A18] border border-[#1B5230] text-[#27D673] text-sm font-medium hover:bg-[#123B22] transition-colors duration-200">
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ashish-kumar-ojha-b63428291/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#0E2A18] border border-[#1B5230] text-[#27D673] text-sm font-medium hover:bg-[#123B22] transition-colors duration-200">
                            LinkedIn
                        </a>
                        <a
                            href="mailto:ashish.23418@knit.ac.in"
                            className="px-4 py-1.5 rounded-full bg-[#0E2A18] border border-[#1B5230] text-[#27D673] text-sm font-medium hover:bg-[#123B22] transition-colors duration-200">
                            Email
                        </a>
                    </div>
                </div>

                <div className="h-px bg-[#1B5230] mb-14"></div>

                <div className="mb-14">
                    <h2 className="text-xl md:text-2xl font-bold text-[#EAF7EE] mb-4">
                        About <span className="text-[#27D673]">SpiceRoute</span>
                    </h2>
                    <p className="text-[#8FBE9F] text-sm md:text-base leading-relaxed mb-4">
                        SpiceRoute is a full-stack food delivery application built from scratch.
                        A complete product with its own backend, database, authentication system, and payment integration.
                        The goal was to build something that mirrors what a real production application looks like:
                        paginated APIs, protected routes, persistent cart, webhook-verified payments, and AI-powered help chat.
                    </p>
                    <p className="text-[#8FBE9F] text-sm md:text-base leading-relaxed">
                        Every layer was built and deployed independently — the React frontend on Vercel,
                        the Express backend on Render, and the database on MongoDB Atlas.
                        The entire codebase reflects deliberate decisions about architecture, not just working code.
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-14">
                    <h2 className="text-xl md:text-2xl font-bold text-[#EAF7EE] mb-5">Tech Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "React 19",
                            "Redux Toolkit",
                            "React Router DOM 6",
                            "Tailwind CSS 4",
                            "Node.js",
                            "Express",
                            "MongoDB + Mongoose",
                            "JWT + HTTP-only Cookies",
                            "Razorpay",
                            "Groq AI",
                            "Axios",
                            "Parcel 2"
                        ].map((tech) => (
                            <div
                                key={tech}
                                className="bg-[#123B22] border border-[#1B5230] rounded-xl px-4 py-2.5 text-[#EAF7EE] text-sm font-medium text-center hover:border-[#27D673]/50 transition-colors duration-200">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Features */}
                <div className="mb-14">
                    <h2 className="text-xl md:text-2xl font-bold text-[#EAF7EE] mb-5">What This App Does</h2>
                    <div className="flex flex-col gap-3">
                        {[
                            "Infinite scroll restaurant listing with paginated backend API and IntersectionObserver",
                            "Full checkout flow — cart, Razorpay payment, webhook verification, order history",
                            "JWT authentication with HTTP-only cookies and protected route architecture",
                            "Cart persistence per user — quantity management stored in MongoDB",
                            "AI-powered help chat using Groq API with Llama 3",
                            "Fully responsive across mobile, tablet, and desktop",
                            "Shimmer loading skeletons, toast notifications, avatar dropdown via React Portal"
                        ].map((feature) => (
                            <div key={feature} className="flex items-start gap-3">
                                <span className="text-[#27D673] mt-0.5 shrink-0 text-sm">→</span>
                                <p className="text-[#8FBE9F] text-sm md:text-base">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-px bg-[#1B5230] mb-14"></div>
                <a href="http://13.236.147.238/" target="_blank">
                    <div className="mb-14 cursor-pointer">
                        <h2 className="text-xl md:text-2xl font-bold text-[#EAF7EE] mb-5">Other Projects</h2>
                        <div className="bg-[#123B22] border border-[#1B5230] rounded-2xl p-5 hover:border-[#27D673]/40 transition-colors duration-200">
                            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                                <h3 className="text-[#EAF7EE] font-bold text-base">DevNexus</h3>
                                <span className="text-[11px] text-[#27D673] bg-[#0E2A18] border border-[#1B5230] px-2.5 py-0.5 rounded-full">
                                    Full Stack
                                </span>
                            </div>
                            <p className="text-[#8FBE9F] text-sm leading-relaxed mb-3">
                                A developer networking platform — built with React, Redux Toolkit,
                                Socket.io for real-time chat, Cloudinary for image uploads, and Razorpay for premium membership.
                                Deployed on AWS EC2 with Nginx as a reverse proxy and PM2 for process management.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Socket.io", "Node.js", "MongoDB", "AWS EC2", "Nginx"].map((tag) => (
                                    <span key={tag} className="text-[11px] text-[#8FBE9F] bg-[#0E2A18] border border-[#1B5230] px-2.5 py-0.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
                

                <div className="h-px bg-[#1B5230] mb-14"></div>

                <div className="text-center pb-6">
                    <p className="text-[#8FBE9F] text-sm">
                        CGPA 8.98 — Kamla Nehru Institute of Technology, Sultanpur — Batch 2027
                    </p>
                    <p className="text-[#8FBE9F]/50 text-xs mt-2">
                        Built and deployed by Ashish Kumar Ojha
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About;