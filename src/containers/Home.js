import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Home.css";
import { API } from "aws-amplify";
import { Auth } from 'aws-amplify';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";


export default function Home() {
  const [notes, setNotes] = useState([]);
  const [users, setUsers] = useState([]);
  const { isAuthenticated, userGroups } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();
        const users = await loadUsers();
        setNotes(notes);
        setUsers(users);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function loadUsers() {
    return API.get("notes", "/users")
  }

  function renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <LinkContainer key={note.noteId} to={`/notes/${note.noteId}`}>
          <ListGroupItem header={note.content.trim().split("\n")[0]}>
            {"Created: " + new Date(note.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/notes/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }


  function renderUsersList(users) {
    return users.map((user, i) =>
        <LinkContainer key={user.Username} to={`/users/${user.Username}`}>
          <ListGroupItem header={user.Email}>
            {"Created: " + new Date(user.UserCreateDate).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
        <div className="pt-3">
          <Link to="/login" className="btn btn-info btn-lg mr-3">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!isLoading && renderNotesList(notes)}
        </ListGroup>
      </div>
    );
  }

  function renderUsers() {
    return (
      <div className="users">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Your Users</h2>
        <ListGroup>{!isLoading && renderUsersList(users)}</ListGroup>
      </div>
    );
  }



  return (
    <div className="Home">
      {!isAuthenticated ? renderLander() : userGroups.includes("AdminUsers") ? renderUsers() : renderNotes()}
    </div>
  );
}
