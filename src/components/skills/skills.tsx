import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.type";

const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    setTimeout(() => setIsLoggedIn(true), 500);
  }, []);

  return (
    <div>
      <h1>List of Skills</h1>

      <ul>
        {skills?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"} </button>
    </div>
  );
};

export default Skills;
