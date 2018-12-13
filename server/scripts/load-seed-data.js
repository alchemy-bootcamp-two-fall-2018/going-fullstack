
const client = require('../db-client');
const racers = require('./racers.json');
const teams = require('./teams');

Promise.all( 
  teams.map(team => {
    return client.query (`
      INSERT INTO team (name, short_name)
      VALUES ($1, $2);
    `,
    [team.name, team.shortName]);
  })
)

  .then(() =>{
    return Promise.all(
      racers.map(racer => {
        return client.query (`
          INSERT INTO racer (name, age, team_id, pr)
          SELECT 
            $1 as name,
            $2 as age, 
            id as team_id, 
            $4 pr
            FROM team
            WHERE short_name = $3
        `,
        [racer.name, racer.age, racer.team, racer.pr]);
      })
    );
  })

  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
  
    
  