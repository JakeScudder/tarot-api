// componentDidMount() {
//   Logic for fetch that is broken
//   if (this.state.deck === null) {
//     this.fetchCards();
//   } else {
//     return console.log("deck loaded");
//   }
// }

// fetchCards = () => {
//   //Only runs in local host at the moment
//   //Original functional deployment link "https://cors-anywhere.herokuapp.com/https://tarot.howlcode.com/api/v1/cards"

//   //Alternative fetch attempts: Works locally, not deployed
//   // "https://thingproxy.freeboard.io/fetch/https://tarot.howlcode.com/api/v1/cards"

//   axios
//     .get(
//       "https://thingproxy.freeboard.io/fetch/https://tarot.howlcode.com/api/v1/cards",
//       {
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Cross-Origin-Resource-Policy": "cross-origin",
//         },
//       }
//     )
//     .then((res) => {
//       console.log(res);
//       this.setState({
//         deck: res.data,
//       });
//     })
//     .catch((error) => {
//       console.log("Error fetching the cards:", error);
//     });
// };
