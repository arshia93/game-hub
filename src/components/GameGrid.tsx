import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {Text} from "@chakra-ui/react"

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  interface Game {
    id: number;
    name: string;
    // background_image: string;
    // parent_platforms: { platform: Platform }[];
  }

  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        setError("Error fetching games");
      });
  });

  return (
    <>
      <Text>{error && error}</Text>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </>
  );
};

export default GameGrid;
