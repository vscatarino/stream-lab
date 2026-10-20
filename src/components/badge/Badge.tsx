import type { BadgeProps } from "../../models/badgeProps";

export default function Badge({ label }: BadgeProps) {

    const normalized = (label ?? "").trim();
    if (normalized.length === 0) {
        return null;
    }
    return <span className="badge"> {normalized}</span>
}