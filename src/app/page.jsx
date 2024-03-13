import CommentBox from "@/components/ui/CommentBox";
import CommentCard from "@/components/ui/CommentCard";
import { comments } from "@/const/comments";

export default function Home() {
  return (
    <main className="container flex items-center justify-center py-20">
      <div className="flex flex-col gap-6 max-w-2xl">
        {comments.map((comment, index) => (
          <>
            <CommentCard
              key={index}
              name={comment.name}
              authUser={comment.auth_user}
              comment={comment.comment}
              commentedAt={comment.commented_at}
              image={comment.avater}
              likes={comment.likes}
            />
            {comment.replys && (
              <div className="flex flex-col gap-6 ml-10 border-l-2 border-gray-300">
                {comment.replys.map((reply, index) => (
                  <CommentCard
                    key={index}
                    name={reply.name}
                    authUser={reply.auth_user}
                    comment={reply.comment}
                    commentedAt={reply.commented_at}
                    image={reply.avater}
                    likes={reply.likes}
                    isReply={true}
                  />
                ))}
              </div>
            )}
          </>
        ))}
        <CommentBox />
      </div>
    </main>
  );
}
