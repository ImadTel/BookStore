


import { faker } from "@faker-js/faker"
 




export const BOOKS = [
    {id:100,key:'left-key'},
    {
       
    id:1,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/1.jpg`),
    rating : faker.random.numeric(1),
},
{
       
    id:2,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/2.jpg`),
    rating : faker.random.numeric(1),
},
{
       
    id:3,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/3.jpg`),
    rating : faker.random.numeric(1),
},
{
       
    id:4,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/4.jpg`),
    rating : faker.random.numeric(1),
},
{
       
    id:5,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/5.jpg`),
    rating : faker.random.numeric(1),
},

{id:101,key:'right-key'},
]



export const BESTSELLER = [
  
    {
       
    id:1,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/8.jpg`),
    rating : faker.random.numeric(1),
},
{
       
    id:2,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/7.jpg`),
    rating : faker.random.numeric(1),
},
{
       
    id:3,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/10.jpg`),
    rating : faker.random.numeric(1),
},
{
       
    id:4,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/11.jpg`),
    rating : faker.random.numeric(1),
},
{
       
    id:5,
    title: faker.name.jobTitle(),
    author : faker.name.fullName(),
    genre : faker.name.jobType(),
    image : require(`./images/12.jpg`),
    rating : faker.random.numeric(1),
},


]






