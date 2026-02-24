import type { ProcessStep } from '../data/services'

interface ProcessFlowProps {
  steps: ProcessStep[]
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <>
      {/* Desktop: Horizontal flow */}
      <div className="hidden md:flex md:items-start md:justify-center">
        {steps.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="flex w-32 flex-col items-center text-center lg:w-40">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                {item.step}
              </div>
              <h3 className="mt-3 text-sm font-bold text-navy">{item.title}</h3>
              <p className="mt-1 text-xs text-gray-600">{item.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="mt-6 flex flex-1 items-center px-1">
                <div className="h-0.5 w-full bg-gray-300" />
                <div className="-ml-1 h-0 w-0 border-y-4 border-l-6 border-y-transparent border-l-gray-300" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden">
        {steps.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {item.step}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 flex-1 bg-navy/20" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="font-bold text-navy">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
