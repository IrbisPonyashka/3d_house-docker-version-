import { ButtonHTMLAttributes, MouseEvent, ReactNode, useEffect } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const IconButton = ({
  children,
  className = '',
  onClick,
  ...props
}: IconButtonProps) => {
  const handleRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const rippleContainer = target.querySelector('.ripple-container') as HTMLSpanElement;

    const circle = document.createElement('span');

    circle.style.width = circle.style.height = `100%`;
    circle.style.left = `0`;
    circle.style.top = `0`;
    circle.className =
      'absolute rounded-full bg-white/10 animate-ripple pointer-events-none';

    rippleContainer.innerHTML = '';
    rippleContainer.appendChild(circle);
  };

  useEffect(() => {
    const styleId = 'ripple-keyframes-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.4;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ripple {
          animation: ripple 0.6s linear;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <button
      {...props}
      onClick={(e) => {
        handleRipple(e);
        onClick?.(e);
      }}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden hover:bg-gray-700 transition-colors duration-150 ${className}`}
    >
      {children}
      <span className="absolute inset-0 ripple-container pointer-events-none" />
    </button>
  );
};
