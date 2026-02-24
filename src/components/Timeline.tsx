import type { Milestone } from '../data/company'

interface TimelineProps {
  milestones: Milestone[]
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Center line - desktop only */}
      <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-navy/20 md:left-1/2 md:block md:-translate-x-px" />

      {/* Left line - mobile only */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-navy/20 md:hidden" />

      <div className="space-y-10">
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0

          return (
            <div
              key={milestone.year}
              className="relative flex items-start"
            >
              {/* Mobile layout */}
              <div className="flex items-start md:hidden">
                {/* Year circle */}
                <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white shadow-md">
                  {milestone.year}
                </div>
                {/* Event card */}
                <div className="ml-6 rounded-lg bg-white p-4 shadow-sm">
                  <p className="text-sm font-medium text-gray-700">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden w-full items-center md:flex">
                {isLeft ? (
                  <>
                    {/* Left card */}
                    <div className="w-1/2 pr-12 text-right">
                      <div className="inline-block rounded-lg bg-white p-4 shadow-sm">
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                    {/* Center circle */}
                    <div className="absolute left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-navy text-sm font-bold text-white shadow-md">
                      {milestone.year}
                    </div>
                    {/* Right spacer */}
                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    {/* Left spacer */}
                    <div className="w-1/2" />
                    {/* Center circle */}
                    <div className="absolute left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-navy text-sm font-bold text-white shadow-md">
                      {milestone.year}
                    </div>
                    {/* Right card */}
                    <div className="w-1/2 pl-12">
                      <div className="inline-block rounded-lg bg-white p-4 shadow-sm">
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
