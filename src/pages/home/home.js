import React, { useState, useEffect } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYzNDU4MzNkYTAyMTAxMWQwYzFkZjdhZTQ4MmZjZjYyNDFkYTU4ZTA5NGE5NTU3YjFjNjM2Nzg0NDQ4Y2M3YjkzNjAwMzI4NjZmYjQ0Yjc4In0.eyJhdWQiOiIzIiwianRpIjoiNjM0NTgzM2RhMDIxMDExZDBjMWRmN2FlNDgyZmNmNjI0MWRhNThlMDk0YTk1NTdiMWM2MzY3ODQ0NDhjYzdiOTM2MDAzMjg2NmZiNDRiNzgiLCJpYXQiOjE2MzgxMDc3NzcsIm5iZiI6MTYzODEwNzc3NywiZXhwIjoxNjY5NjQzNzc3LCJzdWIiOiIxMjcxODQiLCJzY29wZXMiOltdfQ.fUY8Hl3u852yHDC26nqur8bEd-RTrxmP5EjSphZI-Pho68s42cXDvxA0tXEeSW9I9uE_pi2Q_8HxiUJPhRvolEJ7EKXBGEQKTuNbkgT7aXSGRqZ0YEVW7cWCW6P-tizpqADjiY1SJ412l--jfzCG2uqXie1I8tEMqQnID5hq7ySiH8gbKfC6WrcCPKpHgTJH3C9CGWOivMkoivcsdl7kkw8wmqScPLmP6CNC8_TUD4Smchwe8lrD37rmY5oXKBEgNn1r7eWYvLWsJH8hvr27jex6lYdh7CXdpd9fk6t23QWh3u3hYkpDH9WpA7xzMkEw1tlt3jUGF-Vaq0Kop1Dv0QIzdbMBeJdTuIECk2fUZkgWWS4skAKzVPfE7NFeLjcCZJi_YD3rN9Xs4qPEruk57sab0iImqd9ie4pHKbPv2oEikXADmtOhvI7akHX4Fr-LGxBnfAPxmt3ivk8aaA-IznHe_ErX-LQtiIo7iUL3QfeQN5dInr1IQCjyKa_ICgvA_P6sjfTwPW0tZ2CT8SobjrDWNTc-go8CnsyKrag1qyu8dICR40gHvLeiVUbXlNFuL8uEzp1ZNtGy_-ppo6ku46fMnyug6U8YU1Rn8UlL8TxqnC4iPrez1a_n1e_p-fGR9JI4RIM4o-W9zMQRe0qpDYsFhG7XBmpYRzZiPN3zOFE";
function Home() {
  console.log(token, "*************");
  const echo_options = {
    broadcaster: "pusher",
    key: "7890123456",
    wsHost: "push.sbm24.com",
    wssPort: 6001,
    wsPort: 6001,
    disableStats: true,
    forceTLS: true,
    //enabledTransports: ['wss'],
    authEndpoint: "wss://sandbox.sbm24.net/broadcasting/auth",
    // authEndpoint: "wss://ws.bitstamp.net",
    auth: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token_echo")}`,
        Accept: "application/json",
      },
    },
  };

  const testEcho = new Echo(echo_options);
  const handleTestEcho = () => {
    console.log("handle test echo");
    testEcho.join();
  };
  return (
    <div className="home center-content">
      <button onClick={handleTestEcho}>test echo</button>
    </div>
  );
}

export default Home;
