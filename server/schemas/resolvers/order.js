const { AuthenticationError } = require('apollo-server-express');
const { Order } = require('../../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
//////ALL STRIPE DATA//////
//const express = require("express")
//const app = express()
//app.use(express.json())
//app.use(express.static("public"))
//require("dotenv").config()

//what we want to sell
// const storeItems = new Map([
//     [1, { priceInCents: 5000, name: "Cleaning package 1" }],
//     [2, { priceInCents: 10000, name: "Cleaning package 2" }],
//     [3, { priceInCents: 15000, name: "Cleaning package 3" }],
//     [4, { priceInCents: 20000, name: "Cleaning package 4" }],
// ])

// app.post("/create-checkout-session"), async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         mode: 'payment',
//         success_url: `${process.env.SERVER_URL}/success.html`,  //change these to our checkout pages
//         cancel_url: `${process.env.SERVER_URL}/cancel.html`,  //change these to our checkout pages
//     })
//     res.json({ url: session.url })
// }
//////ALL STRIPE DATA//////


//////UPDATE MUTATION//////
// const GET_TODOS = gql`
//   query GetTodos {
//     todos {
//       id
//     }
//   }
// `;

// function AddTodo() {
//     let input;
//     const [addTodo] = useMutation(ADD_TODO, {
//       update(cache, { data: { addTodo } }) {
//         cache.modify({
//             fields: {
//               todos(existingTodos = []) {
//                 const newTodoRef = cache.writeFragment({
//                   data: addTodo,
//                   fragment: gql`
//                     fragment NewTodo on Todo {
//                       id
//                       type
//                     }
//                   `
//                 });
//                 return [...existingTodos, newTodoRef];
//               }
//             }
//           });
//         }
//       });

//       return (
//         <div>
//           <form
//             onSubmit={e => {
//               e.preventDefault();
//               addTodo({ variables: { type: input.value } });
//               input.value = "";
//             }}
//           >
//               <input
//           ref={node => {
//             input = node;
//           }}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//     </div>
//   );
// }
//////UPDATE MUTATION//////