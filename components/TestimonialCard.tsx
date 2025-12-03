import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const photo = testimonial.metadata?.photo
  const rating = testimonial.metadata?.rating || 0

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating ? 'text-yellow-400' : 'text-gray-600';
      return { filled, index };
    });
  };

  return (
    <div className="bg-secondary-light rounded-lg p-6 border border-gray-800 card-hover">
      {/* Rating */}
      <div className="flex text-yellow-400 mb-4">
        {renderStars(rating).map(({ filled, index }) => (
          <svg
            key={index}
            className={`w-5 h-5 ${filled}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 mb-6 line-clamp-4">
        "{testimonial.metadata?.testimonial_text}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.customer_name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        <div>
          <p className="text-gray-100 font-semibold">
            {testimonial.metadata?.customer_name}
          </p>
          {testimonial.metadata?.company && (
            <p className="text-gray-400 text-sm">
              {testimonial.metadata.company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}