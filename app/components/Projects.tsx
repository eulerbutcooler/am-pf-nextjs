import { TiThList } from "react-icons/ti";
import ProjectTile from "./ProjectTile";

export default function Projects() {
  return (
    <div className="mt-20 flex flex-row justify-around">
      <ProjectTile
        title="Prism-Backend"
        ghlink="https://github.com/eulerbutcooler/prism-backend#"
        livelink="https://prism2025.tech"
        about="Backend for the college tech fest"
        hashtags={["nodejs", "jwt", "cloudflare"]}
      ></ProjectTile>
      <ProjectTile
        title="Prism-Backend"
        ghlink="https://github.com/eulerbutcooler/prism-backend#"
        livelink="https://prism2025.tech"
        about="Backend for the college tech fest"
        hashtags={["nodejs", "jwt", "cloudflare"]}
      ></ProjectTile>
      <ProjectTile
        title="Prism-Backend"
        ghlink="https://github.com/eulerbutcooler/prism-backend#"
        livelink="https://prism2025.tech"
        about="Backend for the college tech fest"
        hashtags={["nodejs", "jwt", "cloudflare"]}
      ></ProjectTile>
      <ProjectTile
        title="Prism-Backend"
        ghlink="https://github.com/eulerbutcooler/prism-backend#"
        livelink="https://prism2025.tech"
        about="Backend for the college tech fest"
        hashtags={["nodejs", "jwt", "cloudflare"]}
      ></ProjectTile>
    </div>
  );
}
