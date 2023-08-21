import Link from "./Link";

import links from "../data/links";

function Links() {
  console.log(links);
  return (
    <div className="links">
      {links.map((link) => (
        <Link details={link} />
      ))}
    </div>
  );
}

export default Links;
