
const Footer = () => {
    return (
        <div className="bg-slate-800 font-Poppins py-20 mt-8 text-white">
            <div className="grid grid-cols-5 font-Poppins container items-start gap-4">
                {/* frist */}
                <div className="col-span-2 space-y-3">
                    <h3 className="text-xl leading-8 font-semibold">Ramakrishna Mission Computer<br /> Training Center,Dhaka</h3>
                    <p className="text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Saepe, earum reprehenderit. Consequuntur.
                    </p>
                </div>
                {/* course link */}
                <div>
                    <h3 className="text-xl font-semibold">Pages</h3>
                    <ul className="space-y-3 pt-6">
                        <li>Home</li>
                        <li>Course</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* last */}
                <div>
                    <h3 className="text-xl font-semibold">Browse Courses</h3>
                    <ul className="space-y-3 pt-6">
                        <li>Web Developement</li>
                        <li>Database administor</li>
                        <li>Graphies</li>
                        <li>Frontend with React</li>
                    </ul>
                </div>
                {/* last */}
                <div>
                    <h3 className="text-xl font-semibold">Insight Community</h3>
                    <ul className="space-y-3 pt-6">
                        <li>Global Partners</li>
                        <li>Help & Support</li>
                        <li>Community</li>
                        <li>Documentation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;