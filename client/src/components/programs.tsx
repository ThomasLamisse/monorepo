import { useEffect } from "react";

const Programs: React.FC = () => {
  useEffect(() => {
    fetch("/api/programs").then((response) => response.json());
  }, []);

  return <></>;
};

export default Programs;
