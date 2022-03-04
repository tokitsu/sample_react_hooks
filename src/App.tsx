import "./styles.css";
import { UserCard } from "./components/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
import { useState } from "react";
import { UseAllUers } from "./hooks/useAllUsers";

export default function App() {
  const { loading, error, userProfiles, getUsers } = UseAllUers();

  const onClickFatchUsers = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFatchUsers}>データ取得</button>
      {error ? (
        <p>データが所得できません</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
