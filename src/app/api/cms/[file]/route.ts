import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN ?? "";
const GITHUB_REPO  = process.env.GITHUB_REPO  ?? "Rituraj-Pokhriyal/ustruct-simple";
const BRANCH       = "master";

async function getFileSha(filename: string): Promise<string | null> {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/data/${filename}.json`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.sha ?? null;
}

// GET — read current JSON
export async function GET(
  _req: NextRequest,
  { params }: { params: { file: string } }
) {
  const { file } = params;
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/data/${file}.json?ref=${BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return NextResponse.json(JSON.parse(content));
}

// POST — update JSON (creates a GitHub commit)
export async function POST(
  req: NextRequest,
  { params }: { params: { file: string } }
) {
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 });
  }

  const { file } = params;
  const body = await req.json();
  const newContent = JSON.stringify(body, null, 2);
  const encoded    = Buffer.from(newContent).toString("base64");
  const sha        = await getFileSha(file);

  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/data/${file}.json`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `cms: update ${file}.json`,
      content: encoded,
      sha: sha ?? undefined,
      branch: BRANCH,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    return NextResponse.json({ error: err.message ?? "GitHub API error" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
