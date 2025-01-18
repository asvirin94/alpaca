'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { generateAlpacaAction, generateAlpacaMoveDistance } from '@/lib/utils'

export default function RunningAlpaca() {
    const [position, setPosition] = useState(0);
    const [direction, setDirection] = useState('right');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const action = generateAlpacaAction()

            if(action === 'move') {
                const distance = generateAlpacaMoveDistance()

                const containerWidth = containerRef?.current?.offsetWidth || 0
                const alpacaWidth = 50

                if (direction === 'right' && position + distance + alpacaWidth <= containerWidth) {
                    setPosition((prev) => prev + distance)
                }

                if (direction === 'right' && position + distance + alpacaWidth > containerWidth) {
                    setDirection('left')
                    setPosition((prev) => prev - distance)
                }

                if (direction === 'left' && position - distance - alpacaWidth >= 0) {
                    setPosition((prev) => prev - distance)
                }

                if (direction === 'left' && position - distance - alpacaWidth < 0) {
                    setDirection('right')
                    setPosition((prev) => prev + distance)
                }
            }

            if(action === 'turn') {
                setDirection(prevState => prevState === 'right' ? 'left' : 'right')
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [direction, position])

    return (
        <div className='absolute bottom-[-2px] w-full z-10' ref={containerRef}>
            <Image
                src={direction === 'right' ? '/alpaca-right.png' : '/alpaca-left.png'}
                alt='Альпака'
                width={50}
                height={75}
                style={{ transform: `translateX(${position}px)`, transition: 'all 0.5s ease' }}
            />
        </div>
    )
}
