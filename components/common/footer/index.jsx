import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

export default function Footer() {
  return (
    <div className="pt-[19.813rem]">
        <TopSection /> {/* top section of footer */}
        <BottomSection /> {/* bottom section of footer */}
    </div>
  );
}