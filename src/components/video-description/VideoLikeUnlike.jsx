import { useDispatch, useSelector } from "react-redux";
import Like from "../../assets/like.svg"
import UnLike from "../../assets/unlike.svg"
import { incrementDislike, incrementLike } from "../../features/like_dislike/likeDislikeSlice";
// import { dislike, like } from "../../features/video/videoSlice";
export default function VideoLikeUnlike(){
    const { likes, dislikes } = useSelector((state) => state.likeDislike);
    const dispatch = useDispatch();
    return (
        <div className="flex gap-10 w-48">
            {/* Like */}
            <div className="flex gap-1"  
            >
                <button className="shrink-0" onClick={() => dispatch(incrementLike())}>
                    <img
                        className="w-5 block"
                        src={Like}
                        alt="Like"
                    />
                </button>
                <div
                    className="text-sm leading-[1.7142857] text-slate-800"
                >
                     {likes}
                </div>
            </div>

            {/* Dislike */}
            <div className="flex gap-1" 
            >
                <button className="shrink-0" onClick={() => dispatch(incrementDislike())}>
                    <img
                        className="w-5 block"
                        src={UnLike}
                        alt="Unlike"
                    />
                </button>
                <div
                    className="text-sm leading-[1.7142857] text-slate-800"
                >
                    {dislikes}
                </div>
            </div>
        </div>
    )
}




