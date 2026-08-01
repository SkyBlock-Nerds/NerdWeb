export function createReleaseString(gitSha?: string): string {
    return "nerdweb@" + (gitSha ?? "unknown");
}
