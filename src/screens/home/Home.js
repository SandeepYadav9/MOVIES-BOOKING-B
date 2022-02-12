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
  import React, { Component } from "react";
  import moviesData from '../../common/moviesData'
  import Header from "../../common/header/Header";
  import "./Home.css";
  class Home extends Component {
    movieClickHandler = (movieId) => {
      this.props.history.push("/movie/" + movieId);
    };
    render() {
      return (
        <div className="main">
          <Header />
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
                {moviesData.map((movie) => (
                  <ImageListItem
                    style={{ width: "300px" }}
                    onClick={() => {
                      this.movieClickHandler(movie.id);
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
              <Card  >
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
                    <Input
                      id="movieName"
                      onChange={this.movieNameChangeHandler}
                    />
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
                      onChange={this.releaseDateStartHandler}
                    />
                  </FormControl>
                  <FormControl className="formControl">
                    <TextField
                      id="releaseDateEnd"
                      label="Release Date End"
                      type="date"
                      defaultValue=""
                      InputLabelProps={{ shrink: true }}
                      onChange={this.releaseDateEndHandler}
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
    }
  }
  
  export default Home;
  