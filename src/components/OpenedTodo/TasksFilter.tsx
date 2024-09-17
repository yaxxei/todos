interface TodoFilterProps {
  filter: string;
  setFilter: (filter: "all" | "active" | "completed") => void;
}

export function TasksFilter({ filter, setFilter }: TodoFilterProps) {
  const filters = ["all", "active", "completed"] as const;
  return (
    <div className="filter">
      {filters.map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
