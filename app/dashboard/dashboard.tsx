import type { Project } from "../types/project";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ViewProject from "./ViewProject";
import ViewError from "./ViewError";
import ViewList from "./ViewList";
import ViewLoader from "./ViewLoader";

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [URLSearchParams] = useSearchParams();
  const dataUrl = URLSearchParams.get("data_url");
  const displayCredit = URLSearchParams.get("display_credit") === "1";

  useEffect(() => {
    if (!dataUrl) return;

    fetch(dataUrl)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText || ""}`
          );
        }

        return response.json();
      })
      .then((data: { projects: Project[] | undefined }) => {
        setProjects(data.projects ?? [] );
      })
      .catch((error) => {
        setFetchError(`Failed to fetch data: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [dataUrl]);

  if (!dataUrl) {
    return (
      <ViewError
        title="Missing Data URL"
        description="Please provide a data URL parameter pointing to your projects data."
        help="?data_url=https://example.com/projects.json"
      />
    );
  }

  if (fetchError) {
    return (
      <ViewError
        title="Fetch Error"
        description={fetchError}
        help="Ensure the data_url points to the correct URL."
      />
    );
  }

  if (fetchError) {
    return (
      <ViewError
        title="Fetch Error"
        description={fetchError}
        help="Ensure the data_url points to the correct URL."
      />
    );
  }

  if (isLoading) {
    return <ViewLoader />
  }

  if (projects && !projects.length) {
    return (
      <ViewError
        title="No projects found"
        description="The data source returned no project items."
        help="Ensure the data_url points to the correct URL and the endpoint is populated."
      />
    );
  }

  if (projects?.length && selectedIndex !== -1) {
    return (
      <ViewProject
        project={projects[selectedIndex]}
        deselectProject={() => setSelectedIndex(-1)}
      />
    );
  }

  return (
    <ViewList
      projects={projects}
      displayCredit={displayCredit}
      selectProject={(i: number) => setSelectedIndex(i)}
    />
  );
}
