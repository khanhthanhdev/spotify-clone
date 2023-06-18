'use client';

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

import { BsPauseFill, BsPlayFill} from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward} from "react-icons/ai";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}


const PlayerContent: React.FC<PlayerContentProps> = ({
    song,
    songUrl
}) => {

    const Icon = false ? BsPauseFill : BsPlayFill;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
        <div className="flex w-full justify-start">
            <div className="flex items-center gap-x-4">
                <MediaItem 
                data={song}
                />
                <LikeButton songId={song.id} />
            </div>
        </div>
        <div className="flex md:hidden col-auto w-full justify-end items-center">
            <div
                onClick={() => {}}
                className="h-10 w-10 flex items-center p-1
                justify-center rounded-full bg-white cursor-pointer
                "
            >
                <Icon size={30} className="text-black" />
            </div>
        </div>

        <div className="
        hidden h-full md:flex items-center justify-center w-full
        max-w-[720px] gap-x-6
        ">
            <AiFillStepBackward size={30} 
            className="text-neutral-400 cursor-pointer hover:text-white transition" 
            onClick={() => {}}
            />
            <div
            onClick={() => {}}
            className="
                flex items-center justify-center rounded-full bg-white
                h-10 w-10 p-1 cursor-pointer
            "
            >
                <Icon size={30} className="text-black" />
            </div>
            <AiFillStepForward size={30} 
            onClick={() => {}}
            className="text-neutral-400 cursor-pointer hover:text-white transition"
            />
        </div>
    </div>
  )
}

export default PlayerContent