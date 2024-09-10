import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchPost } from "../features/postSlice";

const PostView = () => {
    const dispatch = useDispatch();
    const { posts, isLoading, error } = useSelector(state => (state.postR));


    useEffect(() => {
        dispatch(fatchPost())
    }, [dispatch]);


    console.log("Post data", posts);

    return (
        <div>
            <h2>{isLoading}</h2>
            <h1>{error}</h1>
            <article>
                {posts && posts?.map(post => {
                    return (
                        <section style={{ border: "3px solid gray", padding: "12px", margin: "5px", }} key={post.id}>
                            <h2>{post.id}</h2>
                            <h3>{post?.title}</h3>
                            <p>{post.body}</p>

                        </section>
                    )
                })}
            </article>
        </div>
    );
};

export default PostView;