function Card({
  title,
  desc,
  name,
  bgColor,
  variant = "default",
  dir = "flex-row",
  alignment = "items-start",
  border = "border-none",
  icons: Icon, 
  clipping=" ",
  clippinghead=" ",
  size="text-[16px]",
  a2="flex-col"
}) {
  const style =
    variant === "gradient"
      ? {
          backgroundImage: `linear-gradient(to bottom, ${bgColor}, #DDB04B)`,
        }
      : variant === "solid"
      ? {
          backgroundColor: bgColor,
          backgroundImage: "none",
        }
      : {
          backgroundColor: "#2E2552",
          backgroundImage: "none",
        };

  return (
    <div
      className={`flex flex-col ${dir} ${alignment} ${border} rounded-4xl p-16 align-text-top`}
      style={{ gridArea: name, ...style }}>

      <div className={`flex ${a2} gap-5 items-center justify-center`}>
        {Icon && <Icon className="shrink-0" />}
        {title && <h1 className={`${clippinghead} text-4xl font-bold`}>{title}</h1>}
      </div>
        {desc && (<div className={`${size} flex self-center font-semibold leading-tight max-w-md ${clipping}`}>{desc}</div>)}
    </div>
  );
}

export default Card;
