import Image from "next/image";

const CommentBox = () => {
  return (
    <form className="flex items-center gap-4 bg-white rounded-lg px-6 py-4 max-xs:flex-col">
      <Image
        src={"/assets/img/profile-photo/profile-four.jpg"}
        alt="user"
        width={40}
        height={40}
        className="rounded-full self-start"
      />
      <div className="flex sm:items-center gap-4 w-full max-sm:flex-col max-sm:items-end">
        <textarea
          className="w-full h-20 p-4 border border-gray-300 rounded-lg focus:outline-purple-primary"
          placeholder="Add a comment..."
        ></textarea>
        <button
          type="submit"
          className="sm:self-start bg-purple-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default CommentBox;
