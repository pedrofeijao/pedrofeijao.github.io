function Card(src, help) {
  this.src = src;
  this.help = help;
}

// Array shuffling prototype
Array.prototype.shuffle = function(){
    var counter = this.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = (Math.random() * counter--) | 0;

        // And swap the last element with it
        temp = this[counter];
        this[counter] = this[index];
        this[index] = temp;
    }
};
// console.log(JSON.stringify(a));
function draw_card(current_card, deck, card_target) {
  current_card += 1;
  if (current_card >= deck.length) {
    deck.shuffle();
    current_card = 0;
  }
  $(card_target).attr('src',deck[current_card].src);
  return current_card;
}
function update_round(round, round_target) {
  $(round_target).text(round);
}
