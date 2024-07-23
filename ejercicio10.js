const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    if (capitals[country]) {
      return capitals[country];
    }

}
  
  console.log(getCapital('Spain')); 
  console.log(getCapital('France'));
  console.log(getCapital('Ireland')); 