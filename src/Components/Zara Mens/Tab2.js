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
      id: 49.95,
      name: "MIni city bag",
      image:
        " https://static.zara.net/photos///2022/I/1/1/p/2600/710/105/2/w/563/2600710105_1_1_1.jpg?ts=1656408753071",
    },
    {
      id: 49.95,
      name: "MIni city bag",
      image:
        "https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/208/2400121105_6_1_1.jpg?ts=1673611819002",
    },
    {
      id: 59.95,
      name: "Shine heels",
      image:
        "https://static.zara.net/photos///2023/V/1/1/p/3214/010/800/2/w/208/3214010800_6_1_1.jpg?ts=1675941489946",
    },
    {
      id: 59.95,
      name: "Bag",
      image:
        " https://static.zara.net/photos///2023/V/1/1/p/6670/010/040/2/w/208/6670010040_6_1_1.jpg?ts=1675860759620",
    },
    {
      id: 49.95,
      name: "MIni city bag",
      image:
        "https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/208/2400121105_6_1_1.jpg?ts=1673611819002",
    },
    {
      id: 59.95,
      name: "MIni city bag",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "MIni city bag",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 49.95,
      name: "MIni city bag",
      image:
        "https://static.zara.net/photos///2023/V/1/1/p/6670/010/040/2/w/208/6670010040_6_1_1.jpg?ts=1675860759620",
    },
    {
      id: 39.95,
      name: "Neck shirt",
      image:
        " https://static.zara.net/photos///2023/V/0/1/p/5039/371/800/2/w/208/5039371800_6_1_1.jpg?ts=1671622798084",
    },
    {
      id: 59.95,
      name: "MIni city bag",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "MIni city bag",
      image:
        " https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/208/2707120800_6_1_1.jpg?ts=1672250711265",
    },
    {
      id: 59.95,
      name: "Bag",
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
            <CardMedia component="img" height="70%" image={user.image} />
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
