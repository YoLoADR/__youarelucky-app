import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import logo from "../assets/axa-logo.png";
import { AUTH_TOKEN } from "../config/dev"; // (4)
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// (5)
const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Connexion = props => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authToken = localStorage.getItem(AUTH_TOKEN);

  let history = useHistory();

  useEffect(() => {
    if (authToken) {
      props.history.push("/");
    }
  });

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const _confirm = async data => {
    const { token } = data.login;
    _saveUserData(token);
  };

  const _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
    history.push(`/users`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logo} alt="Logo" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleEmailChange}
            value={email}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
          <Mutation
            mutation={LOGIN_MUTATION}
            variables={{ email, password }}
            onCompleted={data => _confirm(data)}
          >
            {mutation => (
              <Button
                onClick={mutation}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
            )}
          </Mutation>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => history.push(`/inscription`)}
          >
            Need to create an account ?
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Connexion;

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "lightslategrey",
    width: 210,
    height: 210
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// (1) Un état est pour les utilisateurs qui ont déjà un compte et seulement besoin de se connecter. Dans cet état, le composant ne rendra que deux inputchamps pour que l'utilisateur fournisse leur emailet password. Remarquez que ce state.loginsera truedans ce cas.
// (2) Le deuxième état concerne les utilisateurs qui n'ont pas encore créé de compte et qui doivent donc encore s'inscrire. Ici, vous rendez également un troisième inputchamp où les utilisateurs peuvent fournir leurs name. Dans ce cas, state.loginsera false.

//(3) pour implémenter les mutations que nous devons envoyer pour la fonctionnalité de connexion. Après la mutation a été effectuée, vous stockez le retourné tokendans localStorage et naviguer vers le chemin racine.

// (4)  vous devez également fournir le constants.jsfichier que nous utilisons pour définir la clé des informations d'identification que nous stockons dans le navigateur localStorage.

// (5) Les deux mutations ressemblent beaucoup aux mutations que vous avez déjà vues auparavant. Ils prennent un certain nombre d'arguments et renvoient le tokenque vous pouvez attacher aux demandes ultérieures d'authentification de l'utilisateur (c'est-à-dire qu'ils indiquent qu'une demande est faite pour le compte de cet utilisateur). Vous allez apprendre à le faire.

// (6) Si l'utilisateur veut simplement se connecter, vous appelez le loginMutation, sinon vous utilisez le signupMutationet la mutation sera déclenchée sur l' onClickévénement de la div . Les mutations GraphQL reçoivent les valeurs email, passwordet les nameétats sous la forme de paramètres passés sur l' variablesaccessoire. Enfin, lorsque la mutation est terminée, nous appelons la _confirmfonction, en passant datacomme argument le résultat de la mutation.

// class Connexion extends Component {
//   state = {
//     login: true,
//     email: "",
//     password: "",
//     name: ""
//   };

//   render() {
//     const { login, email, password, name } = this.state;
//     const classes = useStyles();
//     return (
//       <div>
//         <h4 className="mv3">Login</h4>
//         <div className="flex flex-column">
//           <input
//             value={email}
//             onChange={e => this.setState({ email: e.target.value })}
//             type="text"
//             placeholder="Your email address"
//           />
//           <input
//             value={password}
//             onChange={e => this.setState({ password: e.target.value })}
//             type="password"
//             placeholder="Choose a safe password"
//           />
//         </div>
//         <div className="flex mt3">
//           {/* (6) */}
//           <Mutation
//             mutation={LOGIN_MUTATION}
//             variables={{ email, password, name }}
//             onCompleted={data => this._confirm(data)}
//           >
//             {mutation => (
//               <div className="pointer mr2 button" onClick={mutation}>
//                 Login
//               </div>
//             )}
//           </Mutation>
//           <div
//             className="pointer button"
//             onClick={() => this.setState({ login: !login })}
//           >
//             Need to create an account
//           </div>
//         </div>
//       </div>
//     );
//   }

//   _confirm = async data => {
//     const { token } = data.login;
//     this._saveUserData(token);
//   };

//   _saveUserData = token => {
//     localStorage.setItem(AUTH_TOKEN, token);
//     this.props.history.push(`/users`);
//   };
// }
