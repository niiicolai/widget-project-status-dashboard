const badges = {
  done: { label: "Done", classNames: "bg-emerald-500" },
  in_progress: { label: "In progress", classNames: "bg-orange-500" },
  planned: { label: "Planned", classNames: "bg-blue-500" },
} as {
  [key: string]: { label: string; classNames: string };
};

const fallbackBadge = badges.planned;

export function StatusBadge({ status }: { status: string }) {
  const badge = badges[status] ? badges[status] : fallbackBadge;

  return <span className={`text-white p-1 rounded-md text-xs ${badge.classNames}`}>{badge.label}</span>;
}
