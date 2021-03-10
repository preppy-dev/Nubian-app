import bcrypt from 'bcrypt'
const data = {
  users:[
      {
        name:'Nubian',
        email:'ninopreppy@gmail.com',
        password:bcrypt.hashSync('12345', 8),
        isAdmin:'true',
      },
      {
        name:'client1',
        email:'clien1@gmail.com',
        password:bcrypt.hashSync('12345', 8),
        isAdmin:'false',
      },
  ],
  products:[
   
    {
     
      name:'Nike Slim Shirt',
      category:'Shirts',
      image:'/images/p1.jpg',
      price:120,
      countInStock:0,
      brand:'Nike',
      rating:'4.5',
      numReviews:'10',
      description:'high quality product'
    },
    {
     
      name:'Adidas Slim Shirt',
      category:'Shirts',
      image:'/images/p2.jpg',
      price:140,
      countInStock:2,
      brand:'Adidas',
      rating:'4.5',
      numReviews:'11',
      description:'high quality product'
    },
    {
    
      name:'Lacost Free Shirt',
      category:'Shirts',
      image:'/images/p3.jpg',
      price:120,
      countInStock:1,
      brand:'Lacost',
      rating:'4.5',
      numReviews:'8',
      description:'high quality product'
    },
    {
      
      name:'Nike Slim Pant',
      category:'Pants',
      image:'/images/p4.jpg',
      price:120,
      countInStock:4,
      brand:'Nike',
      rating:'4.5',
      numReviews:'5',
      description:'high quality product'
    },
    {
      name:'Puma Slim Pant',
      category:'Pants',
      image:'/images/p5.jpg',
      price:150,
      countInStock:5,
      brand:'Puma',
      rating:'4.5',
      numReviews:'15',
      description:'high quality product'
    },
    {
     
      name:'Puma Slim Pant',
      category:'Pants',
      image:'/images/p6.jpg',
      price:100,
      countInStock:5,
      brand:'Puma',
      rating:'4.5',
      numReviews:'9',
      description:'high quality product'
    },
  ]
}

export default data;