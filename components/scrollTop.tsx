import React, { useRef, useEffect } from 'react';

export default function ScrollTop({el}: {el:React.RefObject<HTMLDivElement>}) {
    // 创建一个引用，用于获取DOM元素
    const scrollToTopRef = useRef<HTMLButtonElement>(null);

    // 定义滚动到顶部的函数
    const scrollToTop = () => {
        el.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // 添加点击事件监听器
    useEffect(() => {
        if (scrollToTopRef.current) {
            scrollToTopRef.current.addEventListener('click', scrollToTop);
            return () => scrollToTopRef.current?.removeEventListener('click', scrollToTop);
        }
        return undefined;
    }, []);

    return (
        <div className="fixed bottom-20 right-20 z-50 rotate-180">
            <button 
                ref={scrollToTopRef}
                type="button"
                className="w-6 h-6 focus:outline-none cursor-pointer"
            >
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </button>
        </div>
    );
}