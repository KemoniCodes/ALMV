const products = [

    {
        id: '1',
        name: 'Woven Beige Tote Bag',
        images: [
            {
                image1: '/images/bag 1/1.jpg'
            },
            {
                image2: '/images/bag 1/2.jpg'
            },
            {
                image3: '/images/bag 1/3.jpg'
            },
            {
                image4: '/images/bag 1/4.jpg'
            }
        ],
        description: 'Beige textile tote bag. Perfect to spruce up a layered winter outfit!',
        brand: 'ALMV',
        category: {
            name: 'bags',
            categories: [
                {
                    accessories: [
                        {
                            bags: [
                                {
                                    type: 'Tote'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 50.00,
        countInStock: 5,
        rating: 4.5,
        numReviews: 5
    },
    {
        id: '2',
        name: 'Black Leather Tote Bag',
        images: [
            {
                image1: '/images/bag 2/1.jpg'
            },
            {
                image2: '/images/bag 2/2.jpg'
            },
            {
                image3: '/images/bag 2/3.jpg'
            },
            {
                image4: '/images/bag 2/4.jpg'
            }
        ],
        description: 'Black leather tote bag. Perfect to spruce up a layered fall outfit!',
        brand: 'ALMV',
        category: {
            name: 'bags',
            categories: [
                {
                    accessories: [
                        {
                            bags: [
                                {
                                    type: 'Tote'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 50.00,
        countInStock: 3,
        rating: 4.5,
        numReviews: 7
    },
    {
        id: '3',
        name: 'Chestnut Leather Crossbody Bag',
        images: [
            {
                image1: '/images/bag 3/1.jpg'
            },
            {
                image2: '/images/bag 3/2.jpg'
            },
            {
                image3: '/images/bag 3/3.jpg'
            },
            {
                image4: '/images/bag 3/4.jpg'
            }
        ],
        description: 'Chestnut leather crossbody bag, accompinied with gold hardware. Perfect to dress up a neutral outfit, or dressed down!',
        brand: 'ALMV',
        category: {
            name: 'bags',
            categories: [
                {
                    accessories: [
                        {
                            bags: [
                                {
                                    type: 'Crossbody'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 45.00,
        countInStock: 6,
        rating: 4.3,
        numReviews: 4
    },
    {
        id: '4',
        name: 'Camel Suede Tote Bag',
        images: [
            {
                image1: '/images/bag 4/1.jpg'
            },
            {
                image2: '/images/bag 4/2.jpg'
            },
            {
                image3: '/images/bag 4/3.jpg'
            },
            {
                image4: '/images/bag 4/4.jpg'
            }
        ],
        description: 'Camel suede tote bag. Perfect to give your outfit bohemian chic this fall & winter!',
        brand: 'ALMV',
        category: {
            name: 'bags',
            categories: [
                {
                    accessories: [
                        {
                            bags: [
                                {
                                    type: 'Tote'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 45.00,
        countInStock: 5,
        rating: 4.4,
        numReviews: 3
    },


    {
        id: '5',
        name: 'Camel Suede Sneakers',
        images: [
            {
                image1: '/images/shoe 1/1.jpg'
            },
            {
                image2: '/images/shoe 1/2.jpg'
            },
            {
                image3: '/images/shoe 1/3.jpg'
            },
            {
                image4: '/images/shoe 1/4.jpg'
            }
        ],
        description: 'Camel suede sneakers. Perfect to give your outfit modern and clean style!',
        brand: 'ALMV',
        category: {
            name: 'shoes',
            categories: [
                {
                    accessories: [
                        {
                            shoes: [
                                {
                                    type: 'Sneaker'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 60.00,
        countInStock: 8,
        rating: 4.4,
        numReviews: 7
    },
    {
        id: '6',
        name: 'Tall Beige Leather Stiletto Boot',
        images: [
            {
                image1: '/images/shoe 2/1.jpg'
            },
            {
                image2: '/images/shoe 2/2.jpg'
            },
            {
                image3: '/images/shoe 2/3.jpg'
            },
            {
                image4: '/images/shoe 2/4.jpg'
            }
        ],
        description: 'Tall beige leather stilleto heel. Perfect to give your outfit a modern, sexy-chic style!',
        brand: 'ALMV',
        category: {
            name: 'shoes',
            categories: [
                {
                    accessories: [
                        {
                            shoes: [
                                {
                                    type: 'Heel'
                                },
                                {
                                    type: 'Boot'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 80.00,
        countInStock: 8,
        rating: 4.6,
        numReviews: 8
    },
    {
        id: '7',
        name: 'Black Leather Boot',
        images: [
            {
                image1: '/images/shoe 3/1.jpg'
            },
            {
                image2: '/images/shoe 3/2.jpg'
            },
            {
                image3: '/images/shoe 3/3.jpg'
            },
            {
                image4: '/images/shoe 3/4.jpg'
            }
        ],
        description: 'Black leather block heel. Perfect to give your outfit a modern, sexy-chic style!',
        brand: 'ALMV',
        category: {
            name: 'shoes',
            categories: [
                {
                    accessories: [
                        {
                            shoes: [
                                {
                                    type: 'Boot'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 80.00,
        countInStock: 8,
        rating: 4.6,
        numReviews: 8
    },
    {
        id: '8',
        name: 'Black Leather Sandal Stiletto',
        images: [
            {
                image1: '/images/shoe 4/1.jpg'
            },
            {
                image2: '/images/shoe 4/2.jpg'
            },
            {
                image3: '/images/shoe 4/3.jpg'
            },
            {
                image4: '/images/shoe 4/4.jpg'
            }
        ],
        description: 'Black leather sandal stiletto. Perfect to give your outfit a modern, sexy-chic style!',
        brand: 'ALMV',
        category: {
            name: 'shoes',
            categories: [
                {
                    accessories: [
                        {
                            shoes: [
                                {
                                    type: 'Heel'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 80.00,
        countInStock: 8,
        rating: 4.6,
        numReviews: 8
    },
    {
        id: '9',
        name: 'Beige Turtleneck Sweater Dress',
        images: [
            {
                image1: '/images/dress 1/1.jpg'
            },
            {
                image2: '/images/dress 1/2.jpg'
            },
            {
                image3: '/images/dress 1/3.jpg'
            },
            {
                image4: '/images/dress 1/4.jpg'
            }
        ],
        description: 'Beige turtleneck sweater dress. Perfect for a cozy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'dress',
            categories: [
                {
                    clothing: [
                        {
                            dress: [
                                {
                                    type: 'Sweater',
                                    color: 'Beige',
                                    length: 'Midi'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 50.00,
        countInStock: 6,
        rating: 4.6,
        numReviews: 5
    },
    {
        id: '10',
        name: 'Black Blazer Mini Dress',
        images: [
            {
                image1: '/images/dress 2/1.jpg'
            },
            {
                image2: '/images/dress 2/2.jpg'
            },
            {
                image3: '/images/dress 2/3.jpg'
            },
            {
                image4: '/images/dress 2/4.jpg'
            }
        ],
        description: 'Black blazer mini dress. Perfect to give you an office chic style!',
        brand: 'ALMV',
        category: {
            name: 'dress',
            categories: [
                {
                    clothing: [
                        {
                            dress: [
                                {
                                    type: 'Blazer',
                                    color: 'Black',
                                    length: 'Mini'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 50.00,
        countInStock: 3,
        rating: 4.7,
        numReviews: 7
    },
    {
        id: '11',
        name: 'Camel Spotted Maxi Dress',
        images: [
            {
                image1: '/images/dress 3/1.jpg'
            },
            {
                image2: '/images/dress 3/2.jpg'
            },
            {
                image3: '/images/dress 3/3.jpg'
            },
            {
                image4: '/images/dress 3/4.jpg'
            }
        ],
        description: 'Camel spotted maxi dress. Perfect for a cozy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'dress',
            categories: [
                {
                    clothing: [
                        {
                            dress: [
                                {
                                    type: 'A-line',
                                    color: 'Camel',
                                    length: 'Maxi'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 60.00,
        countInStock: 4,
        rating: 4.8,
        numReviews: 6
    },
    {
        id: '12',
        name: 'Black Spotted Maxi Dress',
        images: [
            {
                image1: '/images/dress 4/1.jpg'
            },
            {
                image2: '/images/dress 4/2.jpg'
            },
            {
                image3: '/images/dress 4/3.jpg'
            },
            {
                image4: '/images/dress 4/4.jpg'
            }
        ],
        description: 'Black spotted maxi dress. Perfect for a cozy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'dress',
            categories: [
                {
                    clothing: [
                        {
                            dress: [
                                {
                                    type: 'A-line',
                                    color: 'Black',
                                    length: 'Maxi'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 55.00,
        countInStock: 6,
        rating: 4.3,
        numReviews: 3
    },
    {
        id: '13',
        name: 'Beige Checkered Mini Skirt',
        images: [
            {
                image1: '/images/skirt 1/1.jpg'
            },
            {
                image2: '/images/skirt 1/2.jpg'
            },
            {
                image3: '/images/skirt 1/3.jpg'
            },
            {
                image4: '/images/skirt 1/4.jpg'
            }
        ],
        description: 'Beige and black checkered mini skirt. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'skirt',
            categories: [
                {
                    clothing: [
                        {
                            skirt: [
                                {
                                    type: 'A-line',
                                    color: 'Beige',
                                    length: 'Mini'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 40.00,
        countInStock: 5,
        rating: 4.3,
        numReviews: 3
    },
    {
        id: '14',
        name: 'Houndstouth Mini Skirt',
        images: [
            {
                image1: '/images/skirt 2/1.jpg'
            },
            {
                image2: '/images/skirt 2/2.jpg'
            },
            {
                image3: '/images/skirt 2/3.jpg'
            },
            {
                image4: '/images/skirt 2/4.jpg'
            }
        ],
        description: 'Houndstouth mini a-line skirt. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'skirt',
            categories: [
                {
                    clothing: [
                        {
                            skirt: [
                                {
                                    type: 'A-line',
                                    color: 'Black',
                                    length: 'Mini'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 40.00,
        countInStock: 3,
        rating: 4.5,
        numReviews: 5
    },
    {
        id: '15',
        name: 'Black Checkered Mini Skirt',
        images: [
            {
                image1: '/images/skirt 3/1.jpg'
            },
            {
                image2: '/images/skirt 3/2.jpg'
            },
            {
                image3: '/images/skirt 3/3.jpg'
            },
            {
                image4: '/images/skirt 3/4.jpg'
            }
        ],
        description: 'Black and white checkered mini skirt. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'skirt',
            categories: [
                {
                    clothing: [
                        {
                            skirt: [
                                {
                                    type: 'A-line',
                                    color: 'Black',
                                    length: 'Mini'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 40.00,
        countInStock: 2,
        rating: 4.8,
        numReviews: 7
    },
    {
        id: '16',
        name: 'Olive Silk Pleated Maxi Skirt',
        images: [
            {
                image1: '/images/skirt 4/1.jpg'
            },
            {
                image2: '/images/skirt 4/2.jpg'
            },
            {
                image3: '/images/skirt 4/3.jpg'
            },
            {
                image4: '/images/skirt 4/4.jpg'
            }
        ],
        description: 'Olive silk pleated maxi skirt. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'skirt',
            categories: [
                {
                    clothing: [
                        {
                            skirt: [
                                {
                                    type: 'A-line',
                                    color: 'Olive',
                                    length: 'Maxi'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 45.00,
        countInStock: 4,
        rating: 4.5,
        numReviews: 4
    },

    {
        id: '17',
        name: 'Nude Sheer Dotted Blouse',
        images: [
            {
                image1: '/images/top 1/1.jpg'
            },
            {
                image2: '/images/top 1/2.jpg'
            },
            {
                image3: '/images/top 1/3.jpg'
            },
            {
                image4: '/images/top 1/4.jpg'
            }
        ],
        description: 'Nude and black patterend long sleeve blouse. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'top',
            categories: [
                {
                    clothing: [
                        {
                            top: [
                                {
                                    type: 'Blouse',
                                    color: 'Nude',
                                    sleeve: 'Long'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 35.00,
        countInStock: 5,
        rating: 4.3,
        numReviews: 3
    },
    {
        id: '18',
        name: 'White Button Down',
        images: [
            {
                image1: '/images/top 2/1.jpg'
            },
            {
                image2: '/images/top 2/2.jpg'
            },
            {
                image3: '/images/top 2/3.jpg'
            },
            {
                image4: '/images/top 2/4.jpg'
            }
        ],
        description: 'Loose fit white button down blouse. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'top',
            categories: [
                {
                    clothing: [
                        {
                            top: [
                                {
                                    type: 'Blouse',
                                    color: 'White',
                                    sleeve: 'Long'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 45.00,
        countInStock: 5,
        rating: 4.7,
        numReviews: 5
    },
    {
        id: '19',
        name: 'Ecru Turtleneck',
        images: [
            {
                image1: '/images/top 3/1.jpg'
            },
            {
                image2: '/images/top 3/2.jpg'
            },
            {
                image3: '/images/top 3/3.jpg'
            },
            {
                image4: '/images/top 3/4.jpg'
            }
        ],
        description: 'Ecru longsleeve turtleneck. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'top',
            categories: [
                {
                    clothing: [
                        {
                            top: [
                                {
                                    type: 'Shirt',
                                    color: 'Ecru',
                                    sleeve: 'Long'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 35.00,
        countInStock: 7,
        rating: 4.4,
        numReviews: 3
    },
    {
        id: '20',
        name: 'Ecru Sweater Vest',
        images: [
            {
                image1: '/images/top 4/1.jpg'
            },
            {
                image2: '/images/top 4/2.jpg'
            },
            {
                image3: '/images/top 4/3.jpg'
            },
            {
                image4: '/images/top 4/4.jpg'
            }
        ],
        description: 'Ecru sweater vest. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'top',
            categories: [
                {
                    clothing: [
                        {
                            top: [
                                {
                                    type: 'Shirt',
                                    color: 'Ecru',
                                    sleeve: 'Vest'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 35.00,
        countInStock: 4,
        rating: 4.5,
        numReviews: 5
    },
    {
        id: '21',
        name: 'Ecru Straight Leg Jeans',
        images: [
            {
                image1: '/images/jeans 1/1.jpg'
            },
            {
                image2: '/images/jeans 1/2.jpg'
            },
            {
                image3: '/images/jeans 1/3.jpg'
            },
            {
                image4: '/images/jeans 1/4.jpg'
            }
        ],
        description: 'Ecru straight leg jeans. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'jeans',
            categories: [
                {
                    clothing: [
                        {
                            jeans: [
                                {
                                    color: 'Ecru',
                                    leg: 'Straight'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 35.00,
        countInStock: 5,
        rating: 4.3,
        numReviews: 3
    },
    {
        id: '22',
        name: 'Medium Wash Straight Leg Jeans',
        images: [
            {
                image1: '/images/jeans 2/1.jpg'
            },
            {
                image2: '/images/jeans 2/2.jpg'
            },
            {
                image3: '/images/jeans 2/3.jpg'
            },
            {
                image4: '/images/jeans 2/4.jpg'
            }
        ],
        description: 'Medium wash straight leg jeans. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'jeans',
            categories: [
                {
                    clothing: [
                        {
                            jeans: [
                                {
                                    color: 'Medium Wash',
                                    leg: 'Straight'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 35.00,
        countInStock: 2,
        rating: 4.8,
        numReviews: 6
    },
    {
        id: '23',
        name: 'Black Straight Leg Jeans',
        images: [
            {
                image1: '/images/jeans 3/1.jpg'
            },
            {
                image2: '/images/jeans 3/2.jpg'
            },
            {
                image3: '/images/jeans 3/3.jpg'
            },
            {
                image4: '/images/jeans 3/4.jpg'
            }
        ],
        description: 'Black straight leg jeans. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'jeans',
            categories: [
                {
                    clothing: [
                        {
                            jeans: [
                                {
                                    color: 'Black',
                                    leg: 'Straight'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 35.00,
        countInStock: 4,
        rating: 4.4,
        numReviews: 4
    },
    {
        id: '24',
        name: 'Light Wash Flare Jeans',
        images: [
            {
                image1: '/images/jeans 4/1.jpg'
            },
            {
                image2: '/images/jeans 4/2.jpg'
            },
            {
                image3: '/images/jeans 4/3.jpg'
            },
            {
                image4: '/images/jeans 4/4.jpg'
            }
        ],
        description: 'Light wash flare jeans. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'jeans',
            categories: [
                {
                    clothing: [
                        {
                            jeans: [
                                {
                                    color: 'Light Wash',
                                    leg: 'Flare'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 35.00,
        countInStock: 2,
        rating: 4.8,
        numReviews: 7
    },

    {
        id: '25',
        name: 'Black Leather Utility Jacket',
        images: [
            {
                image1: '/images/jacket 1/1.jpg'
            },
            {
                image2: '/images/jacket 1/2.jpg'
            },
            {
                image3: '/images/jacket 1/3.jpg'
            },
            {
                image4: '/images/jacket 1/4.jpg'
            }
        ],
        description: 'Black leather utility jacket. Perfect for a chic and edgy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'jacket',
            categories: [
                {
                    clothing: [
                        {
                            jacket: [
                                {
                                    type: 'Utility',
                                    color: 'Black',
                                    length: 'Midi'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 80.00,
        countInStock: 6,
        rating: 4.6,
        numReviews: 4
    },
    {
        id: '26',
        name: 'Camel Utility Jacket',
        images: [
            {
                image1: '/images/jacket 2/1.jpg'
            },
            {
                image2: '/images/jacket 2/2.jpg'
            },
            {
                image3: '/images/jacket 2/3.jpg'
            },
            {
                image4: '/images/jacket 2/4.jpg'
            }
        ],
        description: 'Camel utility jacket. Perfect for a chic and cozy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'jacket',
            categories: [
                {
                    clothing: [
                        {
                            jacket: [
                                {
                                    type: 'Utility',
                                    color: 'Camel',
                                    length: 'Midi'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 75.00,
        countInStock: 5,
        rating: 4.4,
        numReviews: 3
    },
    {
        id: '27',
        name: 'Tweed Blazer Jacket',
        images: [
            {
                image1: '/images/jacket 3/1.jpg'
            },
            {
                image2: '/images/jacket 3/2.jpg'
            },
            {
                image3: '/images/jacket 3/3.jpg'
            },
            {
                image4: '/images/jacket 3/4.jpg'
            }
        ],
        description: 'Tweed balck and white balzer dress. Perfect for a chic and classy fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'jacket',
            categories: [
                {
                    clothing: [
                        {
                            jacket: [
                                {
                                    type: 'Coat',
                                    color: 'Black',
                                    length: 'Midi'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 90.00,
        countInStock: 5,
        rating: 4.5,
        numReviews: 2
    },
    {
        id: '28',
        name: 'Camel Blazer',
        images: [
            {
                image1: '/images/jacket 4/1.jpg'
            },
            {
                image2: '/images/jacket 4/2.jpg'
            },
            {
                image3: '/images/jacket 4/3.jpg'
            },
            {
                image4: '/images/jacket 4/4.jpg'
            }
        ],
        description: 'Camel blazer. Perfect for a chic and buisness fall outfit, dressed up or down!',
        brand: 'ALMV',
        category: {
            name: 'jacket',
            categories: [
                {
                    clothing: [
                        {
                            jacket: [
                                {
                                    type: 'Blazer',
                                    color: 'Camel',
                                    length: 'Midi'
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        price: 70.00,
        countInStock: 6,
        rating: 4.3,
        numReviews: 1
    },

]

module.exports = products;