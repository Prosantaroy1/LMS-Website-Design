import { useEffect, useState } from "react";
import CoverBannerPage from "../../components/common/CoverBannerPage";
import BlogCard from "../../components/common/BlogCard";
import Sectionheading from "../../components/common/Sectionheading";
import Loading from "../../components/common/loading";

const BlogPage = () => {

    // create to state
    const [blogs, setBlogs] = useState([]);

    // add effect 
    useEffect(() => {
        fetch('/public/BlogData.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])


    return (
        <div>
            <CoverBannerPage
                img='https://utfs.io/f/oI7Ou0bdQ6rjYDCfTpVgoqDshSiVxC6IWeyk5aTJ1jQGwuRL'
                titleName='Blog'
            />
            <div className="container mt-12">
                <div className="py-12">
                    <Sectionheading
                        headingTitle='Letest Blog'
                        headingsubtitle='Lorem ipsum dolor sit amet.'
                    />
                </div>
                {
                    blogs.length > 0 ?
                        <div className="grid grid-cols-1 items-center   gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {
                                blogs.map((blog, idx) => <BlogCard key={idx} blog={blog}></BlogCard>)
                            }
                        </div> : <Loading/>
                }
            </div>
        </div>
    );
};

export default BlogPage;