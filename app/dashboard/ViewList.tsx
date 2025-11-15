import { StatusBadge } from "../components/StatusBadge";
import type { Project } from "../types/project";

export default function ViewList({
  projects,
  displayCredit,
  selectProject,
}: {
  projects: Project[];
  displayCredit: boolean;
  selectProject: (i: number) => void;
}) {

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
      style={{ height: "270px" }}
    >
      <div className="p-6 flex-1 overflow-hidden">
        <div className="flex gap-6 overflow-x-auto pb-4 h-full scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors flex-shrink-0 w-80 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.name}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Status:
                  </span>
                  <StatusBadge status={project.status} />
                </div>
              </div>

              <div className="flex gap-3 text-sm">
                <button
                  onClick={() => selectProject(index)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors cursor-pointer"
                >
                  View Details
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {displayCredit && (
        <div className="h-16 px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex items-center flex-shrink-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Want a project status dashboard on your website?{" "}
            <a
              href="https://github.com/niiicolai/repository-name"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              Get the code
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
