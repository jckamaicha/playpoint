import { Button } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
// import axios from "axios";
// import Pusher from "pusher-js";
import "./style.css";
// import ChatList from "./components/ChatList";
// import ChatBox from "./components/ChatBox";

export default function Chatroom() {
  // const [text, setText] = React.useState("");
  // const [username, setUsername] = React.useState("");
  // const [chats, setChats] = React.useState([]);

  // const handleTextChange = (e) => {
  //   if (e.keyCode === 13) {
  //     const payload = {
  //       username: username,
  //       message: text,
  //     };
  //     axios.post("http://localhost:8000/message", payload);
  //   } else {
  //     setText(e.target.value);
  //   }
  // };

  // React.useEffect(() => {
  //   const username = window.prompt("Username: ", "Anonymous");
  //   setUsername(username);
  //   const pusher = new Pusher("186e3ce0d881032f7ee9", {
  //     cluster: "ap2",
  //     encrypted: true,
  //   });
  //   const channel = pusher.subscribe("chat");
  //   channel.bind("message", (data) => {
  //     setChats([...chats, data]);
  //   });
  // }, []);

  return (
    <div className="chatroom__container">
      {/* <ChatList chats={chats} />
      <ChatBox
        text={text}
        username={username}
        handleTextChange={handleTextChange}
      /> */}
      <Helmet>
        <title>Chats | Playpoint</title>
      </Helmet>
      <div className="rooms">
        <div className="topbar">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            alt=""
            loading="lazy"
          />
          <b>Chats</b>
          <Button>
            <i className="ri-surgical-mask-line"></i>
          </Button>
        </div>

        <Button className="chathead active">
          <div className="imgHolder">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
              alt=""
              loading="lazy"
            />
            <img
              src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="username">Qatar vs England</div>
        </Button>
        <Button className="chathead">
          <div className="imgHolder">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png"
              alt=""
              loading="lazy"
            />
            <img
              src="https://www.pngitem.com/pimgs/m/200-2008876_germany-soccer-logo-png-germany-football-team-logo.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="username">Brazil vs Germany</div>
        </Button>
        <Button className="chathead">
          <div className="imgHolder">
            <img
              src="https://img.freepik.com/free-vector/australia-flag-round-badge_1308-73039.jpg?w=2000"
              alt=""
              loading="lazy"
            />
            <img
              src="https://img.freepik.com/free-vector/badge-design-china-flag_1308-73070.jpg?w=2000"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="username">Australia vs China</div>
        </Button>
      </div>
      <div className="chatbox">
        <div className="topbar">
          <div className="chathead__info">
            <div className="imgHolder">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
                loading="lazy"
              />
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
                loading="lazy"
              />
            </div>
            <h3>Qatar vs England</h3>
          </div>
          <div>
            <Button>
              <i className="ri-ancient-gate-line"></i> Subscribe
            </Button>
          </div>
        </div>
        <div className="chats">
          <div className="messageItems">
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Have you seen the guy scoring so good? It's miraculous!
              </div>
            </div>
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium illo suscipit, quam aperiam, porro explicabo
                inventore quod dolor totam et distinctio. Delectus ex tempore
                veniam incidunt nihil rerum quaerat voluptatem?
              </div>
            </div>
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium illo suscipit, quam aperiam, porro explicabo
                inventore quod dolor totam et distinctio. Delectus ex tempore
                veniam incidunt nihil rerum quaerat voluptatem?
              </div>
            </div>
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium illo suscipit, quam aperiam, porro explicabo
                inventore quod dolor totam et distinctio. Delectus ex tempore
                veniam incidunt nihil rerum quaerat voluptatem?
              </div>
            </div>
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium illo suscipit, quam aperiam, porro explicabo
                inventore quod dolor totam et distinctio. Delectus ex tempore
                veniam incidunt nihil rerum quaerat voluptatem?
              </div>
            </div>
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium illo suscipit, quam aperiam, porro explicabo
                inventore quod dolor totam et distinctio. Delectus ex tempore
                veniam incidunt nihil rerum quaerat voluptatem?
              </div>
            </div>
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium illo suscipit, quam aperiam, porro explicabo
                inventore quod dolor totam et distinctio. Delectus ex tempore
                veniam incidunt nihil rerum quaerat voluptatem?
              </div>
            </div>
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium illo suscipit, quam aperiam, porro explicabo
                inventore quod dolor totam et distinctio. Delectus ex tempore
                veniam incidunt nihil rerum quaerat voluptatem?
              </div>
            </div>
            <div className="message">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt=""
                loading="lazy"
              />
              <div className="messageContent">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium illo suscipit, quam aperiam, porro explicabo
                inventore quod dolor totam et distinctio. Delectus ex tempore
                veniam incidunt nihil rerum quaerat voluptatem?
              </div>
            </div>
          </div>
        </div>
        <div className="inputField">
          <Button>
            <i className="ri-attachment-line"></i>
          </Button>
          <input type="text" placeholder="Aa" />
          <Button>
            <i className="ri-thumb-up-line"></i>
          </Button>
        </div>
      </div>
      <div className="rightbar">
        <div className="leaderboards">
          <h3>
            <i className="ri-bar-chart-grouped-line"></i> Leaderboards
          </h3>

          <div className="leaderboardItems">
            <Button></Button>
          </div>
        </div>
        <div className="matches">
          <h3>
            <i className="ri-football-line"></i> Matches
          </h3>

          <div className="matchItems">
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
            <Button>
              Qatar{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emblem_of_Qatar.svg/800px-Emblem_of_Qatar.svg.png"
                alt=""
              />{" "}
              <span className="time">17:00</span>{" "}
              <img
                src="https://brandlogos.net/wp-content/uploads/2013/09/the-fa-england-vector-logo.png"
                alt=""
              />{" "}
              England
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}