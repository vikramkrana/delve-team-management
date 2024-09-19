import React, { useEffect, useState } from "react";
import FlowChart from "../components/FlowChart";
import Sidebar from "../components/Sidebar";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null); // Manage selected node ID in Home
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/nodes"); // Fetching data from the API
      const data = await response.json();

      const nodesWithPosition = data.nodes.map((node, index) => ({
        ...node,
        position: node.position || { x: index * 100, y: index * 100 }, // assign default if position is missing
      }));

      setNodes(nodesWithPosition);
      setEdges(data.edges);
    };
    fetchData();
  }, []); 

  // Update the node data when the form is submitted
  const handleUpdateNode = (id, formData) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.id.toString() === id.toString()) {
          return {
            ...node,
            about: {
              ...node.about,
              ...formData,
            }, 
          };
        }
        return node;
      })
    );
  };

  const handleNodeSelect = (node) => {
    setSelectedNode(node);
    setSelectedNodeId(node.id); // Track the selected node ID
  };

  return (
    <div className="flex flex-col bg-[#07070a] h-screen">
      <Navigation />
      <div className="flex h-[calc(100vh-70px)]">
        <div
          className={`transition-all ease-in-out duration-1000  ${
            selectedNode ? "w-full" : "w-full"
          }`}
        >
          <FlowChart
            key={selectedNode ? selectedNode.id : "flowchart"} // Forces re-render on selectedNode change
            onNodeSelect={handleNodeSelect}
            initialNodes={nodes}
            initialEdges={edges}
            selectedNodeId={selectedNodeId} // Pass selected node ID
          />
        </div>

        {selectedNode && (
          <div className="relative w-full xl:w-1/2 transition-all ease-in-out duration-1000">
            <Sidebar
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
              onUpdateNode={handleUpdateNode}
            />
          </div>
        )}
      </div>
    </div>
  );
}
