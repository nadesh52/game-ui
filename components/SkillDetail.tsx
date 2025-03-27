import Image from "next/image";
import React from "react";
import { ASSET_PREFIX } from "@/constants";

const SkillDetail = ({ skill }: any) => {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex flex-row gap-4 font-medium">
        <Image
          src={`${ASSET_PREFIX}/${skill.icon}`}
          width={28}
          height={24}
          alt="skill-icon"
        />
        <p>{skill.name}</p>
      </div>
      {skill.prerequisite_skills && (
        <p>
          <span className="font-medium">Prerequisite Skills</span>:{" "}
          {skill.prerequisite_skills.join(", ")}
        </p>
      )}
      {skill.maxLv && (
        <p>
          <span className="font-medium">Max Level:</span> {skill.maxLv}
        </p>
      )}
      {skill.group && (
        <p>
          <span className="font-medium">Group:</span> {skill.group}
        </p>
      )}
      {skill.type && (
        <p>
          <span className="font-medium">Type:</span> {skill.type}
        </p>
      )}
      {skill.target && (
        <p>
          <span className="font-medium">Target:</span> {skill.target}
        </p>
      )}
      {skill.recoveryAp && (
        <p>
          <span className="font-medium text-blue-600">Recovery AP:</span>{" "}
          {skill.recoveryAp}
        </p>
      )}
      {skill.consumeAp && (
        <p>
          <span className="font-medium text-red-500">Consume AP:</span>{" "}
          {skill.consumeAp}
        </p>
      )}
      {skill.description && (
        <p className="my-2">
          <span className="font-medium">Description:</span> {skill.description}
        </p>
      )}
      {skill.levels && (
        <div>
          {skill.levels.map((lv: any, idx: any) => (
            <p key={idx}>{`[${lv.rank}]: ${lv.description}`}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillDetail;
