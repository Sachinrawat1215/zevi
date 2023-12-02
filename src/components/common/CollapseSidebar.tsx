import Rating from "@components/Products/Rating";
import { Arrow } from "@icons/Arrow";
import { useRef, FC } from "react";

interface SidebarOption {
  title: string;
  optionsLabel: (string | number)[];
}

const CollapseSidebar: FC<{ option: SidebarOption }> = ({ option }) => {
  const { title, optionsLabel } = option;
  const isRatingOption: boolean = title === "RATINGS";
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const handleCollapse = () => {
    const currentElementStyle = containerRef.current?.style;
    const arrowElementStyle = arrowRef.current?.style;
    if (currentElementStyle && arrowElementStyle) {
      currentElementStyle.height !== "40px"
        ? (currentElementStyle.height = "40px")
        : (currentElementStyle.height = "auto");
      currentElementStyle.height !== "40px"
        ? (arrowElementStyle.transform = "rotate(180deg)")
        : (arrowElementStyle.transform = "rotate(0deg)");
    }
  };

  return (
    <div
      ref={containerRef}
      className={`collapse-container collapse${title} ${
        isRatingOption ? "rating" : ""
      }`}
    >
      <div onClick={handleCollapse} className="title">
        <p>{title}</p>
        <div ref={arrowRef}>
          <Arrow />
        </div>
      </div>
      {optionsLabel.map((optionLabel, index) => (
        <div key={index} className="checkbox-options">
          <input
            type="checkbox"
            name={String(optionLabel)}
            id={String(optionLabel)}
          />
          {isRatingOption ? (
            <label htmlFor={String(optionLabel)}>
              <Rating rate={Number(optionLabel)} />
            </label>
          ) : (
            <label htmlFor={String(optionLabel)}>{optionLabel}</label>
          )}
        </div>
      ))}
      {!isRatingOption && <hr />}
    </div>
  );
};

export default CollapseSidebar;
