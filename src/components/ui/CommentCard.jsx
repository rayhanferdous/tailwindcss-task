import Image from "next/image";
import React from "react";
import PlusIcon from "../svg/PlusIcon";
import MinusIcon from "../svg/MinusIcon";
import IconBtn from "./IconBtn";
import ReplyIcon from "../svg/ReplyIcon";
import TrashBinIcon from "../svg/TrashBinIcon";
import PencilIcon from "../svg/PencilIcon";

const CommentCard = ({
  likes,
  image,
  name,
  commentedAt,
  authUser,
  comment,
  isReply,
}) => {
  return (
    <div
      className={`w-fit bg-white rounded-lg px-6 py-4 ${
        isReply ? "ml-10 max-xs:ml-4" : ""
      }`}
    >
      <div className="flex gap-5 max-xs:flex-col">
        <div className="flex flex-col max-xs:flex-row items-center justify-between max-h-[5.5rem] bg-like-btn-color rounded-lg py-1.5 px-2.5">
          <PlusIcon />
          <span className="font-semibold text-sm text-purple-primary">
            {likes}
          </span>
          <MinusIcon />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-3 w-full">
            <Image
              src={image}
              alt="amyrobson"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center max-md:gap-3.5 md:gap-5 max-md:flex-wrap">
                <div className="flex items-center gap-3 max-md:flex-wrap">
                  <p className="text-sm text-slate-900 font-semibold">{name}</p>
                  {authUser && (
                    <span className="bg-purple-primary leading-none px-2 py-1 rounded-sm text-white text-xs font-semibold">
                      you
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-gray-primary">
                  {commentedAt}
                </p>
              </div>
              <div className="flex items-center gap-6 max-sm:flex-col">
                {authUser ? (
                  <>
                    <IconBtn
                      icon={<TrashBinIcon />}
                      title={"Delete"}
                      textColor={"text-trash-bin"}
                    />
                    <IconBtn icon={<PencilIcon />} title={"Edit"} />
                  </>
                ) : (
                  <IconBtn icon={<ReplyIcon />} title={"Reply"} />
                )}
              </div>
            </div>
          </div>
          <p
            className="text-sm mt-2 text-gray-primary font-medium"
            dangerouslySetInnerHTML={{
              __html: comment,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
