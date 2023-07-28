import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export interface TPlaylistSearchParam  extends Params{
    playlistID?:string
}

export interface TSectionIdParam extends Params {
    sectionID?: string;
}