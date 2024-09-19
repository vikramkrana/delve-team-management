/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ProfileCard from "../ProfileCard";

const FlowChart = ({ onNodeSelect, initialNodes, initialEdges, selectedNodeId }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges || []);

  // Formatting nodes dynamically based on positions and other properties
  useEffect(() => {
    const formattedNodes = initialNodes.map((nodeData, index) => {
      let position;
      // Custom positioning based on index
      if (index === 0) {
        position = { x: 400, y: 50 }; // Top node
      } else if (index === 1) {
        position = { x: 0, y: 250 }; // Left node
      } else if (index === 2) {
        position = { x: 400, y: 350 }; // Right node
      }

      return {
        id: nodeData.id.toString(),
        data: {
          about: nodeData.about,
          label: (
            <ProfileCard selectedNodeId={selectedNodeId} nodeData={nodeData} />
          ),
        },
        position,
      };
    });

    const formattedEdges = initialEdges.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
    }));

    // Formatting nodes and edges
    setNodes(formattedNodes);
    setEdges(formattedEdges);
  }, [initialNodes, initialEdges, selectedNodeId]);

  const onNodeClick = (_, node) => {
    onNodeSelect(node);
  };

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        className="team-flow"
      >
        <Background bgColor="#07070a" color="#222636" size={3} />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
