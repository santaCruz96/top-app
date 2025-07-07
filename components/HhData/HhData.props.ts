import { HhData } from "@/interfaces/page.interface";
import { ReactNode } from "react";

export interface HhDataProps extends HhData {
    color?: "white" | "blue";
    children?: ReactNode;
}
