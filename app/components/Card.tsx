"use client"
import Image from "next/image"
import RateNumber from "./RateNumber"
import { useState } from "react"

export default function Card() {
  const [isSubmited, setIsSubmited] = useState(false)
  const [selectedRate, setSelectedRate] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSelect(rate: number) {
    setSelectedRate(rate)
    setError(null)
  }

  function handleSubmit() {
    if (selectedRate) {
      setIsSubmited(true)
      setError(null)
    } else {
      setError("Please select a rate first!")
    }
  }

  return (
    <div className="bg-black-gradient max-w-80 rounded-[0.9375rem] p-6 md:max-w-[25.75rem] md:rounded-[1.875rem] md:p-8">
      {!isSubmited ? (
        <>
          <div className="bg-neutral-dark-blue flex h-12 w-12 items-center justify-center rounded-full">
            <Image
              src="/images/icon-star.svg"
              alt="star icon"
              width={20}
              height={20}
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold leading-normal md:mt-7 md:text-[1.75rem]">
            How did we do?
          </h1>
          <p className="text-neutral-light-grey mt-2 text-sm leading-[1.375rem] md:text-[0.9375rem]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="mt-6 flex justify-between">
            <RateNumber
              handleClick={() => handleSelect(1)}
              isSelected={selectedRate === 1}
            >
              1
            </RateNumber>
            <RateNumber
              handleClick={() => handleSelect(2)}
              isSelected={selectedRate === 2}
            >
              2
            </RateNumber>
            <RateNumber
              handleClick={() => handleSelect(3)}
              isSelected={selectedRate === 3}
            >
              3
            </RateNumber>
            <RateNumber
              handleClick={() => handleSelect(4)}
              isSelected={selectedRate === 4}
            >
              4
            </RateNumber>
            <RateNumber
              handleClick={() => handleSelect(5)}
              isSelected={selectedRate === 5}
            >
              5
            </RateNumber>
          </div>
          <button
            className="bg-primary-orange  hover:text-primary-orange mt-6 w-full cursor-pointer rounded-full p-3 text-sm font-bold uppercase leading-normal tracking-[0.11669rem] hover:bg-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="h-24 w-36 md:h-[6.75rem] md:w-[10.125rem]">
            <Image
              src="/images/illustration-thank-you.svg"
              alt="illustration thank you"
              width={144}
              height={96}
              layout="responsive"
            />
          </div>
          <h2 className="bg-neutral-dark-blue text-primary-orange mt-6 rounded-full px-3 py-1 text-sm leading-[1.375rem] md:mt-9 md:leading-6 md:text-[0.9375]">
            You selected {selectedRate} out of 5
          </h2>
          <h1 className="mt-6 text-2xl font-bold leading-normal md:mt-8 md:text-[1.75rem]">
            Thank you!
          </h1>
          <p className="text-neutral-light-grey mt-2 text-center text-sm leading-[1.375rem] md:text-[0.9375rem] md:leading-6">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  )
}
