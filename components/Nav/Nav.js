import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Nav.module.scss";
import cx from "classnames";

const Nav = () => {
  const [subnavToggle, setSubnavToggle] = useState({
    resources: false,
    collections: false,
  });

  const { pathname } = useRouter();

  const toggleSubnav = (key) => {
    setSubnavToggle({ ...subnavToggle, [key]: !subnavToggle[key] });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (new RegExp("resource").test(pathname)) {
      setSubnavToggle({ ...subnavToggle, resources: true });
    } else if (new RegExp("collection").test(pathname)) {
      setSubnavToggle({ ...subnavToggle, collection: true });
    }
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <ul className={cx(styles.list, styles.main)}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/auth">Authentication</Link>
        </li>
        <li>
          <div
            className={cx(styles.toggle, {
              [styles.on]: subnavToggle["resources"],
            })}
            onClick={() => toggleSubnav("resources")}
          >
            Resources
          </div>
          <ul
            className={cx(styles.subnav, styles.resources, {
              [styles.toggled]: subnavToggle["resources"],
            })}
          >
            <li>
              <Link href="/resource/game">Game</Link>
              <ul
                className={cx(styles.subnav, styles.resource, styles.game, {
                  [styles.toggled]: new RegExp("/resource/game").test(pathname),
                })}
              >
                <li>
                  <Link href="/resource/game/meta">Meta</Link>
                </li>
                <li>
                  <Link href="/resource/game/leagues">Leagues</Link>
                </li>
                <li>
                  <Link href="/resource/game/players">Players</Link>
                </li>
                <li>
                  <Link href="/resource/game/game_weeks">Game Weeks</Link>
                </li>
                <li>
                  <Link href="/resource/game/stat_categories">
                    Stat Categories
                  </Link>
                </li>
                <li>
                  <Link href="/resource/game/position_types">
                    Position Types
                  </Link>
                </li>
                <li>
                  <Link href="/resource/game/roster_positions">
                    Roster Positions
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/resource/league">League</Link>
              <ul
                className={cx(styles.subnav, styles.resource, styles.league, {
                  [styles.toggled]: new RegExp("/resource/league").test(
                    pathname
                  ),
                })}
              >
                <li>
                  <Link href="/resource/league/meta">Meta</Link>
                </li>
                <li>
                  <Link href="/resource/league/settings">Settings</Link>
                </li>
                <li>
                  <Link href="/resource/league/standings">Standings</Link>
                </li>
                <li>
                  <Link href="/resource/league/scoreboard">Scoreboard</Link>
                </li>
                <li>
                  <Link href="/resource/league/teams">Teams</Link>
                </li>
                <li>
                  <Link href="/resource/league/players">Players</Link>
                </li>
                <li>
                  <Link href="/resource/league/draft_results">
                    Draft Results
                  </Link>
                </li>
                <li>
                  <Link href="/resource/league/transactions">Transactions</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/resource/player">Player</Link>
              <ul
                className={cx(styles.subnav, styles.resource, styles.player, {
                  [styles.toggled]: new RegExp("/resource/player").test(
                    pathname
                  ),
                })}
              >
                <li>
                  <Link href="/resource/player/meta">Meta</Link>
                </li>
                <li>
                  <Link href="/resource/player/stats">Stats</Link>
                </li>
                <li>
                  <Link href="/resource/player/ownership">Ownership</Link>
                </li>
                <li>
                  <Link href="/resource/player/percent_owned">
                    Percent Owned
                  </Link>
                </li>
                <li>
                  <Link href="/resource/player/draft_analysis">
                    Draft Analysis
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/resource/roster">Roster</Link>
              <ul
                className={cx(styles.subnav, styles.resource, styles.roster, {
                  [styles.toggled]: new RegExp("/resource/roster").test(
                    pathname
                  ),
                })}
              >
                <li>
                  <Link href="/resource/roster/players">Players</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/resource/team/">Team</Link>
              <ul
                className={cx(styles.subnav, styles.resource, styles.team, {
                  [styles.toggled]: new RegExp("/resource/team").test(pathname),
                })}
              >
                <li>
                  <Link href="/resource/team/meta">Meta</Link>
                </li>
                <li>
                  <Link href="/resource/team/stats">Stats</Link>
                </li>
                <li>
                  <Link href="/resource/team/standings">Standings</Link>
                </li>
                <li>
                  <Link href="/resource/team/roster">Roster</Link>
                </li>
                <li>
                  <Link href="/resource/team/draft_results">Draft Results</Link>
                </li>
                <li>
                  <Link href="/resource/team/matchups">Matchups</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/resource/transaction/">Transaction</Link>
              <ul
                className={cx(
                  styles.subnav,
                  styles.resource,
                  styles.transaction,
                  {
                    [styles.toggled]: new RegExp("/resource/transaction").test(
                      pathname
                    ),
                  }
                )}
              >
                <li>
                  <Link href="/resource/transaction/players">Players</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/resource/user">User</Link>
              <ul
                className={cx(styles.subnav, styles.resource, styles.user, {
                  [styles.toggled]: new RegExp("/resource/user").test(pathname),
                })}
              >
                <li>
                  <Link href="/resource/user/games">Games</Link>
                </li>
                <li>
                  <Link href="/resource/user/leagues">Leagues</Link>
                </li>
                <li>
                  <Link href="/resource/user/teams">Teams</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div
            className={cx(styles.toggle, {
              [styles.on]: subnavToggle["collections"],
            })}
            onClick={() => toggleSubnav("collections")}
          >
            Collections
          </div>
          <ul
            className={cx(styles.subnav, styles.collections, {
              [styles.toggled]: subnavToggle["collections"],
            })}
          >
            <li>
              <a href="#">Games</a>
              <ul
                className={cx(styles.subnav, styles.collection, styles.games, {
                  [styles.toggled]: new RegExp("/collection/games").test(
                    pathname
                  ),
                })}
              >
                <li>
                  <a href="#">Games</a>
                </li>
                <li>
                  <a href="#">User</a>
                </li>
                <li>
                  <a href="#">User Games</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Leagues</a>
              <ul
                className={cx(
                  styles.subnav,
                  styles.collection,
                  styles.leagues,
                  {
                    [styles.toggled]: new RegExp("/collection/leagues").test(
                      pathname
                    ),
                  }
                )}
              >
                <li>
                  <a href="#">Leagues</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Players</a>
              <ul
                className={cx(
                  styles.subnav,
                  styles.collection,
                  styles.players,
                  {
                    [styles.toggled]: new RegExp("/collection/players").test(
                      pathname
                    ),
                  }
                )}
              >
                <li>
                  <a href="#">Players</a>
                </li>
                <li>
                  <a href="#">League Players</a>
                </li>
                <li>
                  <a href="#">Team Players</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Teams</a>
              <ul
                className={cx(styles.subnav, styles.collection, styles.teams, {
                  [styles.toggled]: new RegExp("/collection/teams").test(
                    pathname
                  ),
                })}
              >
                <li>
                  <a href="#">Teams</a>
                </li>
                <li>
                  <a href="#">League Teams</a>
                </li>
                <li>
                  <a href="#">User Game Teams</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Transactions</a>
              <ul
                className={cx(
                  styles.subnav,
                  styles.collection,
                  styles.transactions,
                  {
                    [styles.toggled]: new RegExp(
                      "/collection/transactions"
                    ).test(pathname),
                  }
                )}
              >
                <li>
                  <a href="#">Transactions</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <ul className={styles.list}>
        <li>
          <Link href="/changelog" title="Changelog">
            Changelog
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/whatadewitt/yahoo-fantasy-sports-api"
            target="_blank"
            title="Source on Github"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/yahoo-fantasy"
            target="_blank"
            title="NPM page"
            rel="noopener noreferrer"
          >
            NPM
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;