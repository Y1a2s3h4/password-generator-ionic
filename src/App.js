/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

// Css File
import "./App.css";

// Icons
import { copyOutline } from "ionicons/icons";

//Image
import Password from "./password.svg";
// React Files
import React, { Component } from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonItem,
  IonIcon,
  IonInput,
  IonToast,
} from "@ionic/react";
export default class App extends Component {
  constructor() {
    super();
    this.input = React.createRef();
    this.generate = this.generate.bind(this);
    this.copyPassword = this.copyPassword.bind(this);
  }
  getSmallLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  getBiggerLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  getSymbols() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  state = {
    pLength: "20",
    lowerLetters: this.getSmallLetters(),
    upperLetters: this.getBiggerLetters(),
    numbers: this.getNumber(),
    symbols: this.getSymbols(),
    password: "",
    showToast: false,
  };

  generate() {
    let pw = "";
    for (let i = 0; i <= this.state.pLength; i++) {
      pw +=
        this.getSmallLetters() +
        this.getBiggerLetters() +
        this.getNumber() +
        this.getSymbols();
    }
    this.setState({ password: pw.slice(0, this.state.pLength) });
  }

  render() {
    return (
      <IonPage>
        <IonContent>
          {" "}
          <IonCard>
            <center>
              <img src={Password} alt="password" className="img-pass" />
            </center>
            <IonCardHeader>
              <IonCardTitle>Generate Password</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonInput
                  value={this.state.password}
                  placeholder="Your Password"
                  ref={this.input}
                  readonly
                ></IonInput>
                <IonIcon icon={copyOutline} />
              </IonItem>
              <h6>Password length</h6>
              <IonInput
                type="number"
                value={this.state.pLength}
                onIonChange={(e) =>
                  this.setState({ pLength: parseInt(e.detail.value, 10) })
                }
              ></IonInput>{" "}
              <IonButton expand="block" onClick={this.generate} color="primary">
                Generate
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonToast
            isOpen={this.state.showToast}
            onDidDismiss={() => this.setState({ showToast: false })}
            message="Password Copied !"
            duration={2000}
          />
        </IonContent>
      </IonPage>
    );
  }
}
