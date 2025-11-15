import type { Project } from "../types/project";
import { StatusBadge } from "../components/StatusBadge";

export default function ViewProject({
  project,
  deselectProject,
}: {
  project: Project;
  deselectProject: () => void;
}) {
  return (
    <div
      className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
      style={{ minHeight: "270px" }}
    >
      <button
        onClick={() => deselectProject()}
        className="mb-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
      >
        Back to all projects
      </button>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h2>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Started:</span>{" "}
            {new Date(project.startDate).toLocaleDateString()}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Status:
            </span>
            <StatusBadge status={project.status} />
          </div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="flex items-center gap-3">
        {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            Website
        </a>
        )}

        {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            GitHub
        </a>
        )}
      </div>
    </div>
  );
}
