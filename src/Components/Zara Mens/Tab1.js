import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";



export default function Tab1({ searchTerm }) {
  console.log();
  const data = [
    {
      id: 39.95,
      name: "Dress shoes",
      image:
        "https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/208/2400121105_6_1_1.jpg?ts=1673611819002",
    },
    {
      id: 49.95,
      name: "Slim fit trouser",
      image:
        " https://static.zara.net/photos///2023/V/0/2/p/1564/711/420/2/w/208/1564711420_6_1_1.jpg?ts=1674752894302",
    },
    {
      id: 49.95,
      name: "Leather shoes",
      image:
        "https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/208/2400121105_6_1_1.jpg?ts=1673611819002",
    },
    {
      id: 59.95,
      name: "Crossover shoes",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "T shirt",
      image:
        " https://static.zara.net/photos///2023/V/0/2/p/4231/424/800/2/w/208/4231424800_6_1_1.jpg?ts=1673523957722",
    },
    {
      id: 49.95,
      name: "Leather shoes",
      image:
        "https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/208/2400121105_6_1_1.jpg?ts=1673611819002",
    },
    {
      id: 59.95,
      name: "Bag pack",
      image:
        "https://static.zara.net/photos///2023/V/1/2/p/3204/120/800/2/w/208/3204120800_6_1_1.jpg?ts=1668697872660",
    },
    {
      id: 59.95,
      name: "Crossover shoes",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "Jackward",
      image:
        " https://static.zara.net/photos///2023/V/0/1/p/0794/401/500/2/w/208/0794401500_6_1_1.jpg?ts=1674477475129",
    },
    {
      id: 59.95,
      name: "Crossover shoes",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "Crossover shoes",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "Crossover shoes",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
  ];

  return (
    <Card
      sx={{
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "293%",
        borderRadius: 1,
      }}
    >
      {data
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })

        .map((val) => (
          <CardActionArea
            sx={{
              maxWidth: "13%",
              justifyContent: "space-between",
              marginLeft: "30px",
            }}
          >
            <CardMedia
              component="img"
              height="70%"
              image={val.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {val.name}
                <br />
                {val.id}
              </Typography>
            </CardContent>{" "}
          </CardActionArea>
        ))}
    </Card>
  );
}
