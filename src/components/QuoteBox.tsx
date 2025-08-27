import React from 'react'

export interface QuoteBoxProps {
  align?: 'left' | 'right'
  imageSrc?: string
  imageAlt?: string
  text?: string
  className?: string
}

const QuoteBox: React.FC<QuoteBoxProps> = ({
  align = 'left',
  imageSrc,
  imageAlt = 'photo',
  text ='',
  className = ''
}) => {
  const isRight = align === 'right';

  return (
    <div className={`w-full min-h-20 my-4 flex ${isRight ? 'justify-end' : 'justify-start'}`}>
      {/* Card */}
      <article
        className={
          `flex items-center gap-4 p-6 rounded-2xl shadow-lg max-w-[min(90%,48rem)] bg-white/90 backdrop-blur-sm dark:bg-gray-800/70 ${
            isRight ? 'flex-row-reverse' : 'flex-row'
          } ${className}`
        }
      >
        {/* Photo */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0"
          />
        )}

        {/* Quote content */}
        <div className="min-w-0">
          <blockquote className="text-left">
            <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100">
              {text}
            </p>
          </blockquote>
        </div>
      </article>
    </div>
  )
}

export default QuoteBox;
