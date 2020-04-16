import React from 'react';
import { Splash } from './component/Splash';

export class Home extends React.Component {

  render() {
    return (
      <div className="home">

        <div className="bottom">
          <p> Explore & Analyse the Bible with:</p>
          <ul>

            <li>
              <Splash
                link="/read"
                image="resources/image/splash-read.png"
                title="Read"
                subtitle="Read and Tag the Bible" />
            </li>

            <li>
              <Splash
                link="/search"
                image="resources/image/search.png"
                title="Search"
                subtitle="Search through the Scriptures" />
            </li>

            <li>
              <Splash
                link="/explore"
                image="resources/image/slpash-explore.png"
                title="Explore"
                subtitle="Explore Bible Stories" />
            </li>

            <li>
              <Splash
                link="/people"
                image="resources/image/splash-people.png"
                title="People"
                subtitle="People in the Bible" />
            </li>

            <li>
              <Splash
                link="/map"
                image="resources/image/splash-map.png"
                title="Location"
                subtitle="Locations of Bible Events" />
            </li>

          </ul>

        </div>
      </div>
    );
  }

}
