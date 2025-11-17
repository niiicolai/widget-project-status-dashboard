import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import ViewProject from "./ViewProject";
import ViewError from "./ViewError";
import ViewList from "./ViewList";
import ViewLoader from "./ViewLoader";

export default function Dashboard() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [URLSearchParams] = useSearchParams();
  const dataUrl = URLSearchParams.get("data_url");
  const displayCredit = URLSearchParams.get("display_credit") === "1";

  const { data, isPending, error } = useQuery({
    queryKey: ['dataSource', dataUrl],
    queryFn: () => fetch(dataUrl as string).then(r => r.json()),
  });
  const projects = data?.projects;
  const hasProject = (projects && projects.length);

  if (!dataUrl) {
    return (
      <ViewError
        title="Missing Data URL"
        description="Please provide a data URL parameter pointing to your projects data."
        help="?data_url=https://example.com/projects.json"
      />
    );
  }

  if (error) {
    return (
      <ViewError
        title="Fetch Error"
        description={error.message}
        help="Ensure the data_url points to the correct URL."
      />
    );
  }

  if (isPending) {
    return <ViewLoader />
  }

  if (!hasProject) {
    return (
      <ViewError
        title="No projects found"
        description="The data source returned no project items."
        help="Ensure the data_url points to the correct URL and the endpoint is populated."
      />
    );
  }

  if (hasProject && selectedIndex !== -1) {
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
