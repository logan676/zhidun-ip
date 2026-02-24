import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '../data/services'

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            type="button"
            className="flex w-full items-center justify-between py-4 text-left"
            onClick={() => toggle(index)}
          >
            <span className="font-medium text-navy">{item.question}</span>
            <ChevronDown
              className={`ml-4 h-5 w-5 flex-shrink-0 text-navy transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="px-4 text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
