import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { resolve } from "node:path"

export async function GET() {
  const skillPath = "/.well-known/agent-skills/navigate-pavan-rao-site/SKILL.md"
  const skill = await readFile(resolve("public", skillPath.slice(1)))
  const digest = createHash("sha256").update(skill).digest("hex")

  return new Response(
    JSON.stringify(
      {
        $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
        skills: [
          {
            name: "navigate-pavan-rao-site",
            type: "skill-md",
            description:
              "Find and cite public information about Pavan Rao's career, resume, technical experience, travel, and music on pavanpej.com.",
            url: skillPath,
            digest: `sha256:${digest}`,
          },
        ],
      },
      null,
      2,
    ),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  )
}
