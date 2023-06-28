import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import { useScrollTo } from "react-use-window-scroll";
import classes from "./landing.module.css";
import ZenaTextDesignWrapper from "../../common-components/zena-text-design-wrapper";
import ZenaButton from "../../common-components/zena-button/zena-button";
import ZenaHalfBorder from "../../common-components/zena-half-border/zena-half-border";
import ZenaToggleButtons from "../../common-components/zena-toggle-buttons/zena-toggle-buttons";
import ZenaCard from "../../common-components/zena-card/zena-card";

function Landing({ changeTheme }) {
  const router = useRouter();
  const scrollTo = useScrollTo();
  const [cardItems, setCardItems] = useState([
    { title: "TOTAL VALUE LOCKED", value: "$99,233,374" },
    { title: "circulating supply", value: "18,021,367" },
    { title: "circulating market cap", value: "$5,768,639" },
    { title: "THE PRICE", value: "$0.32" },
    { title: "epoch ends in", value: "$5,454,114" },
    { title: "24h volume", value: "9,231,459" },
  ]);
  const [tabItems, setTabItems] = useState(["Swap", "Staking", "Vote"]);
  const [teamCard, setTeamCard] = useState([
    {
      image:
        "https://www.shutterstock.com/image-vector/young-man-anime-style-character-600w-2240084847.jpg",
      title: "Brooklyn Simmons",
      subTitle: "Founder",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      image:
        "https://www.shutterstock.com/image-vector/young-man-anime-style-character-600w-2240084847.jpg",
      title: "Guy Hawkins",
      subTitle: "Ceo",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      image:
        "https://www.shutterstock.com/image-vector/young-man-anime-style-character-600w-2240084847.jpg",
      title: "Courtney Henry",
      subTitle: "Manager",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const handleSwapNow = () => {
    console.log("test");
  };

  const cardUI = (title, value) => {
    return (
      <div className={classes.cardContentWrapper}>
        <div className={classes.cardTitle}>{title}</div>
        <div className={classes.cardValue}>{value}</div>
      </div>
    );
  };

  return (
    <Grid container className={classes.investingWrapper}>
      <div className={classes.ffContainer}>
        {/* Landing Page */}
        <div className={classes.contentContainerFull}>
          <Grid container className={classes.investingWrapper}>
            <div className={classes.landingTextWrapper}>
              <div className={classes.marginBottom20}>
                <Typography variant="h1" className={classes.heading}>
                  <span>The</span>
                  <ZenaTextDesignWrapper
                    text={"Native DEX"}
                    fontSize={windowSize.width >= 1200 ? "75px" : "40px"}
                  />
                  <span>of</span>
                </Typography>
                <Typography
                  variant="h1"
                  className={`${classes.heading} ${classes.lineHeight100}`}
                >
                  <span>BNB Chain</span>
                </Typography>
              </div>
              <div
                className={`${classes.landingDescription} ${classes.marginBottom20}`}
              >
                <Typography variant="body1" className={classes.mainDescription}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam. non deserunt ullamco.
                </Typography>
              </div>
              <div>
                <ZenaButton buttonText="Swap Now" buttonEvent={handleSwapNow} />
              </div>
            </div>
          </Grid>

          <Grid container className={classes.investingWrapper}>
            <div className={classes.cardWrapper}>
              {cardItems.map((card) => {
                return (
                  <ZenaHalfBorder
                    key={card.title}
                    card={cardUI(card.title, card.value)}
                  />
                );
              })}
            </div>
          </Grid>
        </div>

        {/* Investing Page */}
        <div className={classes.contentContainerFullTwo}>
          <div className={classes.TabWrapper}>
            <ZenaToggleButtons tableItems={tabItems} />
          </div>

          <Grid container className={classes.investingWrapper}>
            <Grid
              item
              lg={4}
              md={12}
              sm={12}
              xs={12}
              className={classes.gridImageWrapper}
            >
              <div className={classes.groupImages}>
                <img
                  src={"/images/investing-image.png"}
                  className={classes.investingImage}
                />
                <img
                  src={"/images/coin-image.png"}
                  className={classes.coinImage}
                />
              </div>
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className={classes.gridImageWrapper}
            >
              <div
                className={`${classes.marginBottom20} ${classes.marginLeft10}`}
              >
                <Typography variant="h1" className={classes.investingHeading}>
                  <span>Investing In</span>
                  <ZenaTextDesignWrapper
                    text={"Staking"}
                    fontSize={
                      windowSize.width >= 768
                        ? "75px"
                        : windowSize.width >= 550
                        ? "50px"
                        : "30px"
                    }
                  />
                </Typography>
                <Typography
                  variant="h1"
                  className={`${classes.investingHeading} ${classes.lineHeight70}`}
                >
                  <span>Get Passive Income</span>
                </Typography>
              </div>
              <div
                className={`${classes.descriptionWrapper} ${classes.marginBottom20}`}
              >
                <Typography
                  variant="body1"
                  className={classes.investDescription}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam.
                </Typography>
              </div>
              <div className={classes.startStakingButton}>
                <ZenaButton buttonText="Start Staking" buttonEvent={() => {}} />
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Meet Team Page */}
        <div className={classes.contentContainerFullThree}>
          <Grid container className={classes.meetWrapper}>
            <div className={classes.meetTitle}>
              <Typography variant="h1" className={classes.heading}>
                <span>Meet With Our</span>
              </Typography>
              <Typography variant="h1" className={classes.heading}>
                <ZenaTextDesignWrapper
                  text={"Team"}
                  fontSize={windowSize.width >= 630 ? "75px" : "40px"}
                />
              </Typography>
            </div>
            <div className={classes.zenaCardWrapper}>
              {teamCard.map((item) => {
                return <ZenaCard key={item.title} cardContent={item} />;
              })}
            </div>
          </Grid>
        </div>

        {/* Get Ready */}
        <div className={classes.contentContainerFullFourth}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.gridWrapper}
          >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <ZenaHalfBorder
                card={
                  <div
                    className={`${classes.cardContentWrapper} ${classes.bigCardWrapper}`}
                  >
                    <div
                      className={`${classes.cardTitle} ${classes.tileDescriptionWrapper}`}
                    >
                      <div className={classes.getReadyWrapper}>
                        <Typography
                          variant="h1"
                          className={classes.getReadyTitle}
                        >
                          <span className={classes.getReady}>Get ready</span>
                          <span>& start now</span>
                        </Typography>
                      </div>
                      <div className={classes.Wrapper}>
                        <Typography
                          variant="body1"
                          className={classes.getReadyDescription}
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </Typography>
                      </div>
                    </div>
                    <div className={`${classes.buttonWrapper}`}>
                      <ZenaButton
                        buttonText="Swap Now"
                        buttonEvent={handleSwapNow}
                      />
                    </div>
                  </div>
                }
                isBigCard={true}
              />
            </Grid>
          </Grid>
        </div>

        {/* Landing Footer */}
        <div className={classes.contentContainerFullFive}>
          <img src="/images/zena-logo.svg" className={classes.zenaImageLogo} />
          <div className={classes.socialLinkWrapper}>
            <img src="/images/telegram-logo.png" />
            <img src="/images/twitter-logo.png" />
            <img src="/images/facebook-logo.png" />
            <img src="/images/discord-logo.png" />
            <img src="/images/insta-logo.png" />
          </div>
          <div className={classes.footerDescription}>
            <Typography
              variant="body1"
              className={`${classes.getReadyDescription} ${classes.alignItemCenter}`}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Typography>
          </div>
        </div>

        {/* final image */}
        <div className={classes.lastBackgroundImageWrapper}></div>
      </div>
    </Grid>
  );
}

export default Landing;
