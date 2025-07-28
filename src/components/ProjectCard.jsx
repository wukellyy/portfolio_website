import React from "react";
import PeerReviewJournalImg from "../assets/peer_review_journal_02.png";

const Tag = ({ label }) => {
  return (
    <div className="inline-block bg-neutral-700 text-cream text-sm px-4 py-1 rounded-full font-medium">
      {label}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const { name, role, tags, link, image } = project;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="w-[300px] sm:w-[400px] xl:w-[370px] h-auto p-4 flex flex-col items-center bg-cream border-2 border-neutral-800 rounded-2xl shadow-lg hover:scale-102 ease-in duration-200 gap-4">
        <div class="w-full">
          <img
            src={image}
            alt="Project Image"
            className="w-full h-[200px] object-cover"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <h3 className="font-semibold text-xl truncate max-w-full">{name}</h3>
          <p className="font-medium text-lg">{role}</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {tags.map((tag, idx) => (
              <Tag key={idx} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
