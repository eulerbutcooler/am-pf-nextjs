import ProjectTile from "./ProjectTile";

export default function Projects() {
  return (
    <div className="mt-20 flex flex-row justify-center-safe gap-30">
      <ProjectTile
        title="PRISM"
        img="prism.png"
        ghlink="https://github.com/eulerbutcooler/prism-backend"
        livelink="https://prism2025.tech"
        about="Website for Lucknow University's tech fest enabling students from all over India to register for it. Implemented auth, database schema, validation checks etc."
        hashtags={["Nodejs", "Express", "React", "Postgres", "Docker"]}
      ></ProjectTile>
      <ProjectTile
        title="MAIDAAN"
        img="maidaan.png"
        ghlink="https://github.com/eulerbutcooler/Maidaan-Extra-Cool"
        livelink="https://prism2025.tech"
        about="A social sports event management platform enabling organization to host tournaments and players to participate seamlessly."
        hashtags={["TailwindCSS", "Axios", "React", "Typescript"]}
      ></ProjectTile>
      <ProjectTile
        title="GUIDEFOX"
        img="guidefox.png"
        ghlink="https://github.com/eulerbutcooler/bluewave-onboarding"
        livelink="https://guidefox-demo.bluewavelabs.ca/"
        about="Contributed to Guidefox by Bluewave labs, Canada. Refactored the backend, wrote tests and added validations"
        hashtags={["Express", "React", "Javascript", "Zod"]}
      ></ProjectTile>
    </div>
  );
}
