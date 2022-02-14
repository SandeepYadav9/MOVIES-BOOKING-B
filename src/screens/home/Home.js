import {
  MenuItem,
  Checkbox,
  ListItemText,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  FormControl,
  Select,
  Typography,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";
import React from "react";

import Header from "../../common/header/Header";

import "./Home.css";

import moviesData from "../../common/moviesData";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const history = useNavigate();
  const onMovieHandler = (id) => {
    history("/book/" + id);
  };

  return (
    <div className="main">
      <Header />
      <div className="upcomming-Movies">
        <span>Upcoming Movies</span>
      </div>
      <div className="container">
        <ImageList cols={5} className="imageItem">
          {moviesData.map((movie) => (
            <ImageListItem className="listItem" key={movie.id}>
              <img src={movie.poster_url} style={{ height: "auto" }} />
              <ImageListItemBar title={movie.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="flex-container">
        <div className="left">
          <ImageList className="movieImage" cols={3} rowHeight={400}>
            {moviesData.map((movie, index) => (
              <ImageListItem
                style={{ width: "300px" }}
                onClick={() => {
                  onMovieHandler(movie.id);
                }}
              >
                <img src={movie.poster_url} alt={movie.title} />
                <ImageListItemBar
                  title={movie.title}
                  subtitle={
                    <span>
                      Release Date:{" "}
                      {new Date(movie.release_date).toDateString()}
                    </span>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>

        <div className="right">
          <Card>
            <CardContent>
              <FormControl className="formControl">
                <Typography
                  color="primary"
                  style={{ textAlign: "center", color: "theme.spacing.unit" }}
                >
                  Find Movies By:
                </Typography>
              </FormControl>{" "}
              <br />
              <FormControl className="formControl">
                <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                <Input id="movieName" />
              </FormControl>{" "}
              <br />
              <FormControl className="formControl">
                <InputLabel htmlFor="genreList">Genre</InputLabel>
                <Select multiple input={<Input id="genreList" />}>
                  ListofData
                </Select>
              </FormControl>
              <br />
              <FormControl className="formControl">
                <InputLabel htmlFor="artistList">Artist</InputLabel>
                <Select multiple input={<Input id="artistList" />}>
                  ArtistData
                </Select>
              </FormControl>{" "}
              <br />
              <FormControl className="formControl">
                <TextField
                  id="releaseDateStart"
                  label="Release Date Start"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>{" "}
              <br />
              <FormControl className="formControl">
                <TextField
                  id="releaseDateEnd"
                  label="Release Date End"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
              <br />
              <br />
              <FormControl className="formControl">
                <Button variant="contained" color="primary">
                  APPLY
                </Button>
              </FormControl>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
