import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar/Navbar";
//import { ThirdwebProvider } from "@thirdweb-dev/react";
import { CronosBeta, Polygon, Arbitrum } from "@thirdweb-dev/chains";
import Sidebar from "../components/Sidebar";
import { Card, Col, Container, Grid, Row, Spacer } from "@nextui-org/react";
//import {Profile} from "../components/sign"
//import { Card, DonutChart, Title } from "@tremor/react";
/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */

const Home: NextPage = () => {
 
  return ( 
    <><div className={styles.mobile1}><Sidebar  /> </div><Navbar />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
                <Image
                  src="/hero-gradient.png"
                  width={1390}
                  height={1390}
                  alt="Background gradient from red to blue"
                  quality={100}
                  className={styles.gradient} />
              </div>
            </div>
            <section id="section1">
          
            </section>
            <div className={styles.heroAssetFrame}>
              <Image
                  src="/test.jpg"
                width={860}
                height={540}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.heroAsset} />
            </div>     <section id="buy" className={styles.heroAsset}>

            </section>
            <div className={styles.heroBodyContainer}>
              <div className={styles.heroBody}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroTitleGradient}>
                    Meme Coin
                  </span></h1>
                <br />
                <h1>
                  The Memiest
                </h1>
                <p className={styles.heroSubtitle}>
                  meme ur token now

                </p>
                <p className={styles.heroSubtitle}>
                

                </p>


                <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="/">
                    Buy
                  </Link>
                 
                </div>
                <div className={styles.dexscreenerEmbed}>
                  <iframe
                    className={styles.dexscreenerEmbediframe}
                    src="https://dexscreener.com/zksync/0x80115c708E12eDd42E504c1cD52Aea96C547c05c?embed=1&theme=dark&trades=0&info=0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <Row>
        <div className={styles.heroBodyContainer}>
              <div className={styles.heroBody}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroTitleGradient}>
                    About
                  </span></h1>
                <br />
               
                <p className={styles.heroSubtitle}>
                Pepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the memes.

Pepe is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $PEPE is a coin for the people, forever. Fueled by pure memetic power, let $PEPE show you the way. In Lord Kek we trust.

                </p>
                <p className={styles.heroSubtitle}>
                  stuuuffff

                </p>

              </div>
              </div>
             
      




    
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  More Stuff
                </span></h1>
              <br />
              <h1>
                stuff
              </h1>
              <p className={styles.heroSubtitle}>
              the most memeable memecoin in existence. The dogs have had their day, it’s time for Pepe to take reign.



              </p>
              <p className={styles.heroSubtitle}>
                Grow your stuffasfas;dlfjalksjfkasjfkasjdfkajsdflkja;lskdfjaskjfd;alkjdff;lkjasdlkfj jaslkdjfal;ksjdf kasdjffkl;aj;slkdf asdfasync 

              </p>


           
            </div>
          </div>
          </Row>
          </Container>
          <Container>
          <Grid.Container gap={2} justify="center">
      <Grid xs={12} md={6}>
      <Card className="cards">
      <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>


</Card>
      </Grid>
      <Grid xs={6} md={6}>
      <Card className="cards">
      <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>


</Card>
      </Grid>
      <Grid xs={6} md={3}>
      <Card className="cards">
      <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>


</Card>
      </Grid>
      <Grid xs={6} md={3}>
      <Card className="cards">
      <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>


</Card>
      </Grid>
      <Grid xs={6} md={3}>
      <Card className="cards">
      <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>


</Card>
      </Grid>
    </Grid.Container>
            <Col>
            <Card className="cards">
              <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>


            </Card>
            <Spacer y={1}/>
            <Card className="cards">
            <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>

            </Card>
            <Spacer y={1}/>
            <Card className="cards">
            <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>
              

            </Card>
            <Spacer y={1}/>
            <Card className="cards">
            <div className="cardsInner">
                <h1>Mooo</h1>
              </div>
              <div className="cardsInner">
                Hello you cows!
              </div>
              

            </Card>
            <Spacer y={1}/>
            </Col>
          </Container>
          
          
          <section id="section3">
          
          </section>
        </div>

      </>
  );
};

export default Home;
