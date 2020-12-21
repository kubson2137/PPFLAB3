const dogs=[
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament:[
            'Inteligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instictual',
        ],
    },
    {
        id:'dog-2',
        name:'Bernese Moutain Dog',
        temperament: ['Affectionate','Inteligent','Loyal','Faithful'],
    },
    {
        id:'dog-3',
        name:'Lablador Reteiver',
        temperament:[
            'Inteligent',
            'even tempered',
            'Kind',
            'Agiled',
            'Outgoing',
            'Trusting',
            'Gentle',
        ],
    },
    {
        id:'dog-4',
        name:'jakistam_piesuniek',
        temperament:[
            'Inteligent',
            'even tempered',
            'Kind',
            'Agiled',
            'Outgoing',
            'Trusting',
            'Gentle',
        ]
    },
    {
        id:'dog-5',
        name:'jakistam_piesuniek',
        temperament:[
            'Inteligent',
            'even tempered',
            'Kind',
            'Agiled',
            'Outgoing',
            'Trusting',
            'Gentle',
        ]
    }
]
console.log(dogs.find(dog=>dog.name==='Bernese Moutain Dog'));
console.log(dogs.some(dog=>dog.temperament.includes('Aggresive')));
console.log(dogs.some(dog=>dog.temperament.includes('Trusting')));
console.log(dogs.every(dog=>dog.temperament.includes('Trusting')));
console.log(dogs.every(dog=>dog.temperament.includes('Inteligent')));
console.logs(dogs.map(dog=>dog.name));
console.logs(dogs.filter(dog=>dog.temperament.includes('Faithful')));
console.log(dogs.reduce((allTemperaments,dog)=>{
    return [...allTemperaments, ...dog.temperament] 
},[]));
