import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";


export default function Tab1({ searchTerm }) {
  const data = [
    {
      id: 39.95,
      name: "Wafle set",
      image:
        " https://static.zara.net/photos///2023/V/0/3/p/5350/595/707/2/w/208/5350595707_6_1_1.jpg?ts=1674139612298",
    },
    {
      id: 49.95,
      name: "Basic Jeans",
      image:
        " https://static.zara.net/photos///2023/V/0/2/p/1564/711/420/2/w/208/1564711420_6_1_1.jpg?ts=1674752894302",
    },
    {
      id: 49.95,
      name: "Jeans pent",
      image:
        "https://static.zara.net/photos///2023/V/0/3/p/5350/595/707/2/w/208/5350595707_6_1_1.jpg?ts=1674139612298",
    },
    {
      id: 59.95,
      name: "Crossover",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "Hoddie",
      image:
        "https://static.zara.net/photos///2023/V/0/3/p/3854/666/898/2/w/208/3854666898_6_1_1.jpg?ts=1671119880385",
    },
    {
      id: 49.95,
      name: "Jeans pent",
      image:
        "https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/208/2400121105_6_1_1.jpg?ts=1673611819002",
    },
    {
      id: 59.95,
      name: "Crossover",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "Crossover",
      image:
        " https://static.zara.net/photos///2023/V/0/3/p/4729/669/400/2/w/208/4729669400_6_1_1.jpg?ts=1671528483951",
    },
    {
      id: 49.95,
      name: "Jeans pent",
      image:
        "https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/208/2400121105_6_1_1.jpg?ts=1673611819002",
    },
    {
      id: 59.95,
      name: "Crossover",
      image:
        " https://static.zara.net/photos///2023/V/0/3/p/4729/669/400/2/w/208/4729669400_6_1_1.jpg?ts=1671528483951",
    },
    {
      id: 59.95,
      name: "Crossover",
      image:
        "https://static.zara.net/photos///2023/V/0/3/p/4729/669/400/2/w/208/4729669400_6_1_1.jpg?ts=1671528483951",
    },
    {
      id: 59.95,
      name: "Crossover",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
  ];

  return (
    <Card
      sx={{
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
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

        .map((user) => (
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
              image={user.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {user.name}
                <br />
                {user.id}
              </Typography>
            </CardContent>{" "}
          </CardActionArea>
        ))}
    </Card>
  );
}
 