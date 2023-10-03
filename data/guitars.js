const guitars = [
    {guitar: 'Strat', own: true},
    {guitar: 'Jaguar', own: false},
    {guitar: 'Telecaster', own: false}
  ];

module.exports = {
    getAll: function() {
      return guitars;
    }
};