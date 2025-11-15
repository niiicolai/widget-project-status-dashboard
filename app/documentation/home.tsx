
export default function Home() {
  const dashboardUrl = `http://localhost:5173/widget-project-status-dashboard/#/dashboard/?data_url=http://localhost:5173/widget-project-status-dashboard/projects.json`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        Project Status Dashboard
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Display projects from a data URL in an embeddable iframe.
      </p>
      <a
        href="https://github.com/niiicolai/widget-project-status-dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors mb-6 inline-block"
      >
        GitHub Repository
      </a>

      <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
        <div>Start Date: 15/11/2025</div>
        <div>Last Update: 15/11/2025</div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Demo
        </h2>
        <iframe src={dashboardUrl} width="100%" height="270px"></iframe>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Setup
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Add this iframe to your website or README:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          {`<iframe 
  src="https://niiicolai.github.io/widget-project-status-dashboard/#/dashboard?data_url=YOUR_DATA_URL" 
  height="270px"
  width="600px">
</iframe>`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Data Format
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Host a JSON file with this structure:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          {`{
  "projects": [
    {
      "name": "Project 1",
      "status": "done",
      "description": "Your project description here",
      "startDate": "2025-01-15",
      "github": "https://github.com/user/repo"
    },
    {
      "name": "Project 2",
      "status": "in progress",
      "description": "Another project description",
      "startDate": "2025-03-20",
      "github": "https://github.com/user/repo2"
    }
  ]
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Status Values
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              done
            </code>{" "}
            - Completed projects
          </li>
          <li>
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              in progress
            </code>{" "}
            - Active projects
          </li>
          <li>
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              planned
            </code>{" "}
            - Future projects
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Example
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Host your JSON at{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            https://example.com/projects.json
          </code>{" "}
          and use:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
          {`<iframe 
  src="https://niiicolai.github.io/widget-project-status-dashboard/#/dashboard?data_url=https://example.com/projects.json" 
  height="270px"
  width="600px">
</iframe>`}
        </pre>
        <p>
          Add the following to the iframe src attribute to display credit
          footer:
        </p>
        <pre className="mb-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
          &display_credit=1
        </pre>
      </section>
    </div>
  );
}
