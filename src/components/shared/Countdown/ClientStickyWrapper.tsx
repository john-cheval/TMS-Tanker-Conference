"use client";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import StickyCountDown, { StickyCountDownProps } from "./StickyCountDown";
import { usePathname } from "next/navigation";

type WrapperProps = Omit<StickyCountDownProps, "isVisible">;

const HOME_PAGE_SCROLL_THRESHOLD = 50;
export default function ClientStickyWrapper(props: WrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const scrolledPastThreshold = useScrollVisibility(HOME_PAGE_SCROLL_THRESHOLD);

  let isVisible: boolean;
  if (isHomePage) {
    isVisible = scrolledPastThreshold;
  } else {
    isVisible = true;
  }
  return <StickyCountDown {...props} isVisible={isVisible} />;
}
