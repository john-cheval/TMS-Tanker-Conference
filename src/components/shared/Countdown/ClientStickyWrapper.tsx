"use client";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import { useFooterReached } from "@/hooks/useFooterReach";
import StickyCountDown, { StickyCountDownProps } from "./StickyCountDown";
import { usePathname } from "next/navigation";

type WrapperProps = Omit<StickyCountDownProps, "isVisible">;

const HOME_PAGE_SCROLL_THRESHOLD = 50;
export default function ClientStickyWrapper(props: WrapperProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const scrolledPastThreshold = useScrollVisibility(HOME_PAGE_SCROLL_THRESHOLD);

  const reachedFooter = useFooterReached(100);

  let isVisible = true;

  if (reachedFooter) {
    isVisible = false; // ❌ footer always hides
  } else if (isHomePage) {
    isVisible = scrolledPastThreshold; // home page rule
  } else {
    isVisible = true; // other pages always visible
  }
  
  return <StickyCountDown {...props} isVisible={isVisible} />;
}
