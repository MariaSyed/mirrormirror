import React, { useRef, useState } from "react";

const ProfilePic = ({ user }) => (
  <div style={styles.profileItem}>
    {/* <div> */}
      <img
        src={user.url}
        alt={"Profile photo of " + user.name}
        style={{ ...styles.profilePic}}
      />
    {/* </div> */}
    <h3 style={styles.profileText}>{user.name}</h3>
  </div>
);

const allUsers = [
  {
    url: require("../assets/golina.jpg"),
    name: "Golina"
  },
  {
    url: require("../assets/edu.jpg"),
    name: "Eduardo"
  },
  {
    url: require("../assets/dan.jpg"),
    name: "Daniel"
  },
  {
    url: require("../assets/maria.jpg"),
    name: "Maria"
  }
]

const Login = () => {

  const [users, setUsers] = useState(allUsers);

  const update = (evt) => {
    setUsers(allUsers.filter(user => {
      return user.name.toLowerCase().includes(evt.nativeEvent.target.value.toLowerCase())
    }))
  }

  return (
    <div style={styles.content} >
      <input style={styles.input} onChange={update} placeholder="Your name" type="text"></input>
      <div style={styles.profileList}>
        {users.map(user => (
          <ProfilePic
            key={user.name}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  content: {
    width: 1024,
    height: 768,
    paddingTop: "3em",
    textAlign: "center"
  },
  input: {
    "textAlign": "center",
    outline: "none",
    border: "none",
    borderBottom: "2px solid grey",
    fontFamily: "Indie Flower",
    fontSize: 50,
  },
  profileItem: {
    width: "25%"
  },
  profileText: {
    fontFamily: "Indie Flower",
    fontSize: 35,
  },
  profileList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    margin: "4em 3em auto 3em"
  },
  profilePic: {
    width: "100px",
    border: "5px solid lightgray",
    padding: "20px",
    borderRadius: "25%",
    background: "white"
  }
};

export default Login;
