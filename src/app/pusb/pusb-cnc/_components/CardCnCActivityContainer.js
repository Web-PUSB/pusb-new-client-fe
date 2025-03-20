import React, { useState, useEffect } from "react";
import CardCnCActivity from "./CardCnCActivity";

const CardCnCActivityContainer = ({ id }) => {
  const [workplan, setWorkplan] = useState([]);

  useEffect(() => {
    const fetchWorkplan = async () => {
      try {
        const response = await fetch(`/api/pusb-cnc?id=${id}`);
        const data = await response.json();
        setWorkplan(data);
      } catch (error) {
        console.error("Failed to fetch workplan:", error);
      }
    };

    fetchWorkplan();
  }, [id]);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
      {workplan.map((work) => (
        <div key={work.id}>
          <CardCnCActivity workplan={work} />
        </div>
      ))}
    </div>
  );
};

export default CardCnCActivityContainer;
