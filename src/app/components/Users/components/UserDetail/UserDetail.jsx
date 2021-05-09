import React, { Component } from "react";
import "./UserDetail.scss";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { JournalBookmarkFill, StarFill } from "react-bootstrap-icons";
import ReposModal from "../ReposModal";
export default class UserDetail extends Component {
  modalType = "repos";
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      userName: this.props.userSelected["login"],
      childData: [],
    };
    this.openReposModal = this.openReposModal.bind(this);
    this.openStarredModal = this.openStarredModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  isModalReposType() {
    return this.modalType === "repos";
  }
  modalStatus(status) {
    this.setState({ showModal: status });
  }
  closeModal() {
    this.modalStatus(false);
  }
  openReposModal() {
    this.modalType = "repos";
    axios
      .get(`https://api.github.com/users/${this.state.userName}/repos`)
      .then((resp) => {
        if (resp.status === 200) {
          this.setState({ childData: resp.data });
          this.modalStatus(true);
        }
      });
  }

  openStarredModal() {
    this.modalType = "starred";
    axios
      .get(`https://api.github.com/users/${this.state.userName}/starred`)
      .then((resp) => {
        if (resp.status === 200) {
          this.setState({ childData: resp.data });
          this.modalStatus(true);
        }
      });
  }
  render() {
    let profilePicture = this.props.userSelected["avatar_url"];
    let name = this.props.userSelected["name"];
    let bio = this.props.userSelected["bio"];
    return (
      <div className="userDetailBox">
        <Modal
          show={this.state.showModal}
          onHide={this.closeModal}
          dialogClassName="w-90 modal-mb"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.isModalReposType() ? "Repositórios" : "Starred"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.isModalReposType() ? (
              <ReposModal data={this.state.childData}></ReposModal>
            ) : (
              <ReposModal data={this.state.childData}></ReposModal>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.closeModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="col1">
          <img src={profilePicture} className="avatar-img" alt="profile" />
        </div>
        <div className="col2">
          <p className="name-title">{name}</p>
          <p className="user-label">@{this.state.userName}</p>
          <p className="bio-label">{bio}</p>
        </div>
        <div className="col2">
          <Button className="repos-btn" onClick={this.openReposModal} variant="dark">
            <JournalBookmarkFill></JournalBookmarkFill> {"  Repositórios"}
          </Button>{" "}
          <Button className="starred-btn" onClick={this.openStarredModal} variant="dark">
            <StarFill></StarFill> {" Starred"}
          </Button>
        </div>
      </div>
    );
  }
}
