import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";

type PlatformDownloads = {
  name: string;
  url: string;
  type: string;
  arch: string;
};

type LatestBeta = {
  version: string;
  date: string;
  isLatest: boolean;
  isStable: boolean;
  description: string;
  downloads: {
    windows?: PlatformDownloads[];
    macos?: PlatformDownloads[];
    linux?: PlatformDownloads[];
  };
};

export default function BetaDownloadPage(): React.ReactElement {
  const [latest, setLatest] = useState<LatestBeta | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [detectedOs, setDetectedOs] = useState<"windows" | "macos" | "linux" | null>(null);

  useEffect(() => {
    fetch("/api/downloads-beta.json")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((data) => setLatest(data.latest as LatestBeta))
      .catch((e) => setError(String(e)));
  }, []);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.platform || "";
    const lower = ua.toLowerCase();
    if (lower.includes("win")) setDetectedOs("windows");
    else if (lower.includes("mac") || lower.includes("darwin")) setDetectedOs("macos");
    else if (lower.includes("linux") || lower.includes("x11")) setDetectedOs("linux");
    else setDetectedOs(null);
  }, []);

  const getRecommended = () => {
    if (!latest || !detectedOs) return null;
    const list = (latest.downloads as any)[detectedOs] as PlatformDownloads[] | undefined;
    if (!list || list.length === 0) return null;
    return { os: detectedOs, item: list[0] } as { os: "windows" | "macos" | "linux"; item: PlatformDownloads };
  };

  return (
    <Layout title="CodeX Beta Download" description="Download the latest CodeX beta build">
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "40px 20px" }}>
        <h1 style={{ margin: 0 }}>
          Download CodeX <code style={{ padding: "2px 8px", borderRadius: 999, border: "1px solid rgba(127,127,127,0.25)" }}>Beta</code>
        </h1>
        <p style={{ marginTop: 8, opacity: 0.8 }}>
          Get the latest public beta build of CodeX. This channel receives features early and may be less stable.
        </p>

        {error ? (
          <div style={{ color: "#ef4444" }}>Failed to load downloads: {error}</div>
        ) : (
          <div style={{ border: "1px solid rgba(127,127,127,0.25)", borderRadius: 12, padding: 20, marginTop: 16 }}>
            <h2 style={{ marginTop: 0 }}>Latest Beta: v{latest?.version ?? "…"}</h2>
            <p>{latest?.description || "Single universal download page for the beta channel."}</p>

            {(() => {
              const rec = getRecommended();
              if (!rec) return null;
              const label =
                rec.os === "windows"
                  ? "Windows"
                  : rec.os === "macos"
                  ? "macOS"
                  : "Linux";
              return (
                <div style={{
                  border: "1px dashed rgba(127,127,127,0.35)",
                  borderRadius: 12,
                  padding: 16,
                  background: "rgba(37,99,235,0.06)",
                  marginTop: 12,
                }}>
                  <div style={{ marginBottom: 8, fontWeight: 600 }}>Recommended for your system ({label})</div>
                  <a
                    className="button button--primary button--lg"
                    href={rec.item.url}
                    rel="noopener noreferrer"
                  >
                    {rec.item.name}
                  </a>
                </div>
              );
            })()}

            <section style={{ marginTop: 16 }}>
              <h3>Windows</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {latest?.downloads?.windows?.map((d, idx) => (
                  <a key={`win-${idx}`} className="button button--primary" href={d.url} rel="noopener noreferrer">
                    {d.name}
                  </a>
                )) || <span>No builds available</span>}
              </div>
            </section>

            <section style={{ marginTop: 16 }}>
              <h3>macOS</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {latest?.downloads?.macos?.map((d, idx) => (
                  <a key={`mac-${idx}`} className="button button--secondary" href={d.url} rel="noopener noreferrer">
                    {d.name}
                  </a>
                )) || <span>No builds available</span>}
              </div>
            </section>

            <section style={{ marginTop: 16 }}>
              <h3>Linux</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {latest?.downloads?.linux?.map((d, idx) => (
                  <a
                    key={`linux-${idx}`}
                    className="button button--secondary button--lg"
                    href={d.url}
                    rel="noopener noreferrer"
                  >
                    {d.name}
                  </a>
                )) || <span>No builds available</span>}
              </div>
            </section>
          </div>
        )}

        <p style={{ marginTop: 24, opacity: 0.7 }}>
          Looking for Stable? Visit <a href="/download/">/download</a>.
        </p>
      </main>
    </Layout>
  );
}


