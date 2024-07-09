'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '/Users/work/Documents/Monash/MonashRED/Website/A2b/public/images/robourant.png';

export default function RobourantPage() {
  return (
    <>
      <PageHeading 
        title='Robourant Board Game'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='robourant'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Image src={imgUrl} alt="Details" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-13">
            <SectionHeading 
              title='Robourant' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <h2>Objective</h2>
    <p>Make your restaurant the best by earning as many Star Tokens as possible and keeping the number of Oops Tokens low.</p>
                <Spacing lg='40' md='20'/>
                <h3>What’s in the Box:</h3>
                <ul>
                    <li><strong>Game Board:</strong> Shows where everything in the restaurant goes.</li>
                    <li><strong>Colorful Lego Robots:</strong> Different colors for different jobs (like cooking, serving, and cleaning).</li>
                    <li><strong>Tokens:</strong>
                        <ul>
                            <li><strong>Star Tokens:</strong> You earn these for doing a great job.</li>
                            <li><strong>Oops Tokens:</strong> These show up when there are problems.</li>
                        </ul>
                    </li>
                    <li><strong>Cards:</strong>
                        <ul>
                            <li><strong>Robot Cards:</strong> Tell you what each robot can do. 4 cards for different job functions (e.g., waiter, cook, cleaner, host).</li>
                            <li><strong>Event Cards:</strong> Fun things that happen during the day, like a party or a busy lunch.</li>
                            <li><strong>Problem Cards:</strong> Tricky situations that the robots need to fix.</li>
                            <li><strong>Idea Cards:</strong> Cool ways to solve the problems.</li>
                            <li><strong>Impact Cards:</strong> Teach the benefits and limitations of robots.</li>
                        </ul>
                    </li>
                </ul>
                <Spacing lg='40' md='20'/>
                <h3>Player Roles</h3>
                <ol>
                    <li><strong>Chef Controller</strong>
                        <p><strong>Job:</strong> In charge of all the cooking robots.</p>
                        <p><strong>Special Power:</strong> Once per game, can instantly solve any cooking-related problem card.</p>
                    </li>
                    <li><strong>Server Supervisor</strong>
                        <p><strong>Job:</strong> Manages the server robots who take orders and serve food.</p>
                        <p><strong>Special Power:</strong> Can reroute server robots to handle a rush, skipping one problem card.</p>
                    </li>
                    <li><strong>Cleanup Captain</strong>
                        <p><strong>Job:</strong> Looks after the cleaning robots to keep the restaurant tidy.</p>
                        <p><strong>Special Power:</strong> Can clean up a mess immediately, preventing any negative feedback once per game.</p>
                    </li>
                    <li><strong>Customer Relations Leader</strong>
                        <p><strong>Job:</strong> Focuses on how customers feel and manage feedback.</p>
                        <p><strong>Special Power:</strong> Can turn one negative feedback card into a positive one by using a special "customer delight" card.</p>
                    </li>
                    <li><strong>Tech Troubleshooter</strong>
                        <p><strong>Job:</strong> Handles any technical issues with the robots.</p>
                        <p><strong>Special Power:</strong> Can fix any robot malfunction without needing an Idea card once per game.</p>
                    </li>
                </ol>

                <Spacing lg='40' md='20'/>
                <h3>How to Use Roles in the Game</h3>
                <ul>
                    <li><strong>Choose Roles:</strong> At the start of the game, each player picks or is assigned a role.</li>
                    <li><strong>Use Special Powers:</strong> Each role has a special power that can be used once per game. Decide as a team when is the best time to use these powers to help the restaurant.</li>
                    <li><strong>Work Together:</strong> Players must talk and plan with each other to use their robots and powers at the best times to make sure the restaurant runs smoothly.</li>
                </ul>

                <Spacing lg='40' md='20'/>
                <h3>Set Up</h3>
                <ol>
                    <li><strong>Lay Out the Board & Tokens:</strong>
                        <ul>
                            <li>Put the game board in the middle where everyone can reach.</li>
                            <li>Place the Star Tokens and Oops Tokens in a pile within easy reach of all players.</li>
                        </ul>
                    </li>
                    <li><strong>Sort the Lego Robots:</strong> Separate the colorful Lego robots into groups based on their roles (chefs, servers, cleaners) and place them next to the board.</li>
                    <li><strong>Organize the Cards:</strong>
                        <ul>
                            <li>Shuffle each set of cards separately.</li>
                            <li>Place the shuffled decks in their designated spots on the game board.</li>
                        </ul>
                    </li>
                    <li><strong>Distribute Robot Cards:</strong> Give each player a starting set of Robot cards. These cards will tell players which robots they can use during the game.</li>
                    <li><strong>Take Cards:</strong>
                        <ul>
                            <li><strong>Before You Start and Every Third Turn:</strong> Take an Impact Card, read it out loud, and then give it to the person next to you.</li>
                        </ul>
                    </li>
                </ol>

                <Spacing lg='40' md='20'/>
                <h3>Special Moments</h3>
    <p>Sometimes the game will test you with a question from the Impact Card.</p>
    <p><strong>If You Get It Right:</strong> You earn a Star Token!</p>

                <Spacing lg='40' md='20'/>
                <h3>Every Turn</h3>
    <p>Pick up an Event Card and see what's happening in the restaurant.</p>

                <Spacing lg='40' md='20'/>
                <h3>Every Second Turn</h3>
    <p>Solve a problem by picking a Problem Card and then choose an Idea Card to help fix it.</p>

                <Spacing lg='40' md='20'/>
                <h3>Winning Condition</h3>
    <p>The game ends when all Event cards have been played, which represents a full day of running the restaurant. If the number of Star Tokens is more than double the number of Oops Tokens, everyone wins together! This shows that the restaurant was run very well and customers were super happy.</p>
    <Spacing lg='40' md='20'/>

            </SectionHeading>
          </Div>
          {/* <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Artwork</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>United Kindom</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Adobe Illustrator</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>14-Aug-2022</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Andreo Bowla</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div> */}
        </Div>
        <Spacing lg='65' md='10'/>
          {/* <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/portfolio-details' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/portfolio-details' btnText='Next Project'/>
            </Div>
          </Div> */}
      </Div>
      {/* <Spacing lg='145' md='80'/> */}
      {/* <Cta 
        title='agency@arino.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        href=''
        variant='rounded-0'
      /> */}
      {/* <Div className="container"> */}
        <Cta 
          title='Download the leaflet' 
          btnText='Link' 
          btnLink='/images/leaflet.pdf' 
          bgSrc='/images/cta_bg.jpeg'
        />
      {/* </Div> */}
    </>
  )
}
