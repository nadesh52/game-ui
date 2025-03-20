"use client";
import Image from "next/image";
import React, { useState } from "react";
import { iniClass, jobList } from "@/constants";
import Modal from "./Modal";

const CharacterDetail = () => {
  const [selectedClass, setSelectedClass] = useState<any>(iniClass);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");

  const handleNext = () => {
    setSelectedClass((prevClass: any) => {
      const currentIndex = jobList.indexOf(prevClass);
      const nextIndex = (currentIndex + 1) % jobList.length;
      return jobList[nextIndex];
    });
  };

  const handlePrevious = () => {
    setSelectedClass((prevClass: any) => {
      const currentIndex = jobList.indexOf(prevClass);
      const prevIndex = (currentIndex - 1 + jobList.length) % jobList.length;
      return jobList[prevIndex];
    });
  };

  const openModal = (action: string) => {
    setSelectedAction(action);
    setIsModalOpen(true);
  };

  return (
    <section className="relative mx-auto w-[864px] pb-20">
      <div className="mt-10 flex justify-center pointer-events-none select-none">
        <Image
          src="/assets/images/logo-class.png"
          width={518}
          height={300}
          alt="logo"
        />
      </div>
      <div className="mx-auto my-10 flex max-w-lg flex-wrap items-center justify-center gap-4">
        {jobList.map((job: any) => (
          <button
            key={job.id}
            onClick={() => setSelectedClass(job)}
            className={`cursor-pointer rounded-md transition-all duration-200 hover:scale-110 hover:grayscale-0 ${
              selectedClass.id === job.id ? "scale-110" : "grayscale-[80%]"
            }`}
          >
            <Image src={job.frame} width={64} height={64} alt="jobs" />
          </button>
        ))}
      </div>

      <div className="relative">
        {/* Character Image */}
        <div
          className="animate-fade-in-top relative z-20"
          key={selectedClass.id}
        >
          <div className="flex flex-row items-center">
            {/* Previous Button */}
            <button onClick={handlePrevious} className="btn order-1 h-fit">
              Back
            </button>

            {/* Next Button */}
            <button onClick={handleNext} className="btn order-3 h-fit">
              Next
            </button>

            <Image
              src={selectedClass.description}
              width={864}
              height={600}
              alt="character"
              className="relative z-20 order-2 shadow-md"
            />
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-row items-center justify-around">
            <button onClick={() => openModal("skill")} className="btn">
              <Image
                src="/assets/images/skill-btn.png"
                width={240}
                height={87}
                alt="btn"
              />
            </button>
            <button onClick={() => openModal("quest")} className="btn">
              <Image
                src="/assets/images/quest-btn.png"
                width={240}
                height={87}
                alt="btn"
              />
            </button>
          </div>
        </div>

        {/* Job images positioned behind the character */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <Image
            key={`${selectedClass.id}-male`} // Forces re-render
            src={selectedClass.male}
            width={736}
            height={800}
            alt="jobs"
            className="animate-fade-in-left absolute top-[-120px] left-[-450px]"
          />
          <Image
            key={`${selectedClass.id}-female`} // Forces re-render
            src={selectedClass.female}
            width={736}
            height={800}
            alt="jobs"
            className="animate-fade-in-right absolute top-[-120px] right-[-450px]"
          />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        action={selectedAction}
        job={selectedClass}
      />
    </section>
  );
};

export default CharacterDetail;
