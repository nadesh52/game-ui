"use client";
import React, { useEffect, useRef } from "react";
import SkillDetail from "./SkillDetail";
import { jobSkills } from "@/constants/jobSkill";
import { jobQuest } from "@/constants/jobQuest";

interface Job {
  id: string;
  frame: string;
  description: string;
  male: string;
  female: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  action: string;
  job: Job;
}

const Modal = ({ isOpen, onClose, action, job }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable background scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Ensure scrolling is restored on unmount
    };
  }, [isOpen, onClose]);

  if (!isOpen || !job?.id) return null;

  const jobInfo = jobSkills.find((jobSkill: any) => jobSkill.id === job.id);
  const jobVdo = jobQuest.find((jobQuest: any) => jobQuest.id === job.id);

  return (
    <div className="bg-opacity-50 bg-background/95 fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="relative max-h-[80vh] w-[800px] overflow-y-auto rounded-lg bg-white p-6 shadow-lg"
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        {action === "skill" && (
          <>
            <p className="mb-2 text-xs text-red-500">
              *some of skills (not all)
            </p>
            <div className="space-y-4 divide-y-2 divide-gray-200 text-gray-700">
              {jobInfo.skills.map((skill: any, idx: any) => (
                <SkillDetail key={idx} skill={skill} />
              ))}
            </div>
          </>
        )}

        {action === "quest" && (
          <div className="flex items-center justify-center">
            <iframe
              width="700"
              height="394"
              src={jobVdo?.URL}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
