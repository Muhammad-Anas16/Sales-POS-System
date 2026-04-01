const Cart = ({
  icon: Icon,
  iconColor,
  iconBackground,
  Background,
  title,
  subTitle,
  subTitleColor,
  bottomColor,
  bottomDotColor,
  bottomTitle
}) => {
  return (
    <button
      className="overflow-hidden backdrop-blur-md p-8 rounded-3xl shadow-[0_12px_40px_rgba(57,102,98,0.05)] text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
      style={{ backgroundColor: Background }}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top */}
        <div>
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
            style={{ backgroundColor: iconBackground }}
          >
            {Icon && <Icon size={24} color={iconColor} />}
          </div>

          <h2 className="font-headline text-2xl font-bold mb-1" style={{ color: subTitleColor }}>
            {title}
          </h2>

          <p className="text-sm font-medium" style={{ color: subTitleColor }}>
            {subTitle}
          </p>
        </div>

        {/* Bottom (only if exists) */}
        {bottomTitle && (
          <div className="mt-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: bottomColor }}
            >
              {/* Animated Dot */}
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: bottomDotColor }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: bottomDotColor }}
                />
              </span>

              {bottomTitle}
            </div>
          </div>
        )}
      </div>
    </button>
  )
}

export default Cart
