import { Github, Instagram, Linkedin, QrCode } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#ffffff] text-gray-900 px-6 md:px-16 py-10">
            {/* Top row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                {/* Left: Logo + Project Name */}
                <div>
                    <div className="flex items-center gap-3">
                        {/* Logo placeholder */}
                        <div className="w-8 h-8 rounded-md flex items-center justify-center" > 
                            <QrCode />
                        </div>
                        <h2 className="text-black text-xl font-semibold">
                            PME Project
                        </h2>
                    </div>

                    <p className="mt-3 text-sm text-gray-600">
                        Solar Dehydration Plant – Academic Project
                    </p>

                    <p className="mt-1 text-xs text-gray-700">
                        Made with ❤️ © 2026
                    </p>
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-6 text-xl text-gray-500">
                    <a
                        href="#"
                        className="hover:text-black transition"
                        aria-label="GitHub"
                    >
                        <Github />
                    </a>
                    <a
                        href="#"
                        className="hover:text-black transition"
                        aria-label="Instagram"
                    >
                        <Instagram />
                    </a>
                    <a
                        href="#"
                        className="hover:text-black transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin />
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-8 border-t border-gray-800" />
        </footer>
    );
};

export default Footer;
