import { Button, Typography } from "@mui/material";
import React from "react";
import CountryFlags from "../../helpers/CountryFlags.json";
import WorldCupFixtures from "../../helpers/WorldCupFixtures.json";
import Moment from "moment";

export default function ShowcaseCard({ data, handleModalOpen, group }) {
  /**
   * @dev only list games according to dates
   */
  const getGamesByDate = (date) => {
    var games = [];

    WorldCupFixtures.forEach((data) => {
      if (Moment(data.DateUtc).format("LL") === date) {
        games.push(data);
      }
    });

    return games;
  };

  return (
    <div className="gameDetails">
      <Typography component={"span"} variant={"h3"}>
        <i className="ri-calendar-line"></i> {data}
      </Typography>

      {getGamesByDate(data).map((data, index) => {
        if (group === "all") {
          return (
            <div className="gameDetails__item" key={index}>
              {window.innerWidth > 576 ? (
                <div className="gameDetails__teamDetails">
                  <div className="teamName">{data.HomeTeam}</div>
                  {CountryFlags.map((country, i) => {
                    return (
                      (country.name === data.HomeTeam ||
                        (country.name === "United States" &&
                          data.HomeTeam === "USA") ||
                        (country.name === "South Korea" &&
                          data.HomeTeam === "Korea Republic")) && (
                        <img
                          src={country.image}
                          alt={country.name}
                          key={i}
                          loading="lazy"
                          className="home__Image"
                        />
                      )
                    );
                  })}
                  <div className="gameTime">
                    {data.DateUtc.split(" ")[1].split(":")[0] +
                      ":" +
                      data.DateUtc.split(" ")[1].split(":")[1]}
                  </div>
                  {CountryFlags.map((country, i) => {
                    return (
                      (country.name === data.AwayTeam ||
                        (country.name === "United States" &&
                          data.AwayTeam === "USA") ||
                        (country.name === "South Korea" &&
                          data.AwayTeam === "Korea Republic")) && (
                        <img
                          src={country?.image}
                          alt={country.name}
                          key={i}
                          loading="lazy"
                          className="Away__Image"
                        />
                      )
                    );
                  })}
                  <div className="teamName">{data.AwayTeam}</div>
                </div>
              ) : (
                <Button className="gameDetails__teamDetails">
                  <div className="teamName">{data.HomeTeam}</div>
                  {CountryFlags.map((country, i) => {
                    return (
                      (country.name === data.HomeTeam ||
                        (country.name === "United States" &&
                          data.HomeTeam === "USA") ||
                        (country.name === "South Korea" &&
                          data.HomeTeam === "Korea Republic")) && (
                        <img
                          src={country.image}
                          alt={country.name}
                          key={i}
                          loading="lazy"
                          className="home__Image"
                        />
                      )
                    );
                  })}
                  <div className="gameTime">
                    {data.DateUtc.split(" ")[1].split(":")[0] +
                      ":" +
                      data.DateUtc.split(" ")[1].split(":")[1]}
                  </div>
                  {CountryFlags.map((country, i) => {
                    return (
                      (country.name === data.AwayTeam ||
                        (country.name === "United States" &&
                          data.AwayTeam === "USA") ||
                        (country.name === "South Korea" &&
                          data.AwayTeam === "Korea Republic")) && (
                        <img
                          src={country?.image}
                          alt={country.name}
                          key={i}
                          loading="lazy"
                          className="Away__Image"
                        />
                      )
                    );
                  })}
                  <div className="teamName">{data.AwayTeam}</div>
                </Button>
              )}

              <div className="gameDetails__location">
                <i className="ri-map-pin-2-line"></i> {data.Location}
              </div>

              <div className="gameDetails__action">
                <Button
                  className="quickView"
                  onClick={() => handleModalOpen(data)}
                >
                  Quick View
                </Button>
                <Button>
                  <i className="ri-arrow-right-line"></i>
                </Button>
              </div>
            </div>
          );
        }
        else if (data.Group === group)
          return (
            <div className="gameDetails__item" key={index}>
              {window.innerWidth > 576 ? (
                <div className="gameDetails__teamDetails">
                  <div className="teamName">{data.HomeTeam}</div>
                  {CountryFlags.map((country, i) => {
                    return (
                      (country.name === data.HomeTeam ||
                        (country.name === "United States" &&
                          data.HomeTeam === "USA") ||
                        (country.name === "South Korea" &&
                          data.HomeTeam === "Korea Republic")) && (
                        <img
                          src={country.image}
                          alt={country.name}
                          key={i}
                          loading="lazy"
                          className="home__Image"
                        />
                      )
                    );
                  })}
                  <div className="gameTime">
                    {data.DateUtc.split(" ")[1].split(":")[0] +
                      ":" +
                      data.DateUtc.split(" ")[1].split(":")[1]}
                  </div>
                  {CountryFlags.map((country, i) => {
                    return (
                      (country.name === data.AwayTeam ||
                        (country.name === "United States" &&
                          data.AwayTeam === "USA") ||
                        (country.name === "South Korea" &&
                          data.AwayTeam === "Korea Republic")) && (
                        <img
                          src={country?.image}
                          alt={country.name}
                          key={i}
                          loading="lazy"
                          className="Away__Image"
                        />
                      )
                    );
                  })}
                  <div className="teamName">{data.AwayTeam}</div>
                </div>
              ) : (
                <Button className="gameDetails__teamDetails">
                  <div className="teamName">{data.HomeTeam}</div>
                  {CountryFlags.map((country, i) => {
                    return (
                      (country.name === data.HomeTeam ||
                        (country.name === "United States" &&
                          data.HomeTeam === "USA") ||
                        (country.name === "South Korea" &&
                          data.HomeTeam === "Korea Republic")) && (
                        <img
                          src={country.image}
                          alt={country.name}
                          key={i}
                          loading="lazy"
                          className="home__Image"
                        />
                      )
                    );
                  })}
                  <div className="gameTime">
                    {data.DateUtc.split(" ")[1].split(":")[0] +
                      ":" +
                      data.DateUtc.split(" ")[1].split(":")[1]}
                  </div>
                  {CountryFlags.map((country, i) => {
                    return (
                      (country.name === data.AwayTeam ||
                        (country.name === "United States" &&
                          data.AwayTeam === "USA") ||
                        (country.name === "South Korea" &&
                          data.AwayTeam === "Korea Republic")) && (
                        <img
                          src={country?.image}
                          alt={country.name}
                          key={i}
                          loading="lazy"
                          className="Away__Image"
                        />
                      )
                    );
                  })}
                  <div className="teamName">{data.AwayTeam}</div>
                </Button>
              )}

              <div className="gameDetails__location">
                <i className="ri-map-pin-2-line"></i> {data.Location}
              </div>

              <div className="gameDetails__action">
                <Button
                  className="quickView"
                  onClick={() => handleModalOpen(data)}
                >
                  Quick View
                </Button>
                <Button>
                  <i className="ri-arrow-right-line"></i>
                </Button>
              </div>
            </div>
          );
      })}
    </div>
  );
}
