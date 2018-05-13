import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';

import Account from '../entities/Account';
import AccountList from '../entities/Account/List';
import Box from '../Box';
import Character from '../entities/Character';
import CharacterList from '../entities/Character/List';
import Class from '../entities/Class';
import ClassList from '../entities/Class/List';
import GameObject from '../entities/GameObject';
import GameObjectList from '../entities/GameObject/List';
import Item from '../entities/Item';
import ItemList from '../entities/Item/List';
import Map from '../entities/Map';
import MapList from '../entities/Map/List';
import NPC from '../entities/NPC';
import NPCList from '../entities/NPC/List';
import Quest from '../entities/Quest';
import QuestList from '../entities/Quest/List';
import Race from '../entities/Race';
import RaceList from '../entities/Race/List';

import ProjectLink from './ProjectLink';

import styles from './index.styl';
import './links.styl';

const client = new ApolloClient({ uri: process.env.API_URI });

const Spelunker = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className={styles.spelunker}>
        <header className={styles.header}>
          <nav>
            <ul>
              <li><NavLink exact to="/">Spelunker</NavLink></li>
              <li><NavLink to="/accounts">Accounts</NavLink></li>
              <li><NavLink to="/characters">Characters</NavLink></li>
              <li><NavLink to="/classes">Classes</NavLink></li>
              <li><NavLink to="/items">Items</NavLink></li>
              <li><NavLink to="/maps">Maps</NavLink></li>
              <li><NavLink to="/npcs">NPCs</NavLink></li>
              <li><NavLink to="/objects">Objects</NavLink></li>
              <li><NavLink to="/quests">Quests</NavLink></li>
              <li><NavLink to="/races">Races</NavLink></li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/accounts/:id" component={Account} />
          <Route path="/accounts" component={AccountList} />

          <Route path="/characters/:id" component={Character} />
          <Route path="/characters" component={CharacterList} />

          <Route path="/classes/:id" component={Class} />
          <Route path="/classes" component={ClassList} />

          <Route path="/items/:id" component={Item} />
          <Route path="/items" component={ItemList} />

          <Route path="/maps/:id" component={Map} />
          <Route path="/maps" component={MapList} />

          <Route path="/npcs/:id" component={NPC} />
          <Route path="/npcs" component={NPCList} />

          <Route path="/objects/:id" component={GameObject} />
          <Route path="/objects" component={GameObjectList} />

          <Route path="/quests/:id" component={Quest} />
          <Route path="/quests" component={QuestList} />

          <Route path="/races/:id" component={Race} />
          <Route path="/races" component={RaceList} />

          <Route
            exact
            path="/"
            render={() => (
              <Box>
                <legend>Welcome to Spelunker!</legend>

                <p>
                  This page will soon™ have search capabilities.
                </p>
              </Box>
            )}
          />
        </Switch>

        <footer className={styles.footer}>
          <ProjectLink /> · Copyright (c) 2018 Wowser Contributors
        </footer>
      </div>
    </Router>
  </ApolloProvider>
);

export default Spelunker;