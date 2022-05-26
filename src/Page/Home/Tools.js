import React from "react";
import { useQuery } from "react-query";
import useTools from "../../Hooks/useTools";
import Loading from "../../Utilities.js/Loading";
import ToolCard from "./ToolCard";

const Tools = () => {
  const { isLoading, error, data: tools, refetch } = useTools();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="pt-4">
      <h1 className="text-4xl font-bold text-primary text-center underline">Featured Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-6">
        {tools.map((tool) => (
          <ToolCard key={tool._id} tool={tool}></ToolCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
